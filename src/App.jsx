import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { navigation } from './data/portfolio'
import { downloadCV } from './utils/downloadCV'
import { useScrollSpy } from './hooks/useScrollSpy'

/* Computed once at module scope so the array identity stays stable
   (useScrollSpy depends on it). */
const SECTION_IDS = navigation.map((item) => item.id)
const THEME_KEY = 'portfolio-theme'

export default function App() {
  /* ---- Dark mode (useState + localStorage persistence) ---- */
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = window.localStorage.getItem(THEME_KEY)
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light')
  }, [dark])

  const toggleTheme = useCallback(() => setDark((value) => !value), [])

  /* ---- Scroll-spy for the active nav link ---- */
  const activeSection = useScrollSpy(SECTION_IDS)

  /* ---- Download CV handler shared by nav / hero / about / resume ---- */
  const handleDownloadCV = useCallback(() => downloadCV(), [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar
        links={navigation}
        active={activeSection}
        dark={dark}
        onToggleTheme={toggleTheme}
        onDownloadCV={handleDownloadCV}
      />

      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
