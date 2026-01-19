'use client'

import {
  Brain,
  Cloud,
  Code,
  Globe,
  Palette,
  Search,
  Settings,
  Smartphone,
  Image as ImageIcon,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  'software-development': Code,
  'web-development': Globe,
  'ai-automation': Brain,
  'app-development': Smartphone,
  'ui-ux-design': Palette,
  'graphic-design': ImageIcon,
  'seo-optimization': Search,
  'cloud-services': Cloud,
  devops: Settings,
}

export function ServiceIcon({
  slug,
  className,
}: {
  slug: string
  className?: string
}) {
  const Icon = iconMap[slug] ?? Code
  return <Icon className={className} />
}


