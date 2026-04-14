import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://kevincamargo.com'),
  title: 'Kevin Camargo | Frontend Developer & AI Builder',
  description: 'Frontend Developer with 6+ years of experience building high-performance web applications. Specialized in Next.js, React, SSR, and AI integration. Based in Peru, available for remote work.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'AI Builder',
    'Web Developer Peru',
    'Remote Developer',
    'VueJS Developer',
    'Frontend Engineer',
    'JavaScript Expert',
  ],
  authors: [{ name: 'Kevin Camargo' }],
  alternates: {
    canonical: 'https://kevincamargo.com',
  },
  openGraph: {
    title: 'Kevin Camargo | Frontend Developer & AI Builder',
    description: 'Frontend Developer with 6+ years of experience. Next.js, React, AI integration, SSR performance.',
    url: 'https://kevincamargo.com',
    siteName: 'Kevin Camargo Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Kevin Camargo - Frontend Developer & AI Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Camargo | Frontend Developer & AI Builder',
    description: 'Frontend Developer with 6+ years of experience. Next.js, React, AI integration.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kevin Camargo",
              "url": "https://kevincamargo.com",
              "jobTitle": "Frontend Developer & AI Builder",
              "sameAs": [
                "https://linkedin.com/in/kevocam",
                "https://github.com/kevocam"
              ],
              "knowsAbout": [
                "React.js",
                "Next.js",
                "TypeScript",
                "AI Integration",
                "VueJS"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}