import { StaticHead } from './StaticHead';
import styles from './HeroSlot.module.scss';

/**
 * Reserves the head's space in the hero (CLS = 0) and shows a static, assembled copy
 * until the animated head takes over (html[data-head-ready] hides it).
 * Mobile: 300×348 (scale .6) · md+: 500×580.
 */
export function HeroSlot() {
  return (
    <div data-cubist-slot="" aria-hidden="true" className={styles.slot}>
      <StaticHead className={`kc-hero-static ${styles.staticHead}`} />
    </div>
  );
}
