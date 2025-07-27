import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import { Engine } from '@tsparticles/engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: '#000' },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 2 },
          },
        },
        particles: {
          color: { value: '#0ff' },
          links: {
            enable: true,
            color: '#0ff',
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: { default: 'bounce' },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticlesBackground;
