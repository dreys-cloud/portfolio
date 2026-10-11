import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently visible in the viewport.
 * Used to highlight the matching link in the navigation bar.
 *
 * @param {string[]} ids - section element ids, in page order
 * @param {number} offset - px from the top of the viewport to treat as the "active line"
 * @returns {string} the id of the active section
 */
export function useScrollSpy(ids, offset = 140) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const update = () => {
      const line = window.scrollY + offset
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }

      // If we have reached the bottom of the page, force the last section active.
      const bottomReached =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      if (bottomReached) current = ids[ids.length - 1]

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, offset])

  return active
}
