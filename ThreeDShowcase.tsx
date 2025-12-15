
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera, PresentationControls, ContactShadows, Text, MeshWobbleMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import * as THREE from 'three';

const DynamicShape = ({ scrollProgress }: { scrollProgress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.z += 0.005;
    
    // Geometry interpolation would go here for complex morphs
    // For now we animate material and scale based on scroll
    const scale = THREE.MathUtils.lerp(1, 2, scrollProgress);
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <MeshWobbleMaterial 
        color={scrollProgress > 0.5 ? "#10b981" : "#3b82f6"} 
        factor={0.5} 
        speed={1} 
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const ThreeDShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [progressValue, setProgressValue] = useState(0);
  
  // Fix: useFrame can only be used within the Canvas component.
  // Instead, we use useMotionValueEvent from framer-motion to track scroll progress changes.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgressValue(latest);
  });

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
               {/* Fix: Removed the 'config' prop as it is not present in the type definition of PresentationControls in this environment.
                   The 'snap' prop is kept as a boolean to enable default snapping behavior while maintaining compatibility. */}
               <PresentationControls global snap={true}>
                  <DynamicShape scrollProgress={progressValue} />
               </PresentationControls>
              <Environment preset="night" />
              <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 pointer-events-none text-center">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) }}
            className="flex flex-col items-center"
          >
            <h2 className="text-8xl md:text-[12rem] font-bold tracking-tighter opacity-10">3D MOTION</h2>
            <div className="flex gap-12 mt-4">
              <span className="text-xs tracking-[0.4em] uppercase font-bold">Webgl</span>
              <span className="text-xs tracking-[0.4em] uppercase font-bold">Interactive</span>
              <span className="text-xs tracking-[0.4em] uppercase font-bold">Generative</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDShowcase;
