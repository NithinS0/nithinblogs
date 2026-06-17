import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#06B6D4",
];

// Pre-create the geometry for the connections so it aligns along the Z axis
const connectionGeo = new THREE.CylinderGeometry(0.015, 0.015, 1, 4);
connectionGeo.rotateX(Math.PI / 2);

const getSectionFormations = (neuronCount: number) => {
  const formations: Record<string, THREE.Vector3[]> = {};
  const createArray = () => Array.from({ length: neuronCount });

  // 1. HOME: Wide scattered ambient field
  formations.home = createArray().map(
    () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20 - 5,
      ),
  );

  // 2. ABOUT: Calm Torus/Ring
  formations.about = createArray().map((_, i) => {
    const angle = (i / neuronCount) * Math.PI * 2;
    const radius = 12 + Math.random() * 3;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 5,
      Math.sin(angle) * radius - 8,
    );
  });

  // 3. SKILLS: Double Helix (DNA structure)
  formations.skills = createArray().map((_, i) => {
    const y = (i / neuronCount) * 28 - 14;
    const angle = y * 0.8;
    const radius = 6;
    const strand = i % 2 === 0 ? 1 : -1;
    return new THREE.Vector3(
      Math.cos(angle + (strand === 1 ? 0 : Math.PI)) * radius,
      y,
      Math.sin(angle + (strand === 1 ? 0 : Math.PI)) * radius - 5,
    );
  });

  // 4. PROJECTS: Dense glowing sphere
  formations.projects = createArray().map(() => {
    const phi = Math.acos(-1 + 2 * Math.random());
    const theta = Math.sqrt(neuronCount * Math.PI) * phi;
    const r = 9 + Math.random() * 2;
    return new THREE.Vector3(
      r * Math.cos(theta) * Math.sin(phi),
      r * Math.sin(theta) * Math.sin(phi),
      r * Math.cos(phi) - 5,
    );
  });

  // 5. GITHUB: Organized Grid/Matrix
  formations.github = createArray().map((_, i) => {
    const cols = Math.ceil(Math.sqrt(neuronCount));
    const x = (i % cols) * 3.5 - cols * 1.75;
    const y = Math.floor(i / cols) * 3.5 - 7;
    return new THREE.Vector3(x, y, -8 + (Math.random() - 0.5) * 3);
  });

  // 6. EXPERIENCE: Flowing sine wave
  formations.experience = createArray().map((_, i) => {
    const x = (i / neuronCount) * 35 - 17.5;
    return new THREE.Vector3(
      x,
      Math.sin(x * 0.4) * 6,
      Math.cos(x * 0.4) * 6 - 8,
    );
  });

  // 7. CERTIFICATIONS: Cone/Pyramid formation
  formations.certifications = createArray().map((_, i) => {
    const y = (i / neuronCount) * 24 - 12;
    const radius = ((12 - y) / 24) * 12;
    const angle = i * 2.8;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      y,
      Math.sin(angle) * radius - 5,
    );
  });

  // 8. CONTACT: Tight cluster
  formations.contact = createArray().map(
    () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5,
      ),
  );

  return formations;
};

