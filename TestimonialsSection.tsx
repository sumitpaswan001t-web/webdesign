
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Working with this team was a masterclass in collaboration. They didn't just build a website; they crafted a brand experience that defined our next decade.",
    author: "ELENA ROSS",
    company: "MODERN TECH",
    image: "https://picsum.photos/100/100?random=20"
  },
  {
    text: "The level of detail in the motion design is simply unparalleled. Every interaction feels premium and intentional.",
    author: "JULIAN VANCE",
    company: "NEXUS DESIGN",
    image: "https://picsum.photos/100/100?random=21"
  },
  {
    text: "They have a rare ability to bridge the gap between high-level creative vision and complex technical implementation.",
    author: "SARAH CHEN",
    company: "GLOBAL FLOW",
    image: "https://picsum.photos/100/100?random=22"
  }
];

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="text-[12rem] font-serif absolute -top-24 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">“</span>
            <p className="text-3xl md:text-5xl font-light italic leading-tight text-white/90">
              "{testimonials[index].text}"
            </p>
            
            <div className="mt-16 flex flex-col items-center">
              <img src={testimonials[index].image} className="w-16 h-16 rounded-full grayscale mb-4" alt="" />
              <h4 className="text-sm font-bold tracking-[0.4em]">{testimonials[index].author}</h4>
              <p className="text-xs text-white/30 tracking-widest uppercase mt-2">{testimonials[index].company}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-20">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            ←
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
