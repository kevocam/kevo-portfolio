import type { Tone } from './types';

export const stack: Array<{ group: string; tone: Tone; items: string[] }> = [
  {
    group: 'Backend',
    tone: 'pink',
    items: ['Python', 'FastAPI', 'REST APIs', 'Node.js', 'PostgreSQL', 'SQL', 'Supabase'],
  },
  {
    group: 'Frontend',
    tone: 'acid',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Microfrontends (Module Federation)'],
  },
  {
    group: 'AI',
    tone: 'cyan',
    items: ['LLM integration', 'Ollama', 'AI agents', 'Prompt engineering', 'Claude Code', 'Codex', 'Spec-Driven Development'],
  },
  { group: 'Testing', tone: 'lime', items: ['Jest', 'Playwright', 'Unit testing', 'E2E testing'] },
  { group: 'Cloud & DevOps', tone: 'acid', items: ['Azure', 'Docker', 'Vercel', 'Linux VPS', 'Git', 'CI/CD'] },
];
