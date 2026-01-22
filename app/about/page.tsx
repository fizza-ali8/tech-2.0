'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Shield,
  Target,
  Award,
  Users,
  Lock,
  GaugeCircle,
  ChevronRight,
} from 'lucide-react'
import { services } from '@/lib/services'
import { sectionFadeIn, buttonFadeIn, cardFadeInUp, transitions, getStaggerDelay, staggerContainer, staggerItem } from '@/lib/animations'

export default function AboutPage() {

  const reasons = [
    { icon: Users, title: 'Client-Centric Approach', description: 'Solutions designed to meet your unique needs.' },
    { icon: Target, title: 'Innovative Technology', description: 'Leveraging latest tools and frameworks.' },
    { icon: Lock, title: 'Scalable & Secure Systems', description: 'Built for growth and long-term reliability.' },
    { icon: Award, title: 'Experienced Team', description: 'Skilled developers, designers, and strategists.' },
    { icon: GaugeCircle, title: 'Proven Track Record', description: 'Delivered projects across multiple industries.' },
    { icon: Shield, title: 'Dedicated Support', description: 'Ongoing maintenance and support to ensure your success.' },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M46 44v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM46 8V0h-4v8h-8v4h8v8h4V12h8V8h-8zM8 44v-8H4v8H0v4h4v8h4v-8h8v-4H8zM8 8V0H4v8H0v4h4v8h4V12h8V8H8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
          <motion.h1
            {...sectionFadeIn}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center"
          >
            Transforming Ideas Into{' '}
            <span className="bg-white/20 px-2 rounded-md">
              Scalable Digital Solutions
            </span>
          </motion.h1>
          <motion.p
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center leading-relaxed"
          >
            At Aurora Nexus, we help businesses leverage technology to solve
            complex challenges, streamline operations, and drive growth. From
            innovative software and web applications to AI-powered systems, we
            create solutions that make a powerful impact.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFade}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              {...cardFadeInUp}
              transition={{ ...transitions.smooth, delay: 0.05 }}
              className="p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#00A485]" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative digital solutions that are
                efficient, secure, and scalable, enabling them to grow with
                confidence in a digital-first world.
              </p>
            </motion.div>

            <motion.div
              {...cardFadeInUp}
              transition={{ ...transitions.smooth, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#00A485]" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a leading IT solutions provider recognized for creativity,
                quality, and measurable impact on every project we deliver.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFade}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              We specialize in building robust digital products end-to-end.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mt-4" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
              <ul className="space-y-3 sm:space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={service.slug}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-gradient-to-r hover:from-[#004B78]/5 hover:to-[#00A485]/5 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#004B78] to-[#00A485] flex-shrink-0" />
                        <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#00A485] transition-colors">
                          {service.title}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#00A485] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFade}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                {...sectionFade}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center mb-4">
                  <r.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {r.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {r.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            {...sectionFade}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Start Your Project Today
          </motion.h3>
          <motion.p
            {...sectionFade}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
          >
            Let&apos;s build something impactful together — efficient, secure, and ready to scale.
          </motion.p>
          <motion.a
            {...buttonFadeIn}
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


