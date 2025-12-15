
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

const projects = [
  { id: '1', title: 'NEBULA', category: 'BRANDING', image: 'https://picsum.photos/1200/800?random=1', color: 'bg-purple-900' },
  { id: '2', title: 'SYNTH', category: 'UI/UX', image: 'https://picsum.photos/1200/800?random=2', color: 'bg-blue-900' },
  { id: '3', title: 'PRISM', category: 'MOTION', image: 'https://picsum.photos/1200/800?random=3', color: 'bg-pink-900' },
  { id: '4', title: 'ORBIT', category: '3D WEB', image: 'https://picsum.photos/1200/800?random=4', color: 'bg-neutral-900' },
];

const ProjectsGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.project-card');
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${scrollRef.current?.offsetWidth}`,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="work" className="relative overflow-hidden bg-black">
      <div className="absolute top-20 left-12 md:left-24 z-20">
        <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase font-bold">Featured Work</h2>
      </div>
      
      <div ref={scrollRef} className="flex h-screen w-[400vw]">
        {projects.map((project) => (
          <div key={project.id} className="project-card relative w-screen h-full flex items-center justify-center px-12 md:px-24">
            <div className={`absolute inset-0 opacity-20 ${project.color} transition-colors duration-1000`} />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl">
              <motion.div
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-video overflow-hidden rounded-sm cursor-pointer shadow-2xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>

              <div className="flex flex-col gap-4">
                <span className="text-xs tracking-widest text-white/50">{project.category}</span>
                <h3 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none">{project.title}</h3>
                <p className="text-white/40 max-w-sm mt-4">
                  Pushing the boundaries of digital interaction through experimental aesthetics and robust engineering.
                </p>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="mt-8 flex items-center gap-4 text-xs tracking-widest font-bold uppercase"
                >
                  View Case Study <span className="text-lg">→</span>
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;
