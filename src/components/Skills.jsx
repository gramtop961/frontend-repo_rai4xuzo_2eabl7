const skills = [
  { name: 'React', level: 'Expert' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'Framer Motion', level: 'Advanced' },
  { name: 'Accessibility (a11y)', level: 'Advanced' },
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
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{s.name}</p>
                <span className="text-xs text-slate-300">{s.level}</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 w-[85%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
