import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

import * as THREE from 'three';

const NEURON_COUNT = 45;
const COLORS = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#EF4444', '#06B6D4'];

// Pre-create the geometry for the connections so it aligns along the Z axis
const connectionGeo = new THREE.CylinderGeometry(0.015, 0.015, 1, 4);
connectionGeo.rotateX(Math.PI / 2);

const getSectionFormations = () => {
  const formations: Record<string, THREE.Vector3[]> = {};
  const createArray = () => Array.from({ length: NEURON_COUNT });

  // 1. HOME: Wide scattered ambient field
  formations.home = createArray().map(() => new THREE.Vector3(
    (Math.random() - 0.5) * 35,
    (Math.random() - 0.5) * 25,
    (Math.random() - 0.5) * 20 - 5
  ));

  // 2. ABOUT: Calm Torus/Ring
  formations.about = createArray().map((_, i) => {
    const angle = (i / NEURON_COUNT) * Math.PI * 2;
    const radius = 12 + Math.random() * 3;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 5,
      Math.sin(angle) * radius - 8
    );
  });

  // 3. SKILLS: Double Helix (DNA structure)
  formations.skills = createArray().map((_, i) => {
    const y = (i / NEURON_COUNT) * 28 - 14; 
    const angle = y * 0.8;
    const radius = 6;
    const strand = i % 2 === 0 ? 1 : -1;
    return new THREE.Vector3(
      Math.cos(angle + (strand === 1 ? 0 : Math.PI)) * radius,
      y,
      Math.sin(angle + (strand === 1 ? 0 : Math.PI)) * radius - 5
    );
  });

  // 4. PROJECTS: Dense glowing sphere
  formations.projects = createArray().map(() => {
    const phi = Math.acos(-1 + (2 * Math.random()));
    const theta = Math.sqrt(NEURON_COUNT * Math.PI) * phi;
    const r = 9 + Math.random() * 2;
    return new THREE.Vector3(
      r * Math.cos(theta) * Math.sin(phi),
      r * Math.sin(theta) * Math.sin(phi),
      r * Math.cos(phi) - 5
    );
  });

  // 5. GITHUB: Organized Grid/Matrix
  formations.github = createArray().map((_, i) => {
    const cols = 9;
    const x = (i % cols) * 3.5 - (cols * 1.75);
    const y = Math.floor(i / cols) * 3.5 - 7;
    return new THREE.Vector3(x, y, -8 + (Math.random() - 0.5) * 3);
  });

  // 6. EXPERIENCE: Flowing sine wave
  formations.experience = createArray().map((_, i) => {
    const x = (i / NEURON_COUNT) * 35 - 17.5;
    return new THREE.Vector3(
      x,
      Math.sin(x * 0.4) * 6,
      Math.cos(x * 0.4) * 6 - 8
    );
  });

  // 7. CERTIFICATIONS: Cone/Pyramid formation
  formations.certifications = createArray().map((_, i) => {
    const y = (i / NEURON_COUNT) * 24 - 12;
    const radius = ((12 - y) / 24) * 12; 
    const angle = i * 2.8;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      y,
      Math.sin(angle) * radius - 5
    );
  });

  // 8. CONTACT: Tight cluster
  formations.contact = createArray().map(() => new THREE.Vector3(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10 - 5
  ));

  return formations;
};

