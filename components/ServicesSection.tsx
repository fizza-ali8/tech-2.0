'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Code,
  Globe,
  Brain,
  Smartphone,
  Palette,
  Image as ImageIcon,
  Search,
  Cloud,
  Settings,
} from 'lucide-react'
import { getServiceMedia } from '@/lib/media'
import { sectionFadeIn, imageScaleIn, buttonFadeIn, transitions, getStaggerDelay, staggerContainer, staggerItem } from '@/lib/animations'

export default function ServicesSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0) // For seamless visual position
  const [isResetting, setIsResetting] = useState(false)

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      slug: 'software-development',
      description:
        'Custom software solutions designed to optimize business processes, improve efficiency, and drive measurable results.',
      color: 'from-[#004B78] to-[#00A485]',
      image: '💻',
      gradient: 'from-blue-600 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Web Development',
      slug: 'web-development',
      description:
        'Modern, responsive, and high-performance websites styled according to your brand and audience, ensuring growth and engagement.',
      color: 'from-green-500 to-green-600',
      image: '🌐',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Brain,
      title: 'AI Automation',
      slug: 'ai-automation',
      description:
        'Intelligent AI-powered systems that automate tasks, analyze data, and enhance decision-making for smarter business operations.',
      color: 'from-purple-500 to-purple-600',
      image: '🤖',
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      slug: 'app-development',
      description:
        'User-friendly mobile applications built for performance, scalability, and seamless experiences across platforms.',
      color: 'from-pink-500 to-pink-600',
      image: '📱',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      description:
        'Intuitive UI/UX designs focused on usability, engagement, and turning ideas into impactful digital products.',
      color: 'from-orange-500 to-orange-600',
      image: '🎨',
      gradient: 'from-orange-500 to-amber-600',
    },
    {
      icon: ImageIcon,
      title: 'Graphic Design',
      slug: 'graphic-design',
      description:
        'Creative branding and visual design solutions including logos, brand identity, and marketing material that help your business stand out and leave a lasting impression.',
      color: 'from-red-500 to-red-600',
      image: '🖼️',
      gradient: 'from-red-500 to-orange-600',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      slug: 'seo-optimization',
      description:
        'Data-driven SEO strategies to increase search visibility, attract qualified traffic, and convert visitors into loyal customers, boosting your online presence.',
      color: 'from-yellow-500 to-yellow-600',
      image: '🔍',
      gradient: 'from-yellow-500 to-amber-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      slug: 'cloud-services',
      description:
        'Scalable and secure cloud solutions that enable seamless infrastructure management, improved performance, and cost-efficient growth for your business.',
      color: 'from-cyan-500 to-cyan-600',
      image: '☁️',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Settings,
      title: 'DevOps',
      slug: 'devops',
      description:
        'End-to-end DevOps solutions that streamline development, automate deployments, and ensure faster, more reliable software delivery.',
      color: 'from-indigo-500 to-indigo-600',
      image: '⚙️',
      gradient: 'from-indigo-600 to-purple-600',
    },
  ]

  // Duplicate services for infinite scroll
  const duplicatedServices = [...services, ...services, ...services]

  // Auto-scroll: move one card every 2 seconds, circular infinite loop
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Keep incrementing, loop back to 0 after last card (circular)
        return (prev + 1) % services.length
      })
      setDisplayIndex((prev) => {
        // Keep incrementing for visual position (never resets, uses duplicated services)
        // Reset when we're safely in the middle of the second set
        // This ensures the reset happens when the visible cards are identical
        const resetThreshold = services.length + 2 // Reset after showing 2 cards from second set
        if (prev >= resetThreshold) {
          // Reset to start of second set - this position looks identical to start of first set
          setIsResetting(true)
          setTimeout(() => setIsResetting(false), 50) // Reset flag after transition
          return services.length
        }
        return prev + 1
      })
    }, 2000) // Move every 2 seconds

    return () => clearInterval(interval)
  }, [isPaused, services.length])

  // Calculate translateX based on display index for seamless visual movement
  // On desktop: 4 cards visible, each card is calc((100%-4.5rem)/4)
  // We need to move by one card width + gap
  // Approximate: card is ~25% of container, gap is ~1.5rem which is ~1.5% on large screens
  // So we move by approximately 26.5% per card
  // Use displayIndex relative to second set for seamless loop
  const visualIndex = displayIndex >= services.length ? displayIndex - services.length : displayIndex
  const translateX = -(visualIndex * 26.5) // Move by one card width + gap

  // Get visible card indices for dots (based on original services array)
  const getVisibleIndices = () => {
    const indices = []
    for (let i = 0; i < 4; i++) {
      const actualIndex = (currentIndex + i) % services.length
      indices.push(actualIndex)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  return (
    <section
      id="services"
      className="section-spacing relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top, #f0f9ff 0%, #e6f6ff 30%, #ffffff 60%)',
      }}
    >
      {/* Glow Blobs - Premium Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: '#38bdf8',
            opacity: 0.12,
            filter: 'blur(120px)',
            top: '20%',
            left: '-100px',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: '#2dd4bf',
            opacity: 0.12,
            filter: 'blur(120px)',
            top: '50%',
            right: '-100px',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.16, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...sectionFadeIn}
          className="text-center mb-16 md:mb-20"
        >
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00A485] bg-[#00A485]/10 rounded-full">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 md:mb-8 px-4">
            Services That Drive{' '}
            <span className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent">
              Digital Growth
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed">
            We provide end-to-end IT solutions, from web and mobile apps to AI
            systems and digital product design, helping businesses scale
            efficiently.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative mb-8 md:mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{
                x: `${translateX}%`,
              }}
              transition={{
                duration: isResetting ? 0 : 0.8,
                ease: 'easeInOut',
              }}
            >
              {duplicatedServices.map((service, index) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 w-[calc(100vw-2rem)] md:w-[calc((100%-4.5rem)/4)]"
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ 
                    ...transitions.smooth, 
                    delay: getStaggerDelay(index % services.length, 0.1) 
                  }}
                >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <motion.div 
                      className="group h-full flex flex-col overflow-hidden cursor-pointer rounded-2xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                      }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                    {/* Image Section */}
                    <div
                      className={`relative h-48 bg-gradient-to-br ${service.gradient} overflow-hidden rounded-t-2xl`}
                    >
                      {(() => {
                        const media = getServiceMedia(service.slug)
                        return media?.image ? (
                          <>
                            <motion.div
                              className="absolute inset-0"
                              whileHover={{ scale: 1.08 }}
                              transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                              <Image
                                src={media.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                loading="lazy"
                                quality={85}
                              />
                            </motion.div>
                            <div className="absolute inset-0 bg-black/20" />
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-8xl opacity-30">{service.image}</div>
                            </div>
                          </>
                        )
                      })()}
                      <div className="absolute top-4 right-4">
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col">
                      <motion.h3 
                        className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#00A485] transition-colors duration-300"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                    </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {services.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  visibleIndices.includes(index)
                    ? 'w-8 h-3 bg-gradient-to-r from-[#004B78] to-[#00A485]'
                    : 'w-3 h-3 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          {...buttonFadeIn}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="/services"
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
            <span className="relative z-10">View All Services</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
