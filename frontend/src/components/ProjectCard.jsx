import React from "react";

const ProjectCard = ({ project }) => {
  const placeholder = "https://via.placeholder.com/400x300?text=Project+Image";

  return (
    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/50 flex flex-col h-full animate-fade-in">
      {/* Image */}
      <div className="relative w-full h-48 bg-slate-600 overflow-hidden">
        <img
          src={project.image || placeholder}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="inline-block bg-blue-600/30 border border-blue-500/50 text-blue-300 px-2 py-1 rounded text-xs font-medium">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-600/20 border border-blue-500/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:bg-blue-600/40 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-slate-800 border border-blue-500/50 text-blue-400 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-300 text-center"
            >
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
