'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'
import styles from './Skills.module.css'

const skillCategories = [
  {
    title: 'Frontend Core',
    skills: ['Next.js', 'React.js', 'VueJS', 'TypeScript', 'JavaScript', 'Sass/SCSS'],
  },
  {
    title: 'AI & Automation',
    skills: ['OpenAI API', 'GPT Integration', 'n8n', 'AI Agents', 'Antigravity IDE', 'ChatGPT'],
  },
  {
    title: 'Performance',
    skills: ['SSR', 'Mobile-first', 'PWA', 'Core Web Vitals', 'Microfrontends', 'Design Systems'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Laravel', 'PHP', 'Supabase', 'MySQL', 'Firebase'],
  },
  {
    title: 'Tooling',
    skills: ['Vite', 'Webpack', 'Git', 'Azure', 'Docker', 'GraphQL'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>What I work with</span>
          <h2 className={styles.title}>Skills & Technologies</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={categoryIndex * 0.1}>
              <div className={styles.category}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className={styles.skillBadge}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className={styles.skillName}>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
