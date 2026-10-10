'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { MotionValue } from 'framer-motion';

type Props = {
  scrollY: MotionValue<number>;
  progress: MotionValue<number>;
  active: MotionValue<number>;
  phase: string;
  reduce: boolean | null;
  pathname: string;
};

/**
 * Temporary overlay for diagnosing the cubist head. Only mounts with ?debug-head in the URL.
 * Values are written straight into the DOM from MotionValue subscriptions (no React state on scroll).
 */
export function HeadDebug({ scrollY, progress, active, phase, reduce, pathname }: Props) {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    setEnabled(new URLSearchParams(window.location.search).has('debug-head'));
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const write = () => {
      const slots = Array.from(document.querySelectorAll<HTMLElement>('[data-cubist-slot]'));
      const widths = slots.map((el, i) => `  slot[${i}] w=${Math.round(el.getBoundingClientRect().width)}`).join('\n');
      const scroller = document.scrollingElement;
      const lines = [
        `scrollY        ${Math.round(scrollY.get())}`,
        `progress       ${progress.get().toFixed(3)}`,
        `active         ${active.get()}`,
        `phase          ${phase}`,
        `reduceMotion   ${String(reduce)}`,
        `pathname       ${JSON.stringify(pathname)}`,
        `slots          ${slots.length}`,
        widths,
        `scrollingEl.top ${scroller ? Math.round(scroller.scrollTop) : 'n/a'}`,
        `dataHeadReady  ${document.documentElement.hasAttribute('data-head-ready')}`,
      ];
      if (ref.current) ref.current.textContent = lines.join('\n');
    };
    write();
    const unsubs = [scrollY.on('change', write), progress.on('change', write), active.on('change', write)];
    window.addEventListener('resize', write);
    return () => {
      unsubs.forEach((u) => u());
      window.removeEventListener('resize', write);
    };
  }, [enabled, scrollY, progress, active, phase, reduce, pathname]);

  if (!enabled) return null;
  return createPortal(
    <pre
      ref={ref}
      style={{
        position: 'fixed',
        left: 8,
        bottom: 8,
        zIndex: 9999,
        margin: 0,
        padding: '8px 10px',
        background: 'rgba(0,0,0,0.85)',
        color: '#c6ff00',
        font: '12px/1.4 monospace',
        pointerEvents: 'none',
        whiteSpace: 'pre',
      }}
    />,
    document.body,
  );
}
