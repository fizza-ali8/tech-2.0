import CaseStudiesPageClient from '@/components/pages/CaseStudiesPageClient'
import { caseStudies } from '@/lib/case-studies'

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient caseStudies={caseStudies} />
}

