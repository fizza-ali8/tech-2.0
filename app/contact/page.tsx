'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import { services } from '@/lib/services'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { sectionFadeIn, buttonFadeIn, cardFadeInUp, transitions, getStaggerDelay, staggerContainer, staggerItem } from '@/lib/animations'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: formData.name,
        company: formData.company || null,
        email: formData.email,
        phone: formData.phone || null,
        service: formData.service || null,
        message: formData.message,
        source: 'contact',
      })
      if (error) throw error
      alert('Thank you! We will contact you soon.')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const whyPoints = [
    'Expert Team in AI, Cloud, DevOps & Design',
    'Transparent Communication',
    'Tailored Solutions, Not Templates',
    'On-Time Delivery & Ongoing Support',
    'Business-Focused Approach',
  ]

  return (
    <main>
      {/* Hero Section */}
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
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28">
          <motion.h1
            {...sectionFadeIn}
            className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center px-1"
          >
            Let&apos;s Build Something{' '}
            <span className="bg-white/20 px-2 rounded-md">Great Together</span>
          </motion.h1>
          <motion.p
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center leading-relaxed"
          >
            Have an idea, project, or challenge in mind? Our team is ready to help
            you turn your vision into a powerful digital solution. Let&apos;s talk.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              We&apos;re Here to Help
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-1 sm:px-0">
              Whether you&apos;re looking to build a new product, optimize existing
              systems, or explore AI, cloud, or design solutions, our experts are
              ready to guide you. Tell us about your goals and we&apos;ll show you how
              we can help achieve them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form - touch-friendly inputs on mobile */}
            <div className="lg:col-span-2">
              <motion.div
                {...cardFadeInUp}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-8"
              >
                <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-5 sm:mb-6">
                  Request a Free Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 min-h-[48px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-base sm:text-sm transition-all touch-manipulation"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 min-h-[48px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-base sm:text-sm transition-all touch-manipulation"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 min-h-[48px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-base sm:text-sm transition-all touch-manipulation"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 min-h-[48px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-base sm:text-sm transition-all touch-manipulation"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 min-h-[48px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-base sm:text-sm text-gray-700 transition-all appearance-none cursor-pointer bg-white touch-manipulation"
                    >
                      <option value="">Select a Service</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Project Description / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-base sm:text-sm resize-none transition-all touch-manipulation min-h-[120px]"
                      placeholder="Tell us about your project, goals, or any specific requirements..."
                      required
                    />
                  </div>

                  <motion.button
                    {...buttonFadeIn}
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 min-h-[52px] bg-gradient-to-r from-[#004B78] to-[#00A485] text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                {...cardFadeInUp}
                transition={{ ...transitions.smooth, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-1">
                        Email
                      </h5>
                      <a
                        href="mailto:contact@auroranexus.io"
                        className="text-sm text-[#00A485] hover:underline break-all"
                      >
                        contact@auroranexus.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-1">
                        Phone
                      </h5>
                      <a
                        href="tel:+923408110022"
                        className="text-sm text-[#00A485] hover:underline"
                      >
                        +92 34 08 11 00 22
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-1">
                        Address
                      </h5>
                      <div className="text-sm text-gray-600">
                        <p>Innovista Rawal, Avenue Mall, DHA-1, Rawalpindi</p>
                        <p className="mt-1">102, MDR, Executive Block, Faisal Hills, Islamabad</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-1">
                        Working Hours
                      </h5>
                      <p className="text-sm text-gray-600">
                        Monday – Friday
                        <br />
                        9:00 PM – 6:00 AM PST
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Why Contact Us */}
              <motion.div
                {...cardFadeInUp}
                transition={{ ...transitions.smooth, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Why Work With Us?
                </h4>
                <div className="space-y-4">
                  {whyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#00A485] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - shorter iframes on mobile */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            {...sectionFadeIn}
            className="text-center mb-6 sm:mb-12"
          >
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Find Us Here
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Rawalpindi Location */}
            <motion.div
              {...cardFadeInUp}
              transition={{ ...transitions.smooth, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="bg-gradient-to-br from-[#004B78] to-[#00A485] p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-white">Rawalpindi Office</h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1">Innovista Rawal, Avenue Mall, DHA-1</p>
              </div>
              <div className="w-full h-56 sm:h-72 md:h-80">
                <iframe
                  src="https://www.google.com/maps?q=Innovista+Rawal,+Avenue+Mall,+DHA-1,+Rawalpindi&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aurora Nexus - Rawalpindi Office"
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Islamabad Location */}
            <motion.div
              {...cardFadeInUp}
              transition={{ ...transitions.smooth, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="bg-gradient-to-br from-[#004B78] to-[#00A485] p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-white">Islamabad Office</h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1">102, MDR, Executive Block, Faisal Hills</p>
              </div>
              <div className="w-full h-56 sm:h-72 md:h-80">
                <iframe
                  src="https://www.google.com/maps?q=102,+MDR,+Executive+Block,+Faisal+Hills,+Islamabad&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aurora Nexus - Islamabad Office"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#004B78] to-[#00A485] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            {...sectionFadeIn}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Get Started?
          </motion.h3>
          <motion.p
            {...sectionFadeIn}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto"
          >
            Let&apos;s discuss your idea and explore how our technology solutions
            can help you grow.
          </motion.p>
          <motion.a
            {...buttonFadeIn}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] md:px-8 md:py-4 bg-white text-[#004B78] rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation"
          >
            Talk to Our Experts
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </main>
  )
}

