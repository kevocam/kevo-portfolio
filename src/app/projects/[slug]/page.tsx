import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudyProjects, getProject } from '@/content/projects';
import { toneBg } from '@/content/types';
import { JsonLd, projectJsonLd } from '@/lib/seo';
import { ProjectImage } from '@/components/sections/ProjectCard';
import { TagList } from '@/components/ui/Tag';
import styles from './project.module.scss';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = project.caseStudy?.seoTitle ?? project.title;
  const description = project.caseStudy?.description ?? project.oneLiner;
  return {
    // Absolute: the seoTitle already carries the name, so the "— Kevin Camargo" suffix is not added.
    title: { absolute: title },
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description, url: `/projects/${project.slug}`, type: 'article' },
    twitter: { title, description },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy ?? {};
  // Template: Context → Problem → What I built → Stack → Results → Links. Missing fields are hidden.
  const blocks = [
    { title: 'Context', body: cs.context },
    { title: 'Problem', body: cs.problem },
  ].filter((b): b is { title: string; body: string } => Boolean(b.body));
  const built = cs.built;
  const hasLinks = Boolean(project.links.live || project.links.code);

  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <Link href="/">Home</Link> / <Link href="/#projects">Projects</Link> /{' '}
          <span className={styles.current}>{project.title}</span>
        </nav>

        <header className={styles.header}>
          <span className={`${styles.badge} ${toneBg[project.tone]}`}>CASE STUDY</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.lead}>{project.oneLiner}</p>
        </header>

        <ProjectImage project={project} />

        {blocks.map((b) => (
          <section key={b.title} className={styles.block}>
            <h2 className={styles.blockTitle}>{b.title}</h2>
            <p className={styles.blockBody}>{b.body}</p>
          </section>
        ))}

        {built && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>What I built</h2>
            {typeof built === 'string' ? (
              <p className={styles.blockBody}>{built}</p>
            ) : (
              <ul className={styles.list}>
                {built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        )}

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>Stack</h2>
          <TagList items={project.tags} size="md" />
        </section>

        {cs.results && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Results</h2>
            <p className={styles.blockBody}>{cs.results}</p>
          </section>
        )}

        {hasLinks && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>Links</h2>
            <div className={styles.links}>
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  Live ↗
                </a>
              )}
              {project.links.code && (
                <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                  Code ↗
                </a>
              )}
            </div>
          </section>
        )}

        <div className={styles.footerLinks}>
          <Link href="/#projects" className={styles.back}>
            ← All projects
          </Link>
          <Link href="/#contact" className={styles.cta}>
            Building something similar? Let&apos;s talk →
          </Link>
        </div>
      </div>
      <JsonLd data={projectJsonLd(project)} />
    </article>
  );
}
