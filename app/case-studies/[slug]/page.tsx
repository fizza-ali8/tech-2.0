import type { Metadata } from 'next'
import { caseStudies, caseStudiesBySlug } from '@/lib/case-studies'
import CaseStudyDetailClient from '@/components/pages/CaseStudyDetailClient'
import { notFound } from 'next/navigation'
import { baseUrl, seoKeywords } from '@/lib/seo'

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
  const url = `${baseUrl}/case-studies/${params.slug}`
  return {
    title: caseStudy.title,
    description: caseStudy.shortDescription,
    keywords: [caseStudy.title, ...seoKeywords.caseStudies, 'Aurora Nexus'],
    alternates: { canonical: url },
    openGraph: {
      url,
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

  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    description: caseStudy.shortDescription,
    url: `${baseUrl}/case-studies/${params.slug}`,
    ...(caseStudy.image &&
      caseStudy.image.startsWith('/') &&
      caseStudy.image !== '/placeholder-project.jpg' && {
        image: `${baseUrl}${caseStudy.image}`,
      }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <CaseStudyDetailClient caseStudy={caseStudy} />
    </>
  )
}

