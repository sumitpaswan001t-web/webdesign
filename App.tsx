
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Sections
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import ProjectsGallery from './components/ProjectsGallery';
import DeepDiveSection from './components/DeepDiveSection';
import ThreeDShowcase from './components/ThreeDShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black text-white selection:bg-white selection:text-black">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <HeroSection />
        <PhilosophySection />
        <ProjectsGallery />
        <DeepDiveSection />
        <ThreeDShowcase />
        <SkillsMatrix />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <footer className="py-12 px-6 md:px-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 bg-black">
        <div className="text-sm text-white/40">© 2024 DESIGN STUDIO. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">DRIBBBLE</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">TWITTER</a>
          <a href="#" className="hover:text-white transition-colors">EMAIL</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
