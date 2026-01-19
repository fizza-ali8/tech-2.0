'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: ReactNode
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
}: ButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 overflow-hidden group'
  
  const sizeClasses = {
    sm: 'px-6 py-2.5 text-base',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl',
  }
  
  const variantClasses = {
    primary: 'text-white bg-gradient-to-r from-primary-800 to-primary-500 hover:from-primary-500 hover:to-primary-800 shadow-xl hover:shadow-2xl',
    secondary: 'text-primary-700 bg-primary-50 hover:bg-primary-100 shadow-lg hover:shadow-xl',
    outline: 'text-primary-700 border-2 border-primary-500 hover:bg-primary-500 hover:text-white shadow-md hover:shadow-lg',
  }
  
  const buttonContent = (
    <>
      {/* Animated background gradient */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
        {children}
      </span>
    </>
  )
  
  const motionProps = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2, ease: 'easeOut' },
  }
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    )
  }
  
  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  )
}
