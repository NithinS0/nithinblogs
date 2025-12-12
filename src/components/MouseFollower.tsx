import React, { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Main cursor follower */}
      <div
        className="absolute w-6 h-6 rounded-full border-2 border-blue-400/50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: isMoving ? 'scale(1.5)' : 'scale(1)',
          boxShadow: isMoving ? '0 0 20px rgba(59, 130, 246, 0.5)' : '0 0 10px rgba(59, 130, 246, 0.3)'
        }}
      >
        <div className="absolute inset-2 bg-blue-400/30 rounded-full animate-pulse"></div>
      </div>

      {/* Neural connection trails */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`trail-${i}`}
          className="absolute w-3 h-3 rounded-full bg-purple-400/40 transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 6,
            top: mousePosition.y - 6,
            transform: `translate(${-i * 20}px, ${-i * 15}px) scale(${1 - i * 0.3})`,
            opacity: isMoving ? 0.6 - i * 0.2 : 0.2 - i * 0.1,
            transitionDelay: `${i * 50}ms`
          }}
        />
      ))}

      {/* Orbiting neural nodes */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i * Math.PI) / 2;
        const radius = 40;
        const x = Math.cos(angle + Date.now() * 0.001) * radius;
        const y = Math.sin(angle + Date.now() * 0.001) * radius;
        
        return (
          <div
            key={`orbit-${i}`}
            className="absolute w-2 h-2 rounded-full bg-pink-400/60 transition-all duration-200"
            style={{
              left: mousePosition.x + x - 4,
              top: mousePosition.y + y - 4,
              opacity: isMoving ? 0.8 : 0.3,
              transform: isMoving ? 'scale(1.2)' : 'scale(0.8)'
            }}
          />
        );
      })}

      {/* Connection lines to nearby elements */}
      <svg className="absolute inset-0 w-full h-full">
        {isMoving && (
          <>
            <line
              x1={mousePosition.x}
              y1={mousePosition.y}
              x2={mousePosition.x + 100}
              y2={mousePosition.y - 50}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              className="animate-pulse"
            />
            <line
              x1={mousePosition.x}
              y1={mousePosition.y}
              x2={mousePosition.x - 80}
              y2={mousePosition.y + 60}
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: '0.2s' }}
            />
            <line
              x1={mousePosition.x}
              y1={mousePosition.y}
              x2={mousePosition.x + 60}
              y2={mousePosition.y + 80}
              stroke="rgba(236, 72, 153, 0.3)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: '0.4s' }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default MouseFollower;