'use client'

import { motion } from 'framer-motion'
import { Target, Zap, Heart, Shield } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Cutting-edge solutions for modern challenges',
    },
    {
      icon: Zap,
      title: 'Quality',
      description: 'High standards in every project we deliver',
    },
    {
      icon: Heart,
      title: 'Responsiveness',
      description: 'Dedicated support when you need it most',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Trusted solutions built for long-term success',
    },
  ]

  return (
    <section
      id="about"
      className="section-spacing bg-white relative overflow-hidden"
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
            About Us –{' '}
            <span className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent">
              Technology with Purpose
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Your Partner in Digital Transformation
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8">
              At Aurora Nexus, we help businesses transform ideas into scalable
              digital solutions that drive real results. With a focus on
              innovation, quality, and responsiveness, we deliver services that
              make a measurable impact.
            </p>
            <motion.a
              href="/about"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 10px 30px rgba(0, 164, 133, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78]"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00A485] to-[#004B78] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Learn More About Us</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: 'easeOut'
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    boxShadow: '0 20px 40px rgba(0, 164, 133, 0.2)'
                  }}
                  className="bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100/50 group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A485] mb-4 sm:mb-6" />
                  </motion.div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

