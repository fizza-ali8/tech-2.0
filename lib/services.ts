export type Service = {
  slug: string
  title: string
  tagline: string
  shortDescription: string
  overview: string
  bullets: string[]
  // Detailed page content
  hero?: {
    headline: string
    subtext: string
  }
  keyFeatures?: {
    headline: string
    features: Array<{
      title: string
      description: string
    }>
  }
  mainDescription?: string
  approach?: {
    headline: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export const services: Service[] = [
  {
    slug: 'software-development',
    title: 'Software Development',
    tagline: 'Custom systems built to scale with your business',
    shortDescription:
      'Custom software solutions designed to optimize processes, improve efficiency, and drive measurable results.',
    overview:
      'We design and build scalable software tailored to your workflows—clean architecture, secure foundations, and performance that grows with you.',
    bullets: [
      'Custom web apps & internal tools',
      'APIs & integrations',
      'Scalable architecture & best practices',
    ],
    hero: {
      headline: 'Turning Ideas into Software Solutions',
      subtext:
        'Our software development services empower businesses to automate processes, enhance efficiency, and scale operations seamlessly, whether through custom applications or enterprise-grade systems.',
    },
    keyFeatures: {
      headline: 'Our Software Development Expertise',
      features: [
        {
          title: 'Custom Application Development',
          description:
            'Customized solutions built to match your unique business requirements.',
        },
        {
          title: 'Enterprise Software Solutions',
          description:
            'Scalable, secure, and high-performance systems for organizations of all sizes.',
        },
        {
          title: 'Integration & Automation',
          description:
            'Connect multiple platforms and automate workflows for maximum efficiency.',
        },
        {
          title: 'Maintenance & Support',
          description:
            'Continuous monitoring, updates, and technical support to keep your systems reliable.',
        },
      ],
    },
    mainDescription:
      "In today's digital world, businesses require software that is dependable, adaptable, and designed specifically for their needs. We offer end-to-end software development services, guiding projects from initial concept and design through to development and deployment. Our focus is on creating solutions that streamline operations, enhance user experiences, and drive business growth.\n\nWhether you need a web application, desktop software, or a large-scale enterprise system, our team is committed to delivering projects on time, with security and performance at the forefront.",
    approach: {
      headline: 'Our Proven Approach to Software Development',
      steps: [
        {
          title: 'Requirement Analysis & Planning',
          description: 'Understanding your business objectives and system needs.',
        },
        {
          title: 'Design & Prototyping',
          description:
            'Crafting intuitive interfaces and scalable software architecture.',
        },
        {
          title: 'Development & Testing',
          description:
            'Using modern technologies and rigorous QA to ensure reliability and security.',
        },
        {
          title: 'Deployment & Support',
          description:
            'Launching your solution seamlessly with ongoing monitoring.',
        },
        {
          title: 'Continuous Improvement',
          description:
            'Enhancing features based on feedback and evolving business needs.',
        },
      ],
    },
    faqs: [
      {
        question: 'How long does a software development project take?',
        answer:
          'Project timelines vary depending on complexity; we provide detailed schedules after requirement analysis.',
      },
      {
        question: 'Can you integrate new software with existing systems?',
        answer:
          'Yes, we specialize in seamless integrations to connect all platforms efficiently.',
      },
      {
        question: 'What technologies do you use?',
        answer:
          'We use modern frameworks and programming languages including JavaScript, Python, Java, .NET, and more.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Absolutely, we offer ongoing maintenance, updates, and technical assistance.',
      },
      {
        question: 'How do you ensure software security?',
        answer:
          'Security is embedded in every stage, including encryption, secure access controls, and regular vulnerability testing.',
      },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'Modern websites that convert and feel premium',
    shortDescription:
      'Modern, responsive, and high-performance websites styled to your brand and audience.',
    overview:
      'From landing pages to complex platforms—fast, responsive, SEO-friendly websites with delightful interactions.',
    bullets: ['Next.js websites', 'Performance & SEO', 'Responsive UI + animations'],
    hero: {
      headline: 'Building Engaging Websites That Deliver Results',
      subtext:
        'We build modern, responsive, and high-performance websites tailored to your brand and business goals. From small business sites to complex enterprise platforms, our solutions help you attract, engage, and retain customers.',
    },
    keyFeatures: {
      headline: 'Our Web Development Expertise',
      features: [
        {
          title: 'Responsive Design',
          description:
            'Websites optimized for all devices, ensuring seamless user experience.',
        },
        {
          title: 'Custom Web Applications',
          description:
            'Tailored solutions for unique business needs and workflows.',
        },
        {
          title: 'E-commerce Solutions',
          description:
            'Scalable online stores with secure payment integration.',
        },
        {
          title: 'Performance Optimization',
          description:
            'Fast-loading, SEO-friendly websites built for engagement.',
        },
        {
          title: 'Maintenance & Support',
          description:
            'Continuous monitoring and updates to keep your website running smoothly.',
        },
        {
          title: 'Content Management Systems',
          description:
            'Easy-to-use CMS solutions for seamless content updates and management.',
        },
      ],
    },
    mainDescription:
      "Your website is often the first impression your business makes, make it count. We specialize in crafting web solutions that are visually striking, highly functional and purpose-built to deliver real results. By combining the latest technologies with smart design principles and industry best practices, we create websites that perform seamlessly across devices and platforms.\n\nOur team ensures every website is fully optimized for speed, security, scalability, and an exceptional user experience, helping your business stand out and grow online, no matter the project type.",
    approach: {
      headline: 'Our Proven Web Development Process',
      steps: [
        {
          title: 'Requirement Gathering & Analysis',
          description: 'Understanding your business, audience, and website objectives.',
        },
        {
          title: 'Design & Prototyping',
          description:
            'Creating visually appealing, intuitive layouts and wireframes.',
        },
        {
          title: 'Development & Integration',
          description:
            'Building robust websites using modern technologies and integrating necessary tools or APIs.',
        },
        {
          title: 'Testing & Quality Assurance',
          description: 'Ensuring optimal performance, responsiveness, and security.',
        },
        {
          title: 'Launch & Support',
          description:
            'Deploying your website and providing ongoing maintenance and improvements.',
        },
      ],
    },
    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer:
          'Timeline depends on complexity; small sites can take a few weeks, while enterprise solutions may take several months.',
      },
      {
        question: 'Can you redesign an existing website?',
        answer:
          'Yes, we provide complete website redesigns to improve UX, performance, and conversion rates.',
      },
      {
        question: 'Do you provide e-commerce development?',
        answer:
          'Absolutely, we create scalable, secure e-commerce platforms with seamless payment integrations.',
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer:
          'Yes, all our websites are fully responsive and optimized for mobile devices.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Yes, we offer maintenance, updates, and technical support to keep your website running smoothly.',
      },
    ],
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation (Workflow & Custom RAG Chatbots)',
    tagline: 'Automate repetitive work. Make smarter decisions.',
    shortDescription:
      'AI-powered systems that automate tasks, analyze data, and improve decision-making.',
    overview:
      'We build AI automation that fits your operations—workflow automations, assistants, and RAG chatbots grounded in your data.',
    bullets: ['Custom RAG chatbots', 'Workflow automation', 'Analytics & insights'],
    hero: {
      headline: 'Artificial Intelligence That Delivers Best Results',
      subtext:
        'Leverage the power of Artificial Intelligence to automate processes, gain actionable insights, and enhance decision-making.',
    },
    keyFeatures: {
      headline: 'Our AI Expertise',
      features: [
        {
          title: 'Machine Learning Models',
          description:
            'Predictive analytics and intelligent automation for smarter decision-making.',
        },
        {
          title: 'Data Analysis & Insights',
          description:
            'Transform raw data into actionable business intelligence.',
        },
        {
          title: 'AI-Powered Applications',
          description:
            'Intelligent apps that enhance user experience and business efficiency.',
        },
        {
          title: 'Automation Solutions',
          description:
            'Streamline repetitive processes with AI-driven workflows.',
        },
        {
          title: 'AI Consultation & Strategy',
          description:
            'Tailored AI solutions aligned with your business goals.',
        },
        {
          title: 'Model Training & Fine-Tuning',
          description:
            'Custom model training and fine-tuning for domain-specific applications.',
        },
      ],
    },
    mainDescription:
      "Artificial Intelligence is transforming the way businesses operate, offering unprecedented opportunities to innovate, optimize, and grow. Our AI solutions empower companies to analyze data more intelligently, automate complex processes, and boost overall productivity. By designing scalable, secure, and tailored AI systems, we help businesses leverage technology to solve real-world challenges and achieve measurable results.\n\nFrom predictive analytics that uncover actionable insights to AI-powered applications and intelligent automation, our solutions seamlessly integrate into your existing workflows. This enables faster, data-driven decision-making and allows you to deliver superior experiences to the clients.",
    approach: {
      headline: 'Our AI Solutions Development Process',
      steps: [
        {
          title: 'Requirement Analysis & Data Assessment',
          description:
            'Understand business goals and identify datasets for AI modeling.',
        },
        {
          title: 'AI Strategy & Model Design',
          description:
            'Design machine learning models or AI frameworks tailored to your objectives.',
        },
        {
          title: 'Development & Training',
          description:
            'Build and train models using clean, structured data for optimal performance.',
        },
        {
          title: 'Testing & Validation',
          description:
            'Ensure accuracy, reliability, and alignment with business goals.',
        },
        {
          title: 'Deployment & Monitoring',
          description:
            'Integrate AI solutions into operations with continuous monitoring and improvements.',
        },
      ],
    },
    faqs: [
      {
        question: 'What type of AI solutions can you build?',
        answer:
          'We create predictive models, automation tools, AI-powered applications, and analytics platforms.',
      },
      {
        question: 'How can AI improve my business operations?',
        answer:
          'AI can automate repetitive tasks, provide actionable insights, and enhance decision-making efficiency.',
      },
      {
        question: 'Do you integrate AI with existing systems?',
        answer:
          'Yes, we ensure seamless integration with your current infrastructure and software.',
      },
      {
        question: 'Is AI implementation secure?',
        answer:
          'Absolutely, we follow industry best practices for data security and compliance.',
      },
      {
        question: 'How long does it take to deploy an AI solution?',
        answer:
          'Timelines depend on complexity and dataset availability; we provide a detailed plan during consultation.',
      },
    ],
  },
  {
    slug: 'app-development',
    title: 'App Development',
    tagline: 'Mobile experiences users love',
    shortDescription:
      'User-friendly mobile applications built for performance, scalability, and seamless experiences.',
    overview:
      'We create mobile apps with thoughtful UX and reliable performance—built for long-term maintainability.',
    bullets: ['iOS/Android apps', 'API integration', 'Performance & scalability'],
    hero: {
      headline: 'Creating Apps That Connect and Captivate',
      subtext:
        'We create high-performance, user-friendly mobile applications that deliver seamless experiences across platforms. From startups to enterprises, our apps help businesses engage users and grow their digital presence.',
    },
    keyFeatures: {
      headline: 'Our App Development Expertise',
      features: [
        {
          title: 'Cross-Platform Apps',
          description:
            'Build once, run on iOS and Android for maximum reach.',
        },
        {
          title: 'Custom Mobile Applications',
          description:
            'Tailored apps designed for your business needs.',
        },
        {
          title: 'UI/UX Design Focused',
          description:
            'Intuitive, engaging interfaces that enhance user experience.',
        },
        {
          title: 'App Maintenance & Updates',
          description:
            'Continuous support and updates to keep apps reliable.',
        },
        {
          title: 'Integration & API Development',
          description:
            'Seamless connection with third-party tools and systems.',
        },
        {
          title: 'App Store Optimization',
          description:
            'Maximize app visibility and downloads through strategic ASO techniques.',
        },
      ],
    },
    mainDescription:
      "In today's digital world, mobile applications are essential for businesses to connect, engage, and grow. Our app development services blend innovative design, advanced technology, and smooth performance to create applications that capture attention and drive meaningful action.\n\nEvery application we build is designed with security, scalability, and performance in mind, ensuring it delivers real business value. We build everything from customer-facing apps to internal business tools and enterprise platforms. Our solutions are designed to meet your needs while delivering an exceptional user experience that helps your business stand out and thrive.",
    approach: {
      headline: 'Our Proven App Development Process',
      steps: [
        {
          title: 'Discovery & Requirement Analysis',
          description: 'Understand your business goals, audience, and app objectives.',
        },
        {
          title: 'Wireframing & Design',
          description:
            'Craft intuitive, engaging UI/UX designs tailored to your brand.',
        },
        {
          title: 'Development & Integration',
          description:
            'Build high-performance mobile apps using modern frameworks.',
        },
        {
          title: 'Testing & Quality Assurance',
          description:
            'Ensure app stability, performance, and security across devices.',
        },
        {
          title: 'Deployment & Ongoing Support',
          description:
            'Launch your app and provide continuous updates and maintenance.',
        },
      ],
    },
    faqs: [
      {
        question: 'Which platforms do you develop apps for?',
        answer:
          'We build apps for iOS, Android, and cross-platform solutions.',
      },
      {
        question: 'How long does it take to develop an app?',
        answer:
          'Timeline varies depending on complexity; simple apps may take a few weeks, while enterprise apps may take several months.',
      },
      {
        question: 'Can you redesign or upgrade an existing app?',
        answer:
          'Yes, we provide redesigns and feature upgrades to improve performance and user experience.',
      },
      {
        question: 'Do you provide post-launch support?',
        answer:
          'Absolutely, we offer maintenance, updates, and bug fixes.',
      },
      {
        question: 'How do you ensure app security?',
        answer:
          'Security is implemented at every stage, including data encryption, secure coding practices, and thorough testing.',
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Design that feels intuitive and looks premium',
    shortDescription:
      'Intuitive UI/UX focused on usability, engagement, and turning ideas into impactful products.',
    overview:
      'From wireframes to polished UI—design systems and flows that improve user happiness and business outcomes.',
    bullets: ['Product strategy', 'Wireframes & prototypes', 'Design systems'],
    hero: {
      headline: 'Turning Ideas into Engaging Digital Experiences',
      subtext:
        'We craft intuitive, user-focused digital products that enhance user experience, drive engagement, and deliver measurable business results.',
    },
    keyFeatures: {
      headline: 'Our Digital Product Design Expertise',
      features: [
        {
          title: 'User-Centered Design',
          description:
            'Creating products that are intuitive and enjoyable to use.',
        },
        {
          title: 'UI/UX Design',
          description:
            'Engaging interfaces that enhance usability and interaction.',
        },
        {
          title: 'Prototyping & Wireframes',
          description:
            'Visualizing concepts before development for clarity and efficiency.',
        },
        {
          title: 'Design System & Branding',
          description:
            'Consistent design language aligned with your brand identity.',
        },
        {
          title: 'Collaboration & Iteration',
          description:
            'Continuous feedback and refinement to meet user needs.',
        },
        {
          title: 'Usability Testing & Research',
          description:
            'Data-driven design decisions through user testing and research.',
        },
      ],
    },
    mainDescription:
      "A great digital product is more than just functionality, it's about delivering experiences that users genuinely enjoy and remember. Our design process combines creativity, strategy, and usability to craft products that are visually appealing, intuitive, and effective at achieving your business goals.\n\nWe focus on solving real user problems at every stage, from wireframes to interactive prototypes, while ensuring your product is scalable, consistent, and development-ready. We create designs across all platforms, and enterprise tools that leave a lasting impression on users.",
    approach: {
      headline: 'Our Digital Product Design Process',
      steps: [
        {
          title: 'Research & Discovery',
          description: 'Understanding users, business goals, and market trends.',
        },
        {
          title: 'Wireframing & Concept Design',
          description:
            'Sketching ideas and defining the product flow.',
        },
        {
          title: 'UI/UX Design',
          description:
            'Creating intuitive, visually appealing interfaces.',
        },
        {
          title: 'Prototyping & User Testing',
          description:
            'Building interactive prototypes and gathering feedback for refinement.',
        },
        {
          title: 'Handoff & Collaboration',
          description:
            'Delivering design assets and working closely with development teams for seamless implementation.',
        },
      ],
    },
    faqs: [
      {
        question: 'What platforms do you design for?',
        answer:
          'We design for web applications, mobile apps (iOS & Android), and enterprise platforms.',
      },
      {
        question: 'Do you provide prototypes before development?',
        answer:
          'Yes, interactive prototypes are created for feedback and testing before development starts.',
      },
      {
        question: 'How do you ensure the designs meet user needs?',
        answer:
          'Through user research, testing, and iterative design processes to create user-centered solutions.',
      },
      {
        question: 'Do you provide branding & design systems?',
        answer:
          'Yes, we create consistent design languages and branding guidelines for your product.',
      },
      {
        question: 'Can you redesign existing digital products?',
        answer:
          'Absolutely, we provide redesigns to improve usability, engagement, and aesthetics.',
      },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    tagline: 'Brand visuals that stand out',
    shortDescription:
      'Creative branding and visual design including logos, identity, and marketing assets.',
    overview:
      'We craft visual assets that match your brand voice—consistent, modern, and ready for marketing at scale.',
    bullets: ['Logos & identity', 'Marketing creatives', 'Brand guidelines'],
    hero: {
      headline: 'Creative Graphic Design Solutions That Elevate Your Brand',
      subtext:
        'We craft visually compelling designs including logos and brand identities to marketing materials that help your business stand out and leave a lasting impression.',
    },
    keyFeatures: {
      headline: 'Our Graphic Design Expertise',
      features: [
        {
          title: 'Logo & Brand Identity Design',
          description:
            'Unique logos and cohesive visual identity.',
        },
        {
          title: 'Marketing & Promotional Materials',
          description:
            'Brochures, flyers, banners, social media graphics.',
        },
        {
          title: 'Digital & Web Graphics',
          description:
            'Web banners, email templates, UI illustrations.',
        },
        {
          title: 'Packaging Design',
          description:
            'Eye-catching and memorable product packaging.',
        },
        {
          title: 'Custom Illustrations',
          description:
            'Tailored visuals for storytelling and branding.',
        },
        {
          title: 'Brand Guidelines & Style Guides',
          description:
            'Comprehensive brand documentation to maintain consistency across all touchpoints.',
        },
      ],
    },
    mainDescription:
      "A strong visual identity is one of the first ways your brand makes an impression. Our graphic design services help you tell your brand story clearly, creatively, and memorably, ensuring every visual element connects with your audience.\n\nWe craft designs that are professional, innovative, and aligned with your brand, covering everything from corporate logos and digital graphics to print materials. Every piece we create is designed to resonate with your audience, strengthen your brand presence, and support your business goals, leaving a lasting impact across all touchpoints.",
    approach: {
      headline: 'Our Graphic Design Process',
      steps: [
        {
          title: 'Research & Discovery',
          description: 'Understanding your brand, audience, and goals.',
        },
        {
          title: 'Concept Development',
          description:
            'Brainstorming ideas and creating initial design concepts.',
        },
        {
          title: 'Design & Refinement',
          description:
            'Crafting final designs with feedback iterations.',
        },
        {
          title: 'Delivery & Guidelines',
          description:
            'Providing all assets and style guides for consistency.',
        },
        {
          title: 'Support & Updates',
          description:
            'Assistance with additional design needs or updates.',
        },
      ],
    },
    faqs: [
      {
        question: 'What types of graphic design services do you offer?',
        answer:
          'We offer logo design, brand identity, marketing materials, digital graphics, packaging design, and custom illustrations.',
      },
      {
        question: 'Can you design a logo from scratch?',
        answer:
          'Yes, we create unique logos from scratch tailored to your brand identity and business goals.',
      },
      {
        question: 'Do you provide branding guidelines along with the design?',
        answer:
          'Absolutely, we provide comprehensive style guides and branding guidelines to ensure consistency across all applications.',
      },
      {
        question: 'How long does a project take?',
        answer:
          'Timeline varies by project complexity; simple designs may take a few days, while comprehensive branding projects may take several weeks.',
      },
      {
        question: 'Can you create designs for both digital and print?',
        answer:
          'Yes, we design for both digital and print media, ensuring optimal quality and format for each platform.',
      },
    ],
  },
  {
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    tagline: 'Visibility that drives qualified traffic',
    shortDescription:
      'Data-driven SEO strategies to increase visibility and convert visitors into customers.',
    overview:
      'Technical + content SEO improvements that compound over time—better rankings, better traffic, better conversions.',
    bullets: ['Technical SEO', 'On-page optimization', 'Performance improvements'],
    hero: {
      headline: 'SEO Solutions That Boost Your Online Visibility',
      subtext:
        'We help businesses rank higher on search engines, attract qualified traffic, and convert visitors into customers with data-driven SEO strategies tailored to your brand.',
    },
    keyFeatures: {
      headline: 'Our SEO Expertise',
      features: [
        {
          title: 'On-Page SEO Optimization',
          description:
            'Optimizing content, meta tags, and website structure for better rankings.',
        },
        {
          title: 'Technical SEO',
          description:
            'Site speed, crawlability, indexing, and website health improvements.',
        },
        {
          title: 'Keyword Research & Strategy',
          description:
            'Targeting the right keywords to attract your audience.',
        },
        {
          title: 'Content Optimization & Marketing',
          description:
            'Creating SEO-friendly content that drives engagement.',
        },
        {
          title: 'Link Building & Off-Page SEO',
          description:
            'Boosting authority through high-quality backlinks and partnerships.',
        },
        {
          title: 'Local SEO & Google Business',
          description:
            'Optimize for local search and improve visibility in your area.',
        },
      ],
    },
    mainDescription:
      "Search engines are often the first stop for potential customers, and a strong presence there can make all the difference. Our SEO services help your website rank higher, reach the right audience, and turn visitors into loyal customers.\n\nBy combining technical expertise, in-depth keyword research, and strategic content optimization, we develop SEO strategies that deliver measurable results. Whether supporting small businesses or large enterprises, our solutions are designed to improve visibility, outperform competitors, and drive sustainable growth through search rankings.",
    approach: {
      headline: 'Our SEO Process',
      steps: [
        {
          title: 'Website Audit & Analysis',
          description: 'Reviewing your site for SEO opportunities and issues.',
        },
        {
          title: 'Keyword Research & Strategy',
          description:
            'Identifying high-value keywords for your business.',
        },
        {
          title: 'On-Page & Technical Optimization',
          description:
            'Optimizing content, site structure, and technical elements.',
        },
        {
          title: 'Content Creation & Marketing',
          description:
            'Producing SEO-friendly content to attract and engage visitors.',
        },
        {
          title: 'Monitoring & Reporting',
          description:
            'Tracking performance, making adjustments, and improving results continuously.',
        },
      ],
    },
    faqs: [
      {
        question: 'How long does it take to see SEO results?',
        answer:
          'SEO results typically begin showing within 3-6 months, with significant improvements visible over 6-12 months depending on competition and current site status.',
      },
      {
        question: 'Can you optimize an existing website for SEO?',
        answer:
          'Yes, we provide comprehensive SEO optimization for existing websites, including technical improvements and content optimization.',
      },
      {
        question: 'Do you provide monthly SEO reports?',
        answer:
          'Absolutely, we provide detailed monthly reports showing rankings, traffic, and performance metrics.',
      },
      {
        question: 'Will SEO help my website attract local customers?',
        answer:
          'Yes, we implement local SEO strategies including Google Business Profile optimization and local keyword targeting.',
      },
      {
        question: 'How do you ensure white-hat SEO practices?',
        answer:
          'We follow Google guidelines and use only ethical, white-hat SEO techniques that build sustainable, long-term results.',
      },
    ],
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    tagline: 'Secure, scalable cloud foundations',
    shortDescription:
      'Scalable and secure cloud solutions enabling seamless infrastructure management and cost-efficient growth.',
    overview:
      'Cloud architecture and operations that keep your systems fast, secure, and ready to scale.',
    bullets: ['Cloud architecture', 'Security best practices', 'Cost optimization'],
    hero: {
      headline: 'Scalable Cloud Solutions Built for Performance & Growth',
      subtext:
        'We design, migrate, and manage secure cloud infrastructures that improve agility, reduce costs, and enable seamless business scalability.',
    },
    keyFeatures: {
      headline: 'Our Cloud Services Expertise',
      features: [
        {
          title: 'Cloud Migration & Deployment',
          description:
            'Seamless transition of your systems to the cloud with minimal downtime.',
        },
        {
          title: 'Cloud Infrastructure Setup',
          description:
            'Secure, scalable environments on AWS, Azure, and Google Cloud.',
        },
        {
          title: 'Cloud Optimization & Cost Management',
          description:
            'Improve performance while reducing operational costs.',
        },
        {
          title: 'Backup & Disaster Recovery',
          description:
            'Reliable data protection and business continuity solutions.',
        },
        {
          title: 'Cloud Security & Compliance',
          description:
            'Protect your infrastructure with industry best practices.',
        },
        {
          title: 'Cloud Cost Optimization',
          description:
            'Reduce cloud spending while maintaining performance and scalability.',
        },
      ],
    },
    mainDescription:
      "The cloud has transformed the way businesses operate, offering unmatched flexibility, scalability, and reliability. Our cloud services help organizations move faster, scale effortlessly, and operate more efficiently by leveraging modern cloud technologies.\n\nFrom cloud migration and infrastructure setup to optimization and security, we design solutions that align with your business goals. Whether you are moving from on-premise systems or optimizing an existing cloud environment, our team ensures a smooth, secure, and cost-effective transition. We help you build cloud infrastructures that are future-ready, high-performing, and built to support long-term growth.",
    approach: {
      headline: 'Our Cloud Implementation Process',
      steps: [
        {
          title: 'Assessment & Strategy',
          description: 'Understand your current infrastructure and business goals.',
        },
        {
          title: 'Cloud Architecture Design',
          description:
            'Design scalable and secure cloud environments.',
        },
        {
          title: 'Migration & Deployment',
          description:
            'Migrate applications and data with minimal disruption.',
        },
        {
          title: 'Optimization & Security Setup',
          description:
            'Improve performance and apply security best practices.',
        },
        {
          title: 'Monitoring & Support',
          description:
            'Continuous monitoring, maintenance, and optimization.',
        },
      ],
    },
    faqs: [
      {
        question: 'Which cloud platforms do you work with?',
        answer:
          'We work with AWS, Microsoft Azure, Google Cloud, and hybrid cloud environments.',
      },
      {
        question: 'Can you migrate our existing systems to the cloud?',
        answer:
          'Yes, we handle full cloud migrations including applications, databases, and infrastructure.',
      },
      {
        question: 'Is cloud secure for business data?',
        answer:
          'Absolutely. We implement strong security practices, encryption, and compliance standards.',
      },
      {
        question: 'Will cloud reduce our IT costs?',
        answer:
          'Yes, cloud optimization helps reduce infrastructure, maintenance, and operational costs.',
      },
      {
        question: 'Do you provide ongoing cloud support?',
        answer:
          'Yes, we offer monitoring, maintenance, and continuous optimization services.',
      },
    ],
  },
  {
    slug: 'devops',
    title: 'DevOps',
    tagline: 'Faster delivery. More reliability.',
    shortDescription:
      'End-to-end DevOps to streamline development, automate deployments, and improve reliability.',
    overview:
      'We set up CI/CD, observability, and reliable deployment processes so teams ship confidently.',
    bullets: ['CI/CD pipelines', 'Monitoring & observability', 'Infrastructure as code'],
    hero: {
      headline: 'DevOps Solutions That Accelerate Delivery & Improve Reliability',
      subtext:
        'We streamline development, automate deployments, and optimize workflows to help you deliver high-quality software faster and more reliably.',
    },
    keyFeatures: {
      headline: 'Our DevOps Expertise',
      features: [
        {
          title: 'CI/CD Pipeline Setup',
          description:
            'Automated build, test, and deployment pipelines.',
        },
        {
          title: 'Infrastructure as Code (IaC)',
          description:
            'Scalable infrastructure using Terraform, CloudFormation, etc.',
        },
        {
          title: 'Automation & Monitoring',
          description:
            'Automated workflows with real-time performance monitoring.',
        },
        {
          title: 'Containerization & Orchestration',
          description:
            'Docker & Kubernetes implementation.',
        },
        {
          title: 'DevOps Consulting & Strategy',
          description:
            'Tailored DevOps solutions aligned with your development goals.',
        },
        {
          title: 'Performance Monitoring & Analytics',
          description:
            'Real-time monitoring and analytics to ensure optimal system performance.',
        },
      ],
    },
    mainDescription:
      "DevOps bridges the gap between development and operations, enabling faster releases, better collaboration, and more stable systems. Our DevOps services are designed to automate processes, eliminate bottlenecks, and ensure smooth, reliable software delivery.\n\nWe help businesses implement CI/CD pipelines, infrastructure automation, monitoring systems, and containerized environments that improve efficiency and reduce errors. Whether you are building new systems or optimizing existing workflows, our DevOps solutions enable your teams to move faster, deploy confidently, and scale effortlessly.",
    approach: {
      headline: 'Our DevOps Implementation Process',
      steps: [
        {
          title: 'Assessment & Workflow Analysis',
          description: 'Review your current development and deployment process.',
        },
        {
          title: 'DevOps Strategy & Tool Selection',
          description:
            'Choose the right tools and frameworks.',
        },
        {
          title: 'Pipeline & Automation Setup',
          description:
            'Build CI/CD pipelines and automate workflows.',
        },
        {
          title: 'Infrastructure & Containerization',
          description:
            'Implement scalable infrastructure and containers.',
        },
        {
          title: 'Monitoring & Optimization',
          description:
            'Continuous performance tracking and improvement.',
        },
      ],
    },
    faqs: [
      {
        question: 'What is DevOps and why do I need it?',
        answer:
          'DevOps improves collaboration between teams and speeds up software delivery while reducing errors.',
      },
      {
        question: 'Do you work with existing development teams?',
        answer:
          'Yes, we integrate seamlessly with your current developers and workflows.',
      },
      {
        question: 'Which tools do you use for DevOps?',
        answer:
          'We work with Jenkins, GitHub Actions, Docker, Kubernetes, Terraform, AWS DevOps tools, and more.',
      },
      {
        question: 'Can DevOps improve software quality?',
        answer:
          'Absolutely. Automated testing and monitoring help catch issues early.',
      },
      {
        question: 'Is DevOps suitable for small businesses?',
        answer:
          'Yes, DevOps benefits startups, SMEs, and enterprises alike.',
      },
    ],
  },
]

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
)


