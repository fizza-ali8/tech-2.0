'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { CaseStudy, CaseStudyCategory } from '@/lib/case-studies'
import { categories, getFilteredCaseStudies } from '@/lib/case-studies'

const sectionFade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
}

export default function CaseStudiesPageClient({
  caseStudies,
}: {
  caseStudies: CaseStudy[]
}) {
  const [selectedCategory, setSelectedCategory] = useState<CaseStudyCategory>('all')
  const filteredStudies = getFilteredCaseStudies(selectedCategory)

  const categoryLabels: Record<CaseStudyCategory, string> = {
    all: 'All',
    'web-development': 'Web Development',
    'app-development': 'App Development',
    'ai-solutions': 'AI Solutions',
    'cloud-devops': 'Cloud & DevOps',
    'ui-ux-design': 'UI/UX Design',
    'graphic-design': 'Graphic Design',
    'seo-optimization': 'SEO Optimization',
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
          <motion.h1
            {...sectionFade}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center"
          >
            Our Work. Real{' '}
            <span className="bg-white/20 px-2 rounded-md">Results.</span>
          </motion.h1>
          <motion.p
            {...sectionFade}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center leading-relaxed"
          >
            Explore how we&apos;ve helped businesses transform ideas into powerful
            digital solutions through innovation, strategy, and technology.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFade}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projects That Drive Growth & Innovation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mb-6" />
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
              Every project we deliver is driven by strategy, creativity, and a deep
              understanding of business needs. From AI-powered solutions and scalable
              cloud platforms to engaging websites and mobile apps, our work reflects
              our commitment to quality, performance, and measurable results.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We partner with startups, SMEs, and enterprises to build solutions that
              solve real problems, improve efficiency, and create lasting value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sm:py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFade}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
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

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredStudies.map((project, index) => (
              <Link href={`/case-studies/${project.slug}`} key={project.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <ExternalLink className="w-12 h-12 text-[#00A485] mx-auto mb-2" />
                      <p className="text-sm text-gray-600 font-medium">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[#004B78]/10 to-[#00A485]/10 text-[#004B78]"
                        >
                          {categoryLabels[cat]}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#00A485] font-semibold text-sm hover:gap-3 transition-all">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
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
            Ready to Build Your Success Story?
          </motion.h3>
          <motion.p
            {...sectionFade}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
          >
            Let&apos;s discuss your idea and create a solution that drives real
            impact for your business.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-[#004B78] rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Talk to Our Experts
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  )
}

