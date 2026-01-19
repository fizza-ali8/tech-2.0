import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | Aurora Nexus',
  description:
    'Meet the passionate team of developers, designers, strategists, and innovators dedicated to delivering exceptional digital solutions.',
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

