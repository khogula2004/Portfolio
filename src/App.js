import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ParticlesBackground from './components/ParticlesBackground';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (loading) {
    return (
      <div className="relative flex flex-col justify-center items-center min-h-screen bg-black text-white font-mono overflow-hidden">
        {/* Binary background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.05) 1px, transparent 0px)',
              backgroundSize: '40px 40px',
              animation: 'scrollBinary 15s linear infinite',
            }}
          />
        </div>

        {/* Loader content */}
        <div className="relative z-10 text-center">
          {/* Logo */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin glow-shadow">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-2" />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold tracking-widest bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            KHOGULA<span className="text-pink-500">_PORTFOLIO</span>
          </h1>

          {/* Subtext */}
          <p className="mt-2 text-gray-400 text-sm font-mono tracking-wider">
            <span className="text-pink-400">⚙</span> OPTIMIZING PERFORMANCE
          </p>

          {/* Progress Bar */}
          <div className="mt-6 w-72 mx-auto">
            <div className="text-xs text-cyan-400 font-mono mb-1 tracking-wide">PROGRESS</div>
            <div className="relative w-full h-2 bg-gray-800 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-sm text-cyan-400 mt-1 font-mono">{progress}%</div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center space-x-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-200" />
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-400" />
          </div>

          {/* Footer Info */}
          <div className="mt-6 text-xs font-mono text-gray-400 space-y-1">
            <p>SYSTEM: PORTFOLIO.OS v2.0</p>
            <p>BUILD: {new Date().toISOString().slice(0, 10).replace(/-/g, '.')}</p>
            <p className="text-green-400">• SECURE CONNECTION ESTABLISHED</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-futuristic scroll-smooth">
      {/* Glowing particles background */}
      <ParticlesBackground />

      {/* Navigation Bar */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
