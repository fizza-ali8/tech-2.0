export type CaseStudyCategory =
  | 'all'
  | 'web-development'
  | 'app-development'
  | 'ai-solutions'
  | 'cloud-devops'
  | 'ui-ux-design'
  | 'graphic-design'
  | 'seo-optimization'

export type CaseStudy = {
  slug: string
  title: string
  category: CaseStudyCategory[]
  tagline: string
  shortDescription: string
  image: string // URL or placeholder
  // Individual page content
  overview?: {
    clientBusiness: string
    clientNeed: string
  }
  challenge?: {
    headline: string
    points: string[]
  }
  solution?: {
    technologies: string[]
    services: string[]
    features: string[]
  }
  approach?: {
    steps: { title: string; description: string }[]
  }
  results?: {
    metrics?: { label: string; value: string }[]
    qualitative?: string[]
  }
  tools?: string[]
  testimonial?: {
    quote: string
    author?: string
    role?: string
    company?: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ecommerce-web-platform',
    title: 'E-Commerce Web Platform',
    category: ['web-development', 'ui-ux-design'],
    tagline: 'A modern, high-performance e-commerce platform',
    shortDescription:
      'A modern, high-performance e-commerce platform built to increase conversions and user engagement.',
    image: '/placeholder-project.jpg',
    overview: {
      clientBusiness:
        'A growing retail business looking to expand their online presence and reach a wider customer base.',
      clientNeed:
        'The client needed a scalable e-commerce platform that could handle high traffic, provide excellent user experience, and integrate with multiple payment gateways and inventory management systems.',
    },
    challenge: {
      headline: 'The Challenge',
      points: [
        'Outdated platform with poor user experience',
        'Slow load times affecting conversions',
        'Limited payment and shipping options',
        'Poor mobile responsiveness',
        'Difficulty managing inventory and orders',
      ],
    },
    solution: {
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
      services: ['Web Development', 'UI/UX Design', 'SEO Optimization'],
      features: [
        'Responsive design for all devices',
        'Fast-loading pages with optimized performance',
        'Multiple payment gateway integrations',
        'Real-time inventory management',
        'Advanced search and filtering',
        'Secure checkout process',
      ],
    },
    approach: {
      steps: [
        {
          title: 'Discovery & Requirement Analysis',
          description: 'Analyzed business goals, user needs, and technical requirements.',
        },
        {
          title: 'Strategy & Planning',
          description:
            'Created a detailed project plan with milestones and technology stack decisions.',
        },
        {
          title: 'Design & Prototyping',
          description:
            'Designed intuitive UI/UX with wireframes and interactive prototypes for user testing.',
        },
        {
          title: 'Development & Integration',
          description:
            'Built the platform with modern technologies and integrated payment and inventory systems.',
        },
        {
          title: 'Testing & Deployment',
          description:
            'Rigorous testing across devices and browsers, followed by smooth deployment and launch.',
        },
      ],
    },
    results: {
      metrics: [
        { label: 'Conversion Rate', value: '+45%' },
        { label: 'Page Load Time', value: '-60%' },
        { label: 'Mobile Traffic', value: '+80%' },
        { label: 'User Engagement', value: '+55%' },
      ],
      qualitative: [
        'Improved user experience across all devices',
        'Faster checkout process reducing cart abandonment',
        'Better inventory management and order processing',
      ],
    },
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Vercel'],
    testimonial: {
      quote:
        'The team delivered beyond our expectations. The solution improved our operations and customer experience significantly.',
      author: 'Sarah Johnson',
      role: 'CEO',
      company: 'Retail Solutions Inc.',
    },
  },
  {
    slug: 'ai-powered-customer-support-bot',
    title: 'AI-Powered Customer Support Bot',
    category: ['ai-solutions'],
    tagline: 'An intelligent chatbot solution',
    shortDescription:
      'An intelligent chatbot solution that automated customer queries and reduced response time by 60%.',
    image: '/placeholder-project.jpg',
    overview: {
      clientBusiness:
        'A mid-size SaaS company with growing customer base requiring 24/7 support.',
      clientNeed:
        'The client needed an AI-powered chatbot to handle common customer queries, reduce support ticket volume, and provide instant responses to improve customer satisfaction.',
    },
    challenge: {
      headline: 'The Challenge',
      points: [
        'High volume of repetitive customer queries',
        'Delayed response times affecting customer satisfaction',
        'Limited support staff available 24/7',
        'Need for consistent and accurate responses',
        'Integration with existing support systems',
      ],
    },
    solution: {
      technologies: ['Python', 'OpenAI GPT', 'RAG Architecture', 'FastAPI', 'PostgreSQL'],
      services: ['AI Automation', 'Custom RAG Chatbot', 'Integration Services'],
      features: [
        'Natural language processing for understanding queries',
        'RAG-based knowledge system for accurate responses',
        'Multi-language support',
        'Seamless integration with support ticketing system',
        'Analytics dashboard for monitoring performance',
        'Escalation to human agents when needed',
      ],
    },
    approach: {
      steps: [
        {
          title: 'Requirement Analysis & Data Assessment',
          description:
            'Analyzed customer queries, support patterns, and existing knowledge base.',
        },
        {
          title: 'AI Strategy & Model Design',
          description:
            'Designed RAG architecture with custom knowledge embeddings and response generation.',
        },
        {
          title: 'Development & Training',
          description:
            'Built the chatbot system and trained it on company-specific data and FAQs.',
        },
        {
          title: 'Testing & Validation',
          description:
            'Tested accuracy, response quality, and integration with support systems.',
        },
        {
          title: 'Deployment & Monitoring',
          description:
            'Deployed the solution and set up continuous monitoring and improvement processes.',
        },
      ],
    },
    results: {
      metrics: [
        { label: 'Response Time', value: '-60%' },
        { label: 'Ticket Volume', value: '-45%' },
        { label: 'Customer Satisfaction', value: '+35%' },
        { label: 'Resolution Rate', value: '+50%' },
      ],
      qualitative: [
        'Instant responses to common queries',
        'Reduced workload on support staff',
        'Improved customer experience with 24/7 availability',
      ],
    },
    tools: ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Vector Database', 'Docker'],
    testimonial: {
      quote:
        'The AI chatbot transformed our customer support. We can now handle more queries faster, and our customers love the instant responses.',
      author: 'Michael Chen',
      role: 'Head of Customer Success',
      company: 'Tech Solutions Ltd.',
    },
  },
]

export const categories: { value: CaseStudyCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'app-development', label: 'App Development' },
  { value: 'ai-solutions', label: 'AI Solutions' },
  { value: 'cloud-devops', label: 'Cloud & DevOps' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'graphic-design', label: 'Graphic Design' },
  { value: 'seo-optimization', label: 'SEO Optimization' },
]

// Helper function to filter case studies
export function getFilteredCaseStudies(category: CaseStudyCategory): CaseStudy[] {
  if (category === 'all') {
    return caseStudies
  }
  return caseStudies.filter((study) => study.category.includes(category))
}

// Helper function to get case study by slug
export const caseStudiesBySlug: Record<string, CaseStudy> = caseStudies.reduce(
  (acc, study) => {
    acc[study.slug] = study
    return acc
  },
  {} as Record<string, CaseStudy>
)

