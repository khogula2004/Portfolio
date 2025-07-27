import React, { useEffect, useState } from 'react';
import './Loader.css'; // custom styles here

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const buildDate = new Date().toISOString().split('T')[0].replace(/-/g, '.');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="binary-background" />

      <div className="loader-content">
        {/* Logo */}
        <div className="glow-logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </div>

        {/* Title */}
        <h1 className="glow-text">KHOGULA<span className="text-pink-500">_PORTFOLIO</span></h1>

        {/* Subtitle */}
        <p className="opt-text">
          <span className="text-pink-400">⚙</span> OPTIMIZING PERFORMANCE
        </p>

        {/* Progress Bar */}
        <div className="progress-container">
          <span className="text-xs text-cyan-400 font-mono tracking-widest">PROGRESS</span>
          <div className="bar">
            <div className="fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-sm text-cyan-400 mt-1 font-mono">{progress}%</span>
        </div>

        {/* Dots */}
        <div className="dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>

        {/* Footer Info */}
        <div className="footer-info text-xs font-mono text-gray-400 mt-4">
          <p>SYSTEM: PORTFOLIO.OS v2.0</p>
          <p>BUILD: {buildDate}</p>
          <p className="text-green-400">• SECURE CONNECTION ESTABLISHED</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
