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
              {job.note && <p className={styles.note}>{job.note}</p>}
              {job.bullets.length > 0 && (
                <ul className={styles.bullets}>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {job.tags.length > 0 && <TagList items={job.tags} />}
              {job.clients && (
                <ol className={styles.clients}>
                  {job.clients.map((client) => (
                    <li key={client.name} className={styles.client}>
                      <h4 className={styles.clientName}>
                        {client.name} <span className={styles.slash}>/</span>{' '}
                        <span className={styles.muted}>{client.context}</span>
                      </h4>
                      <span className={styles.period}>{client.period}</span>
                      <ul className={styles.bullets}>
                        {client.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <TagList items={client.tags} />
                    </li>
                  ))}
                </ol>
              )}
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
