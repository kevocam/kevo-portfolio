import type { ReactNode } from 'react';
import styles from './Tag.module.scss';

export function Tag({ children, size = 'sm', dashed = false }: { children: ReactNode; size?: 'sm' | 'md'; dashed?: boolean }) {
  const cls = [styles.tag, size === 'sm' ? styles.sm : styles.md, dashed ? styles.dashed : ''].join(' ');
  return <span className={cls}>{children}</span>;
}

export function TagList({ items, size, dashed }: { items: string[]; size?: 'sm' | 'md'; dashed?: boolean }) {
  return (
    <ul className={styles.list} aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>
          <Tag size={size} dashed={dashed}>
            {t}
          </Tag>
        </li>
      ))}
    </ul>
  );
}
