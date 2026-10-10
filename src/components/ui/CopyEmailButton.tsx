'use client';

import { useState } from 'react';
import styles from './CopyEmailButton.module.scss';

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" onClick={copy} className={styles.button} aria-live="polite">
      {copied ? 'Copied ✓' : 'Copy email'}
    </button>
  );
}
