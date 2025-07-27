import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaBolt,
  FaBars,
  FaTimes,
  FaBatteryHalf,
  FaMicrochip,
  FaPlug,
} from 'react-icons/fa';

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [isCharging, setIsCharging] = useState(false);
  const [cpuLoad, setCpuLoad] = useState(42);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const clock = setInterval(() => setTime(new Date()), 1000);
    const cpuInterval = setInterval(() => {
      setCpuLoad(Math.floor(Math.random() * 60) + 20);
    }, 3000);

    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        const updateBattery = () => {
          setBatteryLevel(Math.floor(battery.level * 100));
          setIsCharging(battery.charging);
        };
        updateBattery();
        battery.addEventListener('levelchange', updateBattery);
        battery.addEventListener('chargingchange', updateBattery);
      });
    }

    return () => {
      clearInterval(clock);
      clearInterval(cpuInterval);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  const navItems = [
    { name: 'HOME', to: 'home', icon: <FaBolt size={16} />, colors: 'from-cyan-400 to-blue-400' },
    { name: 'ABOUT', to: 'about', icon: <FaUser size={16} />, colors: 'from-green-400 to-cyan-400' },
    { name: 'SKILLS', to: 'skills', icon: <FaCode size={16} />, colors: 'from-purple-400 to-pink-400' },
    { name: 'PROJECTS', to: 'projects', icon: <FaBriefcase size={16} />, colors: 'from-orange-400 to-red-400' },
    { name: 'CONTACT', to: 'contact', icon: <FaEnvelope size={16} />, colors: 'from-yellow-400 to-orange-400' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo & Clock */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl shadow-[0_0_20px_rgba(23,254,254,0.5)]" />
            <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl animate-pulse opacity-50" />
           
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-mono font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              KK
            </span>
            <span className="text-xs font-mono text-gray-400 hidden md:block">{formattedTime}</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 font-mono">
          {navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-60}
              className="relative px-4 py-3 text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-all group cursor-pointer"
            >
              <div className="flex items-center space-x-2 relative z-10">
                {item.icon}
                <span className="hidden lg:block">{item.name}</span>
              </div>
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${item.colors} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="absolute inset-0 rounded-lg bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.colors}`} />
            </ScrollLink>
          ))}
        </nav>

        {/* System Stats */}
        <div className="hidden lg:flex items-center space-x-6 font-mono text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <span className="text-gray-400">ONLINE</span>
          </div>
          {batteryLevel !== null && (
            <div className="flex items-center space-x-2 text-cyan-400">
              {isCharging ? <FaPlug className="animate-bounce" /> : <FaBatteryHalf />}
              <span>{batteryLevel}%</span>
            </div>
          )}
          <div className="flex items-center space-x-2 text-purple-400">
            <FaMicrochip className="animate-spin-slow" />
            <span>{cpuLoad}%</span>
          </div>
          <div className="text-gray-500">|</div>
          <span className="text-gray-400">
            STATUS: <span className="text-cyan-400">READY</span>
          </span>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-300 hover:text-cyan-400 transition-colors">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/95 backdrop-blur-md px-6 py-8 space-y-6 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {navItems.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-60}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-sm text-gray-200 hover:text-cyan-400 font-mono transition"
          >
            {item.icon}
            {item.name}
          </ScrollLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
