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
  {
    slug: 'future-generative-ai-everyday-business',
    title: 'The Future of Generative AI in Everyday Business',
    category: 'ai-automation',
    excerpt:
      'Generative AI has moved far beyond being a buzzword. Discover how it\'s transforming how businesses operate, communicate, and grow in everyday operations.',
    date: '2025-01-20',
    author: 'Aurora Nexus Team',
    readTime: '10 min read',
    featured: false,
    content: {
      introduction:
        'Generative AI has moved far beyond being a buzzword or experimental technology. What started as tools for generating text or images has evolved into intelligent systems that are actively transforming how businesses operate, communicate, and grow. Today, generative AI is becoming an everyday business capability; quietly embedded into workflows, decision-making, and customer experiences.',
      sections: [
        {
          heading: 'From Innovation to Business Essential',
          content:
            'In its early stages, generative AI was primarily used for content creation like drafting emails, generating marketing copy, or producing visuals. These use cases are still valuable but businesses are now realizing that the real power of generative AI lies in automation, augmentation, and intelligence.',
          bullets: [
            'Analyze large volumes of data in seconds',
            'Generate insights and recommendations',
            'Assist teams in real-time decision-making',
            'Adapt outputs based on context and user behavior',
          ],
        },
        {
          heading: 'How Generative AI Is Shaping Everyday Business Operations',
          content:
            'Generative AI is already influencing multiple areas of daily business activity, often behind the scenes.',
        },
        {
          heading: 'Smarter Customer Experiences',
          content:
            'AI-powered chatbots and virtual assistants are becoming more conversational, context-aware, and personalized. Instead of scripted responses, businesses can now offer dynamic interactions that understand customer intent, history, and preferences, leading to faster resolutions and improved satisfaction.',
        },
        {
          heading: 'Enhanced Productivity Across Teams',
          content:
            'From generating reports to summarizing meetings and drafting proposals, generative AI reduces repetitive work. Employees can focus more on strategic thinking and creative problem-solving, while AI handles routine tasks efficiently.',
        },
        {
          heading: 'Data-Driven Decision Making',
          content:
            'Generative AI can process complex datasets and generate clear insights in natural language. Business leaders no longer need to rely solely on dashboards or analysts; AI can explain trends, forecast outcomes, and suggest next steps in a way that\'s easy to understand.',
        },
        {
          heading: 'Marketing and Sales Optimization',
          content:
            'Personalized campaigns, dynamic content, and predictive customer insights are becoming standard. Generative AI helps businesses tailor messaging at scale while maintaining relevance and consistency across channels.',
        },
        {
          heading: 'The Rise of AI-Augmented Workflows',
          content:
            'The future of generative AI is deeply connected to AI-augmented workflows. Rather than operating as standalone tools, AI systems are being integrated directly into business platforms: CRMs, project management tools, design software, and development environments.',
          bullets: [
            'Automate multi-step processes',
            'Reduce operational friction',
            'Improve collaboration between teams',
            'Maintain consistency across outputs',
          ],
        },
        {
          heading: 'Trust, Ethics, and Responsible Adoption',
          content:
            'As generative AI becomes more powerful, businesses must also address challenges related to data privacy, transparency, and ethical use. The future will favor organizations that adopt AI responsibly ensuring human oversight, protecting sensitive data, and using AI to support, not manipulate, users.',
        },
        {
          heading: 'What the Future Holds',
          content:
            'Looking ahead, generative AI will continue to evolve in three key ways:',
          bullets: [
            'More personalization: AI systems will adapt more precisely to individual users and business contexts.',
            'Greater autonomy: AI will handle more complex tasks with minimal human input, while still allowing control and review.',
            'Deeper integration: AI will become a natural part of business ecosystems, not an external add-on.',
          ],
        },
      ],
      conclusion:
        'The future of generative AI in everyday business is not about dramatic disruption—it\'s about continuous improvement. Companies that embrace AI as a strategic partner can unlock higher efficiency, better experiences, and smarter decision-making. As technology continues to evolve, the question is no longer if businesses should adopt generative AI, but how thoughtfully and effectively they choose to do so.',
    },
  },
  {
    slug: 'cloud-migration-best-practices-2026',
    title: 'Cloud Migration Best Practices for 2026: A Step-by-Step Guide',
    category: 'cloud-computing',
    excerpt:
      'Learn the essential strategies and step-by-step approach for successfully migrating your infrastructure to the cloud in 2026.',
    date: '2025-01-18',
    author: 'Aurora Nexus Team',
    readTime: '12 min read',
    featured: false,
    content: {
      introduction:
        'Cloud migration is no longer just a technology upgrade—it has become a strategic move for businesses aiming to improve scalability, security, and operational efficiency. As cloud technologies mature and business demands evolve, cloud migration in 2026 looks very different from what it did a few years ago.',
      sections: [
        {
          heading: 'Why Cloud Migration Matters More Than Ever',
          content:
            'Businesses today operate in an environment that demands speed, flexibility, and resilience. Legacy systems often struggle to keep up with modern workloads, remote teams, and data-driven decision-making.',
          bullets: [
            'Scale resources on demand',
            'Improve system reliability and uptime',
            'Enhance data security and compliance',
            'Reduce infrastructure maintenance overhead',
            'Support modern application development',
          ],
        },
        {
          heading: 'Step 1: Define Clear Migration Goals',
          content:
            'Before starting any cloud migration, businesses must clearly understand why they are migrating.',
          bullets: [
            'Reducing operational costs',
            'Improving performance and scalability',
            'Enhancing security and compliance',
            'Supporting digital transformation initiatives',
          ],
        },
        {
          heading: 'Step 2: Assess Your Current Infrastructure',
          content:
            'A detailed assessment of existing systems is critical. This step involves identifying applications, data, dependencies, and performance requirements.',
          bullets: [
            'Which applications are cloud-ready',
            'Which systems require modernization',
            'Data sensitivity and compliance needs',
            'Performance and latency requirements',
          ],
        },
        {
          heading: 'Step 3: Choose the Right Cloud Strategy',
          content:
            'In 2026, cloud migration is rarely a one-size-fits-all approach. Businesses now commonly adopt hybrid or multi-cloud strategies to balance flexibility, cost, and control.',
          bullets: [
            'Rehosting (lift and shift)',
            'Refactoring applications for cloud-native performance',
            'Replatforming with minimal changes',
            'Retiring or replacing legacy systems',
          ],
        },
        {
          heading: 'Step 4: Prioritize Security and Compliance from Day One',
          content:
            'Security is a top concern in modern cloud environments. Instead of treating security as an afterthought, businesses must embed it into every stage of migration.',
          bullets: [
            'Implementing identity and access management (IAM)',
            'Encrypting data at rest and in transit',
            'Applying zero-trust security principles',
            'Ensuring compliance with industry regulations',
          ],
        },
        {
          heading: 'Step 5: Plan for Data Migration and Integrity',
          content:
            'Data is one of the most valuable assets in a business. Migrating it safely and accurately is critical to maintaining operations and trust.',
          bullets: [
            'Data cleansing before migration',
            'Validating data integrity post-migration',
            'Minimizing downtime through phased transfers',
            'Implementing backup and recovery strategies',
          ],
        },
        {
          heading: 'Step 6: Modernize Applications Where Possible',
          content:
            'Cloud migration in 2026 is increasingly focused on modernization, not just relocation. Businesses that take advantage of cloud-native services gain better performance, scalability, and long-term value.',
          bullets: [
            'Adopting microservices architectures',
            'Using containerization and orchestration',
            'Leveraging serverless computing',
            'Integrating AI and analytics services',
          ],
        },
        {
          heading: 'Step 7: Test, Optimize, and Monitor Continuously',
          content:
            'Migration does not end once systems go live. Continuous monitoring and optimization are essential to control costs and maintain performance.',
          bullets: [
            'Performance testing under real workloads',
            'Cost optimization and resource scaling',
            'Monitoring security and compliance metrics',
            'Gathering user feedback',
          ],
        },
      ],
      conclusion:
        'Cloud migration in 2026 is about building a foundation for long-term growth, innovation, and resilience. By following a structured, step-by-step approach and focusing on security, modernization, and optimization, businesses can unlock the full potential of the cloud. The right strategy today sets the stage for smarter, more agile operations tomorrow.',
    },
  },
  {
    slug: 'ai-native-development-why-you-should-care',
    title: 'What Is AI-Native Development & Why You Should Care',
    category: 'ai-automation',
    excerpt:
      'Discover how AI-native development is reshaping software creation, where AI is not just a feature but the foundation of how applications are built and evolved.',
    date: '2025-01-15',
    author: 'Aurora Nexus Team',
    readTime: '9 min read',
    featured: false,
    content: {
      introduction:
        'Artificial intelligence is no longer something that gets added to software as an afterthought. A new approach is emerging; one where AI is not just a feature, but a core part of how software is designed, built, and evolved. This approach is known as AI-native development.',
      sections: [
        {
          heading: 'Understanding AI-Native Development',
          content:
            'AI-native development refers to building software with AI at its foundation, rather than integrating AI into an already existing system. In AI-native applications, intelligence is embedded into the architecture, workflows, and decision-making processes from the very beginning.',
          bullets: [
            'Learn from data over time',
            'Adapt to user behavior and changing conditions',
            'Generate insights, content, or actions dynamically',
            'Improve performance without constant manual updates',
          ],
        },
        {
          heading: 'How AI-Native Development Differs from Traditional Software',
          content:
            'Traditional software development focuses on predefined rules and predictable outcomes. AI-native development, on the other hand, embraces uncertainty and learning.',
          bullets: [
            'Data-driven logic instead of hard-coded rules',
            'Continuous learning rather than static releases',
            'Adaptive user experiences instead of fixed interfaces',
            'Automation of decisions, not just processes',
          ],
        },
        {
          heading: 'Why AI-Native Development Is Gaining Momentum',
          content:
            'The rapid growth of data, cloud computing, and generative AI has made AI-native development more accessible and practical than ever before.',
          bullets: [
            'Demand for real-time insights and automation',
            'Advancements in machine learning and large language models',
            'Cloud-native infrastructure enabling scalable AI workloads',
            'Growing need for personalized digital experiences',
          ],
        },
        {
          heading: 'Real-World Use Cases of AI-Native Applications',
          content:
            'AI-native development is already shaping products across industries. In business platforms, AI-native systems can automatically analyze data and recommend actions. In customer-facing applications, they can personalize experiences based on behavior and preferences. In internal tools, they can assist teams by generating reports, optimizing workflows, and predicting outcomes.',
        },
        {
          heading: 'Benefits for Businesses and Development Teams',
          content:
            'Adopting an AI-native approach offers clear advantages.',
          bullets: [
            'Faster innovation and adaptability',
            'Smarter decision-making powered by real-time data',
            'Improved customer experiences through personalization',
            'Reduced operational overhead through automation',
            'More flexible architectures',
            'Less reliance on rigid logic',
            'Faster iteration and continuous improvement',
            'Better alignment between product behavior and user needs',
          ],
        },
        {
          heading: 'Challenges to Consider',
          content:
            'While AI-native development offers significant benefits, it also introduces new challenges. Data quality, model transparency, security, and ethical considerations must be addressed from the start.',
          bullets: [
            'Strong data governance',
            'Clear human oversight',
            'Responsible use of AI-generated outputs',
            'Ongoing monitoring and refinement',
          ],
        },
      ],
      conclusion:
        'AI-native development is more than a trend, it\'s a fundamental shift in how software is created and experienced. By designing systems that learn, adapt, and improve over time, businesses can unlock new levels of efficiency, innovation, and value. As AI continues to evolve, AI-native development will become a defining factor in successful digital transformation.',
    },
  },
  {
    slug: 'ux-ui-design-trends-boost-conversion-rates',
    title: 'UX/UI Design Trends That Boost Conversion Rates',
    category: 'ui-ux-design',
    excerpt:
      'Discover the modern UX/UI design trends that directly impact conversion rates, from simplicity and visual hierarchy to personalization and trust-centered design.',
    date: '2025-01-12',
    author: 'Aurora Nexus Team',
    readTime: '8 min read',
    featured: false,
    content: {
      introduction:
        'Great design is about how effectively it guides users to take action. In today\'s competitive digital landscape, UX/UI design plays a direct role in conversion rates, influencing whether users stay, engage, or leave.',
      sections: [
        {
          heading: 'Why UX/UI Design Directly Impacts Conversions',
          content:
            'Every interaction a user has with a website or application shapes their perception of the brand. Poor navigation, confusing layouts, or slow interfaces create friction, while intuitive and thoughtful design builds trust and confidence.',
          bullets: [
            'Reduces user effort',
            'Guides attention to key actions',
            'Builds credibility and trust',
            'Makes decision-making easier',
          ],
        },
        {
          heading: 'Key UX/UI Design Trends Driving Higher Conversions',
          content:
            'Modern UX/UI trends focus on clarity, speed, and emotional connection.',
        },
        {
          heading: 'Simplicity and Focused Layouts',
          content:
            'Minimalist design continues to dominate; not because it looks clean, but because it works. By removing unnecessary elements, designers can guide users toward primary actions such as sign-ups, inquiries, or purchases.',
        },
        {
          heading: 'Clear Visual Hierarchy',
          content:
            'Strong visual hierarchy ensures that the most important information stands out immediately. Strategic use of spacing, typography, and contrast helps users scan content quickly and understand priorities.',
        },
        {
          heading: 'Microinteractions and Subtle Animations',
          content:
            'Thoughtful motion design enhances usability without overwhelming users. "Microinteractions" such as button hover states, form feedback, or loading indicators, provide reassurance and make interfaces feel responsive.',
        },
        {
          heading: 'Mobile-First and Responsive Experiences',
          content:
            'With most users accessing digital products on mobile devices, mobile-first design is no longer optional. Interfaces optimized for smaller screens improve readability, navigation, and usability.',
        },
        {
          heading: 'Personalized User Experiences',
          content:
            'Personalization is becoming a powerful conversion driver. UX/UI design now adapts based on user behavior, preferences, or location, creating more relevant experiences.',
        },
        {
          heading: 'Trust-Centered Design Elements',
          content:
            'Users are more cautious than ever. Design elements that build trust—such as clear messaging, transparent pricing, testimonials, security indicators, and consistent branding—play a crucial role in conversions.',
        },
        {
          heading: 'Frictionless Forms and User Flows',
          content:
            'Long, complex forms are a major conversion killer. Modern UX design focuses on simplifying forms, reducing required fields, and providing clear feedback.',
        },
        {
          heading: 'Accessibility-Driven Design',
          content:
            'Accessible design is not just inclusive, it\'s effective. Clear contrast, readable typography, intuitive navigation, and keyboard-friendly interactions improve usability for all users.',
        },
        {
          heading: 'The Role of Data in UX/UI Decisions',
          content:
            'Design trends are most effective when backed by data. Analytics, user testing, and behavior tracking help identify friction points and opportunities for improvement.',
        },
      ],
      conclusion:
        'UX/UI design is a strategic tool, not just a visual layer. The right design choices can significantly influence how users interact with a product and whether they choose to convert. By adopting modern UX/UI trends focused on clarity, personalization, and usability, businesses can create experiences that not only look good but deliver real results.',
    },
  },
  {
    slug: 'content-seo-mistakes-killing-traffic',
    title: 'Content SEO Mistakes That Are Killing Your Traffic',
    category: 'seo-marketing',
    excerpt:
      'Learn about the most common content SEO mistakes that are hurting your traffic in 2026 and discover how to fix them to improve your search rankings.',
    date: '2025-01-10',
    author: 'Aurora Nexus Team',
    readTime: '11 min read',
    featured: false,
    content: {
      introduction:
        'In the world of digital marketing, creating great content is only half the battle. Your content could never reach the audience it deserves if it isn\'t search engine optimized. In 2026, SEO has become more sophisticated, and small mistakes can have a major impact on your traffic.',
      sections: [
        {
          heading: '1. Ignoring Keyword Intent',
          content:
            'Keyword research isn\'t just about finding popular search terms, it\'s about understanding the intent behind the query. Many websites target keywords without considering whether users are looking for information, comparison, or to make a purchase.',
          bullets: [
            'Informational intent → detailed guides or how-tos',
            'Transactional intent → product pages, reviews, or comparisons',
            'Navigational intent → landing pages or service pages',
          ],
        },
        {
          heading: '2. Overstuffing Keywords',
          content:
            'Keyword stuffing is outdated and can harm your rankings. Excessive repetition of keywords makes content unreadable and may trigger search engine penalties.',
          bullets: [
            'Use keywords naturally and contextually',
            'Focus on related terms (LSI keywords)',
            'Use semantic variations of your main keyword',
            'Write for humans first, search engines second',
          ],
        },
        {
          heading: '3. Neglecting Meta Titles and Descriptions',
          content:
            'Your meta title and description are often the first thing users see in search results. Generic or missing meta tags reduce click-through rates and limit your traffic potential.',
          bullets: [
            'Write compelling meta titles that include the target keyword',
            'Keep meta descriptions concise (150–160 characters) and engaging',
            'Clearly communicate the value of your content',
          ],
        },
        {
          heading: '4. Thin or Low-Quality Content',
          content:
            'Short, superficial content may not satisfy search intent or provide value. Google prioritizes in-depth, authoritative content that answers users\' questions comprehensively.',
          bullets: [
            'Create long-form content when appropriate, covering topics thoroughly',
            'Include visuals, examples, and real-life data to enhance credibility',
            'Break content into sections with headings for readability',
          ],
        },
        {
          heading: '5. Ignoring Internal Linking',
          content:
            'Internal links help search engines understand the structure of your website and distribute ranking power across pages. Many websites fail to link related content, missing an opportunity to improve SEO and user engagement.',
          bullets: [
            'Link relevant pages naturally within your content',
            'Use descriptive anchor text that indicates the linked page\'s topic',
            'Maintain a logical hierarchy to support crawlability',
          ],
        },
        {
          heading: '6. Poor Mobile Optimization',
          content:
            'With over half of web traffic coming from mobile devices, content that isn\'t mobile-friendly suffers in both rankings and user engagement.',
          bullets: [
            'Use responsive design for all devices',
            'Optimize images and videos for faster loading',
            'Ensure text is readable without zooming',
          ],
        },
        {
          heading: '7. Ignoring Content Updates',
          content:
            'Even high-performing content can lose traffic over time if it becomes outdated. Search engines favor fresh, relevant content that meets current user needs.',
          bullets: [
            'Regularly review and update older posts',
            'Refresh statistics, examples, and links',
            'Add new insights or expand content where necessary',
          ],
        },
        {
          heading: '8. Skipping Analytics and Performance Tracking',
          content:
            'Many websites create content without tracking its performance. Without data, you won\'t know which content drives traffic or conversions, making it impossible to optimize effectively.',
          bullets: [
            'Use tools like Google Analytics and Search Console',
            'Track traffic, engagement, bounce rate, and conversions',
            'Adjust your content strategy based on what works',
          ],
        },
      ],
      conclusion:
        'Content SEO mistakes are often subtle but can have a big impact on traffic. By addressing keyword intent, optimizing meta tags, creating high-quality content, and tracking performance, you can recover lost traffic and improve visibility. The key is to think like your audience, focus on value, and continually optimize. In 2026, successful content is strategically built to be found, read, and acted upon.',
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

