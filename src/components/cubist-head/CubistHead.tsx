'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  m,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { BASE, DOCKED_SCALE, HEAD_H, HEAD_W, PARTS, dockAmount, scatterAmount, type HeadPart } from './parts';
import { PartShape } from './PartShape';
import { HeadDebug } from './HeadDebug';
import styles from './CubistHead.module.scss';

type Phase = 'pending' | 'animated' | 'static';

/**
 * The single cubist head. Lives inside the sticky <Header>.
 * On "/" it starts over the hero slot (big, assembled), falls apart while it docks
 * into the header, then rebuilds piece by piece as the page scrolls.
 * Everything runs on MotionValues: zero React re-renders while scrolling.
 */
export function CubistHead() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const reduce = useReducedMotion();
  const dockRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>(isHome ? 'pending' : 'static');

  const { scrollY, scrollYProgress } = useScroll();

  // Geometry from the hero slot, stored as MotionValues so transforms update without re-rendering.
  const heroX = useMotionValue(0);
  const heroY = useMotionValue(0);
  const heroScale = useMotionValue(DOCKED_SCALE);
  const active = useMotionValue(0);

  useEffect(() => {
    const root = document.documentElement;
    const dock = dockRef.current;
    const slots = Array.from(document.querySelectorAll<HTMLElement>('[data-cubist-slot]'));
    // There is one slot per breakpoint (mobile under the name, desktop on the right): use the visible one.
    const visibleSlot = () => slots.find((el) => el.getBoundingClientRect().width > 0);

    if (reduce && process.env.NODE_ENV !== 'production') {
      console.info('CubistHead: static because prefers-reduced-motion');
    }
    if (!isHome || reduce || !dock || !visibleSlot()) {
      active.set(0);
      root.removeAttribute('data-head-ready');
      setPhase('static');
      return;
    }

    const measure = () => {
      const slot = visibleSlot();
      if (!slot) return;
      const s = slot.getBoundingClientRect();
      const d = dock.getBoundingClientRect(); // header is sticky → constant in the viewport
      heroX.set(s.left - d.left);
      heroY.set(s.top + window.scrollY - d.top);
      heroScale.set(s.width / HEAD_W);
    };

    measure();
    active.set(1);
    root.setAttribute('data-head-ready', '');
    setPhase('animated');

    const ro = new ResizeObserver(measure);
    slots.forEach((el) => ro.observe(el));
    ro.observe(document.body);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
      root.removeAttribute('data-head-ready');
    };
  }, [isHome, reduce, heroX, heroY, heroScale, active]);

  const x = useTransform([scrollY, heroX, active], ([sy, hx, a]: number[]) =>
    a ? hx * (1 - dockAmount(sy)) : 0,
  );
  const y = useTransform([scrollY, heroY, active], ([sy, hy, a]: number[]) =>
    a ? hy * (1 - dockAmount(sy)) : 0,
  );
  const scale = useTransform([scrollY, heroScale, active], ([sy, hs, a]: number[]) =>
    a ? hs + (DOCKED_SCALE - hs) * dockAmount(sy) : DOCKED_SCALE,
  );

  return (
    <div ref={dockRef} className={styles.dock}>
      <HeadDebug scrollY={scrollY} progress={scrollYProgress} active={active} phase={phase} reduce={reduce} pathname={pathname} />
      <m.div
        role="img"
        aria-label="Cubist-style portrait of Kevin Camargo that assembles as you scroll"
        style={{
          x,
          y,
          scale,
          width: HEAD_W,
          height: HEAD_H,
          transformOrigin: '0 0',
          opacity: phase === 'pending' ? 0 : 1,
          transition: 'opacity 150ms ease-out',
        }}
        className={styles.head}
      >
        <div style={{ position: 'absolute', ...BASE.box }}>
          <PartShape part={BASE} />
        </div>
        {PARTS.map((part) => (
          <AnimatedPart key={part.id} part={part} scrollY={scrollY} progress={scrollYProgress} active={active} />
        ))}
      </m.div>
    </div>
  );
}

function AnimatedPart({
  part,
  scrollY,
  progress,
  active,
}: {
  part: HeadPart;
  scrollY: MotionValue<number>;
  progress: MotionValue<number>;
  active: MotionValue<number>;
}) {
  const k = useTransform([scrollY, progress, active], ([sy, p, a]: number[]) =>
    a ? scatterAmount(part, sy, p) : 0,
  );
  const x = useTransform(k, (v) => v * part.dx);
  const y = useTransform(k, (v) => v * part.dy);
  const rotate = useTransform(k, (v) => v * part.r);

  return (
    <m.div style={{ position: 'absolute', ...part.box, x, y, rotate }}>
      <PartShape part={part} />
    </m.div>
  );
}
