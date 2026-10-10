import type { RichText } from '@/content/types';
import { toneText } from '@/content/types';

export function RichParagraph({ parts, className }: { parts: RichText; className?: string }) {
  return (
    <p className={className}>
      {parts.map((p, i) =>
        typeof p === 'string' ? (
          <span key={i}>{p}</span>
        ) : (
          <strong key={i} className={`font-bold ${toneText[p.tone]}`}>
            {p.strong}
          </strong>
        ),
      )}
    </p>
  );
}
