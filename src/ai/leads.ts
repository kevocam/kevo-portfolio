import type Anthropic from '@anthropic-ai/sdk';
import { supabase } from '@/lib/supabase';

export const SAVE_LEAD_TOOL_NAME = 'save_visitor_contact';

export const SAVE_LEAD_TOOL: Anthropic.Tool = {
  name: SAVE_LEAD_TOOL_NAME,
  description:
    'Guarda los datos de contacto del visitante para que Kevin le escriba. Úsala una sola vez por conversación, ' +
    'solo cuando el visitante ya escribió su propio nombre y email y aceptó que Kevin lo contacte. ' +
    'No la uses con datos de otras personas ni con datos que el visitante no haya escrito.',
  strict: true,
  input_schema: {
    type: 'object',
    additionalProperties: false,
    required: ['name', 'email', 'phone', 'company', 'summary'],
    properties: {
      name: { type: 'string', description: 'Nombre del visitante, tal como lo escribió.' },
      email: { type: 'string', description: 'Email del visitante, tal como lo escribió.' },
      phone: { type: ['string', 'null'], description: 'Teléfono o WhatsApp si lo dio; si no, null.' },
      company: { type: ['string', 'null'], description: 'Empresa si la mencionó; si no, null.' },
      summary: { type: 'string', description: 'Una o dos frases con lo que necesita el visitante.' },
    },
  },
};

export type LeadResult = { ok: true } | { ok: false; reason: 'invalid_data' | 'email_not_from_visitor' | 'too_many' | 'storage_error' };

// Mismo tipo de límite que el chat: best-effort por instancia.
const LEAD_WINDOW_MS = 60 * 60 * 1000;
const LEAD_MAX_PER_IP = 3;
const MAX_TRACKED = 5_000;
const leadBuckets = new Map<string, { count: number; resetAt: number }>();
const recentEmails = new Map<string, number>();

const EMAIL_RE = /^[^\s@<>()"',;:]+@[^\s@<>()"',;:]+\.[a-z]{2,}$/i;

/** Quita caracteres de control y recorta. */
function clean(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null;
  const text = value.replace(/[\u0000-\u001f\u007f]+/g, ' ').trim().slice(0, max);
  return text || null;
}

function digits(value: string): string {
  return value.replace(/\D/g, '');
}

/**
 * Guarda un lead pedido por el modelo. El modelo puede ser manipulado, así que aquí se valida todo:
 * el email tiene que aparecer literalmente en lo que escribió el visitante.
 */
export async function saveLead(input: unknown, ctx: { ip: string; visitorText: string }): Promise<LeadResult> {
  const data = (typeof input === 'object' && input !== null ? input : {}) as Record<string, unknown>;
  const name = clean(data.name, 100);
  const email = clean(data.email, 254)?.toLowerCase() ?? null;
  const summary = clean(data.summary, 1000);
  if (!name || !email || !summary || !EMAIL_RE.test(email)) return { ok: false, reason: 'invalid_data' };

  if (!ctx.visitorText.toLowerCase().includes(email)) return { ok: false, reason: 'email_not_from_visitor' };

  const now = Date.now();
  const lastSaved = recentEmails.get(email);
  if (lastSaved && now - lastSaved < LEAD_WINDOW_MS) return { ok: true }; // ya guardado, no duplicar

  if (leadBuckets.size > MAX_TRACKED) leadBuckets.clear();
  if (recentEmails.size > MAX_TRACKED) recentEmails.clear();
  const bucket = leadBuckets.get(ctx.ip);
  if (bucket && bucket.resetAt > now && bucket.count >= LEAD_MAX_PER_IP) return { ok: false, reason: 'too_many' };
  if (!bucket || bucket.resetAt <= now) leadBuckets.set(ctx.ip, { count: 1, resetAt: now + LEAD_WINDOW_MS });
  else bucket.count += 1;

  const company = clean(data.company, 120);
  const rawPhone = clean(data.phone, 30);
  const phoneDigits = rawPhone ? digits(rawPhone) : '';
  const phone = phoneDigits.length >= 6 && digits(ctx.visitorText).includes(phoneDigits) ? rawPhone : null;

  const message = [
    '[Chat IA]',
    summary,
    company && `Empresa: ${company}`,
    phone && `Teléfono: ${phone}`,
  ]
    .filter(Boolean)
    .join('\n');

  // Sin .select(): insertar no debe requerir permiso de lectura sobre los leads.
  const { error } = await supabase.from('contact_messages').insert([{ name, email, message }]);
  if (error) {
    console.error('chat: no se pudo guardar el lead', error.code);
    return { ok: false, reason: 'storage_error' };
  }

  recentEmails.set(email, now);
  return { ok: true };
}
