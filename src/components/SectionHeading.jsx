import { useInView } from '../hooks/useInView'

/**
 * Standard section title block: small coloured eyebrow label,
 * large heading and an optional description.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const isCenter = align === 'center'

  return (
    <div
      ref={ref}
      className={`mb-12 max-w-2xl ${isCenter ? 'mx-auto text-center' : ''} ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
      <div className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  )
}
