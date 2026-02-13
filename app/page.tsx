import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import dynamic from 'next/dynamic'
import { baseUrl } from '@/lib/seo'

// Lazy load below-the-fold components for better initial load performance
// Using ssr: false for components that don't need SSR for faster initial load
const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="h-96" />, // Placeholder height
  ssr: false, // Skip SSR for faster initial load
})
const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  ssr: false,
})
const BestITSolutions = dynamic(() => import('@/components/BestITSolutions'), {
  ssr: false,
})
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  ssr: false,
})
const CaseStudies = dynamic(() => import('@/components/CaseStudies'), {
  ssr: false,
})
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false,
})
const Blogs = dynamic(() => import('@/components/Blogs'), {
  ssr: false,
})

// Force static generation for instant loading
export const dynamicParams = false
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  alternates: { canonical: baseUrl },
  openGraph: { url: baseUrl },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BestITSolutions />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <Blogs />
    </main>
  )
}


