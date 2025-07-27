import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaDownload,
  FaTerminal,
  FaCode,
  FaDatabase,
  FaMicrochip,
  FaGlobe,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import BinaryRainBackground from './BinaryRainBackground';

const orbitIcons = [
  { icon: <FaTerminal />, delay: 0 },
  { icon: <FaCode />, delay: 1 },
  { icon: <FaDatabase />, delay: 2 },
  { icon: <FaMicrochip />, delay: 3 },
  { icon: <FaGlobe />, delay: 4 },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-black to-gray-900 text-white pt-28 px-4 z-0 overflow-hidden"
    >
      {/* 🔁 Background Animation */}
      <BinaryRainBackground />

      {/* 🌀 Glowing Logo + Orbiting Icons */}
      <div className="relative w-36 h-36 md:w-44 md:h-44 mb-6 z-10">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-spin-slow" />
        <div className="absolute inset-2 rounded-full border border-purple-400/30 animate-spin-reverse-slow" />

        {/* Orbiting Icons */}
        {orbitIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-cyan-400 hover:text-pink-400 hover:scale-125 transition-all duration-300`}
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${index * 72}deg) translate(70px) rotate(-${index * 72}deg)`,
              animation: `orbit ${6 + index}s linear infinite`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            {item.icon}
          </div>
        ))}

        {/* Center Logo */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-0.5">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Logo"
              className=""
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 className="z-10 text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-4">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Khogula Kannan K
        </span>
      </h1>

      {/* Tagline */}
      <h2 className="z-10 text-xl md:text-2xl lg:text-3xl font-mono font-semibold text-cyan-400 mb-6">
        AI/ML Engineer
      </h2>

      {/* Description */}
      <p className="z-10 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono mb-10">
        Crafting digital experiences with cutting-edge technology.
        <br />
        <span className="text-cyan-400">Building the future, one line of code at a time.</span>
      </p>

      {/* Stat Cards */}
      <div className="z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
        {[
          { value: '5', label: 'PROJECTS', colors: 'from-cyan-400 to-blue-500' },
          { value: 'Fresher', label: 'EXPERIENCE', colors: 'from-green-400 to-cyan-500' },
          { value: '100+', label: 'LEETCODE', colors: 'from-purple-400 to-pink-500' },
          { value: '7', label: 'TECHNOLOGIES', colors: 'from-orange-400 to-red-500' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="relative group bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.colors} bg-clip-text text-transparent`}>
              {stat.value}
            </div>
            <div className="text-sm font-mono text-gray-400 mt-1">{stat.label}</div>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${stat.colors} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
            />
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-mono font-bold rounded-xl transition-all duration-300 cursor-pointer"
        >
          <span className="relative z-10 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-play">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
            <span>VIEW PROJECTS</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
        </Link>

        <a
          href="/Khogula_Resume.pdf"
          download
          className="group px-8 py-4 border border-cyan-400/50 text-cyan-400 font-mono font-bold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 flex items-center space-x-2"
        >
          <FaDownload />
          <span>DOWNLOAD CV</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="z-10 flex items-center justify-center space-x-6">
        <a href="https://github.com/khogula2004" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 p-3 rounded-lg hover:bg-gray-800/50 transition">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/khogula-kannan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 p-3 rounded-lg hover:bg-gray-800/50 transition">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="text-gray-500 hover:text-purple-400 p-3 rounded-lg hover:bg-gray-800/50 transition">
          <FaExternalLinkAlt size={22} />
        </a>
      </div>

      {/* Scroll Down Button */}
      <div className="z-10 absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors group">
          <span className="text-xs font-mono">SCROLL DOWN</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-chevron-down group-hover:scale-110 transition-transform">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