const RevolvingNeurons = ({
  activeSection = "home",
  prefersReducedMotion = false,
}: {
  activeSection?: string;
  prefersReducedMotion?: boolean;
}) => {
  const [neuronCount, setNeuronCount] = useState(45);

  useEffect(() => {
    const updateCount = () => {
      setNeuronCount(window.innerWidth < 768 ? 25 : 45);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const groupRef = useRef<THREE.Group>(null);
  const outerInstancedRef = useRef<THREE.InstancedMesh>(null);
  const innerInstancedRef = useRef<THREE.InstancedMesh>(null);
  const spikesInstancedRef = useRef<THREE.InstancedMesh>(null);
  const connectionsInstancedRef = useRef<THREE.InstancedMesh>(null);

  const neurons = useMemo(() => {
    return Array.from({ length: neuronCount }).map(() => ({
      size: Math.random() * 0.08 + 0.05,
      color: new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]),
      speedOffset: Math.random() * Math.PI * 2,
    }));
  }, [neuronCount]);

  const formations = useMemo(() => getSectionFormations(neuronCount), [neuronCount]);

  const connections = useMemo(() => {
    const pairs: [number, number][] = [];
    for (let i = 0; i < neuronCount; i++) {
      pairs.push([i, (i + 1) % neuronCount]);
      pairs.push([i, (i + 2) % neuronCount]);
      pairs.push([i, (i + 5) % neuronCount]);
    }
    return pairs;
  }, [neuronCount]);

  const currentPositions = useRef<THREE.Vector3[]>([]);
  const currentOpacities = useRef<number[]>([]);

  useEffect(() => {
    currentPositions.current = formations.home.map(p => p.clone());
    currentOpacities.current = connections.map(() => 0);

    if (outerInstancedRef.current && innerInstancedRef.current && spikesInstancedRef.current && connectionsInstancedRef.current) {
      neurons.forEach((neuron, i) => {
        outerInstancedRef.current!.setColorAt(i, neuron.color);
        innerInstancedRef.current!.setColorAt(i, neuron.color);
        for(let s = 0; s < 3; s++) {
          spikesInstancedRef.current!.setColorAt(i * 3 + s, neuron.color);
        }
      });
      connections.forEach((conn, i) => {
        connectionsInstancedRef.current!.setColorAt(i, neurons[conn[0]].color);
      });
      outerInstancedRef.current.instanceColor!.needsUpdate = true;
      innerInstancedRef.current.instanceColor!.needsUpdate = true;
      spikesInstancedRef.current.instanceColor!.needsUpdate = true;
      connectionsInstancedRef.current.instanceColor!.needsUpdate = true;
    }
  }, [neuronCount, neurons, formations, connections]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (groupRef.current && !prefersReducedMotion) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }

    const time = state.clock.elapsedTime;
    const targetFormation = formations[activeSection] || formations.home;

    neurons.forEach((neuron, index) => {
      const targetPos = targetFormation[index];
      if (!targetPos) return;
      const offset = neuron.speedOffset;

      let finalTarget = targetPos;

      if (!prefersReducedMotion) {
        const breatheX = Math.cos(time * 0.5 + offset) * 0.5;
        const breatheY = Math.sin(time * 0.6 + offset) * 0.5;
        const breatheZ = Math.sin(time * 0.4 + offset) * 0.5;

        finalTarget = new THREE.Vector3(
          targetPos.x + breatheX,
          targetPos.y + breatheY,
          targetPos.z + breatheZ,
        );
      }

      if (!currentPositions.current[index]) {
        currentPositions.current[index] = finalTarget.clone();
      }

      currentPositions.current[index].lerp(finalTarget, prefersReducedMotion ? 0.1 : 0.03);
      
      const pos = currentPositions.current[index];
      const rotX = prefersReducedMotion ? 0 : time * 0.2 + offset;
      const rotY = prefersReducedMotion ? 0 : time * 0.15 + offset;

      dummy.position.copy(pos);
      dummy.rotation.set(rotX, rotY, 0);
      dummy.scale.setScalar(neuron.size * 0.6);
      dummy.updateMatrix();
      innerInstancedRef.current?.setMatrixAt(index, dummy.matrix);

      dummy.scale.setScalar(neuron.size * 1.5);
      dummy.updateMatrix();
      outerInstancedRef.current?.setMatrixAt(index, dummy.matrix);

      for (let s = 0; s < 3; s++) {
        const angle = (s * Math.PI * 2) / 3;
        const x = Math.cos(angle) * neuron.size * 1.8;
        const y = Math.sin(angle) * neuron.size * 1.8;
        
        dummy.position.copy(pos);
        const localOffset = new THREE.Vector3(x, y, 0);
        localOffset.applyEuler(new THREE.Euler(rotX, rotY, 0));
        dummy.position.add(localOffset);

        dummy.rotation.set(rotX, rotY, angle);
        dummy.scale.set(1, neuron.size * 1.5, 1);
        dummy.updateMatrix();
        spikesInstancedRef.current?.setMatrixAt(index * 3 + s, dummy.matrix);
      }
    });

    if (innerInstancedRef.current) innerInstancedRef.current.instanceMatrix.needsUpdate = true;
    if (outerInstancedRef.current) outerInstancedRef.current.instanceMatrix.needsUpdate = true;
    if (spikesInstancedRef.current) spikesInstancedRef.current.instanceMatrix.needsUpdate = true;

    connections.forEach((conn, i) => {
      const start = currentPositions.current[conn[0]];
      const end = currentPositions.current[conn[1]];

      if (start && end) {
        const distance = start.distanceTo(end);

        dummy.position.copy(start).lerp(end, 0.5);
        dummy.lookAt(end);
        dummy.scale.set(1, 1, distance);
        dummy.updateMatrix();
        connectionsInstancedRef.current?.setMatrixAt(i, dummy.matrix);

        const targetOpacity = Math.max(0, 0.4 - distance * 0.02);
        currentOpacities.current[i] += (targetOpacity - (currentOpacities.current[i] || 0)) * 0.1;
        
        if (currentOpacities.current[i] < 0.05) {
          dummy.scale.set(0, 0, 0);
          dummy.updateMatrix();
          connectionsInstancedRef.current?.setMatrixAt(i, dummy.matrix);
        }
      }
    });

    if (connectionsInstancedRef.current) connectionsInstancedRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      <instancedMesh ref={outerInstancedRef} args={[undefined, undefined, neuronCount]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          vertexColors
        />
      </instancedMesh>

      <instancedMesh ref={innerInstancedRef} args={[undefined, undefined, neuronCount]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshStandardMaterial
          transparent
          opacity={0.8}
          emissive={"#ffffff"}
          emissiveIntensity={0.6}
          vertexColors
        />
      </instancedMesh>

      <instancedMesh ref={spikesInstancedRef} args={[undefined, undefined, neuronCount * 3]}>
        <cylinderGeometry args={[0.002, 0.015, 1, 4]} />
        <meshStandardMaterial
          transparent
          opacity={0.4}
          emissive={"#ffffff"}
          emissiveIntensity={0.3}
          vertexColors
        />
      </instancedMesh>

      <instancedMesh ref={connectionsInstancedRef} args={[connectionGeo, undefined, connections.length]}>
        <meshStandardMaterial
          transparent
          opacity={0.2}
          emissive={"#ffffff"}
          emissiveIntensity={0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          vertexColors
        />
      </instancedMesh>
    </group>
  );
};

export default RevolvingNeurons;
