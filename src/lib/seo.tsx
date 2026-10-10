import type { Metadata } from 'next';
import { profile } from '@/content/profile';
import type { Project } from '@/content/projects';

export const siteUrl = profile.url;

export const defaultTitle = 'Kevin Camargo — Full Stack Engineer | Python, FastAPI, React, Next.js';
export const defaultDescription =
  'Full Stack Engineer with 7+ years building web products end to end. Python, FastAPI, React, Next.js and LLM integration. Based in Peru, working remotely.';

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: '%s — Kevin Camargo' },
  description: defaultDescription,
  authors: [{ name: 'Kevin Camargo', url: siteUrl }],
  creator: 'Kevin Camargo',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Kevin Camargo',
    title: defaultTitle,
    description: defaultDescription,
    firstName: 'Kevin',
    lastName: 'Camargo',
  },
  twitter: { card: 'summary_large_image', title: defaultTitle, description: defaultDescription },
  robots: { index: true, follow: true },
};

const personId = `${siteUrl}/#person`;

/** Home page JSON-LD: one @graph with the Person and the WebSite. */
export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: profile.name,
        alternateName: profile.legalName,
        jobTitle: profile.role,
        url: siteUrl,
        email: `mailto:${profile.email}`,
        image: `${siteUrl}/opengraph-image`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: profile.location.city,
          addressCountry: profile.location.countryCode,
        },
        worksFor: { '@type': 'Organization', name: profile.worksFor, url: 'https://www.globant.com' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: profile.education.school },
        knowsAbout: profile.knowsAbout,
        knowsLanguage: ['es', 'en'],
        sameAs: [profile.links.linkedin, profile.links.github].filter((v): v is string => Boolean(v)),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Kevin Camargo',
        inLanguage: 'en',
        publisher: { '@id': personId },
      },
    ],
  };
}

/** /resume: a ProfilePage that points at the same Person. */
export function resumeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${siteUrl}/resume`,
    name: 'Resume',
    mainEntity: { '@id': personId },
  };
}

/** /projects/[slug]: CreativeWork authored by the Person, plus the breadcrumb. */
export function projectJsonLd(project: Project) {
  const url = `${siteUrl}/projects/${project.slug}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.caseStudy?.description ?? project.oneLiner,
      url,
      keywords: project.tags.join(', '),
      author: { '@id': personId },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${siteUrl}/#projects` },
        { '@type': 'ListItem', position: 3, name: project.title, item: url },
      ],
    },
  ];
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
