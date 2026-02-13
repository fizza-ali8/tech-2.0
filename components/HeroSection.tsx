'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { transitions } from '@/lib/animations'

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const stagger = {
  tagline: 0.1,
  headline: 0.25,
  subtitle: 0.4,
  ctas: 0.55,
}

export default function HeroSection() {
  const [animationData, setAnimationData] = useState<any>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(m.matches)
    const handler = () => setPrefersReducedMotion(m.matches)
    m.addEventListener('change', handler)
    return () => m.removeEventListener('change', handler)
  }, [])

  // Load Lottie animation data
  useEffect(() => {
    // You can replace this with your own Lottie JSON file
    // For now, using a simple tech animation structure
    const loadAnimation = async () => {
      try {
        // Try to load from a URL or use inline data
        // Using a tech network/system animation
        const techAnim = {
          v: '5.7.4',
          fr: 30,
          ip: 0,
          op: 180,
          w: 600,
          h: 600,
          nm: 'Tech Network',
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: 'Network Circle',
              sr: 1,
              ks: {
                o: { a: 0, k: 100 },
                r: {
                  a: 1,
                  k: [
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
                    { t: 180, s: [360] },
                  ],
                },
                p: { a: 0, k: [300, 300, 0] },
                a: { a: 0, k: [0, 0, 0] },
                s: { a: 0, k: [100, 100, 100] },
              },
              ao: 0,
              shapes: [
                {
                  ty: 'gr',
                  it: [
                    {
                      d: 1,
                      ty: 'el',
                      s: { a: 0, k: [100, 100] },
                      p: { a: 0, k: [0, 0] },
                      nm: 'Ellipse Path 1',
                      mn: 'ADBE Vector Shape - Ellipse',
                      hd: false,
                    },
                    {
                      ty: 'st',
                      c: { a: 0, k: [0, 0.643, 0.529, 1] },
                      o: { a: 0, k: 80 },
                      w: { a: 0, k: 2 },
                      lc: 1,
                      lj: 1,
                      ml: 4,
                      bm: 0,
                      nm: 'Stroke 1',
                      mn: 'ADBE Vector Graphic - Stroke',
                      hd: false,
                    },
                    {
                      ty: 'tr',
                      p: { a: 0, k: [0, 0] },
                      a: { a: 0, k: [0, 0] },
                      s: { a: 0, k: [100, 100] },
                      r: { a: 0, k: 0 },
                      o: { a: 0, k: 100 },
                      sk: { a: 0, k: 0 },
                      sa: { a: 0, k: 0 },
                      nm: 'Transform',
                    },
                  ],
                  nm: 'Ellipse 1',
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: 'ADBE Vector Group',
                  hd: false,
                },
              ],
              ip: 0,
              op: 180,
              st: 0,
              bm: 0,
            },
          ],
        }
        setAnimationData(techAnim)
      } catch (error) {
        console.error('Error loading animation:', error)
      }
    }

    loadAnimation()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100/50"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/media/hero-poster.png"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
          onLoadedData={(e) => {
            const video = e.currentTarget
            video.play().catch(() => {})
          }}
        >
          <source src="/media/home_hero.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay - darker at bottom for readability */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />
        {/* Subtle teal/blue brand tint */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(0,75,120,0.12) 0%, rgba(0,164,133,0.06) 100%)',
          }}
        />
      </div>

      {/* Animated Background Orbs - heavily faded so video is the star */}
      <div className="absolute inset-0 overflow-hidden z-20 opacity-[0.07]">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl"
          style={{ backgroundColor: '#00A485' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl"
          style={{ backgroundColor: '#004B78' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl"
          style={{ backgroundColor: '#00A485' }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Lottie Tech Animation - heavily faded */}
      {animationData && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-[0.06]">
          <div className="w-full h-full max-w-5xl mx-auto">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      )}

      {/* Fallback Tech Visualization - heavily faded */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-[0.06]">
        <div className="relative w-full h-full max-w-5xl mx-auto">
          {/* Animated Tech System */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Rotating Tech Circles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#00A485]"
                style={{
                  width: `${140 + i * 70}px`,
                  height: `${140 + i * 70}px`,
                  opacity: 0.12 - i * 0.02,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 18 + i * 6,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.4,
                }}
              />
            ))}

            {/* Central Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#00A485] to-[#004B78] opacity-30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Orbiting System Nodes */}
            {[...Array(10)].map((_, i) => {
              const angle = (i * 36 * Math.PI) / 180
              const radius = 120
              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3.5 h-3.5 rounded-full bg-[#00A485] opacity-40"
                  style={{
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    x: [
                      Math.cos(angle) * radius,
                      Math.cos(angle + Math.PI / 5) * radius,
                      Math.cos(angle) * radius,
                    ],
                    y: [
                      Math.sin(angle) * radius,
                      Math.sin(angle + Math.PI / 5) * radius,
                      Math.sin(angle) * radius,
                    ],
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 7 + i * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                />
              )
            })}

            {/* Connecting Lines - Data Flow */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15"
              style={{ filter: 'blur(0.5px)' }}
            >
              {[...Array(10)].map((_, i) => {
                const angle1 = (i * 36 * Math.PI) / 180
                const angle2 = ((i + 1) * 36 * Math.PI) / 180
                const radius = 120
                const centerX = 50
                const centerY = 50
                const x1 = centerX + (Math.cos(angle1) * radius) / 4
                const y1 = centerY + (Math.sin(angle1) * radius) / 4
                const x2 = centerX + (Math.cos(angle2) * radius) / 4
                const y2 = centerY + (Math.sin(angle2) * radius) / 4

                return (
                  <motion.line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="#00A485"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.15, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: 'easeInOut',
                    }}
                  />
                )
              })}
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Content - staggered entrance, mobile-first */}
      <div className="relative z-30 max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-0 text-center">
        {/* Tagline */}
        <motion.div
          className="mb-5 sm:mb-6"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.smooth, delay: prefersReducedMotion ? 0 : stagger.tagline }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-xs md:text-sm font-medium border border-white/20">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#00A485]" />
            <span>Technology with Purpose</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-7 md:mb-10 leading-[1.15] px-1 sm:px-2"
          style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.smooth, delay: prefersReducedMotion ? 0 : stagger.headline }}
        >
          Transform Ideas into{' '}
          <span
            className="block mt-1 sm:mt-2 text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-[#00A485] via-[#00d4aa] to-[#004B78] bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 40px rgba(0, 164, 133, 0.5), 0 0 80px rgba(0, 164, 133, 0.25)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Powerful Digital Products
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 font-normal"
          style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.4)' }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.smooth, delay: prefersReducedMotion ? 0 : stagger.subtitle }}
        >
          Custom software and AI solutions that cut costs by 40% and accelerate time-to-market.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-stretch sm:items-center w-full max-w-sm sm:max-w-none mx-auto"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitions.smooth, delay: prefersReducedMotion ? 0 : stagger.ctas }}
        >
          <a
            href="/services"
            className="group relative px-6 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-white rounded-xl font-bold text-base sm:text-lg md:text-xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 bg-gradient-to-r from-[#004B78] to-[#00A485] hover:from-[#00A485] hover:to-[#004B78] hover:scale-[1.02] sm:hover:scale-[1.05] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,164,133,0.4)] overflow-hidden min-h-[48px] touch-manipulation outline-none focus-visible:ring-2 focus-visible:ring-[#00A485] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <span className="relative z-10 flex items-center gap-3">
              Our Services
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </span>
            </span>
          </a>
          <a
            href="/contact"
            className="px-6 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-white rounded-xl font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-[1.02] sm:hover:scale-[1.05] hover:-translate-y-0.5 min-h-[48px] touch-manipulation outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - visible on all screens, respects reduced motion */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest hidden sm:inline">Scroll</span>
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/10"
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-1.5 h-2.5 bg-white/70 rounded-full mt-2"
            animate={prefersReducedMotion ? {} : { y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
