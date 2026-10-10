'use client';

import { m } from 'framer-motion';
import type { Tone } from '@/content/types';
import { toneBg } from '@/content/types';
import styles from './Shards.module.scss';

type Shape = 'tri' | 'square' | 'circle';
const shapeClass: Record<Shape, string> = {
  tri: styles.tri,
  square: styles.square,
  circle: styles.circle,
};

const offsets = [
  { x: 160, y: -60, r: 90 },
  { x: 220, y: 40, r: -60 },
  { x: 280, y: -20, r: 45 },
];

/** Three small shapes that fly in and line up next to a section label. */
export function Shards({ shapes }: { shapes: Array<{ shape: Shape; tone: Tone }> }) {
  return (
    <div aria-hidden="true" className={styles.row}>
      {shapes.map((s, i) => (
        <m.span
          key={i}
          className={`${styles.shard} ${shapeClass[s.shape]} ${toneBg[s.tone]}`}
          initial={{ x: offsets[i % 3].x, y: offsets[i % 3].y, rotate: offsets[i % 3].r, opacity: 0 }}
          whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
        />
      ))}
    </div>
  );
}
