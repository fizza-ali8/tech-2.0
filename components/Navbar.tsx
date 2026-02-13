'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { navbarSlideDown, transitions, getStaggerDelay } from '@/lib/animations'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      {...navbarSlideDown}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 smooth-transform ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        willChange: 'transform, background-color, box-shadow',
        transform: 'translateZ(0)', // GPU acceleration
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transitions.smooth, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`text-lg sm:text-xl md:text-2xl font-bold ${
              isScrolled
                ? 'bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent'
                : 'text-white drop-shadow-md'
            }`}
          >
            Aurora Nexus
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href || 
                (link.href === '/services' && pathname?.startsWith('/services'))
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transitions.smooth, delay: 0.15 + getStaggerDelay(index, 0.05) }}
                  whileHover={{ 
                    y: -3,
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm lg:text-base transition-all duration-300 font-medium relative ${
                    isScrolled
                      ? isActive
                        ? 'text-[#00A485]'
                        : 'text-gray-700 hover:text-[#00A485]'
                      : isActive
                        ? 'text-[#00A485]'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#004B78] to-[#00A485] rounded-full"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button - min 44px touch target */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transitions.smooth, delay: 0.2 }}
            className={`md:hidden p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - touch-friendly links, safe area padding */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <nav className="px-4 py-3" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href ||
                (link.href === '/services' && pathname?.startsWith('/services'))
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3.5 px-2 -mx-2 rounded-lg text-base font-medium min-h-[44px] flex items-center transition-colors active:bg-gray-100 ${
                    isActive
                      ? 'text-[#00A485] font-semibold bg-[#00A485]/5'
                      : 'text-gray-700 hover:text-[#00A485] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </nav>
        </motion.div>
      )}
    </motion.nav>
  )
}

