import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div className="pointer-events-none absolute -top-20 -right-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-slate-300">
            I’m a frontend-focused developer with a passion for crafting performant, accessible, and interactive products. My background spans design systems, complex dashboards, and marketing sites with engaging motion.
          </p>
          <p className="mt-4 text-slate-300">
            My toolkit centers around React, TypeScript, and Tailwind, often paired with Framer Motion and Spline for immersive experiences. I enjoy collaborating with design and product to turn ideas into elegant, maintainable code.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
