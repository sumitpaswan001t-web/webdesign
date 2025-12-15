
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';

const PhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Refined ranges to include fade-out for intermediate states
  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25, 0.33], [0, 0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.33, 0.4, 0.6, 0.66], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.4, 0.6, 0.66], [50, 0, 0, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.66, 0.75, 1], [0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.66, 0.75, 1], [50, 0, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-24 overflow-hidden">
        {/* Left Side: Content with Relative Parent for Absolute Children */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center h-full">
          <motion.div 
            style={{ opacity: opacity1, y: y1 }} 
            className="absolute left-0 w-full md:w-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              DESIGN IS NOT <br />
              <span className="text-orange-500">DECORATION.</span>
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-md">
              It's about finding the elegant intersection between functionality and aesthetics.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity2, y: y2 }} 
            className="absolute left-0 w-full md:w-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              PROBLEM SOLVING <br />
              <span className="text-blue-500">WITH EMPATHY.</span>
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-md">
              We build for humans, creating interfaces that feel intuitive and responsive.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: opacity3, y: y3 }} 
            className="absolute left-0 w-full md:w-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              THE ART OF <br />
              <span className="text-emerald-500">CRAFT.</span>
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-md">
              Every pixel is considered. Every transition is intentional. Quality is the foundation.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Visuals */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
              <Sphere args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                  color="#ffffff"
                  speed={2}
                  distort={0.4}
                  radius={1}
                />
              </Sphere>
            </Float>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
