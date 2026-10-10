import type { CSSProperties } from 'react';

/**
 * Cubist head geometry. Coordinates live inside a 500×580 box.
 *
 * Scroll behaviour (see README / prompts-animacion-rostro.md):
 *  - scroll 0          → big and assembled in the hero slot
 *  - 0 → EXPLODE_END   → every part flies out by (dx, dy, r)
 *  - 0 → DOCK_END      → the whole head shrinks to DOCKED_SCALE and docks in the header
 *  - from → to (0–1 of page progress) → each part snaps back into place
 */
export const HEAD_W = 500;
export const HEAD_H = 580;
export const DOCKED_SCALE = 0.1;
export const DOCK_END = 640; // px of scroll
export const EXPLODE_END = 420; // px of scroll

export const C = {
  ink: '#0B0B0C',
  cream: '#F5F1E8',
  pink: '#FF2E88',
  acid: '#C6FF00',
  lime: '#E2EA62',
  cyan: '#00E5FF',
} as const;

export type HeadPart = {
  id: string;
  /** Box inside the 500×580 head. */
  box: { left: number; top: number; width: number; height: number };
  /** Visual style of the part (may include its own static rotation). */
  look: CSSProperties;
  /** Decorative children positioned inside the part. */
  inner?: CSSProperties[];
  text?: string;
  /** Rebuild window as a fraction (0–1) of the total page scroll. */
  from: number;
  to: number;
  /** Scattered offset in head px / degrees. */
  dx: number;
  dy: number;
  r: number;
};

export const BASE: Pick<HeadPart, 'box' | 'look'> = {
  box: { left: 30, top: 20, width: 440, height: 540 },
  look: { background: C.cyan, clipPath: 'polygon(8% 0, 100% 6%, 92% 100%, 0 90%)' },
};

export const PARTS: HeadPart[] = [
  {
    id: 'hair',
    box: { left: 60, top: 30, width: 380, height: 150 },
    look: {
      background: `repeating-linear-gradient(115deg, ${C.ink} 0 18px, ${C.acid} 18px 26px)`,
      clipPath: 'polygon(0 60%, 30% 0, 100% 15%, 92% 100%, 10% 100%)',
    },
    from: 0.16, to: 0.24, dx: -60, dy: -120, r: -14,
  },
  {
    id: 'pink-half',
    box: { left: 70, top: 130, width: 210, height: 360 },
    look: {
      background: C.pink,
      clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 45% 100%, 20% 72%, 0 62%, 22% 48%, 8% 30%)',
    },
    from: 0.24, to: 0.32, dx: -150, dy: 40, r: -12,
  },
  {
    id: 'lime-half',
    box: { left: 270, top: 120, width: 170, height: 380 },
    look: { background: C.lime, clipPath: 'polygon(0 0, 85% 6%, 100% 55%, 80% 100%, 0 100%)' },
    from: 0.3, to: 0.38, dx: 130, dy: 70, r: 14,
  },
  {
    id: 'divider',
    box: { left: 262, top: 70, width: 8, height: 470 },
    look: { background: C.ink, transform: 'rotate(6deg)' },
    from: 0.36, to: 0.44, dx: 40, dy: -140, r: -20,
  },
  {
    id: 'eye-left',
    box: { left: 120, top: 220, width: 100, height: 46 },
    look: { background: C.cream, border: `5px solid ${C.ink}`, borderRadius: '70% 0 70% 0' },
    inner: [{ left: 44, top: 6, width: 24, height: 24, borderRadius: '50%', background: C.ink }],
    from: 0.44, to: 0.52, dx: -140, dy: -60, r: 28,
  },
  {
    id: 'eye-right',
    box: { left: 320, top: 196, width: 76, height: 76 },
    look: { background: C.cream, border: `5px solid ${C.ink}`, borderRadius: '50%' },
    inner: [
      {
        left: 10, top: 20, width: 28, height: 28, boxSizing: 'content-box',
        borderRadius: '50%', background: C.pink, border: `5px solid ${C.ink}`,
      },
    ],
    from: 0.5, to: 0.58, dx: 120, dy: -110, r: -32,
  },
  {
    id: 'nose',
    box: { left: 225, top: 232, width: 120, height: 150 },
    look: { background: C.acid, clipPath: 'polygon(60% 0, 100% 100%, 0 85%)' },
    from: 0.58, to: 0.66, dx: 40, dy: 170, r: 40,
  },
  {
    id: 'mouth',
    box: { left: 196, top: 414, width: 150, height: 34 },
    look: { background: C.ink, transform: 'rotate(-6deg)' },
    inner: [{ left: 18, top: 9, width: 96, height: 12, background: C.pink }],
    from: 0.66, to: 0.74, dx: -130, dy: 130, r: -22,
  },
  {
    id: 'ear',
    box: { left: 418, top: 266, width: 72, height: 92 },
    look: {
      background: C.ink,
      border: `4px solid ${C.acid}`,
      borderRadius: '50% 50% 40% 40%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: C.acid,
      fontFamily: 'var(--font-mono)',
      fontSize: 24,
      fontWeight: 500,
    },
    text: '{ }',
    from: 0.74, to: 0.82, dx: 110, dy: 60, r: 30,
  },
  {
    id: 'neck',
    box: { left: 196, top: 490, width: 140, height: 90 },
    look: {
      background: `repeating-linear-gradient(90deg, ${C.cream} 0 12px, ${C.ink} 12px 24px)`,
      clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)',
    },
    from: 0.82, to: 0.92, dx: 30, dy: 150, r: -8,
  },
  {
    id: 'slash',
    box: { left: 30, top: 300, width: 460, height: 6 },
    look: { background: C.cream, transform: 'rotate(-18deg)' },
    from: 0.92, to: 1, dx: -150, dy: -30, r: 22,
  },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** 0 = part in place, 1 = fully scattered. */
export function scatterAmount(part: HeadPart, scrollY: number, progress: number) {
  const explode = clamp01(scrollY / EXPLODE_END);
  const rebuild = clamp01((progress - part.from) / (part.to - part.from));
  return explode * (1 - rebuild);
}

export function dockAmount(scrollY: number) {
  return clamp01(scrollY / DOCK_END);
}
