'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { sectionFadeIn, transitions, getStaggerDelay } from '@/lib/animations'

export default function Testimonials() {
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00A485] bg-[#00A485]/10 rounded-full">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 md:mb-8 px-4">
            What Our <span className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {testimonials.map((testimonial, index) => {
            const isMiddle = index === 1 // Middle card (index 1)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ 
                  ...transitions.smooth, 
                  delay: getStaggerDelay(index, 0.2),
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: isMiddle ? 1.03 : 1.02,
                  boxShadow: '0 25px 60px rgba(0, 164, 133, 0.15)'
                }}
                className={`relative group ${
                  isMiddle ? 'md:scale-105 md:-mt-4 md:mb-4 z-20' : ''
                }`}
                style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  borderRadius: '18px',
                  boxShadow: isMiddle 
                    ? '0 20px 50px rgba(0, 0, 0, 0.12)' 
                    : '0 15px 40px rgba(0, 0, 0, 0.08)',
                  padding: '2rem 2.5rem',
                }}
              >
                {/* Quote Icon - Bigger & Accent Color */}
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote 
                    className="w-16 h-16 sm:w-20 sm:h-20" 
                    style={{ color: '#00A485', opacity: 0.25 }} 
                  />
                </motion.div>

                {/* Stars - Larger */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ 
                        delay: getStaggerDelay(index, 0.2) + i * 0.08, 
                        duration: 0.3 
                      }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <Star className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 fill-yellow-400" />
                    </motion.div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

