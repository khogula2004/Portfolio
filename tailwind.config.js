/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futuristic: ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-reverse-slow': 'spinReverse 20s linear infinite',
        'binary-fall': 'fall 6s linear infinite',
        'floating-box': 'floatBox 8s ease-in-out infinite',
        'orbit': 'orbit 12s linear infinite',
      },
      keyframes: {
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        fall: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        floatBox: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translate(70px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translate(70px) rotate(-360deg)',
          },
        },
      },
      colors: {
        primary: '#0ff',
        secondary: '#f0f',
        backdrop: 'rgba(255, 255, 255, 0.05)',
      },
      dropShadow: {
        glow: '0 0 10px rgba(0, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
};
