
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'UI DESIGN', level: 95, color: 'from-blue-500 to-cyan-400' },
  { name: 'MOTION GRAPHICS', level: 90, color: 'from-purple-500 to-pink-400' },
  { name: 'REACT / TS', level: 98, color: 'from-emerald-500 to-teal-400' },
  { name: '3D MODELING', level: 85, color: 'from-orange-500 to-yellow-400' },
  { name: 'UX RESEARCH', level: 88, color: 'from-red-500 to-orange-400' },
  { name: 'WEBGL / SHADERS', level: 82, color: 'from-indigo-500 to-blue-400' },
];

const SkillsMatrix: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <span className="text-xs font-bold tracking-[0.4em] text-white/40">CAPABILITIES</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4">SKILLS MATRIX</h2>
          </div>
          <p className="text-white/40 max-w-sm mb-2">
            A diverse toolkit built across years of collaboration with leading technology brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group p-8 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex justify-between items-end mb-6">
                <span className="text-lg font-bold tracking-tight">{skill.name}</span>
                <span className="text-sm font-mono text-white/40">{skill.level}%</span>
              </div>
              
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: i * 0.1 + 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
