/**
 * Reusable animation variants for consistent animations across the website
 * All animations are subtle, smooth, and lightweight
 */

import { Variants } from 'framer-motion'

// Common animation variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

export const slideDown: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
}

export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
}

// Transition presets
export const transitions = {
  smooth: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Custom easing for smooth feel
  gentle: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  quick: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  slow: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

// Viewport settings for scroll-triggered animations
// Using once: true for SSR safety to prevent hydration mismatches
export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: '-50px',
}

// Stagger container variants for staggered animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Stagger item variants
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
}

// Text animation variants
export const textFadeInUp: Variants = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportSettings,
  transition: transitions.smooth,
}

// Image animation variants
export const imageScaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: viewportSettings,
  transition: { ...transitions.smooth, duration: 0.7 },
}

export const imageFadeIn: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewportSettings,
  transition: transitions.smooth,
}

// Button animation variants
export const buttonFadeIn: Variants = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportSettings,
  transition: { ...transitions.smooth, delay: 0.2 },
}

// Card animation variants
export const cardFadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportSettings,
  transition: transitions.smooth,
}

// Section animation variants
export const sectionFadeIn: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportSettings,
  transition: transitions.smooth,
}

// Navbar animation
export const navbarSlideDown: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
}

// Footer animation
export const footerFadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { ...transitions.smooth, delay: 0.3 },
}

// Helper function to create staggered delays
export const getStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  return index * baseDelay
}

// Helper function for page load animations
export const pageLoadAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
}
