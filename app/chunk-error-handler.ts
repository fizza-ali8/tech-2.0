// Client-side chunk loading error handler
if (typeof window !== 'undefined') {
  // Handle chunk loading errors
  window.addEventListener('error', (event) => {
    if (
      event.message?.includes('Loading chunk') ||
      event.message?.includes('ChunkLoadError') ||
      (event.target as HTMLElement)?.tagName === 'SCRIPT'
    ) {
      const script = event.target as HTMLScriptElement
      if (script?.src?.includes('_next/static/chunks')) {
        console.warn('Chunk loading error detected, attempting to reload...')
        // Retry loading after a short delay
        setTimeout(() => {
          if (script.src) {
            const newScript = document.createElement('script')
            newScript.src = script.src
            newScript.async = true
            document.head.appendChild(newScript)
          }
        }, 1000)
      }
    }
  }, true)

  // Handle unhandled promise rejections (chunk loading errors often appear here)
  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason?.message?.includes('Loading chunk') ||
      event.reason?.message?.includes('ChunkLoadError') ||
      event.reason?.name === 'ChunkLoadError'
    ) {
      console.warn('Chunk loading error in promise rejection, reloading page...')
      event.preventDefault()
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  })
}
