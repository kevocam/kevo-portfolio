'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import ChatSection from '@/components/ChatSection'
import TechStack from '@/components/TechStack/TechStack'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer/Footer'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <ChatSection />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  )
}
