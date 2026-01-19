export type BlogCategory =
  | 'all'
  | 'ai-automation'
  | 'cloud-computing'
  | 'devops-infrastructure'
  | 'web-development'
  | 'app-development'
  | 'ui-ux-design'
  | 'graphic-design'
  | 'seo-marketing'
  | 'business-strategy'

export type BlogPost = {
  slug: string
  title: string
  category: BlogCategory
  excerpt: string
  date: string
  author: string
  readTime: string
  featured?: boolean
  image?: string
  cardImage?: string // Image for blog card on listing page
  blogImage?: string // Image for blog post content page
  // Individual post content
  content?: {
    introduction: string
    sections: {
      heading: string
      content: string
      bullets?: string[]
      imageAfter?: boolean // If true, show blogImage after this section
    }[]
    conclusion: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-ai-automation-transforming-business-2025',
    title: 'How AI Automation is Transforming Business Operations in 2025',
    category: 'ai-automation',
    excerpt:
      'Discover how intelligent workflows, RAG chatbots, and machine learning are helping businesses reduce costs, improve efficiency, and scale faster.',
    date: '2025-01-05',
    author: 'Aurora Nexus Team',
    readTime: '8 min read',
    featured: true,
    cardImage: '/media/blogs/AI Automation Transforming Business Operations_card.jpg',
    blogImage: '/media/blogs/AI Automation is Transforming Business Operations_blog.jpg',
    content: {
      introduction:
        'Artificial Intelligence is no longer a futuristic concept—it\'s a present-day reality transforming how businesses operate. From automating repetitive tasks to enabling data-driven decisions, AI automation is revolutionizing industries across the globe.',
      sections: [
        {
          heading: 'What is AI Automation?',
          content:
            'AI automation combines artificial intelligence with process automation to create intelligent systems that can learn, adapt, and make decisions. Unlike traditional automation, AI-powered systems can handle complex tasks, understand context, and improve over time.',
          bullets: [
            'Machine learning algorithms that improve with data',
            'Natural language processing for human-like interactions',
            'Predictive analytics for proactive decision-making',
            'Intelligent workflow automation',
          ],
        },
        {
          heading: 'Key Benefits for Businesses',
          content:
            'Organizations implementing AI automation are seeing significant improvements across multiple areas:',
          bullets: [
            'Cost reduction through automated processes',
            'Improved accuracy and reduced human error',
            'Faster processing and response times',
            'Enhanced customer experience',
            'Scalability without proportional cost increase',
          ],
          imageAfter: true, // Show blogImage after this section
        },
        {
          heading: 'Real-World Applications',
          content:
            'AI automation is being applied across various business functions:',
          bullets: [
            'Customer support with AI chatbots and RAG systems',
            'Sales automation and lead qualification',
            'HR processes like resume screening',
            'Financial analysis and fraud detection',
            'Supply chain optimization',
          ],
        },
        {
          heading: 'Getting Started with AI Automation',
          content:
            'To successfully implement AI automation, businesses should start by identifying repetitive, time-consuming processes that could benefit from automation. Begin with a pilot project, measure results, and scale gradually.',
        },
      ],
      conclusion:
        'AI automation is not just about replacing manual work—it\'s about augmenting human capabilities and enabling businesses to focus on what matters most. The organizations that embrace AI today will be the leaders of tomorrow.',
    },
  },
  {
    slug: 'building-scalable-cloud-infrastructure',
    title: 'Building Scalable Cloud Infrastructure for Growing Businesses',
    category: 'cloud-computing',
    excerpt:
      'Learn how cloud-native architectures enable flexibility, security, and rapid growth for modern businesses.',
    date: '2025-01-03',
    author: 'Aurora Nexus Team',
    readTime: '7 min read',
    cardImage: '/media/blogs/Scalable Cloud Infrastructure_card.jpg',
    blogImage: '/media/blogs/Scalable Cloud Infrastructure_blog.jpg',
    content: {
      introduction:
        'As businesses grow, their infrastructure needs evolve. Cloud computing offers the flexibility and scalability that modern organizations need to adapt quickly and compete effectively.',
      sections: [
        {
          heading: 'Why Cloud Infrastructure Matters',
          content:
            'Traditional on-premise infrastructure requires significant upfront investment and ongoing maintenance. Cloud infrastructure offers a pay-as-you-go model that scales with your business needs.',
          bullets: [
            'No large capital expenditure required',
            'Scale resources up or down instantly',
            'Access to enterprise-grade security',
            'Global availability and redundancy',
          ],
          imageAfter: true, // Show blogImage after this section
        },
        {
          heading: 'Choosing the Right Cloud Platform',
          content:
            'The three major cloud providers—AWS, Azure, and Google Cloud—each have their strengths. AWS offers the most comprehensive services, Azure integrates well with Microsoft products, and Google Cloud excels in data analytics and machine learning.',
        },
        {
          heading: 'Best Practices for Cloud Architecture',
          content:
            'Building a robust cloud infrastructure requires following proven practices:',
          bullets: [
            'Design for failure and redundancy',
            'Implement proper security controls',
            'Use infrastructure as code',
            'Monitor and optimize continuously',
            'Plan for disaster recovery',
          ],
        },
      ],
      conclusion:
        'Cloud infrastructure is the foundation for digital transformation. By adopting cloud-native practices, businesses can achieve the agility and scalability needed to thrive in today\'s competitive landscape.',
    },
  },
]

export const blogCategories: { value: BlogCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'ai-automation', label: 'AI & Automation' },
  { value: 'cloud-computing', label: 'Cloud Computing' },
  { value: 'devops-infrastructure', label: 'DevOps & Infrastructure' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'app-development', label: 'App Development' },
  { value: 'ui-ux-design', label: 'UI/UX & Product Design' },
  { value: 'graphic-design', label: 'Graphic Design & Branding' },
  { value: 'seo-marketing', label: 'SEO & Digital Marketing' },
  { value: 'business-strategy', label: 'Business & Strategy' },
]

export const categoryLabels: Record<BlogCategory, string> = {
  all: 'All',
  'ai-automation': 'AI & Automation',
  'cloud-computing': 'Cloud Computing',
  'devops-infrastructure': 'DevOps & Infrastructure',
  'web-development': 'Web Development',
  'app-development': 'App Development',
  'ui-ux-design': 'UI/UX & Product Design',
  'graphic-design': 'Graphic Design & Branding',
  'seo-marketing': 'SEO & Digital Marketing',
  'business-strategy': 'Business & Strategy',
}

// Helper function to filter blog posts
export function getFilteredPosts(category: BlogCategory): BlogPost[] {
  if (category === 'all') {
    return blogPosts
  }
  return blogPosts.filter((post) => post.category === category)
}

// Helper function to get featured post
export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured)
}

// Helper function to get popular posts
export function getPopularPosts(limit: number = 3): BlogPost[] {
  return blogPosts.slice(0, limit)
}

// Helper function to get blog post by slug
export const blogPostsBySlug: Record<string, BlogPost> = blogPosts.reduce(
  (acc, post) => {
    acc[post.slug] = post
    return acc
  },
  {} as Record<string, BlogPost>
)

// Helper to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

