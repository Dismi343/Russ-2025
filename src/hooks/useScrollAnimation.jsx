import React, { useEffect, useState } from 'react'
export const useScrollAnimation = (ref, threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (currentRef) {
            observer.unobserve(currentRef)
          }
        }
      },
      {
        threshold,
        rootMargin: '50px',
      },
    )
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, threshold])
  return isVisible
}
