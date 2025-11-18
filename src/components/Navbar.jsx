import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'translate-y-0' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mt-6 rounded-2xl border bg-slate-900/50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 transition-all ${
          scrolled ? 'border-white/15 shadow-lg shadow-sky-500/5' : 'border-white/10'
        }`}>
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="group flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30">
                <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-white text-lg font-semibold tracking-tight">Your Name</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                </a>
              ))}
              <div className="ml-3 h-6 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="#contact" className="text-slate-300 hover:text-white">
                  <Mail size={20} />
                </a>
              </div>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg border border-white/10">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
                    <Linkedin size={20} />
                  </a>
                  <a href="#contact" className="text-slate-300 hover:text-white">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
