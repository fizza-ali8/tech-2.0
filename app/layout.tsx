import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aurora Nexus - Technology with Purpose',
  description: 'Transforming ideas into powerful digital products. We create future-ready software, websites, and AI solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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


