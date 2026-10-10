import { profile } from '@/content/profile';
import { Reveal } from '@/components/ui/Reveal';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import styles from './Contact.module.scss';

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.contact}>
      <div className={styles.inner}>
        <span className={styles.label}>06 / CONTACT</span>
        <Reveal>
          <h2 id="contact-heading" className={styles.title}>
            Let&apos;s build something.
          </h2>
        </Reveal>
        <p className={styles.lede}>
          I&apos;m happy where I am, but always open to a good conversation, especially about AI-driven products, remote
          international teams or freelance projects.
        </p>
        <div className={styles.emailRow}>
          <a href={`mailto:${profile.email}`} className={styles.email}>
            {profile.email}
          </a>
          <CopyEmailButton email={profile.email} />
        </div>
        <ul className={styles.links}>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
              LinkedIn ↗
            </a>
          </li>
          {profile.links.github && (
            <li>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                GitHub ↗
              </a>
            </li>
          )}
          <li>
            <a href={profile.links.cv} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Download CV ↓
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
