import React from 'react';
import {
  FaCode,
  FaBullseye,
  FaAward,
  FaBook,
  FaCertificate,
  FaGraduationCap,
} from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-black text-white">
      {/* Glowing background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.1) 1px, transparent 0px)',
            backgroundSize: '60px 60px',
          }}
        />
        {[...Array(20)].map((_, idx) => (
          <div
            key={idx}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(-${Math.random() * 100}px)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaCode className="text-cyan-400 w-6 h-6" />
            <span className="text-cyan-400 font-mono text-sm tracking-widest">SYSTEM_PROFILE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-4">
            <span className="text-cyan-400">&lt;</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ABOUT_ME
            </span>
            <span className="text-cyan-400">/&gt;</span>
          </h2>

          {/* ✅ Updated Bio */}
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-400 font-mono leading-relaxed">
            I’m <span className="text-cyan-400">Khogula Kannan K</span>, an AI/ML Engineer driven by curiosity and creativity, with a focus on crafting intelligent systems that solve real-world problems. With hands-on experience in <span className="text-purple-400">Machine Learning</span>, <span className="text-purple-400">Deep Learning</span>, <span className="text-purple-400">Computer Vision</span>, and <span className="text-purple-400">Natural Language Processing</span>, I build models that not only predict but also adapt and improve over time. From experimental prototypes to scalable AI solutions, I strive to design <span className="text-pink-400">data-driven tech</span> that makes a meaningful impact.
          </p>
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div className="w-full max-w-xl mx-auto border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-cyan-400" />
              Education
            </h3>
            <div className="grid gap-4">
              <EduCard
                icon={<FaBook />}
                title="B.Tech – Computer Science Engineering Specializtion in Artificial Intelligence and Machine Learning"
                place="VIT Bhopal University"
                year="2021 – 2025"
              />
              <EduCard
                icon={<FaBook />}
                title="Class XII"
                place="Campion Anglo Indian Hr Sec School"
                year="2020 – 2021"
              />
              <EduCard
                icon={<FaBook />}
                title="SSLC – State Board"
                place="Campion Anglo Indian Hr Sec School"
                year="2018 – 2019"
              />
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-xl border border-cyan-500/20 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-lg p-6 backdrop-blur-sm mx-auto shadow-[0_0_20px_rgba(255,0,128,0.2)] hover:shadow-[0_0_30px_rgba(255,0,128,0.4)] transition-all duration-300">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaCertificate className="text-pink-400" />
              Certifications
            </h3>
            <ul className="space-y-4 text-sm lg:text-base text-gray-300">
              <li className="flex items-start gap-3 group">
                <FaAward className="text-cyan-400 mt-1" />
                <div>
                  <a
                    href="https://drive.google.com/file/d/1yJyN4lhMJ6nMnVpfDGr7kwWHGvqQKDcS/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 underline hover:text-cyan-400 transition"
                  >
                    AWS Cloud Practitioner
                  </a>
                  <p className="text-xs text-gray-400">Amazon Web Services</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <FaAward className="text-purple-400 mt-1" />
                <div>
                  <a
                    href="https://drive.google.com/file/d/1KRiyZ_f6oQk9c7G48cxmhV6mtXkHaQDj/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 underline hover:text-purple-400 transition"
                  >
                    AI Specialist
                  </a>
                  <p className="text-xs text-gray-400">Salesforce</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <FaAward className="text-green-400 mt-1" />
                <div>
                  <a
                    href="https://drive.google.com/file/d/1h1TqJCN0_SweoTJ_QH-zN9HU8VSDsDcI/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-300 underline hover:text-green-400 transition"
                  >
                    AI Certified Foundations Associate
                  </a>
                  <p className="text-xs text-gray-400">Oracle</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <FaAward className="text-green-400 mt-1" />
                <div>
                  <a
                    href="https://drive.google.com/drive/folders/18EwGarVntTv33pynxKqga55TCHmMHdAq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-300 underline hover:text-green-400 transition"
                  >
                    Privacy and Security
                  </a>
                  <p className="text-xs text-gray-400">NPTEL</p>
                </div>
              </li>
            </ul>

            {/* Status indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-gray-700 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-mono">ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-database w-4 h-4 text-cyan-400"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
                <span className="text-gray-400 text-xs font-mono">LEARNING_MODE: ON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="border border-cyan-500/20 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg p-6 backdrop-blur-sm mt-12">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2 justify-center">
            <FaBullseye className="text-purple-400" />
            Achievements
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-sm lg:text-base text-gray-300 list-disc pl-5">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-purple-300">
                <FaBook />
              </span>
              <div>
                Published research on <span className="text-pink-400">AI-based Healthcare Systems</span> exploring diagnostic accuracy and patient care enhancement.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-yellow-400">
                <FaAward />
              </span>
              <div>
                Achieved <span className="text-cyan-300 font-semibold">5-star Python proficiency</span> on HackerRank.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Education Card
const EduCard = ({ icon, title, place, year }) => (
  <div className="group p-4 bg-black/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
    <div className="flex items-start gap-3">
      <div className="p-2 lg:p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-opacity-20">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm lg:text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {title}
        </h4>
        <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">{place}</p>
        <p className="text-gray-500 text-xs">{year}</p>
      </div>
    </div>
  </div>
);

export default About;
