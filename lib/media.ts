// Mapping service slugs to their respective media files
export const getServiceMedia = (slug: string) => {
  const mediaMap: Record<string, { animation: string; image: string }> = {
    'software-development': {
      animation: '/media/softwaredevelopment_animation.mp4',
      image: '/media/softwaredevelopment_image.jpg',
    },
    'web-development': {
      animation: '/media/webdevelopment_animation.mp4',
      image: '/media/webdevelopment_image.jpg',
    },
    'ai-automation': {
      animation: '/media/ai_animation.mp4',
      image: '/media/ai_image.jpg',
    },
    'app-development': {
      animation: '/media/appdevelopment_animation.mp4',
      image: '/media/appdevelopment_image.jpg',
    },
    'ui-ux-design': {
      animation: '/media/uiux_animation.mp4',
      image: '/media/uiux_image.jpg',
    },
    'graphic-design': {
      animation: '/media/graphicdesign_animation.mp4',
      image: '/media/graphicdesign_image.jpg',
    },
    'seo-optimization': {
      animation: '/media/seooptimization_animation.mp4',
      image: '/media/seooptimization_image.jpg',
    },
    'cloud-services': {
      animation: '/media/cloudservices_animation.mp4',
      image: '/media/cloud_image.jpg',
    },
    'devops': {
      animation: '/media/devops_animation.mp4',
      image: '/media/devops_image].jpg', // Note: keeping original filename with typo
    },
  }

  return mediaMap[slug] || null
}
