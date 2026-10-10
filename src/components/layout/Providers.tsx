'use client';

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import type { ReactNode } from 'react';

/** LazyMotion keeps the Framer bundle small (use `m.*`, never `motion.*`).
 *  reducedMotion="user" → every Framer animation respects prefers-reduced-motion. */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
