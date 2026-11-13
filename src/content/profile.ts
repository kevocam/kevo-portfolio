import type { RichText, Tone } from './types';

export const profile = {
  name: 'Kevin Camargo',
  legalName: 'Albert Kevin Camargo Barreda',
  role: 'Full Stack Engineer',
  /** Visible under the H1 on the home page (real text, not only the typing animation). */
  subtitle: 'Full Stack Engineer · Python, FastAPI, React & Next.js',
  tagline: 'building products with python, fastapi, react & llms',
  intro:
    'I build web products end to end, from the API to the interface. 7+ years shipping software for enterprise clients in health insurance, retail pharmacy and digital media, with React, Next.js and TypeScript on the frontend and Node.js and Python/FastAPI on the backend.',
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
    degree: "Systems Engineer — Bachelor's Degree and Professional Title",
    school: 'Universidad Nacional del Altiplano',
  },
  aboutTitle: 'Code the next developer is glad to inherit.',
  about: [
    [
      'For almost five years at ',
      { strong: 'Globant', tone: 'lime' },
      ", I've built web products for enterprise clients like Consalud, Salcobrand and theSkimm. Today I build self-service features for a health insurance platform serving 450K+ members, as part of a ~15-person multinational team.",
    ],
    [
      "I care about clean architecture, clear specs and code the next developer will be glad to inherit. The work I'm proudest of: introducing unit tests with Jest and end-to-end tests with Playwright into microfrontend repositories that had none. Bugs dropped by ~95%, and the mobile-first approach I pushed became the team standard.",
    ],
    [
      "My workflow is AI-native: I work with ",
      { strong: 'Claude Code and Codex', tone: 'acid' },
      ' on top of Spec-Driven Development, writing the spec first and letting the tools accelerate the build. I also built the LLM-powered assistant on this site with the Anthropic API.',
    ],
    [
      'Before Globant I built an edTech platform at ',
      { strong: 'Waliky TI', tone: 'pink' },
      ", and I've also mentored women starting in software through ",
      { strong: 'Chicas Programadoras', tone: 'cyan' },
      '.',
    ],
  ] satisfies RichText[],
  stats: [
    { value: '7+', label: 'years building for the web', tone: 'pink', tilt: -2 },
    { value: '~95%', label: 'fewer bugs after adding Jest + Playwright', tone: 'acid', tilt: 1.5 },
    { value: '450K+', label: 'members using a platform I build', tone: 'lime', tilt: -1 },
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
    'GraphQL',
    'Supabase',
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
