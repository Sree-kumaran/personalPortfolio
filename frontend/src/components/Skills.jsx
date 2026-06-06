import React, { useState, useEffect } from "react";
import skillService from "../services/skillService";
import SkillSkeleton from "./SkillSkeleton";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await skillService.getSkills();
      if (response.success) {
        setSkills(response.data);
      } else {
        setError(response.message || "Failed to load skills");
      }
    } catch (err) {
      setError("Unable to load skills. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <SkillSkeleton />
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <button
              onClick={fetchSkills}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        ) : skills.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No skills found</p>
          </div>
        ) : (
          /* Skills Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Title */}
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  {skillGroup.category}
                </h3>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600/20 border border-blue-500/50 text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-600/40 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
