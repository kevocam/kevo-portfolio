import Link from 'next/link';
import { navItems } from '@/content/profile';
import { CubistHead } from '@/components/cubist-head/CubistHead';
import { CommandLauncher } from '@/components/command/CommandLauncher';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={`no-print ${styles.header}`}>
      {/* The single cubist head. On "/" it flies here from the hero slot. */}
      <CubistHead />
      <div className={styles.bar}>
        <Link href="/" className={styles.logo}>
          kevin<span className={styles.dot}>.</span>camargo
        </Link>
        <nav aria-label="Main" className={styles.nav}>
          <ul className={styles.links}>
            {navItems.map((n) => (
              <li key={n.id}>
                <Link href={`/#${n.id}`} className={styles.link}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Link href="/resume" className={styles.resume}>
              Resume
            </Link>
            <CommandLauncher />
          </div>
        </nav>
      </div>
    </header>
  );
}
