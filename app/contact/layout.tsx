import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Aurora Nexus',
  description:
    'Get in touch with our experts. Let\'s discuss your project and turn your vision into a powerful digital solution.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

