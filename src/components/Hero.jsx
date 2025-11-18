import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Frontend Developer crafting modern, interactive web experiences
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            I specialize in building fast, accessible interfaces with React, TypeScript and Tailwind. I love turning complex ideas into smooth, delightful products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-2.5 text-white font-medium shadow-lg shadow-blue-500/25">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-white">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
