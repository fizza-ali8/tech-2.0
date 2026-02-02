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
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }
  const image = post.blogImage ?? post.cardImage
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      ...(image && { images: [image] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      ...(image && { images: [image] }),
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsBySlug[params.slug]

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}

