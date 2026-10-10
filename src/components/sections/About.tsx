import { profile } from '@/content/profile';
import { toneBg } from '@/content/types';
import { Section } from '@/components/ui/Section';
import { RichParagraph } from '@/components/ui/RichParagraph';
import styles from './About.module.scss';

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      tone="pink"
      tilt={-2}
      title={profile.aboutTitle}
      shards={[
        { shape: 'tri', tone: 'acid' },
        { shape: 'square', tone: 'cyan' },
        { shape: 'circle', tone: 'lime' },
      ]}
    >
      <div className={styles.grid}>
        <div className={styles.copy}>
          {profile.about.map((p, i) => (
            <RichParagraph key={i} parts={p} />
          ))}
        </div>
        <ul className={styles.stats}>
          {profile.stats.map((s) => (
            <li key={s.value} className={`${styles.stat} ${toneBg[s.tone]}`} style={{ rotate: `${s.tilt}deg` }}>
              <span className={styles.value}>{s.value}</span>
              <span className={styles.label}>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
