
import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-48 px-6 md:px-24 bg-black overflow-hidden flex items-center justify-center">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-600/20 blur-[150px] animate-pulse rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-600/20 blur-[150px] animate-pulse rounded-full delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-bold tracking-[0.6em] text-white/40 uppercase mb-8 block"
        >
          Have a project in mind?
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-none mb-12"
        >
          LET'S CREATE <br />
          <span className="italic font-light">EXTRAORDINARY.</span>
        </motion.h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
        >
          <motion.a
            href="mailto:hello@studio.design"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-white text-black font-bold text-lg rounded-full tracking-tight flex items-center gap-4 group"
          >
            START A PROJECT
            <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
          </motion.a>
          
          <div className="flex gap-12 text-sm font-medium tracking-widest text-white/60">
            <a href="#" className="hover:text-white transition-colors underline underline-offset-8">INSTAGRAM</a>
            <a href="#" className="hover:text-white transition-colors underline underline-offset-8">BEHANCE</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
