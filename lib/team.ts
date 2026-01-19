export type TeamMember = {
  name: string
  role: string
  expertise: string
  image?: string
  social?: {
    linkedin?: string
    github?: string
    email?: string
  }
  isLeadership?: boolean
}

export type TeamValue = {
  title: string
  description: string
  icon: string // Icon name from lucide-react
}

export const leadershipTeam: TeamMember[] = [
  {
    name: 'Umair Sultan',
    role: 'Principal Director | Group CEO',
    expertise: 'Strategic leadership and business growth with expertise in digital transformation.',
    isLeadership: true,
    social: {
      linkedin: '#',
      email: 'umair@auroranexus.io',
    },
  },
  {
    name: 'Faisal Ismail',
    role: 'Operations Manager',
    expertise: 'Operations and process management with focus on efficiency and growth.',
    isLeadership: true,
    social: {
      linkedin: '#',
      email: 'faisal@auroranexus.io',
    },
  },
]

export const coreTeam: TeamMember[] = [
  {
    name: 'Hassaan Ur Rasheed',
    role: 'AI Engineer | Backend Developer',
    expertise: 'Expert in AI solutions, RAG chatbots, machine learning models, and backend development.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Fizza Ali',
    role: 'Frontend Developer',
    expertise: 'Creates modern, responsive user interfaces and frontend experiences.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Muhammad Aasim',
    role: 'Business Development Associate',
    expertise: 'Business development and client relations with focus on growth and partnerships.',
    social: {
      linkedin: '#',
      email: 'aasim@auroranexus.io',
    },
  },
  {
    name: 'Syeda Wajiha Batool',
    role: 'Graphic Designer',
    expertise: 'Creates brand identities, marketing visuals, and creative design assets.',
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'Nimra Arshad',
    role: 'Virtual Assistant',
    expertise: 'Administrative support and coordination to ensure smooth operations.',
    social: {
      linkedin: '#',
      email: 'nimra@auroranexus.io',
    },
  },
]

export const teamValues: TeamValue[] = [
  {
    title: 'Innovation First',
    description: 'We constantly explore new technologies and creative approaches.',
    icon: 'Lightbulb',
  },
  {
    title: 'Client-Focused',
    description: 'Your success is our priority in every decision we make.',
    icon: 'Users',
  },
  {
    title: 'Quality-Driven',
    description: 'We never compromise on performance, security, or usability.',
    icon: 'Award',
  },
  {
    title: 'Collaboration',
    description: 'We believe the best solutions are built together.',
    icon: 'UserPlus',
  },
  {
    title: 'Continuous Learning',
    description: 'Our team stays ahead through learning and experimentation.',
    icon: 'GraduationCap',
  },
  {
    title: 'Transparency',
    description: 'Open communication and honest feedback in everything we do.',
    icon: 'Eye',
  },
]

