
import React from 'react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:px-12 flex justify-between items-center z-40 mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold tracking-tighter"
      >
        STUDIO<span className="text-white/50">®</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-8 text-xs font-medium tracking-[0.2em]"
      >
        <a href="#work" className="hover:opacity-50 transition-opacity">WORK</a>
        <a href="#about" className="hover:opacity-50 transition-opacity">ABOUT</a>
        <a href="#contact" className="hover:opacity-50 transition-opacity">CONTACT</a>
      </motion.div>
    </nav>
  );
};

export default Navigation;
