'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import styles from './TechStack.module.css'

const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend Core',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      { name: 'Next.js', level: 95, years: 4 },
      { name: 'React.js', level: 95, years: 5 },
      { name: 'VueJS', level: 85, years: 3 },
      { name: 'TypeScript', level: 88, years: 3 },
      { name: 'JavaScript', level: 95, years: 6 },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.4 2.1-1 2.9l.7.7a4 4 0 0 1-1.4 6.6"/>
        <path d="M8.6 8.9a4 4 0 1 0 6.8 0"/>
        <path d="M12 18a4 4 0 0 1-4-4c0-1.1.4-2.1 1-2.9"/>
        <circle cx="12" cy="14" r="4"/>
      </svg>
    ),
    skills: [
      { name: 'OpenAI API', level: 85, years: 2 },
      { name: 'GPT Integration', level: 88, years: 2 },
      { name: 'n8n Workflows', level: 80, years: 1 },
      { name: 'AI Agents', level: 82, years: 1 },
      { name: 'Antigravity IDE', level: 90, years: 1 },
    ],
  },
  {
    id: 'performance',
    title: 'Performance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    skills: [
      { name: 'SSR / SSG', level: 92, years: 3 },
      { name: 'Mobile-First', level: 95, years: 5 },
      { name: 'Core Web Vitals', level: 88, years: 3 },
      { name: 'PWA', level: 85, years: 2 },
      { name: 'Microfrontends', level: 78, years: 2 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    skills: [
      { name: 'Node.js', level: 75, years: 3 },
      { name: 'Laravel', level: 80, years: 4 },
      { name: 'Supabase', level: 85, years: 2 },
      { name: 'MySQL', level: 78, years: 4 },
      { name: 'GraphQL', level: 72, years: 1 },
    ],
  },
]

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const activeTech = techCategories.find((t) => t.id === activeCategory)!

  return (
    <section id="techstack" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>What I master</span>
          <h2 className={styles.title}>Tech Stack</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal delay={0.1} className={styles.categories}>
            {techCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryName}>{category.title}</span>
                <span className={styles.categoryArrow}>&#8594;</span>
              </motion.button>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={0.2} className={styles.skillPanel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.panelContent}
              >
                <div className={styles.panelHeader}>
                  <span className={styles.panelIcon}>{activeTech.icon}</span>
                  <h3 className={styles.panelTitle}>{activeTech.title}</h3>
                </div>

                <div className={styles.skillBars}>
                  {activeTech.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className={styles.skillBar}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillMeta}>
                          {skill.level}% · {skill.years}yr{skill.years > 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className={styles.barTrack}>
                        <motion.div
                          className={styles.barFill}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className={styles.certifications}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className={styles.certLabel}>LinkedIn Verified:</span>
                  <div className={styles.certBadges}>
                    {['JavaScript', 'React.js', 'VueJS', 'CSS', 'Git', 'Webpack'].map((cert) => (
                      <span key={cert} className={styles.certBadge}>
                        <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        {cert}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className={styles.statsPanel}>
            <div className={styles.statsGrid}>
              <motion.div
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className={styles.statNumber}>6+</span>
                <span className={styles.statLabel}>Years Coding</span>
              </motion.div>
              <motion.div
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Projects Shipped</span>
              </motion.div>
              <motion.div
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className={styles.statNumber}>169</span>
                <span className={styles.statLabel}>SEO Pages</span>
              </motion.div>
              <motion.div
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className={styles.statNumber}>1K+</span>
                <span className={styles.statLabel}>Users Served</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
