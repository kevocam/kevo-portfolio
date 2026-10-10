'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';
import styles from './CommandLauncher.module.scss';

// Lazy: cmdk is only downloaded the first time the palette opens.
const CommandMenu = dynamic(() => import('./CommandMenu'), { ssr: false });

/** ⌘K / Ctrl+K button + shortcut. Doubles as the mobile menu. */
export function CommandLauncher() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const show = useCallback(() => {
    setLoaded(true);
    setOpen(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setLoaded(true);
        setOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button type="button" onClick={show} aria-label="Open command menu" className={styles.button}>
        <span className={styles.menuLabel}>Menu</span>
        <kbd className={styles.kbd}>⌘K</kbd>
      </button>
      {loaded && <CommandMenu open={open} onOpenChange={setOpen} />}
    </>
  );
}
