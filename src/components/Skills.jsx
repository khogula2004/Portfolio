import React from 'react';
import {
  FaCode,
  FaCogs,
  FaCloud,
  FaRobot,
  FaWindowRestore,
  FaApple,
  FaWindows,
  FaAws,
} from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaCode className="text-cyan-400 w-6 h-6" />
            <span className="text-cyan-400 font-mono text-sm tracking-widest">
              TECHNOLOGY_MATRIX
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center font-mono mb-4">
            <span className="text-cyan-400">&lt;</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SKILLS
            </span>
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            AI/ML engineering expertise spanning machine learning, deep learning, computer vision,
            NLP, and cloud-integrated intelligent systems.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Programming"
            icon={<FaCode />}
            skills={[
              { name: 'Python', level: 95, icon: '🐍' },
              { name: 'SQL', level: 90, icon: '🗃️' },
              { name: 'HTML/CSS', level: 92, icon: '🌐' },
            ]}
            gradientFrom="from-green-400"
            gradientTo="to-cyan-500"
          />

          <SkillCard
            title="ML Frameworks & Tools"
            icon={<FaRobot />}
            skills={[
              { name: 'OpenCV', level: 85, icon: '👁️' },
              { name: 'NumPy / Pandas', level: 90, icon: '📊' },
              { name: 'Scikit-learn / Mediapipe / NLP', level: 87, icon: '🧠' },
            ]}
            gradientFrom="from-purple-400"
            gradientTo="to-pink-500"
          />

          <SkillCard
            title="Concepts"
            icon={<FaCogs />}
            skills={[
              { name: 'Machine Learning', level: 90, icon: '📈' },
              { name: 'Deep Learning', level: 88, icon: '🧠' },
              { name: 'DBMS', level: 85, icon: '🗄️' },
            ]}
            gradientFrom="from-yellow-400"
            gradientTo="to-orange-400"
          />

          <SkillCard
            title="Operating Systems"
            icon={<FaWindowRestore />}
            skills={[
              { name: 'Windows', level: 95, icon: <FaWindows /> },
              { name: 'macOS', level: 90, icon: <FaApple /> },
              { name: 'Android & iOS', level: 87, icon: '📱' },
            ]}
            gradientFrom="from-cyan-400"
            gradientTo="to-blue-500"
          />

          <SkillCard
            title="Cloud & Others"
            icon={<FaCloud />}
            skills={[
              { name: 'AWS', level: 85, icon: <FaAws /> },
              { name: 'Git/GitHub', level: 90, icon: '🔧' },
              { name: 'VS Code / Colab', level: 92, icon: '🖥️' },
            ]}
            gradientFrom="from-indigo-400"
            gradientTo="to-sky-500"
          />
        </div>
      </div>
    </section>
  );
};

// SkillCard Component
const SkillCard = ({ title, icon, skills, gradientFrom, gradientTo }) => {
  const gradientClass = `${gradientFrom} ${gradientTo}`;

  return (
    <div
      className={`border border-cyan-500/20 bg-gradient-to-br ${gradientFrom}/10 ${gradientTo}/10 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${gradientClass} bg-opacity-20 text-white`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-white font-medium text-sm">{skill.name}</span>
              </div>
              <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
            </div>
            <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${gradientClass} rounded-full relative`}
                style={{ width: `${skill.level}%` }}
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

export default Skills;
