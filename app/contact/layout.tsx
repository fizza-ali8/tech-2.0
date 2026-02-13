import type { Metadata } from 'next'
import { baseUrl, seoKeywords } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with our experts. Let\'s discuss your project and turn your vision into a powerful digital solution.',
  keywords: seoKeywords.contact,
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: { url: `${baseUrl}/contact` },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

