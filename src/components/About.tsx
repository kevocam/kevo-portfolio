'use client'

import ScrollReveal from './ui/ScrollReveal'
import styles from './About.module.css'

const highlights = [
  { number: '6+', label: 'Years Experience' },
  { number: '4.5yrs', label: 'At Globant' },
  { number: '169+', label: 'Pages Indexed' },
]

const certifications = [
  'JavaScript', 'React.js', 'VueJS', 'CSS', 'ECMAScript', 'Git', 'Webpack'
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>Get to know me</span>
          <h2 className={styles.title}>About Me</h2>
        </ScrollReveal>

        <div className={styles.content}>
          <ScrollReveal delay={0.1} className={styles.text}>
            <p>
              Frontend Developer & AI Builder with 6+ years of experience crafting high-performance 
              web applications across FinTech, Healthcare, and Entertainment. Currently at Globant 
              (4.5 years), delivering enterprise-level solutions with Next.js, SSR, and AI integration.
            </p>
            <p>
              Strong command of JavaScript, ReactJS, VueJS, PHP, and Laravel, with availability 
              for freelance WordPress projects — custom themes, plugins, and marketing-focused 
              websites. Experienced in technical SEO, Core Web Vitals optimization, Google 
              Analytics, and CMS integrations.
            </p>
            <p>
              Comfortable in agile environments and quick to adapt to new clients and projects. 
              Passionate about clean, maintainable code and creating user experiences that make a difference.
            </p>

            <div className={styles.certifications}>
              <span className={styles.certLabel}>LinkedIn Skill Assessments:</span>
              <div className={styles.certBadges}>
                {certifications.map((cert) => (
                  <span key={cert} className={styles.certBadge}>{cert} ✓</span>
                ))}
              </div>
            </div>

            <div className={styles.highlights}>
              {highlights.map((item, index) => (
                <ScrollReveal key={item.label} delay={0.2 + index * 0.1}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightNumber}>{item.number}</span>
                    <span className={styles.highlightLabel}>{item.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="left" className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>
                <svg viewBox="0 0 100 100" className={styles.codeIcon}>
                  <rect x="10" y="10" width="80" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M30 35 L45 50 L30 65" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="55" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <div className={styles.decorativeCircle} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
