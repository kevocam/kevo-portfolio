import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kevin Camargo | Frontend Developer & AI Builder',
  description: 'Frontend Developer con 6+ años de experiencia. Especializado en Next.js, React, SSR y AI. Creador de CandelariaCentral.com - 1000+ usuarios concurrentes.',
  keywords: [
    'Frontend Developer Peru',
    'React Developer Lima',
    'Next.js Developer',
    'JavaScript Developer',
    'Frontend + AI',
    'ChatGPT Integration',
    'AI Agents Developer',
    'VueJS Developer',
    'TypeScript Developer',
    'SSR Performance',
  ],
  authors: [{ name: 'Kevin Camargo' }],
  openGraph: {
    title: 'Kevin Camargo | Frontend Developer & AI Builder',
    description: 'Frontend Developer con 6+ años de experiencia. Next.js, React, AI, SSR.',
    type: 'website',
    locale: 'es_PE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Camargo | Frontend Developer & AI Builder',
    description: '6+ años construyendo web apps que escalan. Ahora construyo con IA.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
