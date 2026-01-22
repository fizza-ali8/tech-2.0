'use client'

import { motion } from 'framer-motion'
import {
  Search,
  FileText,
  Code,
  CheckCircle,
  Rocket,
} from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Consultation',
      description: 'Understanding your goals and challenges.',
      number: '01',
    },
    {
      icon: FileText,
      title: 'Planning & Strategy',
      description: 'Roadmap and technical strategy for your solution.',
      number: '02',
    },
    {
      icon: Code,
      title: 'Design & Development',
      description: 'Creating scalable, user-friendly digital products.',
      number: '03',
    },
    {
      icon: CheckCircle,
      title: 'Testing & Quality Assurance',
      description: 'Ensuring functionality, security, and reliability.',
      number: '04',
    },
    {
      icon: Rocket,
      title: 'Deployment & Support',
      description: 'Seamless launch with continuous support.',
      number: '05',
    },
  ]

  return (
    <section
      id="process"
      className="section-spacing bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 px-4">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="text-gray-900 block sm:inline"
            >
              From Concept to Launch:{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent block sm:inline"
            >
              Our Proven Process
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed"
          >
            We follow a structured approach to deliver high-quality IT solutions
            that align with your business goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="w-32 h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto rounded-full"
            style={{ transformOrigin: 'center' }}
          />
        </motion.div>

        <div className="relative">
          {/* Connection Flow Line (Desktop) - Enhanced for Process Flow */}
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            style={{ 
              background: 'linear-gradient(to right, rgba(0, 164, 133, 0.2), rgba(0, 164, 133, 0.45), rgba(0, 164, 133, 0.2))',
              transformOrigin: 'left center',
              transform: 'translateY(-50%)',
            }}
          />
          
          {/* Animated Flow Dots on Connection Line */}
          {steps.map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              className="hidden lg:block absolute top-1/2 z-10 w-3 h-3 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.4, 
                delay: 0.7 + (index * 0.15),
                ease: 'easeOut'
              }}
              style={{
                left: `calc(${((index + 0.5) * 100) / steps.length}% - 6px)`,
                transform: 'translateY(-50%)',
                background: 'linear-gradient(135deg, #00A485, #004B78)',
                boxShadow: '0 0 12px rgba(0, 164, 133, 0.4)',
              }}
            />
          ))}

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0
                }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: 'easeOut'
                }}
                className="relative z-10 flex"
              >
                <motion.div
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                  }}
                  className="bg-white p-7 sm:p-9 lg:p-11 rounded-2xl transition-all duration-300 border border-gray-200 group-hover:border-[#00A485]/30 relative group overflow-hidden flex flex-col h-full w-full"
                  style={{
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06)',
                    minHeight: '320px',
                    minWidth: '240px',
                  }}
                >
                  {/* Subtle gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 164, 133, 0.04), rgba(0, 75, 120, 0.02))',
                    }}
                  />
                  {/* Step Number as Background Element - More Visible */}
                  <div 
                    className="absolute top-5 right-5 text-5xl sm:text-6xl md:text-7xl font-bold pointer-events-none select-none z-0"
                    style={{
                      color: 'rgba(0, 164, 133, 0.1)',
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon on Left with Progress Indicator */}
                  <div className="relative mb-6 sm:mb-8 z-10">
                    {/* Enhanced Icon with Gradient & Glow - Smaller, Left Aligned */}
                    <div className="relative inline-block">
                      <motion.div
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center relative z-10"
                        style={{ 
                          background: 'linear-gradient(135deg, #007f73 0%, #00bfa5 100%)',
                          boxShadow: '0 6px 12px rgba(0, 164, 133, 0.25), 0 0 0 3px rgba(0, 164, 133, 0.1)',
                        }}
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: false }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.15 + 0.3,
                            ease: 'easeOut'
                          }}
                        >
                          <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                        </motion.div>
                      </motion.div>
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl"
                        style={{
                          background: 'linear-gradient(135deg, #00bfa5, #007f73)',
                        }}
                      />
                      {/* Progress Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.15 + 0.5,
                          ease: 'easeOut'
                        }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-[#00A485] rounded-full flex items-center justify-center border-2 border-white shadow-lg z-20"
                      >
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Improved Typography - Larger Title, Better Spacing */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15 + 0.4 
                    }}
                    className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#00A485] transition-colors relative z-10"
                    style={{
                      lineHeight: 1.4,
                    }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15 + 0.5 
                    }}
                    className="text-base sm:text-lg text-gray-500 relative z-10 flex-grow"
                    style={{
                      lineHeight: 1.65,
                    }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Hover Shadow Enhancement */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 164, 133, 0.12)',
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-center mt-16 md:mt-20"
        >
          <motion.a
            href="/contact"
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
            <span className="relative z-10">Start Your Project Today</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

