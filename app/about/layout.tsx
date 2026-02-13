import type { Metadata } from 'next'
import { baseUrl, seoKeywords } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Transforming ideas into scalable digital solutions. Learn about Aurora Nexus mission, vision, and why businesses choose us.',
  keywords: seoKeywords.about,
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: { url: `${baseUrl}/about` },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

