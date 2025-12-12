import React, { useEffect, useState, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  angle: number;
  distance: number;
}

const MouseInteractiveElements = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Initialize floating elements
    const elements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      color: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'][i % 4],
      speed: Math.random() * 0.5 + 0.2,
      angle: Math.random() * Math.PI * 2,
      distance: Math.random() * 100 + 50
    }));
    setFloatingElements(elements);

    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setFloatingElements(prevElements => 
        prevElements.map(element => {
          // Calculate attraction to mouse when moving
          if (isMoving) {
            const dx = mousePosition.x - element.x;
            const dy = mousePosition.y - element.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
              // Move towards mouse but maintain some distance
              const targetDistance = 80;
              const angle = Math.atan2(dy, dx);
              const targetX = mousePosition.x - Math.cos(angle) * targetDistance;
              const targetY = mousePosition.y - Math.sin(angle) * targetDistance;
              
              return {
                ...element,
                x: element.x + (targetX - element.x) * 0.05,
                y: element.y + (targetY - element.y) * 0.05,
                angle: angle
              };
            }
          }
          
          // Default floating behavior
          return {
            ...element,
            x: element.x + Math.cos(element.angle) * element.speed,
            y: element.y + Math.sin(element.angle) * element.speed,
            angle: element.angle + 0.01
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
  }, [mousePosition, isMoving]);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {/* Magnetic Field Effect */}
      {isMoving && (
        <div
          className="absolute w-32 h-32 rounded-full border border-blue-400/20 animate-ping"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />
      )}

      {/* Neural Pulse Rings */}
      {isMoving && Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`pulse-${i}`}
          className="absolute rounded-full border border-purple-400/30 animate-ping"
          style={{
            left: mousePosition.x - (20 + i * 15),
            top: mousePosition.y - (20 + i * 15),
            width: (40 + i * 30) + 'px',
            height: (40 + i * 30) + 'px',
            animationDelay: `${i * 0.2}s`,
            animationDuration: '2s'
          }}
        />
      ))}

      {/* Floating AI Elements */}
      {floatingElements.map(element => (
        <div
          key={element.id}
          className="absolute rounded-full transition-all duration-300 ease-out"
          style={{
            left: element.x - element.size / 2,
            top: element.y - element.size / 2,
            width: element.size + 'px',
            height: element.size + 'px',
            backgroundColor: element.color + '60',
            boxShadow: `0 0 ${element.size * 2}px ${element.color}40`,
            transform: isMoving ? 'scale(1.5)' : 'scale(1)'
          }}
        />
      ))}

      {/* Connection Web */}
      <svg className="absolute inset-0 w-full h-full">
        {floatingElements.map((element, i) => 
          floatingElements.slice(i + 1).map((otherElement, j) => {
            const distance = Math.sqrt(
              Math.pow(element.x - otherElement.x, 2) + 
              Math.pow(element.y - otherElement.y, 2)
            );
            
            if (distance < 150) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={element.x}
                  y1={element.y}
                  x2={otherElement.x}
                  y2={otherElement.y}
                  stroke="rgba(59, 130, 246, 0.15)"
                  strokeWidth="1"
                  opacity={1 - distance / 150}
                />
              );
            }
            return null;
          })
        )}
        
        {/* Mouse to Elements Connections */}
        {isMoving && floatingElements.map((element, i) => {
          const distance = Math.sqrt(
            Math.pow(element.x - mousePosition.x, 2) + 
            Math.pow(element.y - mousePosition.y, 2)
          );
          
          if (distance < 120) {
            return (
              <line
                key={`mouse-${i}`}
                x1={element.x}
                y1={element.y}
                x2={mousePosition.x}
                y2={mousePosition.y}
                stroke="rgba(139, 92, 246, 0.3)"
                strokeWidth="2"
                opacity={1 - distance / 120}
              />
            );
          }
          return null;
        })}
      </svg>

      {/* Data Stream Effect */}
      {isMoving && (
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`stream-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-b from-blue-400/60 to-transparent animate-pulse"
              style={{
                left: mousePosition.x + Math.cos(i * Math.PI / 3) * 60,
                top: mousePosition.y + Math.sin(i * Math.PI / 3) * 60,
                transform: `rotate(${i * 60}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Neural Activity Indicators */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`indicator-${i}`}
            className="absolute w-3 h-3 rounded-full animate-pulse"
            style={{
              left: `${15 + (i * 12) % 70}%`,
              top: `${20 + (i * 15) % 60}%`,
              backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899'][i % 3] + '40',
              animationDelay: `${i * 0.3}s`,
              boxShadow: `0 0 15px ${['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'][i % 4]}50`
            }}
          />
        ))}
        
      
      {/* Additional revolving neural spheres */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 6 + (Date.now() * 0.0002);
        const radius = 150 + Math.sin(Date.now() * 0.0008 + i) * 30;
        const x = 50 + Math.cos(angle) * (radius / window.innerWidth * 40);
        const y = 50 + Math.sin(angle) * (radius / window.innerHeight * 40);
        
        return (
          <div
            key={`neural-${i}`}
            className="absolute rounded-full animate-pulse border-2"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: '8px',
              height: '8px',
              borderColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'][i] + '40',
              backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'][i] + '20',
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s',
              boxShadow: `0 0 12px ${['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'][i]}30`
            }}
          />
        );
      })}
        {/* Revolving orbital indicators */}
        {Array.from({ length: 4 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 4 + (Date.now() * 0.0003);
          const radius = 100 + Math.sin(Date.now() * 0.001 + i) * 20;
          const x = 50 + Math.cos(angle) * (radius / window.innerWidth * 50);
          const y = 50 + Math.sin(angle) * (radius / window.innerHeight * 50);
          
          return (
            <div
              key={`orbital-${i}`}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'][i] + '60',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s',
                boxShadow: `0 0 10px ${['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'][i]}40`
              }}
            />
          );
        })}
        
        {/* Additional revolving neural spheres */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 6 + (Date.now() * 0.0002);
          const radius = 120 + Math.sin(Date.now() * 0.0008 + i) * 25;
          const x = 50 + Math.cos(angle) * (radius / window.innerWidth * 40);
          const y = 50 + Math.sin(angle) * (radius / window.innerHeight * 40);
          
          return (
            <div
              key={`neural-${i}`}
              className="absolute rounded-full animate-pulse border-2"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: '8px',
                height: '8px',
                borderColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'][i] + '40',
                backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'][i] + '20',
                animationDelay: `${i * 0.3}s`,
                animationDuration: '3s',
                boxShadow: `0 0 12px ${['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'][i]}30`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MouseInteractiveElements;