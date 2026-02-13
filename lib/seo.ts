
export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://auroranexus.tech'

/** Central SEO keywords: use in metadata.keywords for consistency and best coverage. */
export const seoKeywords = {
  default: [
    'software development',
    'web development',
    'AI solutions',
    'digital products',
    'technology consulting',
    'custom software development',
    'app development',
    'cloud services',
    'DevOps',
    'UI UX design',
    'Aurora Nexus',
  ],
  about: [
    'about Aurora Nexus',
    'tech company',
    'digital transformation',
    'software development company',
    'innovation',
    'mission vision',
    'technology with purpose',
  ],
  services: [
    'software development services',
    'web development company',
    'AI automation',
    'mobile app development',
    'UI UX design services',
    'cloud solutions',
    'DevOps services',
    'SEO optimization',
    'graphic design',
  ],
  blog: [
    'tech blog',
    'software development insights',
    'AI automation',
    'cloud computing',
    'DevOps',
    'digital transformation',
    'business technology',
    'tech trends',
  ],
  caseStudies: [
    'case studies',
    'portfolio',
    'software projects',
    'digital solutions',
    'client success',
    'e-commerce development',
    'AI implementation',
  ],
  contact: [
    'contact Aurora Nexus',
    'get a quote',
    'software project inquiry',
    'digital solution consultation',
    'free consultation',
  ],
  team: [
    'Aurora Nexus team',
    'developers',
    'designers',
    'tech team',
    'software experts',
  ],
} as const

export function absoluteUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${p}`
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Aurora Nexus',
    url: baseUrl,
    logo: absoluteUrl('/media/BestItSolution_home.jpg'),
    description:
      'Transforming ideas into powerful digital products. We create future-ready software, websites, and AI solutions.',
    sameAs: [
      'https://www.facebook.com/people/Aurora-Nexus/61577659396600/',
      'https://www.linkedin.com/company/aurora-nexus-pvt-ltd',
      'https://www.instagram.com/auroranexus.io/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: absoluteUrl('/contact'),
    },
  }
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aurora Nexus',
    url: baseUrl,
    description:
      'Transforming ideas into powerful digital products. We create future-ready software, websites, and AI solutions.',
    publisher: { '@id': `${baseUrl}/#organization` },
    inLanguage: 'en-US',
  }
}

export function buildArticleJsonLd(params: {
  title: string
  description: string
  date: string
  author: string
  image?: string
  url: string
}) {
  const { title, description, date, author, image, url } = params
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    author: { '@type': 'Organization', name: author },
    url,
    ...(image && { image: image.startsWith('http') ? image : absoluteUrl(image) }),
  }
}

export function buildCaseStudyJsonLd(params: {
  title: string
  description: string
  image?: string
  url: string
}) {
  const { title, description, image, url } = params
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    ...(image && image.startsWith('/') && { image: absoluteUrl(image) }),
  }
}
