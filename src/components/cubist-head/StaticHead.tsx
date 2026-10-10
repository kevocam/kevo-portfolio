import { BASE, HEAD_H, HEAD_W, PARTS } from './parts';
import { PartShape } from './PartShape';

type Props = {
  /** 0 = assembled, 1 = fully scattered. */
  scatter?: number;
  className?: string;
};

/**
 * Server-rendered head. Used in the hero slot (no-JS / reduced-motion / Safari-safe
 * fallback until the animated head is ready) and on the 404 page.
 */
export function StaticHead({ scatter = 0, className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ position: 'relative', width: HEAD_W, height: HEAD_H }}
    >
      <div style={{ position: 'absolute', ...BASE.box }}>
        <PartShape part={BASE} />
      </div>
      {PARTS.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            ...p.box,
            translate: `${p.dx * scatter}px ${p.dy * scatter}px`,
            rotate: `${p.r * scatter}deg`,
          }}
        >
          <PartShape part={p} />
        </div>
      ))}
    </div>
  );
}
