import type { Metadata } from 'next'
import { baseUrl, seoKeywords } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Aurora Nexus services: software, web, AI automation, apps, design, SEO, cloud, and DevOps.',
  keywords: seoKeywords.services,
  alternates: { canonical: `${baseUrl}/services` },
  openGraph: { url: `${baseUrl}/services` },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


