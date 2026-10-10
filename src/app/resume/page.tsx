import type { Metadata } from 'next';
import { profile } from '@/content/profile';
import { experience } from '@/content/experience';
import { stack } from '@/content/stack';
import { caseStudyProjects } from '@/content/projects';
import { JsonLd, resumeJsonLd } from '@/lib/seo';
import { ButtonLink } from '@/components/ui/ButtonLink';
import styles from './resume.module.scss';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume of Kevin Camargo, Full Stack Engineer: 7+ years building web products, 4+ at Globant. Python, FastAPI, React, Next.js, TypeScript, testing and LLMs.',
  alternates: { canonical: '/resume' },
};

const plain = (parts: (typeof profile.about)[number]) =>
  parts.map((p) => (typeof p === 'string' ? p : p.strong)).join('');

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <JsonLd data={resumeJsonLd()} />
      <div className={`print-doc ${styles.doc}`}>
        <header className={styles.header}>
          <div className={styles.headBlock}>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.role}>{profile.role} · Python · FastAPI · React · Next.js</p>
            <p className={styles.meta}>
              {profile.location.city}, {profile.location.country} ({profile.location.timezone}) · Remote ·{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{' '}
              <a href={profile.links.linkedin}>linkedin.com/in/kevocam</a>
            </p>
          </div>
          <div className="no-print">
            <ButtonLink href={profile.links.cv} variant="acid">
              Download PDF
            </ButtonLink>
          </div>
        </header>

        <section aria-labelledby="r-about" className={styles.section}>
          <h2 id="r-about" className={styles.sectionTitle}>
            ABOUT
          </h2>
          {profile.about.map((p, i) => (
            <p key={i} className={styles.body}>
              {plain(p)}
            </p>
          ))}
        </section>

        <section aria-labelledby="r-exp" className={`${styles.section} ${styles.sectionWide}`}>
          <h2 id="r-exp" className={styles.sectionTitle}>
            EXPERIENCE
          </h2>
          {experience.map((job) => (
            <article key={job.company} className={styles.job}>
              <div className={styles.jobTop}>
                <h3 className={styles.jobTitle}>
                  {job.role} — {job.company}
                </h3>
                <span className={styles.jobMeta}>
                  {job.period}
                  {job.meta ? ` · ${job.meta}` : ''}
                </span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className={styles.tags}>{job.tags.join(' · ')}</p>
            </article>
          ))}
        </section>

        <section aria-labelledby="r-projects" className={styles.section}>
          <h2 id="r-projects" className={styles.sectionTitle}>
            PROJECTS
          </h2>
          {caseStudyProjects.map((p) => (
            <article key={p.slug} className={styles.job}>
              <h3 className={styles.jobTitle}>{p.title}</h3>
              <p className={styles.body}>{p.oneLiner}</p>
              <p className={styles.tags}>{p.tags.join(' · ')}</p>
            </article>
          ))}
        </section>

        <section aria-labelledby="r-stack" className={styles.section}>
          <h2 id="r-stack" className={styles.sectionTitle}>
            STACK
          </h2>
          <dl className={styles.stackList}>
            {stack.map((g) => (
              <div key={g.group} className={styles.stackRow}>
                <dt className={styles.stackGroup}>{g.group}</dt>
                <dd className={styles.body}>{g.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="r-edu" className={styles.section}>
          <h2 id="r-edu" className={styles.sectionTitle}>
            EDUCATION
          </h2>
          <p>
            <strong>{profile.education.degree}</strong> — {profile.education.school}
          </p>
        </section>
      </div>
    </div>
  );
}
