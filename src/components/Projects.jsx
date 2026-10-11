import { useMemo, useState } from 'react'
import {
  ChevronDownIcon,
  ExternalIcon,
  GithubIcon,
  FolderIcon,
  CheckIcon,
} from './Icons'
import SectionHeading from './SectionHeading'
import { profile, projects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

/**
 * A single project card.
 * Interactive: the "View details" button toggles a details panel
 * (useState + conditional rendering).
 */
function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.15 })

  const hasLinks = project.demo || project.repo

  return (
    <article
      ref={ref}
      className={`card card-hover group flex flex-col overflow-hidden ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={inView && index ? { animationDelay: `${(index % 3) * 90}ms` } : undefined}
    >
      {/* ---- Thumbnail / placeholder art ---- */}
      <div className={`relative h-44 shrink-0 overflow-hidden bg-gradient-to-br ${project.accent}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-white">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.55) 0, transparent 45%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.35) 0, transparent 40%)',
              }}
              aria-hidden="true"
            />
            <FolderIcon className="relative h-10 w-10 opacity-90" />
            <span className="relative mt-2 text-3xl font-bold tracking-tight opacity-95">
              {profile.monogram}
            </span>
          </div>
        )}

        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-black/25 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full bg-amber-400/90 px-3 py-1 text-[11px] font-semibold text-amber-950">
              Featured
            </span>
          )}
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-black/25 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      {/* ---- Body ---- */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* ---- Expandable details (conditional rendering) ---- */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
            expanded ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Highlights
              </p>
              <ul className="mt-2 space-y-1.5">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-[13px] text-slate-600 dark:text-slate-400"
                  >
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ---- Actions ---- */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-indigo-400 dark:hover:bg-indigo-500/10"
          >
            {expanded ? 'Hide details' : 'View more'}
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {hasLinks && (
            <div className="flex items-center gap-2">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-icon"
                  aria-label={`${project.title} source code`}
                  title="Source code"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-icon"
                  aria-label={`${project.title} live demo`}
                  title="Live demo"
                >
                  <ExternalIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    [],
  )

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  const [headingRef, headingInView] = useInView({ threshold: 0.2 })

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <div ref={headingRef} className={headingInView ? 'animate-fade-up' : 'opacity-0'}>
          <SectionHeading
            eyebrow="Projects / Work Samples"
            title="Things I have built"
            description="A selection of academic and personal projects. Use the filters to narrow the list, then open a card to read the full details."
          />
        </div>

        {/* ---- Category filter (useState driven) ---- */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => {
            const count =
              category === 'All'
                ? projects.length
                : projects.filter((p) => p.category === category).length
            const isActive = filter === category
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isActive
                    ? 'border-transparent bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                    : 'border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-indigo-300'
                }`}
              >
                {category}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    isActive
                      ? 'bg-white/25 text-white'
                      : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        <p className="mb-6 text-center text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
          Showing <span className="font-semibold text-slate-700 dark:text-slate-200">{visible.length}</span>{' '}
          {visible.length === 1 ? 'project' : 'projects'}
          {filter !== 'All' && (
            <>
              {' '}
              in{' '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{filter}</span>
            </>
          )}
        </p>

        {/* ---- Grid ---- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ---- Empty state ---- */}
        {visible.length === 0 && (
          <div className="card mx-auto max-w-md p-10 text-center">
            <FolderIcon className="mx-auto h-10 w-10 text-slate-300 dark:text-slate-600" />
            <p className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              No projects in this category yet.
            </p>
            <button
              type="button"
              onClick={() => setFilter('All')}
              className="btn-ghost mt-4"
            >
              Show all projects
            </button>
          </div>
        )}

        {/* ---- Note about adding images ---- */}
        <p className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
          Tip: add a screenshot to <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">public/projects/</code>{' '}
          and set the <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">image</code> field in{' '}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">src/data/portfolio.js</code> to replace the placeholder art.
        </p>
      </div>
    </section>
  )
}
