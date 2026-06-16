import { useEffect, useRef, useState } from 'react';

const MouseFollower = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // DOM Refs
  const followerRef = useRef<HTMLDivElement>(null);
  
  // Physics / position tracking
  const mouseCoords = useRef({ x: 0, y: 0 });
  const followerCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Mouse move handler to capture target coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    // 2. Window mouseleave to hide the cursor follower
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // 3. Hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');
        
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    // 4. Animation loop using requestAnimationFrame
    let animId: number;
    const updatePosition = () => {
      // Linear interpolation (lerp): current = current + (target - current) * factor
      const ease = 0.15; // smooth lag speed
      followerCoords.current.x += (mouseCoords.current.x - followerCoords.current.x) * ease;
      followerCoords.current.y += (mouseCoords.current.y - followerCoords.current.y) * ease;

      if (followerRef.current) {
        // Position the center of the outer ring directly on the cursor
        followerRef.current.style.transform = `translate3d(${followerCoords.current.x}px, ${followerCoords.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(updatePosition);
    };
    
    animId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-300 hidden md:block"
      style={{
        opacity: isVisible ? 1 : 0,
        // Start centered around the cursor
        margin: '-16px 0 0 -16px',
        width: '32px',
        height: '32px',
      }}
    >
      {/* Outer Halo */}
      <div
        className={`w-full h-full rounded-full border transition-all duration-300 ease-out ${
          isHovered
            ? 'scale-150 border-indigo-500/50 bg-indigo-500/[0.08] shadow-[0_0_12px_rgba(99,102,241,0.25)] border-2'
            : 'scale-100 border-blue-500/35 bg-blue-500/[0.02] dark:border-blue-400/40 dark:bg-white/[0.01]'
        }`}
      />
      {/* Inner Dot */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/80 transition-all duration-200 ${
          isHovered ? 'w-1 h-1 opacity-0' : 'w-1.5 h-1.5 opacity-100'
        }`}
      />
    </div>
  );
};

export default MouseFollower;