'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { sectionFadeIn, transitions } from '@/lib/animations'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const testimonials = [
    {
      quote:
        'They built our platform exactly as we imagined — fast, secure, and scalable. The team was professional and responsive throughout the entire process.',
      author: 'Alex Robertson',
      role: 'CEO',
      company: 'TechLabs',
      rating: 5,
      initials: 'AR',
    },
    {
      quote:
        'Aurora Nexus transformed our business operations with their AI automation solutions. We\'ve seen incredible efficiency gains and cost savings.',
      author: 'Shelia Abernathy',
      role: 'CTO',
      company: 'InnovateCorp',
      rating: 5,
      initials: 'SA',
    },
    {
      quote:
        'Outstanding work! The website they created for us has significantly increased our online presence and customer engagement. Highly recommended!',
      author: 'Michael Chen',
      role: 'Marketing Director',
      company: 'DigitalFirst',
      rating: 5,
      initials: 'MC',
    },
  ]

  // Ensure component is mounted on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-play slider - 4 seconds
  useEffect(() => {
    if (!isMounted || !isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change card every 4 seconds

    return () => clearInterval(interval)
  }, [isMounted, isAutoPlaying, testimonials.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  // Always use index 0 for initial render to ensure SSR/client consistency
  const displayIndex = isMounted ? currentIndex : 0
  const testimonial = testimonials[displayIndex] || testimonials[0]

  return (
    <section 
      className="section-spacing relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top, #f0fdfa 0%, #ffffff 65%)',
      }}
    >
      {/* Glow Blobs - Premium Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: '#2dd4bf',
            opacity: 0.1,
            filter: 'blur(140px)',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
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
            background: '#38bdf8',
            opacity: 0.08,
            filter: 'blur(120px)',
            top: '60%',
            right: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08],
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
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 px-4">
            What Our <span className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto rounded-full" />
        </motion.div>

        {/* Two Column Layout: Image Left, Slider Right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ ...transitions.ultraSmooth, duration: 0.8 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden order-2 md:order-1 smooth-transform"
            style={{
              boxShadow: '0 20px 60px rgba(0, 164, 133, 0.15)',
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          >
            <Image
              src="/media/clients_home.jpg"
              alt="Happy Clients"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => {
                console.error('Failed to load image:', e)
                // Fallback handling
                const target = e.target as HTMLImageElement
                if (target) {
                  target.style.display = 'none'
                }
              }}
              onLoad={() => {
                // Image loaded successfully
              }}
            />
            {/* Subtle overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>

          {/* Right Side: Slider */}
          <div className="relative order-1 md:order-2">
            <div 
              className="relative overflow-hidden min-h-[400px]"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative" style={{ minHeight: '400px' }}>
                {/* Testimonial Card with Sliding Animation */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: [0.22, 1, 0.36, 1],
                      type: 'tween', // Use tween for smoother animation
                    }}
                    className="relative group smooth-transform"
                    style={{
                      background: 'rgba(255, 255, 255, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      borderRadius: '18px',
                      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)',
                      padding: '2rem 2.5rem',
                      willChange: 'transform, opacity', // GPU hint
                      transform: 'translateZ(0)', // Force GPU acceleration
                    }}
                  >
                  {/* Quote Icon - Bigger & Accent Color */}
                  <div className="mb-6">
                    <Quote 
                      className="w-16 h-16 sm:w-20 sm:h-20" 
                      style={{ color: '#00A485', opacity: 0.25 }} 
                    />
                  </div>

                  {/* Stars - Larger */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 italic font-medium">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Section - Enhanced */}
                  <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                    {/* Avatar Circle */}
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#004B78] to-[#00A485] flex items-center justify-center flex-shrink-0"
                      style={{
                        boxShadow: '0 4px 12px rgba(0, 164, 133, 0.3)',
                      }}
                    >
                      <span className="text-white font-bold text-sm sm:text-base">
                        {testimonial.initials}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      {/* Accent Line */}
                      <div className="w-12 h-0.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mb-2" />
                      <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons - Always render, but disable until mounted */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                  onClick={isMounted ? goToPrevious : undefined}
                  disabled={!isMounted}
                  whileHover={isMounted ? { scale: 1.1 } : {}}
                  whileTap={isMounted ? { scale: 0.95 } : {}}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:border-[#00A485] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </motion.button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => {
                    // Always show first dot as active on SSR - use 0 for initial render
                    const activeIndex = isMounted ? currentIndex : 0
                    const isActive = index === activeIndex
                    return (
                      <button
                        key={index}
                        onClick={isMounted ? () => {
                          setCurrentIndex(index)
                          setIsAutoPlaying(false)
                        } : undefined}
                        disabled={!isMounted}
                        className={`rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                          isActive
                            ? 'bg-[#00A485] w-8 h-2'
                            : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    )
                  })}
                </div>

                <motion.button
                  onClick={isMounted ? goToNext : undefined}
                  disabled={!isMounted}
                  whileHover={isMounted ? { scale: 1.1 } : {}}
                  whileTap={isMounted ? { scale: 0.95 } : {}}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:border-[#00A485] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
