'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/services'
import { ServiceIcon } from '@/components/services/ServiceIcon'
import { getServiceMedia } from '@/lib/media'
import { sectionFadeIn, imageScaleIn, buttonFadeIn, cardFadeInUp, transitions, getStaggerDelay, staggerContainer, staggerItem } from '@/lib/animations'

export default function ServicesPageClient({ services }: { services: Service[] }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.14'%3E%3Cpath d='M46 44v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM46 8V0h-4v8h-8v4h8v8h4V12h8V8h-8zM8 44v-8H4v8H0v4h4v8h4v-8h8v-4H8zM8 8V0H4v8H0v4h4v8h4V12h8V8H8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-18 md:py-24 text-center">
          <motion.h1
            {...sectionFadeIn}
            className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Services That Drive{' '}
            <span className="bg-white/20 px-2 rounded-md">Digital Growth</span>
          </motion.h1>
          <motion.p
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            End-to-end technology solutions—built with quality, consistency, and
            the Aurora Nexus theme.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div {...sectionFadeIn} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              All Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              Explore each service to see what we deliver and how it helps your
              business.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mt-4" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((s, idx) => (
              <motion.div
                key={s.slug}
                variants={staggerItem}
                transition={{ ...transitions.smooth, delay: getStaggerDelay(idx, 0.08) }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {(() => {
                  const media = getServiceMedia(s.slug)
                  return media?.image ? (
                    <motion.div 
                      {...imageScaleIn}
                      transition={{ ...transitions.smooth, delay: getStaggerDelay(idx, 0.08) + 0.1 }}
                      className="relative h-48 overflow-hidden"
                    >
                      <Image
                        src={media.image}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center shadow-lg">
                          <ServiceIcon slug={s.slug} className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                })()}
                <div className="p-6 sm:p-7">
                  {(() => {
                    const media = getServiceMedia(s.slug)
                    if (!media?.image) {
                      return (
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center">
                            <ServiceIcon slug={s.slug} className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                        </div>
                      )
                    }
                    return null
                  })()}

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {s.shortDescription}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base"
                      style={{ color: '#00A485' }}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485]" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.3 }}
            className="mt-10 sm:mt-14 md:mt-16 text-center"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 px-4">
              Ready to start? Let&apos;s build your next product.
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-white rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78]"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}


