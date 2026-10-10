import type { RichText, Tone } from './types';

export const profile = {
  name: 'Kevin Camargo',
  legalName: 'Albert Kevin Camargo Barreda',
  role: 'Full Stack Engineer',
  /** Visible under the H1 on the home page (real text, not only the typing animation). */
  subtitle: 'Full Stack Engineer · Python, FastAPI, React & Next.js',
  tagline: 'building products with python, fastapi, react & llms',
  intro:
    'I build web products end to end, from the API to the interface. 7+ years shipping software, 4+ of them at Globant for enterprise clients in media, retail and healthcare. Today I focus on Python backends, React frontends and bringing LLMs into real products.',
  status: 'Open to conversations',
  location: { city: 'Lima', country: 'Peru', countryCode: 'PE', timezone: 'UTC-5' },
  email: 'hurkth@gmail.com',
  url: 'https://kevincamargo.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/kevocam',
    // Hidden in the UI until a URL exists.
    github: null as string | null,
    cv: '/kevin-camargo-cv.pdf',
  },
  worksFor: 'Globant',
  education: {
    degree: 'Systems Engineering',
    school: 'Universidad Nacional del Altiplano',
  },
  aboutTitle: 'Code the next developer is glad to inherit.',
  about: [
    [
      'For the last 4+ years at ',
      { strong: 'Globant', tone: 'lime' },
      ", I've built large-scale platforms for enterprise clients in media, retail and healthcare: designing REST APIs with Node.js and SQL, building scalable frontends with React and Next.js, and shipping features with distributed teams across time zones.",
    ],
    [
      "I care about clean architecture, clear specs and code the next developer will be glad to inherit. The work I'm proudest of: introducing automated testing into a microfrontend architecture, with unit tests in Jest and end-to-end tests in Playwright. Production bugs dropped by 95% and releases became predictable.",
    ],
    [
      "My workflow is AI-native: I work with ",
      { strong: 'Claude Code and Codex', tone: 'acid' },
      ' on top of Spec-Driven Development, writing the spec first and letting the tools accelerate the build. Lately I\'ve been running local LLMs and self-hosting AI agents, learning how to turn them into features people actually use.',
    ],
    [
      'Outside my day job I co-founded ',
      { strong: 'Waliky TI', tone: 'pink' },
      ", a software studio, and I build products for local businesses in Peru, like a patient records app for dental clinics. I've also mentored women starting in software through ",
      { strong: 'Chicas Programadoras', tone: 'cyan' },
      '.',
    ],
  ] satisfies RichText[],
  stats: [
    { value: '7+', label: 'years building for the web', tone: 'pink', tilt: -2 },
    { value: '95%', label: 'fewer production bugs after adding Jest + Playwright', tone: 'acid', tilt: 1.5 },
    { value: '15+', label: "countries reached by products I've built", tone: 'lime', tilt: -1 },
  ] satisfies Array<{ value: string; label: string; tone: Tone; tilt: number }>,
  /** Used by JSON-LD (schema.org knowsAbout). */
  knowsAbout: [
    'Python',
    'FastAPI',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'LLM integration',
    'AI agents',
    'Playwright',
    'Jest',
    'Microfrontends',
  ],
} as const;

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
] as const;

export const marqueeItems = [
  'Python',
  'FastAPI',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'LLMs',
  'AI agents',
  'Supabase',
  'Playwright',
];
