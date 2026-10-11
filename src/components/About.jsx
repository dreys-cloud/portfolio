import SectionHeading from './SectionHeading'
import SkillBar from './SkillBar'
import { Icon, CheckIcon, DownloadIcon } from './Icons'
import { about, profile } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import { downloadCV } from '../utils/downloadCV'

/* Small helper so each paragraph/tile can reveal itself on scroll. */
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'animate-fade-up' : 'opacity-0'}`}
      style={inView && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section bg-white dark:bg-slate-900/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know me"
          description="A short introduction to my background, the technologies I work with, and what keeps me curious."
        />

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ---- Background ---- */}
          <Reveal>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Personal background
            </h3>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Quick facts grid */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-indigo-500/40"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                    <Icon name={fact.icon} className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {fact.label}
                    </p>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <h3 className="mt-9 text-xl font-semibold text-slate-900 dark:text-white">
              Interests
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <li key={interest} className="chip hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-300">
                  <CheckIcon className="mr-1.5 h-3.5 w-3.5 text-indigo-500" />
                  {interest}
                </li>
              ))}
            </ul>

            <button type="button" onClick={downloadCV} className="btn-primary mt-8">
              <DownloadIcon className="h-4 w-4" />
              Download my CV
            </button>
          </Reveal>

          {/* ---- Skills ---- */}
          <Reveal delay={120}>
            <div className="card p-6 sm:p-7">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                  <Icon name="spark" className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Skills &amp; proficiency
                </h3>
              </div>

              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                An honest self-assessment of the tools I use most. Bars animate as they scroll into
                view.
              </p>

              <div className="mt-7 space-y-8">
                {about.skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                      {group.title}
                    </p>
                    <div className="space-y-4">
                      {group.skills.map((skill) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun fact tile */}
            <div className="mt-6 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-5 dark:border-indigo-500/25 dark:from-indigo-500/10 dark:to-violet-500/10">
              <p className="text-sm font-medium text-indigo-900 dark:text-indigo-200">
                “{profile.tagline}”
              </p>
              <p className="mt-2 text-xs text-indigo-700/70 dark:text-indigo-300/70">
                — {profile.name}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
