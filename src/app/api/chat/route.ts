import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { SAVE_LEAD_TOOL, SAVE_LEAD_TOOL_NAME, saveLead, type LeadResult } from '@/ai/leads';
import { MAX_INPUT_CHARS, MAX_REPLIES } from '@/ai/limits';
import { buildSystemPrompt } from '@/ai/skill';

// El modelo más barato ($0.10 / $0.50 por MTok). No admite fallbacks de servidor.
const MODEL = 'claude-haiku-5-5';
const MAX_TOKENS = 350;
const MAX_MODEL_CALLS = 3; // respuesta + guardar lead + confirmación

// Límites de entrada (la capa que no depende del modelo).
const MAX_BODY_BYTES = 48_000;
const MAX_TURNS = 20; // se envían al modelo los últimos N mensajes
const MAX_ASSISTANT_CHARS = 2_000;

// Rate limit en memoria: best-effort (en serverless cada instancia tiene su propio mapa).
// Para un límite estricto usar Upstash/Supabase.
const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

const ALLOWED_ORIGINS = new Set([
  'https://kevincamargo.com',
  'https://www.kevincamargo.com',
  'http://localhost:3000',
]);

// Cliente único por proceso. Lee ANTHROPIC_API_KEY del entorno (nunca se expone al cliente).
let client: Anthropic | null = null;
function getClient(): Anthropic | null {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  client ??= new Anthropic({ timeout: 30_000, maxRetries: 1 });
  return client;
}

type ChatTurn = { role: 'user' | 'assistant'; content: string };

function jsonError(status: number, reply: string) {
  return NextResponse.json({ reply }, { status });
}

/** Valida y normaliza el historial. Devuelve null si la forma no es válida. */
function parseMessages(raw: unknown): { messages: ChatTurn[]; replies: number } | null {
  if (!Array.isArray(raw) || raw.length === 0) return null;

  const turns: ChatTurn[] = [];
  for (const m of raw) {
    if (typeof m !== 'object' || m === null) return null;
    const { role, content } = m as Record<string, unknown>;
    if (role !== 'user' && role !== 'assistant') return null; // rechaza 'system' u otros
    if (typeof content !== 'string') return null; // solo texto plano, nada de bloques
    const text = content.trim();
    if (!text) continue;
    if (text.length > (role === 'user' ? MAX_INPUT_CHARS : MAX_ASSISTANT_CHARS)) return null;
    turns.push({ role, content: text });
  }

  // Respuestas del asistente contadas sobre el historial COMPLETO, antes de recortarlo.
  // El saludo inicial (assistant antes del primer user) no cuenta.
  const firstUser = turns.findIndex((t) => t.role === 'user');
  const replies = firstUser < 0 ? 0 : turns.slice(firstUser).filter((t) => t.role === 'assistant').length;

  const recent = turns.slice(-MAX_TURNS);
  // La API exige empezar con 'user' y aquí siempre debe terminar en 'user'.
  while (recent.length && recent[0].role !== 'user') recent.shift();
  if (!recent.length || recent[recent.length - 1].role !== 'user') return null;
  return { messages: recent, replies };
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for');
  return fwd?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';
}

/** true si la petición excede el límite. */
function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (rateBuckets.size > 5_000) rateBuckets.clear(); // evita crecer sin límite
  const bucket = rateBuckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_MAX_REQUESTS;
}

/** Si se agotó max_tokens, evita mostrar una frase a medias. */
function cutToLastSentence(text: string): string {
  const end = Math.max(text.lastIndexOf('.'), text.lastIndexOf('!'), text.lastIndexOf('?'), text.lastIndexOf('\n'));
  return end > 0 ? text.slice(0, end + 1).trim() : text;
}

function leadToolMessage(result: LeadResult): string {
  if (result.ok) return 'Saved. Confirm to the visitor, in their language, that Kevin will reply.';
  if (result.reason === 'storage_error') {
    return 'Not saved: storage failed. Tell the visitor and give Kevin\'s public email.';
  }
  if (result.reason === 'too_many') {
    return 'Not saved: too many submissions. Give the visitor Kevin\'s public email.';
  }
  return 'Not saved: the email is invalid or the visitor did not type it. Ask them to type their correct email.';
}

