import React from 'react';

const binaryStrings = [
  '01100100111010101110',
  '00100111001111100111',
  '10010101111000100000',
  '10101001111100110101',
  '01011101010000111010',
  '00010010100011111100',
  '01001100010100110001',
  '00100111111111100110',
  '11100101000001101000',
  '10001010000100110000',
  '01011010000111010101',
  '10010010100101011010',
  '01001010000101111110',
  '10101111011001000110',
  '01101110101110011111',
];

const floatingBoxes = Array(8).fill(0).map((_, idx) => ({
  left: `${Math.random() * 90}%`,
  top: `${Math.random() * 90}%`,
  scale: 1 + Math.random() * 0.2,
  rotate: Math.random() * 360,
}));

const BinaryRainBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Binary Rain */}
      <div className="absolute inset-0 opacity-10 animate-pulse">
        {binaryStrings.map((binary, idx) => (
          <div
            key={idx}
            className="absolute text-cyan-400 font-mono text-sm animate-binary-fall"
            style={{
              left: `${5 + idx * 6.5}%`,
              top: '-100px',
              transform: `translateY(${Math.random() * 100}vh)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
            }}
          >
            {binary}
          </div>
        ))}
      </div>

      {/* Floating Boxes */}
      {floatingBoxes.map((box, idx) => (
        <div
          key={idx}
          className="absolute w-20 h-20 border border-cyan-400/20 rounded-lg animate-floating-box"
          style={{
            left: box.left,
            top: box.top,
            transform: `scale(${box.scale}) rotate(${box.rotate}deg)`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Glowing Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default BinaryRainBackground;
