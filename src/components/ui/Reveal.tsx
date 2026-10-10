'use client';

import { m } from 'framer-motion';
import type { ReactNode } from 'react';

/** Section-title entrance: rises with a small tilt. MotionConfig(reducedMotion="user") disables it. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 48, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </m.div>
  );
}
