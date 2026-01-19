'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Send } from 'lucide-react'
import { services } from '@/lib/services'
import { useState } from 'react'

export default function ServiceSidebar({ currentSlug }: { currentSlug: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <aside className="space-y-8">
      {/* All Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-5 h-5 text-[#00A485]" />
          <h3 className="text-xl font-bold text-gray-900">All Services</h3>
        </div>
        <div className="space-y-1">
          {services.map((service) => {
            const isActive = service.slug === currentSlug
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 group ${
                  isActive
                    ? 'bg-gradient-to-r from-[#004B78] to-[#00A485] text-white shadow-md'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="font-medium text-sm">{service.title}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}
                />
              </Link>
            )
          })}
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center gap-2 mb-5">
          <Sparkles className="w-5 h-5 text-[#00A485]" />
          <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-sm transition-all"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-sm transition-all"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-sm transition-all"
          />
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-sm text-gray-700 transition-all appearance-none cursor-pointer"
            required
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Type Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A485] focus:border-transparent text-sm resize-none transition-all"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-[#004B78] to-[#00A485] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            SUBMIT NOW
            <Send className="w-4 h-4" />
          </motion.button>
        </form>
      </motion.div>
    </aside>
  )
}

