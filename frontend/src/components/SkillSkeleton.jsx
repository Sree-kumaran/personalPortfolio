import React from "react";

const SkillSkeleton = () => {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 animate-pulse"
        >
          <div className="h-6 bg-slate-600 rounded w-32 mb-4"></div>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4].map((badge) => (
              <div
                key={badge}
                className="h-8 bg-slate-600 rounded-full w-20"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSkeleton;
