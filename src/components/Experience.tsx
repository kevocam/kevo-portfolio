'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'
import styles from './Experience.module.css'

const experiences = [
  {
    company: 'Globant',
    role: 'Web UI Developer',
    period: '2021 - Present',
    description: 'Working on enterprise-level applications. Implemented mobile-first methodology in my team. Created transversal components used across 5+ projects. Optimized Core Web Vitals improving scores from 60 to 90+. Agile teams (Scrum/Kanban).',
    current: true,
  },
  {
    company: 'ID4 @IoT',
    role: 'Frontend Developer',
    period: '2021',
    description: 'Developed IoT dashboards and real-time monitoring systems. Improved software performance by 25% applying best practices and migrating assets to Firebase. Contributed to marketing team increasing landing visits by 40%.',
    current: false,
  },
  {
    company: 'Dau Holding',
    role: 'Full Stack Developer',
    period: '2021',
    description: 'Built corporate websites and event management platforms. Developed international congress software connecting 15+ countries with 300+ participants. Prioritized mobile-first methodology achieving 100% adaptability.',
    current: false,
  },
  {
    company: 'WaliikyTI (Co-founder)',
    role: 'Junior Developer',
    period: '2019 - 2021',
    description: 'Co-founded a software company. Improved digital transformation for private and public companies achieving 80% more visits. Built EdTech platform used by 50+ students daily.',
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>My Journey</span>
          <h2 className={styles.title}>Work Experience</h2>
        </ScrollReveal>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.company} delay={index * 0.1}>
              <motion.div
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.timelineMarker}>
                  <div className={`${styles.dot} ${exp.current ? styles.current : ''}`} />
                  {index < experiences.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <span className={styles.company}>{exp.company}</span>
                    </div>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
