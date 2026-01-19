'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'

export default function Blogs() {
  const blogs = [
    {
      title: 'The Future of AI in Business Automation',
      excerpt:
        'Discover how AI automation is transforming business operations and driving efficiency across industries.',
      date: 'March 15, 2024',
      category: 'AI & Automation',
      readTime: '5 min read',
    },
    {
      title: 'Best Practices for Cloud Migration',
      excerpt:
        'Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud.',
      date: 'March 10, 2024',
      category: 'Cloud Services',
      readTime: '7 min read',
    },
    {
      title: 'UI/UX Design Trends for 2024',
      excerpt:
        'Explore the latest design trends that are shaping user experiences in digital products this year.',
      date: 'March 5, 2024',
      category: 'Design',
      readTime: '6 min read',
    },
  ]

  return (
    <section
      id="blog"
      className="section-spacing bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 px-4">
            Stay Updated with{' '}
            <span className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent">
              Tech Trends & Insights
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed">
            Get practical tips on software development, digital transformation,
            and IT innovation.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: 'easeOut'
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
              }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{blog.category}</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#00A485] transition-colors">
                {blog.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {blog.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{blog.date}</span>
                </div>
                <span>{blog.readTime}</span>
              </div>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold group-hover:gap-3 transition-all"
                style={{ color: '#00A485' }}
                whileHover={{ x: 5 }}
              >
                Read More
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="/blog"
            whileHover={{ 
              scale: 1.08, 
              y: -4,
              boxShadow: '0 20px 40px rgba(0, 164, 133, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 text-white rounded-xl font-bold text-lg md:text-xl shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78]"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00A485] to-[#004B78] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10">View All Blogs</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

