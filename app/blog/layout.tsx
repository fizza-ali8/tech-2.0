import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Aurora Nexus',
  description:
    'Expert insights on software development, AI, cloud, DevOps, design, and digital growth. Stay ahead with smart tech insights.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

