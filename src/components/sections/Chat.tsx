'use client';

import { useState, type FormEvent } from 'react';
import { experience } from '@/content/experience';
import { profile } from '@/content/profile';
import { stack } from '@/content/stack';
import { Section } from '@/components/ui/Section';
import styles from './Chat.module.scss';

type Message = { role: 'user' | 'assistant'; text: string };

const suggestions = ['What is his stack?', 'Where has he worked?', 'Is he open to work?', 'Where is he based?'];

const intro: Message = {
  role: 'assistant',
  text: "Hi, I'm Kevin's assistant. This is a demo: I answer a few preset topics from the site content. Pick a question or type one.",
};

/** Demo answers built only from the content files. No model call yet. */
function answer(question: string): string {
  const q = question.toLowerCase();
  if (/stack|tech|tools|languages/.test(q)) {
    return stack.map((g) => `${g.group}: ${g.items.join(', ')}`).join('. ') + '.';
  }
  if (/work|experience|job|company|globant/.test(q)) {
    return experience.map((j) => `${j.role} at ${j.company} (${j.period})`).join('; ') + '.';
  }
  if (/open|freelance|hire|available|availability/.test(q)) {
    return `${profile.status}. Reach out at ${profile.email} to talk about roles or projects.`;
  }
  if (/where|based|location|remote|timezone/.test(q)) {
    return `${profile.location.city}, ${profile.location.country} (${profile.location.timezone}), working remotely.`;
  }
  return `Demo mode only covers a few topics. For anything else, email ${profile.email}.`;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([intro]);
  const [input, setInput] = useState('');

  const ask = (question: string) => {
    const text = question.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: 'user', text }, { role: 'assistant', text: answer(text) }]);
    setInput('');
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <Section
      id="chat"
      index="05"
      label="Ask"
      tone="lime"
      tilt={-2}
      title="Ask about Kevin"
      shards={[
        { shape: 'circle', tone: 'acid' },
        { shape: 'square', tone: 'pink' },
        { shape: 'tri', tone: 'cyan' },
      ]}
    >
      <div className={styles.panel}>
        <ol className={styles.log} aria-live="polite">
          {messages.map((m, i) => (
            <li key={i} className={m.role === 'user' ? styles.user : styles.assistant}>
              <span className={styles.who}>{m.role === 'user' ? 'You' : 'Assistant'}</span>
              <p className={styles.text}>{m.text}</p>
            </li>
          ))}
        </ol>

        <ul className={styles.chips} aria-label="Suggested questions">
          {suggestions.map((s) => (
            <li key={s}>
              <button type="button" className={styles.chip} onClick={() => ask(s)}>
                {s}
              </button>
            </li>
          ))}
        </ul>

        <form className={styles.form} onSubmit={onSubmit}>
          <label htmlFor="chat-input" className="sr-only">
            Ask a question
          </label>
          <input
            id="chat-input"
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a question…"
            autoComplete="off"
          />
          <button type="submit" className={styles.send}>
            Send
          </button>
        </form>
        <p className={styles.note}>Demo · preset answers, AI assistant not connected yet.</p>
      </div>
    </Section>
  );
}
