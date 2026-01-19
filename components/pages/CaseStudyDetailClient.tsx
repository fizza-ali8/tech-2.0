'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, CheckCircle } from 'lucide-react'
import type { CaseStudy } from '@/lib/case-studies'

const sectionFade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
}

const categoryLabels: Record<string, string> = {
  'web-development': 'Web Development',
  'app-development': 'App Development',
  'ai-solutions': 'AI Solutions',
  'cloud-devops': 'Cloud & DevOps',
  'ui-ux-design': 'UI/UX Design',
  'graphic-design': 'Graphic Design',
  'seo-optimization': 'SEO Optimization',
}

export default function CaseStudyDetailClient({
  caseStudy,
}: {
  caseStudy: CaseStudy
}) {
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
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <motion.div {...sectionFade} className="mt-8">
            <div className="flex flex-wrap gap-2 mb-5">
              {caseStudy.category.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-1.5 text-sm font-medium rounded-full bg-white/20 text-white backdrop-blur"
                >
                  {categoryLabels[cat]}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed">
              {caseStudy.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      {caseStudy.overview && (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...sectionFade} className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Project Overview
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
              </motion.div>
              <motion.div {...sectionFade} transition={{ delay: 0.1 }}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  <strong className="text-gray-900">Client Business:</strong>{' '}
                  {caseStudy.overview.clientBusiness}
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Client Need:</strong>{' '}
                  {caseStudy.overview.clientNeed}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* The Challenge */}
      {caseStudy.challenge && (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...sectionFade} className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {caseStudy.challenge.headline}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
              </motion.div>
              <div className="space-y-4">
                {caseStudy.challenge.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm"
                  >
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed pt-1">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Solution */}
      {caseStudy.solution && (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...sectionFade} className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Solution
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
              </motion.div>

              <motion.div
                {...sectionFade}
                transition={{ delay: 0.1 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.solution.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Services Involved
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.solution.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-[#004B78]/10 to-[#00A485]/10 text-[#004B78] border border-[#00A485]/20"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Key Features Implemented
                  </h3>
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.solution.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100"
                      >
                        <CheckCircle className="w-5 h-5 text-[#00A485] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Our Approach */}
      {caseStudy.approach && (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...sectionFade} className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Approach
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
              </motion.div>
              <div className="space-y-5">
                {caseStudy.approach.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 items-start p-6 sm:p-7 rounded-2xl border border-gray-100 bg-white shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center">
                        <span className="text-white font-bold text-base">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results & Impact */}
      {caseStudy.results && (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...sectionFade} className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Results & Impact
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
              </motion.div>

              {caseStudy.results.metrics && caseStudy.results.metrics.length > 0 && (
                <motion.div
                  {...sectionFade}
                  transition={{ delay: 0.1 }}
                  className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 mb-8"
                >
                  {caseStudy.results.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 rounded-2xl shadow-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-white text-center"
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#004B78] to-[#00A485] mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm sm:text-base text-gray-700 font-medium">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {caseStudy.results.qualitative &&
                caseStudy.results.qualitative.length > 0 && (
                  <motion.div
                    {...sectionFade}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    {caseStudy.results.qualitative.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100"
                      >
                        <CheckCircle className="w-5 h-5 text-[#00A485] flex-shrink-0 mt-0.5" />
                        <p className="text-base text-gray-700 leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
            </div>
          </div>
        </section>
      )}

      {/* Tools & Technologies */}
      {caseStudy.tools && caseStudy.tools.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div {...sectionFade} className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Tools & Technologies
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
              </motion.div>
              <motion.div
                {...sectionFade}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {caseStudy.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 text-sm font-medium rounded-lg bg-white border border-gray-200 text-gray-700 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                {...sectionFade}
                className="p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-white"
              >
                <div className="text-4xl sm:text-5xl text-[#00A485] mb-4">
                  &quot;
                </div>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  {caseStudy.testimonial.quote}
                </p>
                {(caseStudy.testimonial.author ||
                  caseStudy.testimonial.role ||
                  caseStudy.testimonial.company) && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {caseStudy.testimonial.author?.charAt(0) || 'C'}
                      </span>
                    </div>
                    <div>
                      {caseStudy.testimonial.author && (
                        <p className="font-semibold text-gray-900">
                          {caseStudy.testimonial.author}
                        </p>
                      )}
                      {(caseStudy.testimonial.role ||
                        caseStudy.testimonial.company) && (
                        <p className="text-sm text-gray-600">
                          {caseStudy.testimonial.role}
                          {caseStudy.testimonial.role &&
                            caseStudy.testimonial.company &&
                            ', '}
                          {caseStudy.testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            {...sectionFade}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Want Similar Results for Your Business?
          </motion.h3>
          <motion.p
            {...sectionFade}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
          >
            Let&apos;s discuss your project and create a solution that drives real
            impact for your business.
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

