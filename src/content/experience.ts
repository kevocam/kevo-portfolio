export type ClientEngagement = {
  name: string;
  /** Industry and location, e.g. "Health insurance · Santiago, Chile". */
  context: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export type Job = {
  role: string;
  company: string;
  period: string;
  meta?: string;
  /** Short muted line under the role, e.g. a promotion. */
  note?: string;
  bullets: string[];
  tags: string[];
  /** Client engagements inside the same role (rendered nested). */
  clients?: ClientEngagement[];
};

export const experience: Job[] = [
  {
    role: 'Full Stack Engineer (Semi-Senior Advanced)',
    company: 'Globant',
    period: 'Dec 2021 — Present',
    meta: 'Remote, Peru',
    note: 'Promoted from Semi-Senior Frontend Engineer · Clients: Consalud (Chile), Salcobrand (Chile), theSkimm (USA)',
    bullets: [
      'Built self-service features for a health insurance platform serving 450K+ members as part of a ~15-person multinational team.',
      'Introduced unit (Jest) and E2E (Playwright) testing into repositories that had none, cutting bugs by ~95%.',
      'Built shared components reused across microfrontends and led the mobile-first approach, now the team standard.',
      'Built a file management MVP (Google Drive-like) for Salcobrand with a React frontend and Python/FastAPI backend services, automating processes previously done manually.',
      "Improved theSkimm's SEO visibility by ~70% in 3 months through server-side rendering optimizations in Next.js, fixing rendering bugs affecting performance and indexing.",
      'Integrated AI-assisted development (Claude, Codex) to speed up delivery while keeping code quality high.',
    ],
    tags: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Microfrontends',
      'Python',
      'FastAPI',
      'Node.js',
      'GraphQL (Apollo)',
      'MongoDB',
      'Azure',
      'Jest',
      'Playwright',
      'Sass',
      'Contentful',
      'Claude',
      'Codex',
      'Scrum',
      'Jira',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Dau Holding Group · ID4 @IoT (Fintech)',
    period: 'Jan 2021 — Aug 2021',
    bullets: [
      'Built a virtual congress platform (15+ countries, 300+ attendees) with real-time chat and an admin dashboard.',
      'Improved app performance by ~25% and cut development time by ~30% with reusable components.',
    ],
    tags: ['JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 'Express', 'REST APIs', 'MySQL', 'Python', 'FastAPI'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Waliky TI',
    period: 'Feb 2019 — Dec 2020',
    bullets: [
      'Built an edTech platform used daily by 50+ students and responsive client websites with ~70% faster load times.',
    ],
    tags: ['JavaScript', 'PHP', 'Laravel', 'Vue.js', 'MySQL', 'Sass', 'CSS'],
  },
];
