import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())

    // For now just simulate sending
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you soon.')
    e.target.reset()
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-slate-300">Have a project in mind? Let’s talk.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <input name="name" required placeholder="Your name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" />
            <input type="email" name="email" required placeholder="Email" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" />
            <textarea name="message" required rows="5" placeholder="Tell me about your project..." className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400" />
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-2.5 text-white font-medium shadow-lg shadow-blue-500/25">
              Send Message
            </button>
            {status && <p className="text-emerald-300 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
