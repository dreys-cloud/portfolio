import { useEffect, useState } from 'react'
import { profile, socials, about } from '../data/portfolio'
import {
  ArrowRightIcon,
  DownloadIcon,
  MailIcon,
  Icon,
  ChevronDownIcon,
} from './Icons'
import { downloadCV } from '../utils/downloadCV'

/**
 * Home / Dashboard section.
 * Interactive pieces:
 *  - typewriter effect cycling through the roles list (useState + useEffect)
 *  - Download CV button (click handler)
 *  - social links built from data
 */
export default function Hero() {
  const roles = profile.roles
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [index, setIndex] = useState(0)

  /* Typewriter animation */
  useEffect(() => {
    const current = roles[index % roles.length]
    let delay = deleting ? 40 : 85
    if (!deleting && text === current) delay = 1500 // pause when the word is complete

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) {
          setDeleting(true)
          return
        }
        setText(current.slice(0, text.length + 1))
      } else {
        if (text === '') {
          setDeleting(false)
          setIndex((i) => (i + 1) % roles.length)
          return
        }
        setText(current.slice(0, text.length - 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, roles])

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-400/25 blur-3xl dark:bg-indigo-600/20" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-600/20" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-600/10" />
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgb(148 163 184 / 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.25) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---- Left column ---- */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hi, I&apos;m <span className="gradient-text">{profile.firstName}</span>
            <span className="block text-slate-900 dark:text-white">Welcome to my portfolio</span>
          </h1>

          <p className="mt-5 flex min-h-[2rem] flex-wrap items-center gap-x-2 text-lg font-semibold text-slate-700 sm:text-xl dark:text-slate-300">
            <span className="text-indigo-600 dark:text-indigo-400">I&apos;m a</span>
            <span aria-live="polite">
              {text}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-blink bg-indigo-500 align-middle sm:h-6" />
            </span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>

          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.intro[0]}
          </p>

          {/* Call to action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={downloadCV}
              className="btn-ghost"
              title="Download an HTML copy of my CV"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </button>
            <a href="#contact" className="btn-ghost" aria-label="Go to contact section">
              <MailIcon className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
              Find me
            </span>
            <span className="h-px w-8 bg-slate-300 dark:bg-slate-700" />
            <ul className="flex items-center gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel={social.url.startsWith('http') ? 'noreferrer noopener' : undefined}
                    className="btn-icon"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon name={social.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---- Right column: profile card ---- */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-up animation-delay-200">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/25 via-violet-500/20 to-sky-500/25 blur-2xl" />
          <div className="card overflow-hidden shadow-soft">
            <div className="relative h-40 bg-gradient-to-br from-indigo-500 via-violet-600 to-sky-500">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.5) 0, transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.35) 0, transparent 40%)',
                }}
                aria-hidden="true"
              />
              <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                {profile.location}
              </span>
            </div>

            <div className="-mt-14 px-6 pb-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl border-4 border-white bg-gradient-to-br from-slate-800 to-slate-900 text-3xl font-bold text-white shadow-xl dark:border-slate-900">
                {profile.monogram}
              </div>
              <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                {profile.name}
              </h2>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {profile.role}
              </p>

              <dl className="mt-5 space-y-2.5 text-sm">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <MailIcon className="h-4 w-4 shrink-0 text-slate-400" />
                  <dd className="truncate">{profile.email}</dd>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Icon name="pin" className="h-4 w-4 shrink-0 text-slate-400" />
                  <dd>{profile.location}</dd>
                </div>
              </dl>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {about.facts.slice(0, 2).map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50"
                  >
                    <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-xs font-semibold leading-snug text-slate-700 dark:text-slate-200">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-5 hidden animate-float items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft sm:flex dark:border-slate-700 dark:bg-slate-900">
            <Icon name="code" className="h-5 w-5 text-indigo-500" />
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-100">
                ReactJS + Tailwind
              </p>
              <p className="text-[10px] text-slate-400">Built from scratch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="container-page mt-16">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="card card-hover p-5 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-bold gradient-text sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Scroll cue */}
      <div className="mt-14 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-indigo-500 dark:text-slate-500"
        >
          Scroll to explore
          <ChevronDownIcon className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
