import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ContactInfo from '../components/ContactInfo'
import { getPortfolio } from '../services/portfolioService'

function Home() {
  const [portfolio, setPortfolio] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchPortfolio = async ({ showLoader = false } = {}) => {
    try {
      if (showLoader) {
        setLoading(true)
      }
      setError('')

      const result = await getPortfolio()
      setPortfolio(result?.data?.[0] || null)
    } catch {
      setError('Unable to load portfolio information.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const loadPortfolio = async () => {
      await fetchPortfolio()
    }

    loadPortfolio()
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100">
      <Navbar />

      {loading ? (
        <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="animate-pulse rounded-2xl border border-slate-800 bg-slate-900/80 p-8">
            <p className="text-slate-300">Loading portfolio...</p>
          </div>
        </main>
      ) : error ? (
        <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-8 text-center">
            <p className="text-red-200">{error}</p>
            <button
              type="button"
              onClick={() => fetchPortfolio({ showLoader: true })}
              className="mt-4 rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition duration-300 hover:bg-red-400"
            >
              Retry
            </button>
          </div>
        </main>
      ) : (
        <main>
          <Hero
            name={portfolio?.name || 'Sree Kumaran S'}
            education={
              portfolio?.education ||
              'Final Year Undergraduate Student\nComputer Science and Engineering'
            }
          />
          <About
            about={
              portfolio?.about ||
              'Passionate Computer Science undergraduate interested in software development, web technologies, full-stack development, cloud computing, and research.'
            }
          />
          <ContactInfo
            email={portfolio?.email}
            github={portfolio?.github}
            linkedin={portfolio?.linkedin}
            phone={portfolio?.phone}
          />
        </main>
      )}
    </div>
  )
}

export default Home
