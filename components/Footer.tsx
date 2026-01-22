'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import { footerFadeIn, transitions, getStaggerDelay, staggerContainer, staggerItem } from '@/lib/animations'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Process', href: '/#process' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  // Service names mapped to their slugs
  const services = [
    { name: 'Software Development', slug: 'software-development' },
    { name: 'Web Development', slug: 'web-development' },
    { name: 'AI Automation', slug: 'ai-automation' },
    { name: 'App Development', slug: 'app-development' },
    { name: 'UI/UX Design', slug: 'ui-ux-design' },
    { name: 'Graphic Design', slug: 'graphic-design' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Aurora-Nexus/61577659396600/?_rdc=1&_rdr#', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/aurora-nexus-pvt-ltd', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/auroranexus.io/', label: 'Instagram' },
  ]

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 164, 133, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 75, 120, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
      <motion.div 
        {...footerFadeIn}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24"
      >
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12"
        >
          {/* Company Info */}
          <motion.div variants={staggerItem}>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#00A485] to-[#004B78] bg-clip-text text-transparent">
              Aurora Nexus
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Transforming ideas into powerful digital products. Your partner in
              digital transformation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -4,
                    boxShadow: '0 10px 20px rgba(0, 164, 133, 0.3)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#00A485] transition-all duration-300 border border-gray-700 hover:border-[#00A485]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-[#00A485] transition-all duration-300"
                  >
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={staggerItem}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-[#00A485] transition-all duration-300"
                  >
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#00A485' }} />
                <a
                  href="mailto:contact@auroranexus.io"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#00A485] transition-colors break-all"
                >
                  contact@auroranexus.io
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#00A485' }} />
                <a
                  href="tel:+923408110022"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#00A485] transition-colors"
                >
                  +92 34 08 11 00 22
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" style={{ color: '#00A485' }} />
                <div className="text-xs sm:text-sm text-gray-400">
                  <p>Innovista Rawal, Avenue Mall, DHA-1, Rawalpindi</p>
                  <p className="mt-1">102, MDR, Executive Block, Faisal Hills, Islamabad</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ...transitions.smooth, delay: 0.5 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-400 px-4">
            © {currentYear} Aurora Nexus. All rights reserved. | Technology with
            Purpose
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

