import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NeuralNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Create neural network nodes and connections
  const networkData = useMemo(() => {
    const layers = [3, 4, 3]; // Simplified neural network architecture
    const nodes: Array<{
      position: [number, number, number];
      layer: number;
      index: number;
    }> = [];
    const connections: Array<{
      start: [number, number, number];
      end: [number, number, number];
    }> = [];

    // Generate nodes
    layers.forEach((nodeCount, layerIndex) => {
      for (let i = 0; i < nodeCount; i++) {
        const x = (layerIndex - layers.length / 2) * 3;
        const y = (i - (nodeCount - 1) / 2) * 1.5;
        const z = 0;
        nodes.push({ position: [x, y, z], layer: layerIndex, index: i });
      }
    });

    // Generate connections between layers
    for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
      const currentLayerNodes = nodes.filter((n) => n.layer === layerIndex);
      const nextLayerNodes = nodes.filter((n) => n.layer === layerIndex + 1);

      currentLayerNodes.forEach((currentNode) => {
        nextLayerNodes.forEach((nextNode) => {
          connections.push({
            start: currentNode.position,
            end: nextNode.position,
          });
        });
      });
    }

    return { nodes, connections };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
      groupRef.current.position.z =
        -6.5 + Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[3.6, 0.2, -6.5]}>
      {/* Neural Network Nodes */}
      {networkData.nodes.map((node, index) => (
        <mesh key={`node-${index}`} position={node.position}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial
            color={
              node.layer === 0
                ? "#10B981"
                : node.layer ===
                    networkData.nodes[networkData.nodes.length - 1].layer
                  ? "#EF4444"
                  : "#3B82F6"
            }
            emissive={
              node.layer === 0
                ? "#10B981"
                : node.layer ===
                    networkData.nodes[networkData.nodes.length - 1].layer
                  ? "#EF4444"
                  : "#3B82F6"
            }
            emissiveIntensity={0.15}
            transparent
            opacity={0.45}
          />
        </mesh>
      ))}

      {/* Neural Network Connections */}
      {networkData.connections.map((connection, index) => {
        const start = new THREE.Vector3(...connection.start);
        const end = new THREE.Vector3(...connection.end);
        const direction = end.clone().sub(start);
        const length = direction.length();

        return (
          <mesh
            key={`connection-${index}`}
            position={start.clone().add(direction.clone().multiplyScalar(0.5))}
            onUpdate={(self) => self.lookAt(end)}
          >
            <cylinderGeometry args={[0.001, 0.001, length, 4]} />
            <meshStandardMaterial
              color="#8B5CF6"
              transparent
              opacity={0.14}
              emissive="#8B5CF6"
              emissiveIntensity={0.04}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default NeuralNetwork;
