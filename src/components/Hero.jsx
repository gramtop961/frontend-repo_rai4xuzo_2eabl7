import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950/90 pointer-events-none" />
      </div>

      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
        <span className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="max-w-2xl py-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance projects
          </motion.div>

          <motion.h1
            className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Frontend Developer crafting modern, interactive web experiences
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-slate-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            I specialize in building fast, accessible interfaces with React, TypeScript and Tailwind. I love turning complex ideas into smooth, delightful products.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.6 },
              },
            }}
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-2.5 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-[0.98] transition"
            >
              View Projects
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 active:scale-[0.98] transition"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
