'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'
import styles from './Contact.module.css'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/kevocam',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/kevocam',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:kevocam.seo@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setFormState({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>Get in touch</span>
          <h2 className={styles.title}>Contact Me</h2>
        </ScrollReveal>

        <div className={styles.content}>
          <ScrollReveal delay={0.1} className={styles.info}>
            <p className={styles.description}>
              Looking for: Frontend roles with AI focus, freelance B2B projects, 
              or challenging opportunities. Open to remote work globally. 
              Let&apos;s build something amazing together!
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Location</span>
                <span className={styles.contactValue}>Peru (Remote-friendly)</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Languages</span>
                <span className={styles.contactValue}>Spanish (Native), English (B1)</span>
              </div>
            </div>

            <div className={styles.socials}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ y: -4 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="left" className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? (
                  <span className={styles.sending}>Sending...</span>
                ) : status === 'sent' ? (
                  <span className={styles.sent}>Message Sent!</span>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <footer className={styles.footer}>
            <p>Designed & Built by Kevin Camargo</p>
            <p className={styles.year}>{new Date().getFullYear()}</p>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  )
}
