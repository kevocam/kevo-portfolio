import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './ButtonLink.module.scss';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'acid';
  external?: boolean;
  className?: string;
};

const variants = {
  primary: styles.primary,
  acid: styles.acid,
  outline: styles.outline,
} as const;

export function ButtonLink({ href, children, variant = 'primary', external, className = '' }: Props) {
  const cls = [styles.button, variants[variant], className].join(' ');
  if (external || href.startsWith('http') || href.endsWith('.pdf')) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
