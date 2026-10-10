import type { Metadata, Viewport } from 'next';
import { Archivo, Dela_Gothic_One, IBM_Plex_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Providers } from '@/components/layout/Providers';
import { baseMetadata, JsonLd, siteJsonLd } from '@/lib/seo';
import './globals.scss';

const archivo = Archivo({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-archivo', display: 'swap' });
const dela = Dela_Gothic_One({ subsets: ['latin'], weight: '400', variable: '--font-dela', display: 'swap' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' });

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: '#0B0B0C',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${dela.variable} ${plexMono.variable}`}>
      <body id="top">
        <a href="#main" className="sr-only">
          Skip to content
        </a>
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <JsonLd data={siteJsonLd()} />
        <Analytics />
      </body>
    </html>
  );
}
