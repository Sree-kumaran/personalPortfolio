const links = [
  { href: '#home', label: 'Portfolio' },
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide text-white transition duration-300 hover:text-blue-400"
        >
          Sree Kumaran S
        </a>

        <ul className="flex items-center gap-2 text-sm text-slate-200 sm:gap-6 sm:text-base">
          {links.map((link, index) => (
            <li key={`${link.label}-${index}`}>
              <a
                href={link.href}
                className="rounded-md px-2 py-1 transition duration-300 hover:bg-slate-800 hover:text-blue-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
