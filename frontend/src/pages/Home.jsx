import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ContactInfo from "../components/ContactInfo";
import portfolioService from "../services/portfolioService";

const Home = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await portfolioService.getPortfolio();
      if (response.success) {
        setPortfolio(response.data);
      } else {
        setError(response.message || "Failed to load portfolio");
      }
    } catch (err) {
      setError("Unable to load portfolio information. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg">Loading portfolio...</p>
          </div>
        </div>
      ) : error ? (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <button
              onClick={fetchPortfolio}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      ) : (
        <>
          <Hero portfolio={portfolio} />
          <About portfolio={portfolio} />
          <ContactInfo portfolio={portfolio} />
        </>
      )}
    </div>
  );
};

export default Home;
