import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = [
  "#3B82F6", // Blue
  "#8B5CF6", // Purple
  "#EC4899", // Pink
  "#10B981", // Green
  "#06B6D4", // Cyan
];

// Pre-create geometry
const nodeGeo = new THREE.SphereGeometry(1, 16, 16);
const connectionGeo = new THREE.CylinderGeometry(0.015, 0.015, 1, 4);
connectionGeo.rotateX(Math.PI / 2);

interface ActivationBurstProps {
  prefersReducedMotion?: boolean;
}

const ActivationBurst = ({ prefersReducedMotion = false }: ActivationBurstProps) => {
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const nodesInstancedRef = useRef<THREE.InstancedMesh>(null);
  const connectionsInstancedRef = useRef<THREE.InstancedMesh>(null);

  // Constants
  const NODE_COUNT = 60;
  const MAX_CONNECTIONS = NODE_COUNT * 2;
  const CONNECTION_DISTANCE = 8;
  const INTERACTION_RADIUS = 5;
  const MAGNETIC_PULL_STRENGTH = 0.5;

  // State refs (avoid React state for animation)
  const pointerRef = useRef(new THREE.Vector3(0, 0, 0));
  const pointerActiveRef = useRef(false);
  const isVisibleRef = useRef(true);

  // Firing logic refs
  const lastFireTimeRef = useRef(0);
  const activeSignalsRef = useRef<Array<{
    startNode: number;
    endNode: number;
    progress: number;
    speed: number;
  }>>([]);

  // Generate base node positions
  const basePositions = useMemo(() => {
    return Array.from({ length: NODE_COUNT }).map(() => {
      // Create a sprawling galaxy/cloud shape
      const radius = 10 + Math.random() * 15;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = (radius * Math.cos(phi)) * 0.3 - 5; // Flattened depth

      return new THREE.Vector3(x, y, z);
    });
  }, []);

  // Generate connections based on distance
  const connections = useMemo(() => {
    const pairs: [number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (basePositions[i].distanceTo(basePositions[j]) < CONNECTION_DISTANCE) {
          pairs.push([i, j]);
        }
      }
    }
    // Limit connections to avoid overloading
    return pairs.slice(0, MAX_CONNECTIONS);
  }, [basePositions]);

  // Current animation positions and opacities
  const currentPositions = useRef<THREE.Vector3[]>(basePositions.map(p => p.clone()));
  const nodeGlows = useRef<number[]>(new Array(NODE_COUNT).fill(0));
  const baseColors = useMemo(() => {
    return Array.from({ length: NODE_COUNT }).map(() => {
      return new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]);
    });
  }, []);

  // Initialization
  useEffect(() => {
    if (nodesInstancedRef.current && connectionsInstancedRef.current) {
      for (let i = 0; i < NODE_COUNT; i++) {
        nodesInstancedRef.current.setColorAt(i, baseColors[i]);
      }
      for (let i = 0; i < connections.length; i++) {
        const color = baseColors[connections[i][0]];
        connectionsInstancedRef.current.setColorAt(i, color);
      }
      nodesInstancedRef.current.instanceColor!.needsUpdate = true;
      connectionsInstancedRef.current.instanceColor!.needsUpdate = true;
    }
  }, [baseColors, connections]);

  // Pointer tracking
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      pointerActiveRef.current = true;
      // Convert screen space to 3D space loosely at z=0
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      pointerRef.current.set(x * (viewport.width / 2), y * (viewport.height / 2), 0);
    };
    
    const handlePointerLeave = () => {
      pointerActiveRef.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [viewport]);

  // Intersection Observer to pause when offscreen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    
    // We observe the parent canvas container. Since we're inside the canvas, 
    // we assume the canvas is full screen or we find its domElement parent.
    const canvasEl = document.querySelector('canvas');
    if (canvasEl) observer.observe(canvasEl);

    return () => {
      if (canvasEl) observer.unobserve(canvasEl);
    };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Main animation loop
  useFrame((state, delta) => {
    if (!isVisibleRef.current) return; // PAUSE logic
    
    const time = state.clock.elapsedTime;

    // 1. Fire new signals
    if (!prefersReducedMotion && time - lastFireTimeRef.current > 2 + Math.random() * 2) {
      lastFireTimeRef.current = time;
      const randomConnIndex = Math.floor(Math.random() * connections.length);
      const conn = connections[randomConnIndex];
      activeSignalsRef.current.push({
        startNode: conn[0],
        endNode: conn[1],
        progress: 0,
        speed: 0.5 + Math.random() * 0.5
      });
      // Brighten start node
      nodeGlows.current[conn[0]] = 1;
    }

    // 2. Process signals
    for (let i = activeSignalsRef.current.length - 1; i >= 0; i--) {
      const signal = activeSignalsRef.current[i];
      signal.progress += delta * signal.speed;
      
      if (signal.progress >= 1) {
        // Brighten end node
        nodeGlows.current[signal.endNode] = 1;
        
        // Chance to branch
        const branchingConns = connections.filter(c => c[0] === signal.endNode || c[1] === signal.endNode);
        if (branchingConns.length > 0 && Math.random() > 0.4) {
          const nextConn = branchingConns[Math.floor(Math.random() * branchingConns.length)];
          const nextTarget = nextConn[0] === signal.endNode ? nextConn[1] : nextConn[0];
          activeSignalsRef.current.push({
            startNode: signal.endNode,
            endNode: nextTarget,
            progress: 0,
            speed: signal.speed
          });
        }
        
        activeSignalsRef.current.splice(i, 1);
      }
    }

    // 3. Update Nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      const basePos = basePositions[i];
      let targetPos = basePos.clone();
      let scale = 0.08;

      // Magnetic pull and interaction brightening
      if (pointerActiveRef.current && !prefersReducedMotion) {
        const distToCursor = basePos.distanceTo(pointerRef.current);
        if (distToCursor < INTERACTION_RADIUS) {
          const pullFactor = 1 - (distToCursor / INTERACTION_RADIUS);
          const pullVector = pointerRef.current.clone().sub(basePos).multiplyScalar(pullFactor * MAGNETIC_PULL_STRENGTH);
          targetPos.add(pullVector);
          nodeGlows.current[i] = Math.max(nodeGlows.current[i], pullFactor * 0.8);
          scale += pullFactor * 0.05;
        }
      }

      // Add gentle drift
      if (!prefersReducedMotion) {
        targetPos.x += Math.sin(time * 0.5 + i) * 0.3;
        targetPos.y += Math.cos(time * 0.4 + i) * 0.3;
      }

      // Lerp position
      currentPositions.current[i].lerp(targetPos, 0.1);

      // Decay glow
      nodeGlows.current[i] = Math.max(0, nodeGlows.current[i] - delta * 0.5);

      // Apply matrix
      dummy.position.copy(currentPositions.current[i]);
      const finalScale = scale * (1 + nodeGlows.current[i] * 2);
      dummy.scale.setScalar(finalScale);
      dummy.updateMatrix();
      
      if (nodesInstancedRef.current) {
        nodesInstancedRef.current.setMatrixAt(i, dummy.matrix);
      }
    }

    // 4. Update Connections
    for (let i = 0; i < connections.length; i++) {
      const start = currentPositions.current[connections[i][0]];
      const end = currentPositions.current[connections[i][1]];
      const distance = start.distanceTo(end);

      dummy.position.copy(start).lerp(end, 0.5);
      dummy.lookAt(end);
      dummy.scale.set(1, 1, distance);
      dummy.updateMatrix();

      if (connectionsInstancedRef.current) {
        connectionsInstancedRef.current.setMatrixAt(i, dummy.matrix);
      }
    }

    // Update instance matrices
    if (nodesInstancedRef.current) {
      nodesInstancedRef.current.instanceMatrix.needsUpdate = true;
    }
    if (connectionsInstancedRef.current) {
      connectionsInstancedRef.current.instanceMatrix.needsUpdate = true;
    }
    
    // Slowly rotate entire group for ambient feel
    if (groupRef.current && !prefersReducedMotion) {
      groupRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      <instancedMesh ref={nodesInstancedRef} args={[nodeGeo, undefined, NODE_COUNT]}>
        <meshStandardMaterial
          transparent
          opacity={0.6}
          emissive={"#ffffff"}
          emissiveIntensity={0.8}
          vertexColors
          blending={THREE.AdditiveBlending}
        />
      </instancedMesh>

      {/* Connections */}
      <instancedMesh ref={connectionsInstancedRef} args={[connectionGeo, undefined, connections.length]}>
        <meshStandardMaterial
          transparent
          opacity={0.15}
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

export default ActivationBurst;
