'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, User, Mail } from 'lucide-react'
import {
  blogPosts,
  blogCategories,
  categoryLabels,
  getFilteredPosts,
  getFeaturedPost,
  formatDate,
  type BlogCategory,
} from '@/lib/blog'
import { supabase } from '@/lib/supabase'
import { sectionFadeIn, imageScaleIn, buttonFadeIn, cardFadeInUp, transitions, getStaggerDelay, staggerContainer, staggerItem } from '@/lib/animations'

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('all')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const filteredPosts = getFilteredPosts(selectedCategory)
  const featuredPost = getFeaturedPost()

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({
        email: email.trim().toLowerCase(),
      })
      if (error) {
        if (error.code === '23505') {
          alert('This email is already subscribed.')
        } else throw error
      } else {
        alert('Thank you for subscribing!')
        setEmail('')
      }
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28">
          <motion.h1
            {...sectionFadeIn}
            className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center"
          >
            Insights, Ideas &{' '}
            <span className="bg-white/20 px-2 rounded-md">Innovation</span>
          </motion.h1>
          <motion.p
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center leading-relaxed"
          >
            Explore expert articles, guides, and insights on software development,
            AI, cloud, DevOps, design, and digital growth to help your business
            stay ahead in a fast-changing digital world.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div {...sectionFadeIn} className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Knowledge That Drives Smarter Decisions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mb-6" />
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our blog is a resource hub for business leaders, entrepreneurs, and
              tech enthusiasts. We share practical insights, industry trends, and
              expert perspectives on building digital products, leveraging AI,
              optimizing cloud infrastructure, improving DevOps workflows, and
              growing your online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...sectionFadeIn} className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Featured Article
              </h3>
            </motion.div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div
                {...cardFadeInUp}
                transition={{ ...transitions.smooth, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {featuredPost.cardImage ? (
                    <motion.div 
                      {...imageScaleIn}
                      className="w-full h-64 md:h-full overflow-hidden relative"
                    >
                      <Image
                        src={featuredPost.cardImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        quality={85}
                      />
                    </motion.div>
                  ) : (
                    <div className="w-full h-64 md:h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-2xl font-bold">AI</span>
                        </div>
                        <p className="text-sm text-gray-600">Featured Article</p>
                      </div>
                    </div>
                  )}
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[#004B78]/10 to-[#00A485]/10 text-[#004B78] w-fit mb-4">
                      {categoryLabels[featuredPost.category]}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[#00A485] font-semibold hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFadeIn}
            className="flex flex-wrap gap-3 justify-center"
          >
            {blogCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-gradient-to-r from-[#004B78] to-[#00A485] text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#00A485] hover:text-[#00A485]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <motion.div
                    variants={staggerItem}
                    transition={{ ...transitions.smooth, delay: getStaggerDelay(index, 0.08) }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  >
                    {/* Post Image */}
                    {post.cardImage ? (
                      <motion.div 
                        {...imageScaleIn}
                        transition={{ ...transitions.smooth, delay: getStaggerDelay(index, 0.08) + 0.1 }}
                        className="w-full h-48 overflow-hidden relative"
                      >
                        <Image
                          src={post.cardImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                          quality={85}
                        />
                      </motion.div>
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center mx-auto mb-2">
                            <span className="text-white text-sm font-bold">
                              {categoryLabels[post.category].charAt(0)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">
                            {categoryLabels[post.category]}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Post Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[#004B78]/10 to-[#00A485]/10 text-[#004B78] w-fit mb-3">
                        {categoryLabels[post.category]}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-[#00A485] font-semibold text-sm hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFadeIn}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Tech Trends
            </h3>
            <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, cloud, DevOps, design, and digital
              growth delivered straight to your inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-5 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-sm"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                {...buttonFadeIn}
                whileHover={!isSubmitting ? { scale: 1.05 } : undefined}
                whileTap={!isSubmitting ? { scale: 0.95 } : undefined}
                className="px-6 py-3 bg-gradient-to-r from-[#004B78] to-[#00A485] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            {...sectionFadeIn}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Turn Ideas into Action
          </motion.h3>
          <motion.p
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
          >
            Ready to apply these insights to your business? Let&apos;s build a
            solution that delivers real impact.
          </motion.p>
          <motion.a
            {...buttonFadeIn}
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

