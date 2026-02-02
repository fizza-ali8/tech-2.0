import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ServiceDetailClient from '@/components/pages/ServiceDetailClient'
import { services, servicesBySlug } from '@/lib/services'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const service = servicesBySlug[params.slug]
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    }
  }
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.shortDescription,
    },
  }
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const service = servicesBySlug[params.slug]
  if (!service) return notFound()
  return <ServiceDetailClient service={service} />
}


