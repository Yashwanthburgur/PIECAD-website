import { useEffect, useRef, useState } from 'react'

/**
 * Adds a class when the element scrolls into view.
 * Uses IntersectionObserver so we avoid scroll listeners.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null)
  // If the browser can't observe intersections, reveal immediately.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}
