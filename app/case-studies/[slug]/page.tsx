import type { Metadata } from 'next'
import { caseStudies, caseStudiesBySlug } from '@/lib/case-studies'
import CaseStudyDetailClient from '@/components/pages/CaseStudyDetailClient'
import { notFound } from 'next/navigation'

type CaseStudyPageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudiesBySlug[params.slug]
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    }
  }
  const image =
    caseStudy.image?.startsWith('/') && caseStudy.image !== '/placeholder-project.jpg'
      ? caseStudy.image
      : undefined
  return {
    title: caseStudy.title,
    description: caseStudy.shortDescription,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.shortDescription,
      type: 'article',
      ...(image && { images: [image] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: caseStudy.title,
      description: caseStudy.shortDescription,
      ...(image && { images: [image] }),
    },
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudiesBySlug[params.slug]

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyDetailClient caseStudy={caseStudy} />
}

