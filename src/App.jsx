import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Subtle mouse parallax for background accents
    const root = document.documentElement
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 6
      const y = (e.clientY / window.innerHeight - 0.5) * 6
      root.style.setProperty('--par-x', `${x}px`)
      root.style.setProperty('--par-y', `${y}px`)
    }
    window.addEventListener('pointermove', handler)
    return () => window.removeEventListener('pointermove', handler)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(59,130,246,0.08),transparent_60%)]"
          style={{ translateX: 'var(--par-x)', translateY: 'var(--par-y)' }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(800px_circle_at_90%_0%,rgba(56,189,248,0.08),transparent_60%)]"
          style={{ translateX: 'calc(var(--par-x) * -1)', translateY: 'calc(var(--par-y) * -1)' }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-sm text-slate-400">Built with React, Tailwind & Framer Motion</div>
        </div>
      </footer>
    </div>
  )
}

export default App
