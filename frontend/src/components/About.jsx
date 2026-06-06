function About({ about }) {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/10 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">About Me</h2>
        <p className="mt-4 leading-relaxed text-slate-300">{about}</p>
      </div>
    </section>
  )
}

export default About
