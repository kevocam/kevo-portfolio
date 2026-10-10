import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/content/projects';
import { toneBg } from '@/content/types';
import { TagList } from '@/components/ui/Tag';
import styles from './ProjectCard.module.scss';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, '0');
  const sticker = project.featured
    ? `${num} · FEATURED`
    : project.badge
      ? `${num} · ${project.badge}`
      : project.inProgress
        ? `${num} · IN PROGRESS`
        : num;
  const hasCaseStudy = Boolean(project.caseStudy) && !project.inProgress;

  if (project.inProgress) {
    return (
      <article className={styles.wip}>
        <Sticker className={styles.cream}>{sticker}</Sticker>
        <div className={styles.wipBody}>
          <h3 className={styles.wipTitle}>{project.title}</h3>
          <p className={styles.muted}>{project.oneLiner}</p>
        </div>
        <TagList items={project.tags} dashed />
      </article>
    );
  }

  const links = (
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
      {hasCaseStudy && <Link href={`/projects/${project.slug}`}>Read the {project.title} case study →</Link>}
    </div>
  );

  if (project.featured) {
    return (
      <article className={`${styles.featured} ${project.tone === 'pink' ? styles.featuredPink : ''}`}>
        <Sticker className={toneBg[project.tone]}>{sticker}</Sticker>
        <ProjectImage project={project} />
        <div className={styles.featuredBody}>
          <h3 className={styles.featuredTitle}>{project.title}</h3>
          <p className={styles.lead}>{project.oneLiner}</p>
          {project.caseStudy?.context && <p className={styles.muted}>{project.caseStudy.context}</p>}
          <TagList items={project.tags} />
          {links}
        </div>
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <Sticker className={toneBg[project.tone]} tilt={index % 2 ? -2 : 2}>
        {sticker}
      </Sticker>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardText}>
        {project.oneLiner}
        {project.caseStudy?.results && <> {project.caseStudy.results}</>}
      </p>
      <TagList items={project.tags} />
      {links}
    </article>
  );
}

function Sticker({ children, className, tilt = -3 }: { children: React.ReactNode; className: string; tilt?: number }) {
  return (
    <span className={`${styles.sticker} ${className}`} style={{ rotate: `${tilt}deg` }}>
      {children}
    </span>
  );
}

export function ProjectImage({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt ?? `${project.title} screenshot`}
        width={1600}
        height={1000}
        className={styles.image}
      />
    );
  }
  return (
    <div className={styles.placeholder}>
      {/* TODO: screenshot 1600×1000 WebP */}
      [TODO] screenshot · 1600×1000
    </div>
  );
}
