import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Aurora Nexus - Technology with Purpose',
  description: 'Transforming ideas into powerful digital products. We create future-ready software, websites, and AI solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Aurora Nexus - Technology with Purpose',
    description: 'Transforming ideas into powerful digital products. We create future-ready software, websites, and AI solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aurora-nexus.com'),
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
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16 md:pt-20 min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}


