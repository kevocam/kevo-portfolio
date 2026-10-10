import type { Metadata } from 'next';
import Link from 'next/link';
import { StaticHead } from '@/components/cubist-head/StaticHead';
import { ButtonLink } from '@/components/ui/ButtonLink';
import styles from './not-found.module.scss';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className={styles.badge}>ERROR 404</span>
          <h1 className={styles.title}>This page fell apart.</h1>
          <p className={styles.lead}>The link is broken or the page moved. The rest of the site is still in one piece.</p>
          <div className={styles.actions}>
            <ButtonLink href="/">Back home</ButtonLink>
            <ButtonLink href="/#contact" variant="outline">
              Contact
            </ButtonLink>
          </div>
          <Link href="/resume" className={styles.resumeLink}>
            or read the resume →
          </Link>
        </div>
        <div className={styles.art}>
          <StaticHead scatter={1} className={styles.artHead} />
        </div>
      </div>
    </section>
  );
}
