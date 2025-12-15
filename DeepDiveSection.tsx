
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const chapters = [
  {
    title: "THE CHALLENGE",
    content: "The client needed a digital identity that reflected their innovative approach to sustainability while maintaining a high-luxury feel.",
    image: "https://picsum.photos/800/1000?random=10"
  },
  {
    title: "THE STRATEGY",
    content: "We conducted deep market research to identify visual gaps in the luxury space, focusing on kinetic typography and minimal layouts.",
    image: "https://picsum.photos/800/1000?random=11"
  },
  {
    title: "THE EXECUTION",
    content: "Using React and WebGL, we built a modular design system that scales across devices without losing its cinematic impact.",
    image: "https://picsum.photos/800/1000?random=12"
  }
];

const DeepDiveSection: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const activeIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white text-black">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Images */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-neutral-100 overflow-hidden">
          {chapters.map((chapter, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                opacity: useTransform(scrollYProgress, [i * 0.33, (i + 0.5) * 0.33], [0, 1])
              }}
            >
              <img src={chapter.image} alt={chapter.title} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto px-6 md:px-20 py-12 flex flex-col items-start">
          <div className="max-w-md my-auto space-y-48 pb-screen">
            {chapters.map((chapter, i) => (
              <div key={i} className="min-h-screen flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.4em] text-black/20">CHAPTER 0{i+1}</span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4">{chapter.title}</h2>
                <p className="mt-8 text-xl text-black/60 leading-relaxed">
                  {chapter.content}
                </p>
                <div className="mt-12 h-px w-24 bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDiveSection;
