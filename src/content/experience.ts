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
    role: 'Full Stack Engineer',
    company: 'Globant',
    period: 'Dec 2021 — Present',
    meta: 'Remote, Peru',
    note: 'Promoted from Frontend Engineer',
    bullets: [],
    tags: [],
    clients: [
      {
        name: 'Consalud',
        context: 'Health insurance (Isapre) · Santiago, Chile',
        period: 'Feb 2023 — Present',
        bullets: [
          'Only Globant engineer in a ~15-person multinational team building the member self-service platform (MiGES, MiCAEC, MisPreventivos, MiCirugía) for 450K+ members.',
          'Introduced unit (Jest) and E2E (Playwright) testing into repositories that had none, cutting bugs by ~95%.',
          'Built shared components reused across microfrontends and led the mobile-first approach, now the team standard.',
          'Integrated AI-assisted development (Claude, Codex) to speed up delivery while keeping code quality high.',
        ],
        tags: ['React', 'TypeScript', 'Module Federation', 'Jest', 'Playwright', 'Sass', 'Scrumban'],
      },
      {
        name: 'Salcobrand',
        context: 'Retail pharmacy · Santiago, Chile',
        period: '7 months',
        bullets: [
          'Built a file management MVP (Google Drive-like) with a React frontend and Python/FastAPI backend services.',
          'Proposed and implemented solutions that automated processes previously done manually.',
        ],
        tags: ['React', 'Python', 'FastAPI', 'Scrum'],
      },
      {
        name: 'theSkimm',
        context: 'Digital media · New York, USA',
        period: '5 months',
        bullets: [
          'Improved SEO visibility by ~70% in 3 months through server-side rendering optimizations in Next.js.',
          'Fixed rendering bugs affecting page performance and indexing.',
        ],
        tags: ['Next.js', 'React', 'GraphQL', 'Apollo', 'MongoDB', 'Contentful'],
      },
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'ID4 @IoT',
    period: 'Jun 2021 — Aug 2021',
    meta: 'Fintech',
    bullets: ['Improved app performance by ~25% and cut development time by ~30% with reusable components.'],
    tags: ['Vue.js', 'Nuxt.js', 'Firebase'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Dau Holding Group',
    period: 'Jan 2021 — May 2021',
    meta: 'Events',
    bullets: [
      'Built a virtual congress platform (15+ countries, 300+ attendees) with real-time chat and an admin dashboard.',
    ],
    tags: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'WebSockets'],
  },
  {
    role: 'Co-founder & Full Stack Developer',
    company: 'Waliky TI',
    period: 'Feb 2019 — Dec 2020',
    bullets: [
      'Built an edTech platform used daily by 50+ students and responsive client websites with ~70% faster load times.',
    ],
    tags: ['Laravel', 'React', 'Vue.js', 'MySQL'],
  },
];
