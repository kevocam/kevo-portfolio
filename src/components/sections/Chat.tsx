'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { MAX_INPUT_CHARS, MAX_REPLIES } from '@/ai/limits';
import { profile } from '@/content/profile';
import { Section } from '@/components/ui/Section';
import styles from './Chat.module.scss';

type Lang = 'en' | 'es';
type Message = { role: 'user' | 'assistant'; text: string; greeting?: boolean };
type ErrorKind = 'limit' | 'rate' | 'error';

const copy = {
  en: {
    title: 'Ask about Kevin',
    you: 'You',
    bot: 'Assistant',
    typing: 'Assistant is typing',
    placeholder: 'Ask a question…',
    inputLabel: 'Ask a question',
    send: 'Send',
    sending: 'Sending…',
    suggestionsLabel: 'Suggested questions',
    suggestions: ['What is his stack?', 'Where has he worked?', 'Is he open to freelance?', 'I want Kevin to contact me'],
    limit: `You've reached the ${MAX_REPLIES}-question limit for this chat. To keep going, email ${profile.email}.`,
    rate: 'Too many questions in a row. Try again in a minute.',
    error: `I couldn't answer right now. Email ${profile.email}.`,
    note: `AI answers based on Kevin's public profile, up to ${MAX_REPLIES} per chat. If you leave your details, they are only used so Kevin can reply.`,
    greeting:
      "Hi, I'm Kevin's assistant. Ask me about his stack, experience, projects or whether he's open to a project. Prefer Spanish? Write in Spanish and I'll switch. Or tell me you'd like Kevin to reach out and I'll take your details.",
  },
  es: {
    title: 'Pregunta sobre Kevin',
    you: 'Tú',
    bot: 'Asistente',
    typing: 'El asistente está escribiendo',
    placeholder: 'Escribe una pregunta…',
    inputLabel: 'Escribe una pregunta',
    send: 'Enviar',
    sending: 'Enviando…',
    suggestionsLabel: 'Preguntas sugeridas',
    suggestions: ['¿Cuál es su stack?', '¿Dónde ha trabajado?', '¿Está disponible para freelance?', 'Quiero que Kevin me contacte'],
    limit: `Llegaste al límite de ${MAX_REPLIES} preguntas en este chat. Para seguir, escribe a ${profile.email}.`,
    rate: 'Demasiadas preguntas seguidas. Intenta de nuevo en un minuto.',
    error: `No pude responder ahora. Escribe a ${profile.email}.`,
    note: `Respuestas con IA a partir del perfil público de Kevin, hasta ${MAX_REPLIES} por chat. Si dejas tus datos, solo se usan para que Kevin te responda.`,
  },
} as const;

const ES_WORDS = new Set([
  'hola', 'quiero', 'cuál', 'cual', 'dónde', 'donde', 'qué', 'para', 'con', 'una', 'los', 'las', 'está',
  'trabaja', 'gracias', 'por', 'favor', 'necesito', 'puedo', 'soy', 'tiene', 'cómo', 'el', 'la', 'de', 'es',
]);
const EN_WORDS = new Set([
  'the', 'what', 'where', 'is', 'are', 'can', 'do', 'does', 'i', 'want', 'hi', 'hello', 'hey', 'his', 'her',
  'your', 'to', 'for', 'and', 'please', 'need', 'would', 'how', 'who', 'of', 'you',
]);

