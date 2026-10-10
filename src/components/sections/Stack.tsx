import { stack } from '@/content/stack';
import { toneText } from '@/content/types';
import { Section } from '@/components/ui/Section';
import { TagList } from '@/components/ui/Tag';
import styles from './Stack.module.scss';

export function Stack() {
  return (
    <Section
      id="stack"
      index="04"
      label="Stack"
      tone="cyan"
      tilt={2}
      title="Tools I work with"
      shards={[
        { shape: 'tri', tone: 'lime' },
        { shape: 'circle', tone: 'pink' },
        { shape: 'square', tone: 'acid' },
      ]}
    >
      <dl className={styles.list}>
        {stack.map((g, i) => (
          <div
            key={g.group}
            className={`${styles.row} ${i === stack.length - 1 ? styles.rowLast : styles.rowDashed}`}
          >
            <dt className={`${styles.group} ${toneText[g.tone]}`}>{g.group}</dt>
            <dd className={styles.items}>
              <TagList items={g.items} size="md" />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
