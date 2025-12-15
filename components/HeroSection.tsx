
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Center, Text3D, Environment, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Sculpture = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <torusKnotGeometry args={[1, 0.4, 128, 32]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            speed={2}
            distort={0.4}
            radius={1}
            roughness={0}
            metalness={0.8}
          />
        </mesh>
      </Float>
      <mesh position={[2, 1, -1]} scale={0.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial color="#f472b6" speed={3} distort={0.6} metalness={1} />
      </mesh>
      <mesh position={[-2, -1, 1]} scale={0.7}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial color="#3b82f6" speed={1.5} distort={0.3} metalness={0.9} />
      </mesh>
    </group>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={null}>
            <Sculpture />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-none"
        >
          CREATIVE <br />
          <span className="italic font-light opacity-80">DESIGNER</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 text-white/50 text-sm md:text-lg tracking-widest uppercase font-medium"
        >
          Building immersive digital experiences
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] tracking-[0.3em] opacity-40">SCROLL</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
