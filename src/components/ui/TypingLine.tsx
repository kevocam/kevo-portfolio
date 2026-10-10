'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './TypingLine.module.scss';

/** "> building products…_" — full text is in the SSR HTML (sr-only); the visible copy types itself. */
export function TypingLine({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(text.length);

  useEffect(() => {
    if (reduce) {
      setCount(text.length);
      return;
    }
    setCount(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) window.clearInterval(id);
    }, 45);
    return () => window.clearInterval(id);
  }, [text, reduce]);

  return (
    <p className={styles.line}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        &gt; {text.slice(0, count)}
        <span className="kc-cursor">_</span>
      </span>
    </p>
  );
}
