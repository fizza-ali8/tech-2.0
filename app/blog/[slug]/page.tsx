import type { Metadata } from 'next'
import { blogPosts, blogPostsBySlug } from '@/lib/blog'
import BlogPostClient from '@/components/pages/BlogPostClient'
import { notFound } from 'next/navigation'

type BlogPostPageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPostsBySlug[params.slug]
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }
  return {
    title: `${post.title} | Aurora Nexus Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsBySlug[params.slug]

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}

