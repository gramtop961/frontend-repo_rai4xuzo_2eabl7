import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Next.js', level: 84 },
  { name: 'Framer Motion', level: 86 },
  { name: 'Accessibility (a11y)', level: 82 },
]

function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
          <p className="mt-2 text-slate-300">Technologies and practices I use to ship quality interfaces.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{s.name}</p>
                <span className="text-xs text-slate-300">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
