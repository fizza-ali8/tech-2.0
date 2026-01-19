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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 px-4">
            From Concept to Launch:{' '}
            <span className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent">
              Our Proven Process
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed">
            We follow a structured approach to deliver high-quality IT solutions
            that align with your business goals.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2" style={{ background: 'linear-gradient(to right, rgba(0, 75, 120, 0.2), rgba(0, 164, 133, 0.5), rgba(0, 75, 120, 0.2))' }} />

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: 'easeOut'
                }}
                className="relative"
              >
                <motion.div
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    boxShadow: '0 25px 50px rgba(0, 164, 133, 0.2)'
                  }}
                  className="bg-gradient-to-br from-primary-50 to-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100/50 relative z-10 group"
                >
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #004B78 0%, #00A485 100%)' }}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-200/60 group-hover:text-primary-300 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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

