import type { Metadata } from 'next'
import { baseUrl, seoKeywords } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Expert insights on software development, AI, cloud, DevOps, design, and digital growth. Stay ahead with smart tech insights.',
  keywords: seoKeywords.blog,
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: { url: `${baseUrl}/blog` },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

