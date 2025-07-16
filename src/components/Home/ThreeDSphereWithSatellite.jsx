import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const TechIcosahedron = () => {
  const meshRef = useRef();
  const particlesRef = useRef();

  // Define icosahedron geometry to access vertices and edges
  const icosahedronGeometry = useMemo(() => new THREE.IcosahedronGeometry(2.5, 0), []);

  // Get edges for particle movement
  const edges = useMemo(() => {
    const edgeGeometry = new THREE.EdgesGeometry(icosahedronGeometry);
    const lines = edgeGeometry.attributes.position.array;
    const edgePairs = [];
    for (let i = 0; i < lines.length; i += 6) {
      const start = new THREE.Vector3(lines[i], lines[i + 1], lines[i + 2]);
      const end = new THREE.Vector3(lines[i + 3], lines[i + 4], lines[i + 5]);
      edgePairs.push({ start, end });
    }
    return edgePairs;
  }, [icosahedronGeometry]);

  // Create particles (dots) along edges
  const particleCount = 20; // Number of particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Array(particleCount).fill().map(() => ({
      edgeIndex: Math.floor(Math.random() * edges.length),
      t: Math.random(), // Progress along edge (0 to 1)
      speed: 0.005 + Math.random() * 0.01, // Random speed for variation
    }));
    return { positions, velocities };
  }, [edges]);

  // Update icosahedron rotation and particle positions
  useFrame(() => {
    // Rotate icosahedron
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;

    // Update particle positions
    const positions = particlesRef.current.geometry.attributes.position.array;
    particlePositions.velocities.forEach((v, i) => {
      v.t += v.speed; // Update progress along edge
      if (v.t > 1) {
        v.t = 0; // Reset to start of edge
        v.edgeIndex = Math.floor(Math.random() * edges.length); // Pick new edge
      }
      const { start, end } = edges[v.edgeIndex];
      const pos = start.clone().lerp(end, v.t); // Interpolate position
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
    });
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // Particle geometry and material
  const particleGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(particlePositions.positions, 3));
    return geom;
  }, [particlePositions.positions]);

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial
          color="#b8860b" // Golden color
          wireframe={true}
          emissive="#b8860b" // Golden emissive
          emissiveIntensity={0.6}
        />
      </mesh>
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          color="#b8860b" // Golden particles
          size={0.1}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </points>
    </>
  );
};

const TechScene = () => {
  return (
    <div className="h-64 w-64 md:h-64 md:w-64">
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <TechIcosahedron />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default TechScene;