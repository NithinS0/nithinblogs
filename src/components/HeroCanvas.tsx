import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import NeuralNetwork from './NeuralNetwork';
import RevolvingNeurons from './RevolvingNeurons';

const HeroCanvas = () => (
  <Canvas>
    <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
    <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />

    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <NeuralNetwork />
    </Float>

    <RevolvingNeurons />
    <RevolvingNeurons />

    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate={true}
      autoRotateSpeed={0.4}
    />
  </Canvas>
);

export default HeroCanvas;
