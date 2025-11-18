import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const sampleProjects = [
  {
    title: 'Realtime Dashboard',
    description: 'A high-performance analytics dashboard with live charts and collaborative filters.',
    tags: ['React', 'Tailwind', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Design System Kit',
    description: 'A reusable component library with accessibility-first patterns and theming.',
    tags: ['TypeScript', 'Radix', 'Storybook'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive product explorer powered by Spline and smooth scroll animations.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
]

function Projects() {
  const [projects, setProjects] = useState(sampleProjects)

  useEffect(() => {
    // In a real app, fetch projects from a backend here
  }, [])

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_10%,rgba(56,189,248,0.08),transparent_60%),radial-gradient(600px_circle_at_80%_10%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 text-slate-300">A selection of work focused on speed, accessibility and delightful interactions.</p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
        >
          {projects.map((p, idx) => (
            <motion.a
              key={idx}
              href={p.link}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/10 to-blue-500/10" />
              <div className="relative">
                <div className="h-32 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 mb-5" />
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-24 right-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl transition-all duration-500 group-hover:-bottom-16 group-hover:opacity-100" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