const RevolvingNeurons = ({ activeSection = 'home' }: { activeSection?: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const neuronRefs = useRef<(THREE.Group | null)[]>([]);
  const connectionRefs = useRef<(THREE.Mesh | null)[]>([]);

  // Generate static properties for neurons
  const neurons = useMemo(() => {
    return Array.from({ length: NEURON_COUNT }).map(() => ({
      size: Math.random() * 0.08 + 0.05,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speedOffset: Math.random() * Math.PI * 2,
    }));
  }, []);

  const formations = useMemo(() => getSectionFormations(), []);

  // Pre-calculate fixed connection pairs for a continuous web
  const connections = useMemo(() => {
    const pairs: [number, number][] = [];
    for (let i = 0; i < NEURON_COUNT; i++) {
      pairs.push([i, (i + 1) % NEURON_COUNT]);
      pairs.push([i, (i + 2) % NEURON_COUNT]);
      pairs.push([i, (i + 5) % NEURON_COUNT]);
    }
    return pairs;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Global slow rotation
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }

    const time = state.clock.elapsedTime;
    const targetFormation = formations[activeSection] || formations.home;

    // Morph neurons to target positions
    neuronRefs.current.forEach((neuron, index) => {
      if (neuron && neurons[index]) {
        const targetPos = targetFormation[index];
        const offset = neurons[index].speedOffset;
        
        // Add a tiny bit of noise/breathing to the target position
        const breatheX = Math.cos(time * 0.5 + offset) * 0.5;
        const breatheY = Math.sin(time * 0.6 + offset) * 0.5;
        const breatheZ = Math.sin(time * 0.4 + offset) * 0.5;

        const finalTarget = new THREE.Vector3(
          targetPos.x + breatheX,
          targetPos.y + breatheY,
          targetPos.z + breatheZ
        );

        // Smoothly lerp towards target
        neuron.position.lerp(finalTarget, 0.03);
        
        // Gentle rotation of the neuron itself
        neuron.rotation.x = time * 0.2 + offset;
        neuron.rotation.y = time * 0.15 + offset;
      }
    });

    // Update connections dynamically based on neuron positions
    connectionRefs.current.forEach((conn, i) => {
      if (conn) {
        const [startIdx, endIdx] = connections[i];
        const start = neuronRefs.current[startIdx]?.position;
        const end = neuronRefs.current[endIdx]?.position;
        
        if (start && end) {
          const distance = start.distanceTo(end);
          
          // Position at midpoint, point at end, scale Z to distance
          conn.position.copy(start).lerp(end, 0.5);
          conn.lookAt(end);
          conn.scale.set(1, 1, distance);
          
          // Fade out connections if they stretch too far
          const mat = conn.material as THREE.MeshStandardMaterial;
          const targetOpacity = Math.max(0, 0.4 - (distance * 0.02));
          mat.opacity += (targetOpacity - mat.opacity) * 0.1;
        }
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {/* Render Neurons */}
      {neurons.map((neuron, index) => (
        <group
          key={`neuron-${index}`}
          ref={(el) => { neuronRefs.current[index] = el; }}
          position={[0, 0, 0]} // Initial position, will be quickly lerped
        >
          {/* Outer glow shell */}
          <mesh>
            <sphereGeometry args={[neuron.size * 1.5, 16, 16]} />
            <meshStandardMaterial
              color={neuron.color}
              transparent
              opacity={0.15}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
          
          {/* Inner dense core */}
          <mesh>
            <sphereGeometry args={[neuron.size * 0.6, 12, 12]} />
            <meshStandardMaterial
              color={neuron.color}
              transparent
              opacity={0.8}
              emissive={neuron.color}
              emissiveIntensity={0.6}
            />
          </mesh>

          {/* Radiant spikes */}
          {Array.from({ length: 3 }).map((_, spikeIndex) => {
            const angle = (spikeIndex * Math.PI * 2) / 3;
            const x = Math.cos(angle) * neuron.size * 1.8;
            const y = Math.sin(angle) * neuron.size * 1.8;
            
            return (
              <mesh key={`spike-${index}-${spikeIndex}`} position={[x, y, 0]} rotation={[0, 0, angle]}>
                <cylinderGeometry args={[0.002, 0.015, neuron.size * 1.5, 4]} />
                <meshStandardMaterial
                  color={neuron.color}
                  transparent
                  opacity={0.4}
                  emissive={neuron.color}
                  emissiveIntensity={0.3}
                />
              </mesh>
            );
          })}
        </group>
      ))}

      {/* Render Dynamic Connections */}
      {connections.map((_, i) => (
        <mesh
          key={`connection-${i}`}
          ref={(el) => { connectionRefs.current[i] = el; }}
          geometry={connectionGeo}
        >
          <meshStandardMaterial
            color={neurons[connections[i][0]].color}
            transparent
            opacity={0} // Start invisible, will fade in
            emissive={neurons[connections[i][0]].color}
            emissiveIntensity={0.2}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
};

export default RevolvingNeurons;