'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'They built our platform exactly as we imagined — fast, secure, and scalable. The team was professional and responsive throughout the entire process.',
      author: 'Alex Robertson',
      role: 'CEO',
      company: 'TechLabs',
      rating: 5,
    },
    {
      quote:
        'Aurora Nexus transformed our business operations with their AI automation solutions. We\'ve seen incredible efficiency gains and cost savings.',
      author: 'Shelia Abernathy',
      role: 'CTO',
      company: 'InnovateCorp',
      rating: 5,
    },
    {
      quote:
        'Outstanding work! The website they created for us has significantly increased our online presence and customer engagement. Highly recommended!',
      author: 'Michael Chen',
      role: 'Marketing Director',
      company: 'DigitalFirst',
      rating: 5,
    },
  ]

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 px-4">
            What Our <span className="bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 px-4 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#004B78] to-[#00A485] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: 'easeOut'
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(0, 164, 133, 0.2)'
              }}
              className="bg-gradient-to-br from-primary-50 to-white p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100/50 relative group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6" style={{ color: '#00A485', opacity: 0.2 }} />
              </motion.div>
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">{testimonial.author}</p>
                <p className="text-sm sm:text-base text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

