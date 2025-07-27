import React from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Clock,
  Zap,
  Code,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-cyan-500/20 overflow-hidden z-10">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-black to-transparent opacity-50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(6,182,212,0.1) 1px, transparent 0px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0"></div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 19h8"></path>
                    <path d="m4 17 6-6-6-6"></path>
                  </svg>
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md scale-[1.13]"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">KHOGULA KANNAN</h3>
                  <p className="text-gray-400 text-sm font-mono">WORKING_STATUS: FRESHER</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400">LOCAL_TIME:</span>
                  <span className="text-cyan-400">{new Date().toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-3 text-center backdrop-blur-sm">
                <p className="text-lg font-bold text-green-400">98%</p>
                <p className="text-gray-400 text-xs font-mono">MODEL ACCURACY</p>
              </div>
              <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-3 text-center backdrop-blur-sm">
                <p className="text-lg font-bold text-cyan-400">5</p>
                <p className="text-gray-400 text-xs font-mono">PROJECT</p>
              </div>
              <div className="bg-black/30 border border-cyan-500/20 rounded-lg p-3 text-center backdrop-blur-sm">
                <p className="text-lg font-bold text-orange-400">∞</p>
                <p className="text-gray-400 text-xs font-mono">LEARNING NEVER STOP</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span> Navigation
            </h4>
            <nav className="space-y-2 text-sm font-mono text-gray-400">
              {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
                <button key={item} className="block hover:text-cyan-400 transition-colors text-left">
                  <span className="text-cyan-400">&gt;</span> {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/khogula2004"
                className="p-3 bg-black/30 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-current transition-all duration-300 group transform hover:scale-110"
                title="GitHub"
                target="_blank"
              >
                <Github className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a
                href="www.linkedin.com/in/khogula-kannan"
                className="p-3 bg-black/30 border border-gray-700 rounded-lg text-gray-400 hover:text-blue-400 hover:border-current transition-all duration-300 group transform hover:scale-110"
                title="LinkedIn"
                target="_blank"
              >
                <Linkedin className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a
                href="https://www.instagram.com/khogula_kannan/"
                className="p-3 bg-black/30 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-current transition-all duration-300 group transform hover:scale-110"
                title="Instagram"
                target="_blank"
              >
                <Instagram className="w-5 h-5 group-hover:animate-bounce" />
              </a>
              <a
                href="mailto:khogula2004@gmail.com"
                className="p-3 bg-black/30 border border-gray-700 rounded-lg text-gray-400 hover:text-purple-400 hover:border-current transition-all duration-300 group transform hover:scale-110"
                title="Email"
              >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
              </a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-4 w-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 py-3 px-4 rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 transition-all font-mono text-sm"
            >
              ^ BACK_TO_TOP
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <span>© 2025 KHOGULA</span>
              <span className="text-cyan-400">|</span>
              <span>BUILT WITH ❤️ & CAFFEINE</span>
            </div>
            <div className="flex items-center gap-4 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">SERVICES_ONLINE</span>
              </div>
              <span className="text-cyan-400">v3.03.04</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-500/20"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-purple-500/20"></div>
    </footer>
  );
};

export default Footer;
