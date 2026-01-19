import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Aurora Nexus',
  description:
    'Explore our portfolio of successful projects. See how we\'ve helped businesses transform ideas into powerful digital solutions.',
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

