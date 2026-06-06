import React from "react";

const About = ({ portfolio }) => {
  return (
    <section id="about" className="py-20 bg-slate-800/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-slate-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {portfolio?.about || "Loading about information..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
