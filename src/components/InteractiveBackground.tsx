import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  speed: number;
}

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      color: ['rgba(59, 130, 246, 0.4)', 'rgba(139, 92, 246, 0.4)', 'rgba(236, 72, 153, 0.4)'][i % 3],
      speed: Math.random() * 0.02 + 0.01
    }));
    setParticles(initialParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Calculate distance to mouse
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let newTargetX = particle.targetX;
          let newTargetY = particle.targetY;
          
          // If mouse is close, particles move away
          if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            newTargetX = particle.x - Math.cos(angle) * 100;
            newTargetY = particle.y - Math.sin(angle) * 100;
          } else {
            // Random movement when mouse is far
            if (Math.random() < 0.01) {
              newTargetX = Math.random() * window.innerWidth;
              newTargetY = Math.random() * window.innerHeight;
            }
          }
          
          // Smooth movement towards target
          const newX = particle.x + (newTargetX - particle.x) * particle.speed;
          const newY = particle.y + (newTargetY - particle.y) * particle.speed;
          
          return {
            ...particle,
            x: newX,
            y: newY,
            targetX: newTargetX,
            targetY: newTargetY
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <svg className="w-full h-full">
        {/* Particle connections */}
        {particles.map((particle, i) => 
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 200) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="1"
                  opacity={1 - distance / 200}
                />
              );
            }
            return null;
          })
        )}
        
        {/* Mouse connections */}
        {particles.map((particle, i) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - mousePosition.x, 2) + 
            Math.pow(particle.y - mousePosition.y, 2)
          );
          
          if (distance < 150) {
            return (
              <line
                key={`mouse-${i}`}
                x1={particle.x}
                y1={particle.y}
                x2={mousePosition.x}
                y2={mousePosition.y}
                stroke="rgba(139, 92, 246, 0.4)"
                strokeWidth="2"
                opacity={1 - distance / 150}
                className="animate-pulse"
              />
            );
          }
          return null;
        })}
        
        {/* Particles */}
        {particles.map(particle => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particle.color}
            className="animate-pulse"
          />
        ))}
      </svg>
    </div>
  );
};

export default InteractiveBackground;