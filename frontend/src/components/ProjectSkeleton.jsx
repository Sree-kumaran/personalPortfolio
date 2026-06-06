import React from "react";

const ProjectSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div
          key={index}
          className="bg-slate-700/50 rounded-xl border border-slate-600 overflow-hidden animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="w-full h-48 bg-slate-600"></div>

          {/* Content Skeleton */}
          <div className="p-6">
            {/* Title */}
            <div className="h-6 bg-slate-600 rounded w-3/4 mb-3"></div>

            {/* Description */}
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-slate-600 rounded w-full"></div>
              <div className="h-4 bg-slate-600 rounded w-5/6"></div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {[1, 2, 3].map((badge) => (
                <div
                  key={badge}
                  className="h-6 bg-slate-600 rounded-full w-16"
                ></div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <div className="h-10 bg-slate-600 rounded w-24"></div>
              <div className="h-10 bg-slate-600 rounded w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSkeleton;
