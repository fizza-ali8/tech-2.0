'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, CheckCircle } from 'lucide-react'
import type { Service } from '@/lib/services'
import FAQAccordion from '@/components/services/FAQAccordion'
import { getServiceMedia } from '@/lib/media'
import { sectionFadeIn, buttonFadeIn, cardFadeInUp, transitions } from '@/lib/animations'

export default function ServiceDetailClient({ service }: { service: Service }) {
  const media = getServiceMedia(service.slug)

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#004B78] to-[#00A485] text-white min-h-[60vh] flex items-center">
        {/* Video Background */}
        {media?.animation && (
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectFit: 'cover' }}
            >
              <source src={media.animation} type="video/mp4" />
            </video>
            {/* Overlay to dull the video and make text prominent */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            {/* Additional gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#004B78]/50 to-[#00A485]/50 z-10"></div>
          </div>
        )}
        
        {/* Fallback Pattern Background */}
        {!media?.animation && (
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M46 44v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM46 8V0h-4v8h-8v4h8v8h4V12h8V8h-8zM8 44v-8H4v8H0v4h4v8h4v-8h8v-4H8zM8 8V0H4v8H0v4h4v8h4V12h8V8H8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        )}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <motion.h1
            {...sectionFadeIn}
            className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center"
          >
            {service.hero?.headline || service.title}
          </motion.h1>
          <motion.p
            {...sectionFadeIn}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center leading-relaxed"
          >
            {service.hero?.subtext || service.tagline}
          </motion.p>
        </div>
      </section>

      {/* Key Features */}
      {service.keyFeatures && (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...sectionFadeIn}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {service.keyFeatures.headline}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mt-4" />
            </motion.div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {service.keyFeatures.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  {...sectionFadeIn}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 sm:p-7 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center mb-5">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Description */}
      {service.mainDescription && (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...sectionFadeIn}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Overview
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mt-4" />
            </motion.div>
            <div className="max-w-4xl mx-auto">
              {service.mainDescription.split('\n\n').map((para, i) => (
                <motion.p
                  key={i}
                  {...sectionFadeIn}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Approach */}
      {service.approach && (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...sectionFadeIn}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                {service.approach.headline}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mt-4" />
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-4">
              {service.approach.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  {...sectionFadeIn}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4 items-start p-6 sm:p-7 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-lg"
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
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...sectionFadeIn}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mt-4" />
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            {...sectionFadeIn}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Start Your Project Today
          </motion.h3>
          <motion.p
            {...sectionFadeIn}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
          >
            Ready to transform your business with our solutions? Let's discuss your project.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-[#004B78] rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  )
}


