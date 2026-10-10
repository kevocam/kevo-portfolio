import { marqueeItems } from '@/content/profile';
import styles from './Marquee.module.scss';

/**
 * Tilted lime tape. Slides sideways with scroll via CSS scroll-driven animation (.kc-tape in globals.scss).
 * The outer frame clips the rotated bar so it never widens the page (no negative margins, no overflow on <body>).
 */
export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div aria-hidden="true" className={styles.frame}>
      <div className={styles.wrap}>
        <div className={`kc-tape ${styles.track}`}>
          {items.map((t, i) => (
            <span key={i} className={styles.item}>
              <span>{t}</span>
              <span>✶</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
