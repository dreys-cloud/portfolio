import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once it scrolls into view.
 * Returns a ref to attach and a boolean telling you whether it is visible.
 *
 * @param {object} options - IntersectionObserver options
 * @param {boolean} once - only trigger the first time (default true)
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(options = { threshold: 0.2 }, once = true) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setInView(true)
        if (once) observer.unobserve(entry.target)
      } else if (!once) {
        setInView(false)
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once])

  return [ref, inView]
}
