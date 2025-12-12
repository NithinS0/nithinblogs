import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const RevolvingNeurons = () => {
  const groupRef = useRef<THREE.Group>(null);
  const neuronRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation of the entire group
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.05;
    }

    // Individual neuron rotations and movements
    neuronRefs.current.forEach((neuron, index) => {
      if (neuron) {
        neuron.rotation.x = state.clock.elapsedTime * (0.1 + index * 0.05);
        neuron.rotation.z = state.clock.elapsedTime * (0.08 + index * 0.03);
        
        // Subtle floating movement
        const offset = index * 2;
        neuron.position.y += Math.sin(state.clock.elapsedTime * 0.5 + offset) * 0.001;
      }
    });
  });

  const neurons = [
    { position: [4, 1.5, -8], size: 0.15, color: '#3B82F6' },
    { position: [-4, -0.5, -9], size: 0.13, color: '#8B5CF6' },
    { position: [3, -1.5, -7], size: 0.16, color: '#EC4899' },
    { position: [-3, 1.8, -10], size: 0.14, color: '#10B981' },
    { position: [5, 0.2, -8.5], size: 0.15, color: '#F59E0B' },
    { position: [-5, -1.8, -7.5], size: 0.12, color: '#EF4444' },
  ];

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {neurons.map((neuron, index) => (
        <Float
          key={index}
          speed={0.3 + index * 0.1}
          rotationIntensity={0.1}
          floatIntensity={0.2}
        >
          <mesh
            ref={(el) => {
              if (el) neuronRefs.current[index] = el;
            }}
            position={neuron.position}
          >
            {/* Main neuron sphere */}
            <sphereGeometry args={[neuron.size, 16, 16]} />
            <meshStandardMaterial
              color={neuron.color}
              transparent
              opacity={0.25}
              emissive={neuron.color}
              emissiveIntensity={0.1}
              wireframe={false}
            />
            
            {/* Inner core */}
            <mesh>
              <sphereGeometry args={[neuron.size * 0.5, 8, 8]} />
              <meshStandardMaterial
                color={neuron.color}
                transparent
                opacity={0.4}
                emissive={neuron.color}
                emissiveIntensity={0.15}
              />
            </mesh>

            {/* Outer glow ring */}
            <mesh>
              <ringGeometry args={[neuron.size * 1.1, neuron.size * 1.3, 12]} />
              <meshBasicMaterial
                color={neuron.color}
                transparent
                opacity={0.1}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Neural spikes */}
            {Array.from({ length: 4 }).map((_, spikeIndex) => {
              const angle = (spikeIndex * Math.PI * 2) / 4;
              const x = Math.cos(angle) * neuron.size * 1.5;
              const y = Math.sin(angle) * neuron.size * 1.5;
              
              return (
                <mesh
                  key={spikeIndex}
                  position={[x, y, 0]}
                  rotation={[0, 0, angle]}
                >
                  <cylinderGeometry args={[0.003, 0.006, neuron.size * 0.6, 4]} />
                  <meshStandardMaterial
                    color={neuron.color}
                    transparent
                    opacity={0.3}
                    emissive={neuron.color}
                    emissiveIntensity={0.08}
                  />
                </mesh>
              );
            })}
          </mesh>
        </Float>
      ))}

      {/* Neural connections between nearby neurons */}
      {neurons.map((neuron, i) =>
        neurons.slice(i + 1).map((otherNeuron, j) => {
          const start = new THREE.Vector3(...neuron.position);
          const end = new THREE.Vector3(...otherNeuron.position);
          const distance = start.distanceTo(end);
          
          if (distance < 3.5) {
            const direction = end.clone().sub(start);
            const length = direction.length();
            
            return (
              <mesh
                key={`connection-${i}-${j}`}
                position={start.clone().add(direction.clone().multiplyScalar(0.5))}
                lookAt={end}
              >
                <cylinderGeometry args={[0.002, 0.002, length, 4]} />
                <meshStandardMaterial
                  color="#8B5CF6"
                  transparent
                  opacity={0.15}
                  emissive="#8B5CF6"
                  emissiveIntensity={0.03}
                />
              </mesh>
            );
          }
          return null;
        })
      )}
    </group>
  );
};

export default RevolvingNeurons;