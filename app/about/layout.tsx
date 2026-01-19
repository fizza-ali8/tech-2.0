import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Aurora Nexus',
  description:
    'Transforming ideas into scalable digital solutions. Learn about Aurora Nexus mission, vision, and why businesses choose us.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

