const fallback = 'Not Provided'

function ContactInfo({ email, github, linkedin, phone }) {
  const contactItems = [
    { label: 'Email', value: email },
    { label: 'GitHub', value: github },
    { label: 'LinkedIn', value: linkedin },
    { label: 'Phone', value: phone },
  ]

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg sm:p-8">
        <h2 className="text-2xl font-semibold text-white">Contact</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
            >
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="mt-1 break-all text-slate-100">{item.value || fallback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
