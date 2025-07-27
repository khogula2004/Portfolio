import React from 'react';

const SkillCard = ({ icon, title, skills, colorFrom = 'green-400', colorTo = 'cyan-500' }) => {
  return (
    <div className="border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-lg bg-gradient-to-r from-${colorFrom} to-${colorTo} bg-opacity-20`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{skill.emoji}</span>
                <span className="text-white font-medium text-sm">{skill.name}</span>
              </div>
              <span className="text-cyan-400 font-mono text-sm">{skill.percent}%</span>
            </div>
            <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-${colorFrom} to-${colorTo} rounded-full relative`}
                style={{ width: `${skill.percent}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