/** Idioma del texto: español si tiene acentos/ñ o más palabras españolas que inglesas. */
function detectLang(text: string): Lang {
  if (/[ñáéíóúü¿¡]/i.test(text)) return 'es';
  const words = text.toLowerCase().match(/[a-záéíóúñü]+/g) ?? [];
  let es = 0;
  let en = 0;
  for (const w of words) {
    if (ES_WORDS.has(w)) es += 1;
    if (EN_WORDS.has(w)) en += 1;
  }
  return es > en ? 'es' : 'en';
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState<ErrorKind | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const greetedRef = useRef(false);

  // Cancela la petición en vuelo al desmontar el componente.
  useEffect(() => () => abortRef.current?.abort(), []);

  // Al entrar en vista, el bot escribe primero e invita a preguntar. No llama a la IA.
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || greetedRef.current) return;
        greetedRef.current = true;
        observer.disconnect();
        setTyping(true);
        timer = setTimeout(() => {
          setTyping(false);
          // Si el visitante ya escribió algo, no se mete el saludo antes de su mensaje.
          setMessages((prev) => (prev.length ? prev : [{ role: 'assistant', text: copy.en.greeting, greeting: true }]));
        }, 1000);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);

  const lastUser = [...messages].reverse().find((m) => m.role === 'user')?.text ?? '';
  // El idioma sigue al último mensaje del visitante; por defecto inglés.
  const lang = detectLang(lastUser);
  const t = copy[lang];

  // Respuestas reales de la IA (el saludo no cuenta; tampoco se envía al servidor como respuesta).
  const replies = messages.filter((m) => m.role === 'assistant' && !m.greeting).length;
  const limitReached = replies >= MAX_REPLIES;

  const ask = async (question: string) => {
    const text = question.trim().slice(0, MAX_INPUT_CHARS);
    if (!text || loading || limitReached) return;

    const next: Message[] = [...messages, { role: 'user', text }];
    setMessages(next);
    setInput('');
    setError(null);
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Solo se envían turnos de texto; el servidor vuelve a validar todo.
          messages: next.map((m) => ({ role: m.role, content: m.text })),
        }),
        signal: controller.signal,
      });

      const data = (await res.json().catch(() => null)) as { reply?: unknown } | null;
      const reply = typeof data?.reply === 'string' ? data.reply : null;

      if (!res.ok) {
        if (res.status === 429) setError(reply === 'message_limit' ? 'limit' : 'rate');
        else setError('error');
        return;
      }
      if (!reply) {
        setError('error');
        return;
      }
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
      setError('error');
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
      setLoading(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void ask(input);
  };

  return (
    <Section
      id="chat"
      index="05"
      label="Ask"
      tone="lime"
      tilt={-2}
      title={t.title}
      shards={[
        { shape: 'circle', tone: 'acid' },
        { shape: 'square', tone: 'pink' },
        { shape: 'tri', tone: 'cyan' },
      ]}
    >
      <div className={styles.panel} ref={panelRef}>
        <ol className={styles.log} aria-live="polite">
          {messages.map((m, i) => (
            <li key={i} className={m.role === 'user' ? styles.user : styles.assistant}>
              <span className={styles.who}>{m.role === 'user' ? t.you : t.bot}</span>
              <p className={styles.text}>{m.text}</p>
            </li>
          ))}
          {(loading || typing) && (
            <li className={styles.assistant}>
              <span className={styles.who}>{t.bot}</span>
              <span className={styles.dots} role="status" aria-label={t.typing}>
                <i />
                <i />
                <i />
              </span>
            </li>
          )}
        </ol>

        {error && (
          <p className={styles.note} role="alert">
            {t[error]}
          </p>
        )}

        {limitReached ? (
          <p className={styles.note} role="status">
            {t.limit}
          </p>
        ) : (
          <>
            <ul className={styles.chips} aria-label={t.suggestionsLabel}>
              {t.suggestions.map((s) => (
                <li key={s}>
                  <button type="button" className={styles.chip} onClick={() => void ask(s)} disabled={loading}>
                    {s}
                  </button>
                </li>
              ))}
            </ul>

            <form className={styles.form} onSubmit={onSubmit}>
              <label htmlFor="chat-input" className="sr-only">
                {t.inputLabel}
              </label>
              <input
                id="chat-input"
                className={styles.input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                autoComplete="off"
                maxLength={MAX_INPUT_CHARS}
                disabled={loading}
              />
              <button
                type="submit"
                className={styles.send}
                disabled={loading || !input.trim()}
                aria-label={t.send}
              >
                {loading ? t.sending : t.send}
              </button>
            </form>
          </>
        )}

        <p className={styles.note}>{t.note}</p>
      </div>
    </Section>
  );
}
