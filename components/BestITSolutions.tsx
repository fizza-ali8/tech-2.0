'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  TrendingUp,
  Shield,
  Target,
  Rocket,
  Zap,
  ArrowRight,
  Clock,
} from 'lucide-react'
import Image from 'next/image'

export default function BestITSolutions() {
  const shouldReduceMotion = useReducedMotion()

  // 6 features: 3 top row, 3 bottom row (center highlighted)
  const features = [
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Systems that grow seamlessly with your business expansion and evolving needs.',
      isHighlighted: false,
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security protecting your data and ensuring 99.9% uptime.',
      isHighlighted: false,
    },
    {
      icon: Target,
      title: 'Business-Oriented',
      description: 'Technology solutions aligned with your strategic business goals and objectives.',
      isHighlighted: true, // Center card - primary highlight
    },
    {
      icon: Rocket,
      title: 'Future-Ready Technology',
      description: 'Built on cutting-edge frameworks ready for tomorrow\'s challenges and opportunities.',
      isHighlighted: false,
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized systems delivering speed, stability, and peak efficiency at scale.',
      isHighlighted: false,
    },
    {
      icon: Clock,
      title: '24/7 Support & Monitoring',
      description: 'Round-the-clock technical support and proactive system monitoring to ensure zero downtime and fast issue resolution.',
      isHighlighted: false,
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // easeOut
      },
    },
  }

  const cardHoverVariants = {
    rest: { y: 0, scale: 1 },
    hover: {
      y: -6,
      scale: 1.01,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1], // easeOut
      },
    },
  }

  return (
    <section className="section-spacing text-white relative overflow-hidden py-24 md:py-32">
      {/* 1. Clean Animated Gradient Base */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 164, 133, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 131, 112, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0, 75, 120, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #050b18 0%, #0a1a2f 50%, #004B78 100%)
          `,
          backgroundSize: '200% 200%',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }
        }
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* 2. Subtle Noise Texture - Very Light */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* 3. Minimal Floating Particles - Reduced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const positions = [
            { x: '15%', y: '20%' }, { x: '45%', y: '15%' },
            { x: '75%', y: '25%' }, { x: '25%', y: '70%' },
            { x: '55%', y: '75%' }, { x: '85%', y: '65%' },
            { x: '10%', y: '50%' }, { x: '90%', y: '45%' },
          ]
          const pos = positions[i] || { x: '50%', y: '50%' }
          
          return (
        <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
          style={{
                left: pos.x,
                top: pos.y,
                background: 'rgba(0, 242, 255, 0.2)',
                boxShadow: '0 0 6px rgba(0, 242, 255, 0.2)',
              }}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -20, 0],
                      opacity: [0.1, 0.3, 0.1],
                    }
              }
              transition={{
                duration: 5 + (i % 2) * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          )
        })}
      </div>

      {/* 4. Subtle Glowing Graph Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" style={{ zIndex: 1 }}>
        <motion.path
          d="M 20% 80% Q 35% 60%, 50% 50% T 80% 30%"
          fill="none"
          stroke="rgba(0, 242, 255, 0.3)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: 0.3 }
              : {
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.3, 0],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            filter: 'drop-shadow(0 0 3px rgba(0, 242, 255, 0.4))',
          }}
        />
      </svg>

      {/* 5. Futuristic Analytics Image - Full Section Background */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-[3] overflow-hidden"
        style={{
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 60px rgba(0, 242, 255, 0.15))',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Subtle gradient overlay - Centered fade */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(5, 11, 24, 0.4) 0%, rgba(5, 11, 24, 0.7) 50%, rgba(5, 11, 24, 0.9) 100%)',
          }}
        />
        
        <div className="relative w-full h-full">
          <Image
            src="/media/BestItSolution_home.jpg"
            alt="Futuristic Analytics Dashboard"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
            style={{
              opacity: 0.5,
              objectPosition: 'center center',
            }}
          />
        </div>
      </motion.div>

      {/* 6. Soft Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Staggered Fade-Up Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="text-center mb-16 md:mb-20 max-w-5xl mx-auto"
        >
          {/* Small Label - Fades in first */}
          <motion.div 
            variants={itemVariants}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/8 backdrop-blur-md rounded-full border border-white/15">
              <span className="text-xs sm:text-sm font-semibold text-white/85 tracking-wider uppercase">
                Why Choose Us
              </span>
            </div>
          </motion.div>

          {/* Main Headline - Fades in second */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
          >
            Best IT Solutions That{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Scale With Your Business
            </span>
          </motion.h2>

          {/* Subtitle - Fades in third */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We deliver end-to-end IT solutions that grow with your business,
            ensuring efficiency, security, and measurable results.
          </motion.p>

          {/* CTA Buttons - Fade in last with scale */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* Primary Button */}
            <motion.a
              href="#services"
              whileHover={{
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(0, 242, 255, 0.25)',
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-3.5 bg-white text-[#050b18] rounded-lg font-semibold text-base overflow-hidden transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            {/* Secondary Ghost Button */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.03,
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                borderColor: 'rgba(0, 242, 255, 0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/15 rounded-lg font-semibold text-base text-white transition-all duration-300"
            >
              Get Started
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Feature Cards: 3 Top, 3 Bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
          className="space-y-10 md:space-y-12"
        >
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                variants={itemVariants}
                cardHoverVariants={cardHoverVariants}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>

          {/* Bottom Row: 3 Cards - All 6 cards displayed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
            {features.slice(3, 6).map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index + 3}
                variants={itemVariants}
                cardHoverVariants={cardHoverVariants}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Reusable Feature Card Component with Premium Glassmorphism
function FeatureCard({
  feature,
  index,
  variants,
  cardHoverVariants,
  shouldReduceMotion,
}: {
  feature: {
    icon: any
    title: string
    description: string
    isHighlighted: boolean
  }
  index: number
  variants: any
  cardHoverVariants: any
  shouldReduceMotion: boolean | null
}) {
  return (
    <motion.div
      variants={variants}
      initial="rest"
      whileHover="hover"
      className="group relative"
    >
      {/* Breathing Animation for All Cards */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl opacity-40"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 242, 255, 0.25), rgba(0, 164, 133, 0.15))',
          filter: 'blur(16px)',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.03, 1],
                opacity: [0.3, 0.45, 0.3],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2,
        }}
      />

      {/* Animated Gradient Border for All Cards */}
      <motion.div
        className="absolute -inset-0.5 rounded-2xl opacity-60"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 242, 255, 0.3), rgba(0, 164, 133, 0.15), rgba(0, 242, 255, 0.3))',
          backgroundSize: '200% 200%',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
          delay: index * 0.15,
        }}
      />

      {/* Card with Glassmorphism - All Cards Premium */}
      <motion.div
        variants={cardHoverVariants}
        className="relative h-full p-7 md:p-8 lg:p-9 rounded-2xl bg-white/6 backdrop-blur-xl border border-white/15 transition-all duration-400 overflow-hidden md:scale-[1.02]"
        style={{
          boxShadow: '0 20px 50px rgba(0, 242, 255, 0.12), 0 0 0 1px rgba(0, 242, 255, 0.1)',
        }}
      >
        {/* Subtle Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
          initial={false}
        />

        {/* Icon Container - Cleaner */}
        <motion.div className="mb-5 md:mb-6">
          <motion.div
            className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-white/12 to-white/4 backdrop-blur-sm flex items-center justify-center border border-white/8 group-hover:border-cyan-400/25 transition-all duration-300"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -2, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.25,
            }}
            whileHover={{
              rotate: 3,
              scale: 1.08,
            }}
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.03, 1],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
            >
              <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Title - Better Typography */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-50 transition-colors duration-300">
          {feature.title}
        </h3>

        {/* Description - Better Readability */}
        <p className="text-sm md:text-base text-white/65 leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  )
}
