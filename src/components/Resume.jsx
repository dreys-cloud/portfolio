import { useState } from 'react'
import SectionHeading from './SectionHeading'
import {
  Icon,
  DownloadIcon,
  CapIcon,
  BriefcaseIcon,
  CodeIcon,
  AwardIcon,
} from './Icons'
import {
  education,
  experience,
  certifications,
  resumeSkills,
} from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import { downloadCV } from '../utils/downloadCV'

const TABS = [
  { id: 'education', label: 'Education', icon: CapIcon },
  { id: 'experience', label: 'Experience', icon: BriefcaseIcon },
  { id: 'skills', label: 'Skills', icon: CodeIcon },
]

/* A single entry in the education timeline. */
function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  return (
    <li
      ref={ref}
      className={`relative pl-8 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
      style={inView && index ? { animationDelay: `${index * 90}ms` } : undefined}
    >
      {/* node + connecting line */}
      <span className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-900">
        <span className="h-2 w-2 rounded-full bg-indigo-500" />
      </span>
      <div className="card card-hover ml-1 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
          <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
            {item.period}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{item.org}</p>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {item.detail}
        </p>
        {item.points && (
          <ul className="mt-3 space-y-1.5">
            {item.points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {point}
              </li>
            ))}
          </ul>
        )}
        {item.tags && (
          <ul className="mt-3.5 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function Resume() {
  const [tab, setTab] = useState('education')

  return (
    <section id="resume" className="section bg-white dark:bg-slate-900/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Resume / CV"
          title="Education, experience & skills"
          description="Switch between the tabs below to browse the different parts of my resume. Prefer a document? Use the download button."
        />

        {/* ---- Tab bar (useState driven) ---- */}
        <div
          role="tablist"
          aria-label="Resume sections"
          className="mx-auto mb-10 flex max-w-xl flex-wrap items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-slate-100/70 p-1.5 dark:border-slate-800 dark:bg-slate-900"
        >
          {TABS.map(({ id, label, icon: TabIcon }) => {
            const isActive = tab === id
            return (
              <button
                key={id}
                role="tab"
                id={`tab-${id}`}
                aria-selected={isActive}
                aria-controls={`panel-${id}`}
                type="button"
                onClick={() => setTab(id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isActive
                    ? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-800 dark:text-indigo-300'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <TabIcon className="h-4 w-4" />
                {label}
              </button>
            )
          })}
        </div>

        {/* ---- Panels ---- */}
        <div className="mx-auto max-w-3xl">
          {tab === 'education' && (
            <div
              role="tabpanel"
              id="panel-education"
              aria-labelledby="tab-education"
              className="animate-fade-in"
            >
              <ol className="space-y-5">
                {education.map((item, i) => (
                  <TimelineItem key={item.id} item={item} index={i} />
                ))}
              </ol>

              {/* Certifications sit alongside education */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/40">
                <div className="flex items-center gap-2">
                  <AwardIcon className="h-5 w-5 text-indigo-500" />
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    Certifications &amp; Trainings
                  </h3>
                </div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {certifications.map((cert) => (
                    <li
                      key={cert.id}
                      className="rounded-xl border border-slate-200 bg-white p-3.5 transition-colors hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500/40"
                    >
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        {cert.title}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {cert.org} · {cert.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {tab === 'experience' && (
            <div
              role="tabpanel"
              id="panel-experience"
              aria-labelledby="tab-experience"
              className="animate-fade-in"
            >
              <ol className="space-y-5">
                {experience.map((item, i) => (
                  <TimelineItem key={item.id} item={item} index={i} />
                ))}
              </ol>
            </div>
          )}

          {tab === 'skills' && (
            <div
              role="tabpanel"
              id="panel-skills"
              aria-labelledby="tab-skills"
              className="animate-fade-in"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(resumeSkills).map(([group, list]) => (
                  <div key={group} className="card card-hover p-5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300">
                        <Icon name="code" className="h-4 w-4" />
                      </span>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {group}
                      </h3>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {list.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:text-indigo-300"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ---- Download prompt ---- */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 p-6 text-center sm:flex-row sm:text-left dark:border-slate-700">
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Need a printable copy of my resume?
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Downloads a formatted HTML file you can open and save as PDF.
            </p>
          </div>
          <button type="button" onClick={downloadCV} className="btn-primary shrink-0">
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}
