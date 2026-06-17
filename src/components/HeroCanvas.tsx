import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, PerspectiveCamera } from "@react-three/drei";
import NeuralNetwork from "./NeuralNetwork";
import RevolvingNeurons from "./RevolvingNeurons";

const HeroCanvas = ({ activeSection }: { activeSection?: string }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return (
    <Canvas dpr={[1, 1.5]}>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />

      {prefersReducedMotion ? (
        <NeuralNetwork />
      ) : (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <NeuralNetwork />
        </Float>
      )}

      <RevolvingNeurons activeSection={activeSection || "home"} prefersReducedMotion={prefersReducedMotion} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
};

export default HeroCanvas;

