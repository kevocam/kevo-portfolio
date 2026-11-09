import type { Tone } from './types';

export const stack: Array<{ group: string; tone: Tone; items: string[] }> = [
  {
    group: 'Backend',
    tone: 'pink',
    items: ['Python', 'FastAPI', 'Node.js', 'Express', 'PHP/Laravel', 'REST APIs', 'GraphQL (Apollo)'],
  },
  {
    group: 'Frontend',
    tone: 'acid',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'Microfrontends (Module Federation)', 'Sass', 'Tailwind CSS'],
  },
  {
    group: 'AI',
    tone: 'cyan',
    items: ['LLM integration', 'Ollama', 'AI agents', 'Prompt engineering', 'Claude Code', 'Codex', 'Spec-Driven Development'],
  },
  { group: 'Quality & Practices', tone: 'lime', items: ['Jest', 'Playwright', 'SSR/SEO', 'Mobile-first', 'Agile/Scrum'] },
  { group: 'Data', tone: 'pink', items: ['PostgreSQL/Supabase', 'MySQL', 'MongoDB'] },
  { group: 'Cloud & DevOps', tone: 'acid', items: ['Azure', 'Docker', 'Vercel', 'Linux VPS', 'Git', 'CI/CD'] },
];
