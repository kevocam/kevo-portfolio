import type { ReactNode } from 'react';
import type { Tone } from '@/content/types';
import { toneBg } from '@/content/types';
import { Reveal } from './Reveal';
import { Shards } from './Shards';
import styles from './Section.module.scss';

type Props = {
  id: string;
  index: string;
  label: string;
  tone: Tone;
  tilt?: number;
  title: string;
  shards: Parameters<typeof Shards>[0]['shapes'];
  children: ReactNode;
};

/** Numbered section: "01 / ABOUT" sticker + flying shards + rising H2. */
export function Section({ id, index, label, tone, tilt = -2, title, shards, children }: Props) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={`${styles.index} ${toneBg[tone]}`} style={{ rotate: `${tilt}deg` }}>
            {index} / {label.toUpperCase()}
          </span>
          <Shards shapes={shards} />
        </div>
        <Reveal>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
