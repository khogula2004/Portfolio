import React, { useState } from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';
import { LuFilter, LuSettings, LuCode } from 'react-icons/lu';
import './Projects.css';

const projectsData = [
  {
    title: 'Airshare - File Transfer Using Hand Gesture',
    category: 'AI',
    description:
      'Real-time computer vision system for wireless file transfer via hand gestures. Achieved 92% recognition accuracy.',
    tags: ['OpenCV', 'Python', 'MediaPipe'],
    github: 'https://github.com/khogula2004/Airshare',
    image: '/Airshare.png',
  },
  {
    title: 'Kansel - AI Proctoring',
    category: 'AI',
    description:
      'AI-based proctoring tool for online exams. Facial recognition + gaze tracking + behavior detection.',
    tags: ['OpenCV', 'Python', 'Face Recognition'],
    github: 'https://github.com/khogula2004/Kansel_AI',
    image: '/Kansel.png',
  },
  {
    title: 'Sign Language Decipherer',
    category: 'AI',
    description:
      'CNN-based system to translate ASL signs into text. Boosted accessibility for hearing-impaired users.',
    tags: ['CNN', 'OpenCV', 'NLP'],
    github: 'https://github.com/khogula2004/Sign-Language-Decipherer',
    image: '/sign.png',
  },
  {
    title: 'Volume Controller',
    category: 'AI',
    description:
      'Gesture-based volume control app with OpenCV. Reduced detection errors significantly.',
    tags: ['OpenCV', 'Gesture Recognition', 'ML'],
    github: 'https://github.com/khogula2004/Volume-Controller',
    image: '/Volume.png',
  },
  {
    title: 'E-commerce Website',
    category: 'Frontend',
    description:
      'Responsive online store built using React, integrated with JSON Server for product and cart management.',
    tags: ['ReactJS', 'HTML', 'CSS'],
    github: 'https://github.com/khogula2004/E-Commerce-Website',
    image: '/website.png',
  },
  {
    title: 'Attendance System - Facial Recognition',
    category: 'AI',
    description:
      'Secure, real-time attendance app using face recognition with high accuracy.',
    tags: ['OpenCV', 'FaceNet', 'Tkinter'],
    github: 'https://github.com/khogula2004/Face-Recognition-For-Attendance',
    image: '/face.png',
  },
];

const filterOptions = [
  { name: 'All Projects', icon: <LuFilter /> },
  { name: 'AI', icon: <LuSettings /> },
  { name: 'Frontend', icon: <LuCode /> },
];

const Projects = () => {
  const [filter, setFilter] = useState('All Projects');

  const filteredProjects =
    filter === 'All Projects'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="relative py-20 px-4 bg-black text-white overflow-hidden">
      {/* Radial Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.08) 1px, transparent 0px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Animated Blob Particles */}
      <div className="particle-background z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaCode className="text-cyan-400 w-6 h-6" />
            <span className="text-cyan-400 font-mono text-sm tracking-widest">WORK_PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-mono">
            <span className="text-cyan-400">&lt;</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              PROJECT
            </span>
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Real-world projects blending AI-powered intelligence with dynamic frontends — from computer vision systems to responsive UIs built with modern web frameworks
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.name}
              onClick={() => setFilter(opt.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                filter === opt.name
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-black/30 border border-gray-700 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
            >
              {opt.icon}
              <span>{opt.name}</span>
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-700 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="px-2 py-1 rounded text-xs font-mono bg-green-500/20 text-green-400">LOCAL</span>
                <span className="text-gray-500 text-xs font-mono uppercase">{project.category}</span>
              </div>

              <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h4>

              <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-black/30 text-gray-400 rounded text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black/30 border border-gray-700 text-gray-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
