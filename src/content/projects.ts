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
    slug: 'candelaria-central',
    title: 'Candelaria Central',
    oneLiner:
      "A platform for Peru's Festividad de la Candelaria: presentation order, scores and rankings for 150+ dance groups.",
    tags: ['Next.js', 'Supabase', 'Vercel', 'SEO'],
    tone: 'acid',
    featured: true,
    links: { live: 'https://candelariacentral.com' },
    caseStudy: {
      seoTitle: 'Candelaria Central — Platform for the Festividad de la Candelaria',
      description:
        "A Next.js and Supabase platform for Peru's Festividad de la Candelaria, with presentation order, scores and rankings for 150+ dance groups and an SEO content strategy.",
      context:
        "The Festividad de la Candelaria in Puno, Peru, is one of the largest folk festivals in Latin America and UNESCO Intangible Cultural Heritage, with 150+ dance groups competing each year.",
      problem:
        'Information about the festival was scattered across social posts: people had no single place to check the presentation order, scores and rankings of the dance groups.',
      built: [
        'Presentation order, scores and rankings for 150+ dance groups.',
        'An SEO content strategy to capture festival search traffic.',
        'Built with Next.js and Supabase, deployed on Vercel.',
      ],
    },
  },
];

export const caseStudyProjects = projects.filter((p) => p.caseStudy && !p.inProgress);

export function getProject(slug: string) {
  return caseStudyProjects.find((p) => p.slug === slug);
}
