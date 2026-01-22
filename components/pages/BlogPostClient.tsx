'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, Calendar, Clock, User, CheckCircle } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'
import { categoryLabels, formatDate, getPopularPosts } from '@/lib/blog'

const sectionFade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const popularPosts = getPopularPosts(3)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M46 44v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM46 8V0h-4v8h-8v4h8v8h4V12h8V8h-8zM8 44v-8H4v8H0v4h4v8h4v-8h8v-4H8zM8 8V0H4v8H0v4h4v8h4V12h8V8H8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <motion.div {...sectionFade} className="mt-8 max-w-4xl">
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-white/20 text-white backdrop-blur mb-5">
              {categoryLabels[post.category]}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <motion.article {...sectionFade} className="prose prose-lg max-w-none">
                {/* Introduction */}
                {post.content?.introduction && (
                  <div className="mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {post.content.introduction}
                    </p>
                  </div>
                )}

                {/* Sections */}
                {post.content?.sections.map((section, index) => (
                  <div key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        {section.heading}
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                        {section.content}
                      </p>
                      {section.bullets && section.bullets.length > 0 && (
                        <div className="space-y-3 mt-4">
                          {section.bullets.map((bullet, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#00A485] flex-shrink-0 mt-0.5" />
                              <p className="text-base text-gray-700">{bullet}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                    {/* Blog Image with animation after section */}
                    {section.imageAfter && post.blogImage && (
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="mb-8 rounded-xl overflow-hidden shadow-lg relative w-full h-auto"
                      >
                        <Image
                          src={post.blogImage}
                          alt={post.title}
                          width={1200}
                          height={600}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                          quality={85}
                        />
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Conclusion */}
                {post.content?.conclusion && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Conclusion
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {post.content.conclusion}
                    </p>
                  </motion.div>
                )}

                {/* CTA in Article */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#004B78] to-[#00A485] text-white text-center"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    Need Help Implementing This in Your Business?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Our experts can help you apply these insights to achieve real
                    results.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#004B78] rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <motion.div
                  {...sectionFade}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-6"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Categories
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(categoryLabels)
                      .filter(([key]) => key !== 'all')
                      .map(([key, label]) => (
                        <Link
                          key={key}
                          href={`/blog?category=${key}`}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-white border border-gray-200 text-gray-700 hover:border-[#00A485] hover:text-[#00A485] transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                  </div>
                </motion.div>

                {/* Popular Posts */}
                <motion.div
                  {...sectionFade}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-6"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Popular Posts
                  </h4>
                  <div className="space-y-4">
                    {popularPosts.map((popularPost) => (
                      <Link
                        key={popularPost.slug}
                        href={`/blog/${popularPost.slug}`}
                        className="block group"
                      >
                        <h5 className="text-sm font-semibold text-gray-900 group-hover:text-[#00A485] transition-colors line-clamp-2">
                          {popularPost.title}
                        </h5>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(popularPost.date)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            {...sectionFade}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Turn Ideas into Action
          </motion.h3>
          <motion.p
            {...sectionFade}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
          >
            Ready to apply these insights to your business? Let&apos;s build a
            solution that delivers real impact.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-[#004B78] rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  )
}

