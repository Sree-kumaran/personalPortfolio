function Hero({ name, education }) {
  return (
    <section
      id="home"
      className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-14 pt-16 text-center sm:px-6 lg:px-8"
    >
      <p className="mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
        Portfolio
      </p>
      <h1 className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent transition-all duration-500 sm:text-5xl lg:text-6xl">
        {name}
      </h1>
      <p className="mt-4 max-w-2xl whitespace-pre-line text-base text-slate-300 sm:text-lg">
        {education}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400"
        >
          View Contact
        </a>
        <a
          href="#about"
          className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-medium text-slate-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
        >
          About Me
        </a>
      </div>
    </section>
  )
}

export default Hero
