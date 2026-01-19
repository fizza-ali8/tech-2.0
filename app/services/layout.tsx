import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Aurora Nexus',
  description:
    'Explore Aurora Nexus services: software, web, AI automation, apps, design, SEO, cloud, and DevOps.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


