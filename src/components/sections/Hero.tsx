import { profile } from '@/content/profile';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { TypingLine } from '@/components/ui/TypingLine';
import { HeroSlot } from '@/components/cubist-head/HeroSlot';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section aria-label="Intro" className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <span className={styles.role}>{profile.role}</span>
          <h1 className={styles.title}>
            <span>
              <span className={styles.k}>K</span>evin
            </span>{' '}
            <span>
              Camarg
              <span className={styles.o}>o</span>
            </span>
          </h1>
          <p className={styles.subtitle}>{profile.subtitle}</p>

          {/* Mobile: the head slot sits under the name */}
          <div className={styles.mobileSlot}>
            <HeroSlot />
          </div>

          <TypingLine text={profile.tagline} />
          <p className={styles.intro}>{profile.intro}</p>

          <div className={styles.ctas}>
            <ButtonLink href="#projects">View projects</ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Get in touch
            </ButtonLink>
          </div>

          <p className={styles.status}>
            <span className={styles.statusDot} aria-hidden />
            {profile.status} · Remote · {profile.location.city}, {profile.location.country} ({profile.location.timezone})
          </p>

          <ul className={styles.links}>
            {profile.links.github && (
              <li>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </li>
            )}
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>Email ↗</a>
            </li>
          </ul>
        </div>

        {/* Desktop: the head slot sits right of the name */}
        <div className={styles.desktopSlot}>
          <HeroSlot />
        </div>
      </div>
    </section>
  );
}
