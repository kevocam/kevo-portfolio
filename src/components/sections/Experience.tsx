import { experience } from '@/content/experience';
import { profile } from '@/content/profile';
import { Section } from '@/components/ui/Section';
import { TagList } from '@/components/ui/Tag';
import styles from './Experience.module.scss';

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      tone="acid"
      tilt={1.5}
      title="Where I've worked"
      shards={[
        { shape: 'circle', tone: 'pink' },
        { shape: 'tri', tone: 'lime' },
        { shape: 'square', tone: 'cyan' },
      ]}
    >
      <ol className={styles.list}>
        {experience.map((job, i) => (
          <li
            key={job.company}
            className={`${styles.row} ${i === experience.length - 1 ? styles.rowLast : styles.rowDashed}`}
          >
            <div className={styles.meta}>
              <span className={styles.period}>{job.period}</span>
              {job.meta && <span className={styles.muted}>{job.meta}</span>}
            </div>
            <article className={styles.article}>
              <h3 className={styles.role}>
                {job.role} <span className={styles.slash}>/</span> {job.company}
              </h3>
              <ul className={styles.bullets}>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <TagList items={job.tags} />
            </article>
          </li>
        ))}
      </ol>
      <p className={styles.education}>
        <span className={styles.eduBadge}>EDUCATION</span>
        <span>
          <strong>{profile.education.degree}</strong> — {profile.education.school}
        </span>
      </p>
    </Section>
  );
}
