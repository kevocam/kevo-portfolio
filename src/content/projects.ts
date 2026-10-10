import type { Tone } from './types';

export type CaseStudy = {
  /** Full <title> for /projects/[slug] (used as-is, without the site suffix). */
  seoTitle?: string;
  /** Meta description for /projects/[slug]. */
  description?: string;
  context?: string;
  problem?: string;
  /** One paragraph, or a list of bullets. */
  built?: string | string[];
  results?: string;
};

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
  tone: Tone;
  featured?: boolean;
  /** Dashed "in progress" card, no case study. */
  inProgress?: boolean;
  /** Sticker label next to the number, e.g. "LAB". */
  badge?: string;
  links: { live?: string; code?: string };
  /** Only filled fields render on /projects/[slug]. Never invent copy. */
  caseStudy?: CaseStudy;
  /** TODO: 1600×1000 WebP in /public/projects/<slug>.webp */
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    slug: 'goldent',
    title: 'Goldent',
    oneLiner:
      'A patient records app that takes a dental clinic from paper files to a searchable, tablet-first system.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'PWA'],
    tone: 'pink',
    featured: true,
    links: {},
    imageAlt: 'Goldent patient search screen on a tablet',
    caseStudy: {
      seoTitle: 'Goldent — Patient Records App for Dental Clinics',
      description:
        'How I built a tablet-first patient records app with Next.js and Supabase to move a dental clinic in Puno, Peru from paper files to a searchable system.',
      context:
        'A dental clinic in Puno, Peru, run by a single dentist with around 100 patients. Every record lived on paper: finding a patient\'s history meant digging through folders during the appointment.',
      problem:
        'The dentist needed to find any patient in seconds, see past visits and treatments, and contact patients quickly. The system had to work on a tablet in the chair and let her digitize old paper records without slowing down her day.',
      built: [
        'Patient search by name, national ID or phone, as the app\'s home screen.',
        'Patient file with visits and treatments, plus one-tap WhatsApp or phone contact.',
        'A quick-capture flow to digitize old paper records on a tablet.',
        'Installable PWA, auth and a 12-table PostgreSQL schema on Supabase, deployed on Vercel.',
        'Built with Spec-Driven Development: specs first, then implementation with AI-assisted coding.',
      ],
      results:
        'The MVP is live and in use. Several other dental clinics are now testing it, and it is evolving into a multi-clinic product.',
    },
  },
  {
    slug: 'candelaria-central',
    title: 'Candelaria Central',
    oneLiner: 'An SEO-first website for a traditional dance group from Puno, Peru.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'SEO'],
    tone: 'acid',
    links: { live: 'https://candelariacentral.com' },
    caseStudy: {
      seoTitle: 'Candelaria Central — SEO Website for a Puno Dance Group',
      description:
        'A fast, SEO-first Next.js website for a traditional dance group from Puno, Peru, built to be found by festival audiences.',
      context:
        'A traditional dance group from Puno, Peru, that takes part in the Candelaria festival, one of the largest cultural celebrations in South America.',
      problem:
        'The group had no website of its own. People searching for it found scattered social posts and nothing that told its story or showed its work.',
      built:
        'A fast, mobile-first website with the group\'s history, a photo gallery and contact options, structured for search engines from day one.',
    },
  },
  {
    slug: 'virtual-congress',
    title: 'Virtual Congress Platform',
    oneLiner: 'A live event platform with real-time chat for an international congress across 15+ countries.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'WebSockets'],
    tone: 'cyan',
    links: {},
    caseStudy: {
      seoTitle: 'Virtual Congress Platform — Real-Time Event App',
      description:
        'A live virtual congress platform with real-time chat for 300+ attendees and 50+ speakers across 15+ countries, built with Laravel and Vue.js.',
      context: 'An international academic congress in 2021 that had to move fully online.',
      problem:
        'Hundreds of attendees across many countries needed to follow three parallel rooms, interact with speakers live, and register without friction. The organizers needed to manage all of it themselves.',
      built: [
        'A congress platform with three live rooms and a mobile-first frontend.',
        'Real-time chat between attendees and speakers over WebSockets.',
        'An admin dashboard for attendee management.',
        'A landing page for each sponsor.',
      ],
      results:
        '300+ attendees, 50+ speakers and 15+ countries over 3 days. Attendee management became 70% more efficient.',
    },
  },
  {
    slug: 'self-hosted-ai-agents',
    title: 'Self-Hosted AI Agents',
    oneLiner: 'Running local LLMs with Ollama and self-hosting autonomous AI agents on a VPS.',
    tags: ['Ollama', 'LLMs', 'AI agents', 'VPS', 'Supabase'],
    tone: 'lime',
    badge: 'LAB',
    links: {},
    caseStudy: {
      seoTitle: 'Self-Hosted AI Agents with Ollama on a VPS',
      description:
        'Notes from running local LLMs with Ollama and self-hosting autonomous AI agents on a VPS with Supabase as storage.',
      context: 'A personal lab to understand how LLMs and agents behave outside of a hosted API.',
      built:
        'Local LLMs running with Ollama, plus autonomous AI agents (OpenClaw, Hermes) deployed on a VPS, using Supabase for persistent storage.',
    },
  },
];

export const caseStudyProjects = projects.filter((p) => p.caseStudy && !p.inProgress);

export function getProject(slug: string) {
  return caseStudyProjects.find((p) => p.slug === slug);
}
