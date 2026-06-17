import { useEffect, useRef } from "react";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize particles
    particlesRef.current = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1.5,
      color: [
        "rgba(59, 130, 246, 0.15)",
        "rgba(139, 92, 246, 0.15)",
        "rgba(236, 72, 153, 0.15)",
      ][i % 3],
      speed: Math.random() * 0.015 + 0.005,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
    };

    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mousePos = mouseCoords.current;
      const particles = particlesRef.current;

      if (!prefersReducedMotion) {
        particles.forEach((particle) => {
          const dx = mousePos.x - particle.x;
          const dy = mousePos.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let newTargetX = particle.targetX;
          let newTargetY = particle.targetY;

          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            newTargetX = particle.x - Math.cos(angle) * 60;
            newTargetY = particle.y - Math.sin(angle) * 60;
          } else {
            if (Math.random() < 0.01) {
              newTargetX = Math.random() * window.innerWidth;
              newTargetY = Math.random() * window.innerHeight;
            }
          }

          particle.targetX = newTargetX;
          particle.targetY = newTargetY;
          particle.x += (newTargetX - particle.x) * particle.speed;
          particle.y += (newTargetY - particle.y) * particle.speed;
        });
      }

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 140) * 0.08})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        if (!prefersReducedMotion) {
          const distToMouse = Math.sqrt(Math.pow(particles[i].x - mousePos.x, 2) + Math.pow(particles[i].y - mousePos.y, 2));
          if (distToMouse < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - distToMouse / 90) * 0.12})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default InteractiveBackground;
