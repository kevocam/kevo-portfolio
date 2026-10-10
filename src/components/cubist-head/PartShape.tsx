import type { CSSProperties } from 'react';
import type { HeadPart } from './parts';

/** The visual inside a part's box. Shared by the static and the animated head. */
export function PartShape({ part }: { part: Pick<HeadPart, 'look' | 'inner' | 'text'> }) {
  const style: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    ...part.look,
  };
  return (
    <div style={style}>
      {part.inner?.map((s, i) => (
        <span key={i} style={{ position: 'absolute', display: 'block', ...s }} />
      ))}
      {part.text}
    </div>
  );
}
