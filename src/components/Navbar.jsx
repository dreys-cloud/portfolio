import { useEffect, useState } from 'react'
import {
  MenuIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
  DownloadIcon,
} from './Icons'
import { profile } from '../data/portfolio'
import { downloadCV } from '../utils/downloadCV'

/**
 * Fixed top navigation bar.
 *  - highlights the section currently in view (scroll-spy)
 *  - shows a reading-progress bar
 *  - collapsible mobile menu (useState + event handling)
 *  - dark mode toggle
 */
export default function Navbar({ links, active, dark, onToggleTheme, onDownloadCV }) {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  /* Reading progress + subtle background change once the page is scrolled. */
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
      setScrolled(el.scrollTop > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  /* Prevent the page behind the mobile menu from scrolling. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* Close the mobile menu when the viewport grows to desktop size. */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavigate = () => setOpen(false)

  const handleDownload = () => {
    setOpen(false)
    onDownloadCV ? onDownloadCV() : downloadCV()
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      {/* Reading progress bar */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />

      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavigate}
          className="group flex items-center gap-2.5 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition-transform duration-300 group-hover:scale-105">
            {profile.monogram}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-slate-800 sm:block dark:text-slate-100">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === link.id
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300'
                }`}
                aria-current={active === link.id ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-indigo-500 transition-all duration-300 ${
                    active === link.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={handleDownload}
            className="btn-ghost px-4 py-2"
            aria-label="Download CV"
          >
            <DownloadIcon className="h-4 w-4" />
            CV
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className="btn-icon"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="btn-icon"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="btn-icon"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden dark:border-slate-800 dark:bg-slate-950/95 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={handleNavigate}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <button type="button" onClick={handleDownload} className="btn-primary w-full">
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
