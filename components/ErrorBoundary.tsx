'use client'

import { Component, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
    
    // Handle chunk loading errors specifically
    if (error.message?.includes('ChunkLoadError') || error.name === 'ChunkLoadError') {
      // Try to reload the page after a short delay
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.reload()
        }
      }, 1000)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center p-4"
        >
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              {this.state.error?.message?.includes('ChunkLoadError')
                ? 'Loading error detected. Reloading page...'
                : 'An unexpected error occurred. Please try refreshing the page.'}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null })
                if (typeof window !== 'undefined') {
                  window.location.reload()
                }
              }}
              className="px-6 py-3 bg-gradient-to-r from-[#004B78] to-[#00A485] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Reload Page
            </button>
          </div>
        </motion.div>
      )
    }

    return this.props.children
  }
}
