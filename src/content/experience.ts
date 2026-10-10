export type Job = {
  role: string;
  company: string;
  period: string;
  meta?: string;
  bullets: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    role: 'Full Stack Engineer',
    company: 'Globant',
    period: 'Dec 2021 — Present',
    meta: 'Remote, Peru',
    bullets: [
      'Build large-scale platforms for enterprise clients in media, retail and healthcare.',
      'Introduced automated testing into a microfrontend architecture (Module Federation): Jest unit tests and Playwright E2E tests, reducing production bugs by 95%.',
      'The Skimm (media): built features on a Next.js platform backed by relational databases.',
      'Salcobrand (retail): delivered full stack features with React, backend services and SQL.',
      'Built Node.js REST APIs and set up repositories and tooling for new microfrontends.',
      'Applied Spec-Driven Development and AI-assisted coding (Claude Code, Codex) in agile, distributed teams.',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'SQL', 'Module Federation', 'Jest', 'Playwright', 'Azure'],
  },
  {
    role: 'Frontend Developer',
    company: 'ID4 @IoT',
    period: 'Jun 2021 — Aug 2021',
    meta: 'Fintech',
    bullets: [
      'Improved application performance by 25% through coding best practices and migrating assets to Firebase.',
      'Built client query features used daily by 100+ customers through the company API.',
      'Cut development time by 30% with reusable components and templates.',
    ],
    tags: ['Vue.js', 'Nuxt.js', 'Vuex', 'React', 'Firebase'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Dau Holding Group',
    period: 'Jan 2021 — May 2021',
    meta: 'Events',
    bullets: [
      'Built a virtual congress platform for an international event: 300+ attendees, 50+ speakers, 3 rooms, 15+ countries.',
      'Developed real-time chat between attendees and speakers, plus an admin dashboard that made attendee management 70% more efficient.',
      'Built a mobile-first frontend and landing pages for each sponsor.',
    ],
    tags: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'WebSockets', 'Tailwind CSS', 'Nginx'],
  },
  {
    role: 'Co-founder & Full Stack Developer',
    company: 'Waliky TI',
    period: 'Feb 2019 — Dec 2020',
    bullets: [
      'Co-founded a software studio building digital products for public and private organizations.',
      'Built a custom edTech platform used daily by 50+ students (courses, exams, certificates).',
      'Reduced website load times by 70% through performance optimization.',
    ],
    tags: ['Laravel', 'React', 'Vue.js', 'MySQL', 'WordPress', 'Google Maps API'],
  },
];
