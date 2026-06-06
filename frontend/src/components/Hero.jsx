import React from "react";

const Hero = ({ portfolio }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center animate-fade-in">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          {portfolio?.name || "Loading..."}
        </h1>

        {/* Education */}
        <p className="text-lg sm:text-xl text-gray-300 mb-2 whitespace-pre-line">
          {portfolio?.education || "Loading..."}
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto my-6"></div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => handleScroll("contact")}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            View Contact
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1"
          >
            About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
