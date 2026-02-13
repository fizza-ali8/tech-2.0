import type { Metadata } from 'next'
import { blogPosts, blogPostsBySlug } from '@/lib/blog'
import BlogPostClient from '@/components/pages/BlogPostClient'
import { notFound } from 'next/navigation'
import { absoluteUrl, baseUrl, seoKeywords } from '@/lib/seo'

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
  const url = `${baseUrl}/blog/${params.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.title, post.category, ...seoKeywords.blog, 'Aurora Nexus'],
    alternates: { canonical: url },
    openGraph: {
      url,
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

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    url: `${baseUrl}/blog/${params.slug}`,
    ...((post.blogImage ?? post.cardImage) && {
      image: absoluteUrl((post.blogImage ?? post.cardImage)!),
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  )
}

