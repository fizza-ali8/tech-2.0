'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#004B78] to-[#00A485] bg-clip-text text-transparent"
          >
            Aurora Nexus
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href === '/services' && pathname?.startsWith('/services'))
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ 
                    y: -3,
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm lg:text-base transition-all duration-300 font-medium relative ${
                    isActive
                      ? 'text-[#00A485]'
                      : 'text-gray-700 hover:text-[#00A485]'
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href === '/services' && pathname?.startsWith('/services'))
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-colors ${
                    isActive
                      ? 'text-[#00A485] font-semibold'
                      : 'text-gray-700 hover:text-[#00A485]'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