export async function POST(req: NextRequest) {
  // 1. Origen: solo el sitio (un navegador de otro dominio no puede usar el endpoint).
  const origin = req.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return jsonError(403, 'Not allowed.');
  }

  // 2. Rate limit por IP.
  const ip = clientIp(req);
  if (rateLimited(ip)) {
    return jsonError(429, 'rate_limit');
  }

  // 3. Tamaño del body antes de parsear.
  const contentLength = Number(req.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return jsonError(413, 'Message too long.');
  }

  let body: unknown;
  try {
    const text = await req.text();
    if (text.length > MAX_BODY_BYTES) return jsonError(413, 'Message too long.');
    body = JSON.parse(text);
  } catch {
    return jsonError(400, 'Invalid request.');
  }

  const parsed = parseMessages((body as { messages?: unknown })?.messages);
  if (!parsed) return jsonError(400, 'Invalid request.');
  const { messages, replies } = parsed;

  if (replies >= MAX_REPLIES) {
    return jsonError(429, 'message_limit');
  }

  const anthropic = getClient();
  if (!anthropic) {
    console.error('chat: ANTHROPIC_API_KEY no configurada');
    return jsonError(503, 'The assistant is unavailable right now. Email Kevin or reach out on LinkedIn.');
  }

  // Solo lo que escribió el visitante: es la referencia para validar los datos del lead.
  const visitorText = messages
    .filter((m) => m.role === 'user')
    .map((m) => m.content)
    .join('\n');
  const conversation: Anthropic.MessageParam[] = [...messages];

  try {
    for (let call = 0; call < MAX_MODEL_CALLS; call += 1) {
      const response = await anthropic.messages.create({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        // Sin thinking: los 350 tokens quedan enteros para la respuesta.
        thinking: { type: 'disabled' },
        // tools + system son estables: el prefijo se cachea entre visitantes.
        system: [{ type: 'text', text: buildSystemPrompt(), cache_control: { type: 'ephemeral' } }],
        tools: [SAVE_LEAD_TOOL],
        messages: conversation,
        output_config: { effort: 'low' },
      });

      if (response.stop_reason === 'refusal') {
        return NextResponse.json({
          reply: "I can't answer that. I can tell you about Kevin's profile, projects or availability.",
        });
      }

      if (response.stop_reason !== 'tool_use') {
        const text = response.content
          .flatMap((block) => (block.type === 'text' ? [block.text] : []))
          .join('')
          .trim();
        const reply = response.stop_reason === 'max_tokens' ? cutToLastSentence(text) : text;
        return NextResponse.json({
          reply: reply || 'I don\'t have an answer for that. Email Kevin or reach out on LinkedIn.',
        });
      }

      conversation.push({ role: 'assistant', content: response.content });

      const results: Anthropic.ToolResultBlockParam[] = [];
      for (const block of response.content) {
        if (block.type !== 'tool_use') continue;
        const result: LeadResult =
          block.name === SAVE_LEAD_TOOL_NAME
            ? await saveLead(block.input, { ip, visitorText })
            : { ok: false, reason: 'invalid_data' };
        results.push({
          type: 'tool_result',
          tool_use_id: block.id,
          content: leadToolMessage(result),
          is_error: !result.ok,
        });
      }
      conversation.push({ role: 'user', content: results });
    }

    console.error('chat: se agotaron las llamadas al modelo');
    return jsonError(500, 'Could not finish that. Try again or email Kevin.');
  } catch (error) {
    // Log interno sin datos del usuario; respuesta genérica al cliente.
    if (error instanceof Anthropic.RateLimitError) {
      console.warn('chat: rate limit de Anthropic');
      return jsonError(429, 'Too many requests at once. Try again in a moment.');
    }
    if (error instanceof Anthropic.APIError) {
      console.error('chat: error de API', error.status, error.name);
    } else {
      console.error('chat: error inesperado', error instanceof Error ? error.name : 'unknown');
    }
    return jsonError(500, 'I could not answer right now. Try again or email Kevin.');
  }
}
