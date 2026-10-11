import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

/**
 * A single animated skill bar. The fill grows from 0 to `level` percent
 * the first time the bar scrolls into view.
 */
export default function SkillBar({ name, level }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!inView) return
    // Small delay so the transition is actually visible.
    const timer = setTimeout(() => setWidth(level), 120)
    return () => clearTimeout(timer)
  }, [inView, level])

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-semibold tabular-nums text-indigo-600 dark:text-indigo-400">
          {level}%
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
