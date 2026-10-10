import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={`no-print ${styles.footer}`}>
      <span>© {new Date().getFullYear()} Kevin Camargo · Full Stack Engineer in Peru</span>
      <span>{'// designed & built with Next.js · SCSS · Vercel'}</span>
      <a href="#top" className={styles.top}>
        Back to top ↑
      </a>
    </footer>
  );
}
