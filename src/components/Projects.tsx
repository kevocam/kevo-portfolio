'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'Candelaria Central',
    description: 'Web para la Festividad de la Virgen de la Candelaria (Puno, Peru). Desarrollo en 3 dias para el dia principal. Posiciono #1-3 en Google para "puntajes candelaria 2026" en 1 semana.',
    tech: ['Next.js SSR', 'Supabase', 'GPT', 'SEO', 'Antigravity IDE'],
    link: 'https://candelariacentral.com',
    repo: '#',
    featured: true,
    stats: {
      pages: '169',
      clicks: '629',
      users: '1000+'
    },
    images: ['/images/candelaria-1.png', '/images/candelaria-2.png', '/images/candelaria-3.png'],
    pagespeed: ['/images/pagespeed-1.png', '/images/pagespeed-2.png'],
  },
  {
    title: 'eCandelaria Central',
    description: 'Plataforma de contenido automatico con IA. Agentes que generan posts, gestionan redes sociales y analizan engagement. Desarrollo con Antigravity IDE.',
    tech: ['Next.js', 'Supabase', 'GPT API', 'n8n', 'AI Agents'],
    link: '#',
    repo: '#',
    featured: true,
    stats: null,
    images: [],
    pagespeed: [],
  },
  {
    title: 'Vue Pokedex',
    description: 'Interactive Pokemon encyclopedia built with Vue.js, featuring search and filtering.',
    tech: ['VueJS', 'Vue Router', 'Vuex', 'Sass'],
    link: '#',
    repo: '#',
    featured: false,
    stats: null,
    images: [],
    pagespeed: [],
  },
  {
    title: 'Life Insurance Portal',
    description: 'A comprehensive insurance platform for life insurance policies and claims management.',
    tech: ['React', 'Sass'],
    link: '#',
    repo: '#',
    featured: false,
    stats: null,
    images: [],
    pagespeed: [],
  },
  {
    title: 'Congress Web Platform',
    description: 'Corporate website for Dau Holding with event management for international congress.',
    tech: ['Laravel', 'Livewire', 'Webpack', 'Sass'],
    link: '#',
    repo: '#',
    featured: false,
    stats: null,
    images: [],
    pagespeed: [],
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>My Work</span>
          <h2 className={styles.title}>Featured Projects</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div
                className={`${styles.card} ${project.featured ? styles.featured : ''}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.folderIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className={styles.links}>
                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View live">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                    {project.repo !== '#' && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label="View repository">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                
                {project.stats && (
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>{project.stats.pages}</span>
                      <span className={styles.statLabel}>Pages</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>{project.stats.clicks}</span>
                      <span className={styles.statLabel}>Clicks</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>{project.stats.users}</span>
                      <span className={styles.statLabel}>Users</span>
                    </div>
                  </div>
                )}

                {project.pagespeed.length > 0 && (
                  <div className={styles.pagespeedGrid}>
                    {project.pagespeed.map((img, i) => (
                      <div key={i} className={styles.pagespeedImage}>
                        <Image src={img} alt={`PageSpeed ${i + 1}`} fill style={{ objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                )}

                <div className={styles.techList}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
