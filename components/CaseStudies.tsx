'use client'

import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, TrendingUp, TrendingDown } from 'lucide-react'
import { sectionFadeIn, transitions, getStaggerDelay } from '@/lib/animations'

export default function CaseStudies() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  
  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'TechRetail Inc.',
      challenge:
        'Legacy system causing slow performance and poor user experience.',
      solution:
        'Built a modern, scalable e-commerce platform with AI-powered recommendations.',
      results: '300% increase in sales, 50% reduction in load time.',
      metric: '+300%',
      metricLabel: 'Sales Growth',
      isPrimary: false,
    },
    {
      title: 'AI-Powered Customer Support',
      client: 'ServicePro Solutions',
      challenge:
        'High customer support costs and slow response times.',
      solution:
        'Implemented custom RAG chatbot system for instant customer assistance.',
      results: '70% reduction in support tickets, 24/7 availability.',
      metric: '70%',
      metricLabel: 'Cost Reduction',
      isPrimary: true, // Middle card - primary highlight
    },
    {
      title: 'Cloud Migration & DevOps',
      client: 'FinanceFlow Corp',
      challenge:
        'On-premise infrastructure limiting scalability and increasing costs.',
      solution:
        'Migrated to cloud with automated CI/CD pipeline and monitoring.',
      results: '60% cost savings, 5x faster deployments.',
      metric: '60%',
      metricLabel: 'Cost Savings',
      isPrimary: false,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="section-spacing relative overflow-hidden py-20 md:py-28"
      style={{
        background: `
          radial-gradient(ellipse at center, rgba(0, 164, 133, 0.015) 0%, transparent 60%),
          linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)
        `,
      }}
    >
      {/* Soft Depth - Very Subtle Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.012) 100%)',
        }}
      />
      
      {/* Gentle Focus Toward Center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 45%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced with Better Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...transitions.smooth, duration: 0.6 }}
          className="text-center mb-24 md:mb-32"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 px-4">
            Success <span className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed" style={{ lineHeight: '1.7' }}>
            Real projects, real results. See how we've helped businesses
            transform their digital presence.
          </p>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...transitions.smooth, delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Cards Container - Relative for absolute positioning */}
        <div className="relative min-h-[500px] flex items-center justify-center">
          {caseStudies.map((study, index) => {
            const isPrimary = study.isPrimary
            
            // Calculate slide positions based on viewport state
            // All cards start at center (x: 0) - positioned absolutely
            // When in view: middle card stays, side cards slide out
            // When out of view: all cards return to center
            let slideX = 0
            if (isInView) {
              if (index === 0) {
                // Left card slides left
                slideX = shouldReduceMotion ? -180 : -280
              } else if (index === 2) {
                // Right card slides right
                slideX = shouldReduceMotion ? 180 : 280
              }
              // Middle card (index 1) stays at 0
            }
            // When out of view, all cards are at x: 0 (default)
            
            const cardVariants = {
              rest: {
                boxShadow: isPrimary
                  ? '0 25px 70px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.6) inset'
                  : '0 12px 45px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
                borderColor: isPrimary 
                  ? 'rgba(0, 164, 133, 0.25)' 
                  : 'rgba(0, 0, 0, 0.08)',
              },
              hover: {
                y: -10,
                scale: 1.02,
                boxShadow: isPrimary
                  ? '0 35px 90px rgba(0, 0, 0, 0.18), 0 12px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 164, 133, 0.35) inset'
                  : '0 22px 65px rgba(0, 0, 0, 0.14), 0 8px 20px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 164, 133, 0.2) inset',
                borderColor: isPrimary 
                  ? 'rgba(0, 164, 133, 0.35)' 
                  : 'rgba(0, 164, 133, 0.25)',
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              },
            }
            
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30, x: 0 }}
                animate={{ 
                  opacity: isInView ? 1 : 0.3,
                  y: isInView ? 0 : 30,
                  x: slideX,
                }}
                transition={{ 
                  ...transitions.smooth, 
                  delay: isPrimary ? 0 : (index === 0 ? 0.4 : 0.6),
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.8,
                }}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? 'rest' : 'hover'}
                className={`group absolute left-1/2 w-full max-w-[380px] md:w-[380px] ${
                  isPrimary ? 'md:scale-[1.05] z-30' : 'z-10'
                }`}
                style={{
                  transform: 'translateX(-50%)',
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '24px',
                  padding: '2.25rem 2.75rem',
                  border: isPrimary 
                    ? '1.5px solid rgba(0, 164, 133, 0.25)' 
                    : '1px solid rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Inner Highlight - Top Edge (Subtle) */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-[24px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent)',
                  }}
                />

                {/* Company Tag - Lighter & Smaller */}
                <div className="flex items-center justify-between mb-5">
                  <motion.span 
                    className="text-xs sm:text-sm font-normal text-gray-400 px-2.5 py-1 bg-gray-50/80 rounded-md border border-gray-100/50"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    {study.client}
                  </motion.span>
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#00A485] transition-colors duration-300" />
                  </motion.div>
                </div>

                {/* Title - Strongest Element */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-7 md:mb-8 group-hover:text-[#00A485] transition-colors duration-300">
                  {study.title}
                </h3>

                {/* Content Sections - Better Spacing */}
                <div className="space-y-6 sm:space-y-7 mb-8 md:mb-10">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Challenge
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Solution
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Results
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                      {study.results}
                    </p>
                  </div>
                </div>

                {/* Metric Section - Enhanced & Visually Separated */}
                <div className="pt-7 border-t-2 border-gray-100">
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={shouldReduceMotion ? {} : { 
                      scale: 1.03,
                      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
                    }}
                  >
                    {study.metric.startsWith('+') ? (
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { 
                          y: -3,
                          scale: 1.1,
                          transition: { duration: 0.25 }
                        }}
                        className="flex-shrink-0"
                      >
                        <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#00A485]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { 
                          y: 3,
                          scale: 1.1,
                          transition: { duration: 0.25 }
                        }}
                        className="flex-shrink-0"
                      >
                        <TrendingDown className="w-6 h-6 sm:w-7 sm:h-7 text-[#00A485]" />
                      </motion.div>
                    )}
                    <div>
                      <motion.div 
                        className="text-3xl sm:text-4xl font-bold text-[#00A485] leading-none"
                        whileHover={shouldReduceMotion ? {} : { 
                          scale: 1.08,
                          transition: { duration: 0.25 }
                        }}
                      >
                        {study.metric}
                      </motion.div>
                      <div className="text-xs sm:text-sm text-gray-500 font-medium mt-2">
                        {study.metricLabel}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

