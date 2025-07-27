import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ParticlesBackground from './components/ParticlesBackground';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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
        {/* You can add <Contact /> or other sections below */}
      </main>
    </div>
  );
}

export default App;
