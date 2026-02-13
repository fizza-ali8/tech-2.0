import type { Metadata } from 'next'
import { baseUrl, seoKeywords } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the passionate team of developers, designers, strategists, and innovators dedicated to delivering exceptional digital solutions.',
  keywords: seoKeywords.team,
  alternates: { canonical: `${baseUrl}/team` },
  openGraph: { url: `${baseUrl}/team` },
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

