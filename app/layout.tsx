import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Aurora Nexus - Technology with Purpose',
    template: '%s | Aurora Nexus',
  },
  description: 'Transforming ideas into powerful digital products. We create future-ready software, websites, and AI solutions.',
  keywords: ['software development', 'web development', 'AI solutions', 'digital products', 'technology consulting', 'Aurora Nexus'],
  authors: [{ name: 'Aurora Nexus', url: 'https://auroranexus.tech/' }],
  creator: 'Aurora Nexus',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aurora Nexus - Technology with Purpose',
    description: 'Transforming ideas into powerful digital products. We create future-ready software, websites, and AI solutions.',
    // Resolved to absolute URL via metadataBase. Replace with /og-default.png (1200×630) when you add one.
    images: ['/media/BestItSolution_home.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Nexus - Technology with Purpose',
    description: 'Transforming ideas into powerful digital products. We create future-ready software, websites, and AI solutions.',
    images: ['/media/BestItSolution_home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://auroranexus.tech/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for faster domain resolution */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Preload critical resources */}
        <link rel="preload" href="/media/home_hero.mp4" as="video" type="video/mp4" />
        {/* Chunk error handler */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('error', function(e) {
                  if (e.message && (e.message.includes('Loading chunk') || e.message.includes('ChunkLoadError'))) {
                    console.warn('Chunk error detected, reloading...');
                    setTimeout(function() { window.location.reload(); }, 1000);
                  }
                }, true);
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && (e.reason.message && (e.reason.message.includes('Loading chunk') || e.reason.message.includes('ChunkLoadError')) || e.reason.name === 'ChunkLoadError')) {
                    console.warn('Chunk error in promise, reloading...');
                    e.preventDefault();
                    setTimeout(function() { window.location.reload(); }, 1000);
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <Navbar />
          <div className="pt-16 md:pt-20 min-h-screen">
            {children}
          </div>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
}


