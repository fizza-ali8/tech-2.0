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
      title: 'Service Not Found | Aurora Nexus',
    }
  }
  return {
    title: `${service.title} | Aurora Nexus`,
    description: service.shortDescription,
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


