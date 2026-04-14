'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const roles = ['Frontend Developer', 'AI Builder', 'SSR Expert', 'Problem Solver']

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.dot} />
          Available for freelance WordPress projects
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I&apos;m{' '}
          <span className={styles.name}>Kevin Camargo</span>
        </motion.h1>

        <motion.div
          className={styles.roles}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.rolesLabel}>I&apos;m a </span>
          <div className={styles.rolesWrapper}>
            {roles.map((role, index) => (
              <motion.span
                key={role}
                className={styles.role}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          6+ years building web apps that scale. Now I&apos;m adding AI to everything.
          Currently at Globant, crafting enterprise solutions with Next.js, SSR, and AI integration.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className={styles.mouse}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span>Scroll to explore</span>
        </motion.div>
      </div>

      <div className={styles.backgroundGrid} />
    </section>
  )
}
