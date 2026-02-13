import type { Metadata } from 'next'
import { baseUrl, seoKeywords } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore our portfolio of successful projects. See how we\'ve helped businesses transform ideas into powerful digital solutions.',
  keywords: seoKeywords.caseStudies,
  alternates: { canonical: `${baseUrl}/case-studies` },
  openGraph: { url: `${baseUrl}/case-studies` },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

