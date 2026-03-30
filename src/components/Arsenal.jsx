import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Layout, Code, Terminal, Palette, Zap } from 'lucide-react';

const Arsenal = () => {
  const skills = [
    { icon: <Layout className="text-neon-pink" size={32} />, title: "UI/UX Design", desc: "Creating intuitive interfaces that users love." },
    { icon: <Palette className="text-neon-yellow" size={32} />, title: "Brand Identity", desc: "Crafting a unique voice and visual system." },
    { icon: <Code className="text-neon-blue" size={32} />, title: "Frontend Dev", desc: "Building responsive, animated web apps." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Decorative Background Element */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-neon-pink rounded-full mix-blend-screen blur-[100px] opacity-20 pointer-events-none"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col md:flex-row gap-16"
      >
        {/* Left Column: Heading & Stats */}
        <div className="w-full md:w-1/3">
          <p className="text-neon-yellow font-semibold tracking-widest text-sm mb-2 uppercase">My Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bring Ideas to Life with <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">Creative Precision</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Beyond just making things look pretty, I focus on solving user problems and achieving business goals through strategic design and development.
          </p>

          <div className="flex gap-8">
            <div>
              <p className="text-4xl font-bold text-white mb-2">5+</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Years<br/>Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">120+</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Successful<br/>Projects</p>
            </div>
          </div>
        </div>

        {/* Right Column: Skill Cards */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div className="mb-6 bg-white/5 p-4 rounded-xl inline-flex w-max border border-white/10">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            variants={itemVariants}
            className="glass-card p-8 bg-gradient-to-br from-neon-blue/10 to-neon-pink/10 border-white/20 flex flex-col justify-center items-center text-center sm:col-span-2 md:col-span-1"
          >
            <Zap className="text-white mb-4 animate-pulse" size={40} />
            <h3 className="text-xl font-bold text-white mb-2">Always Learning</h3>
            <p className="text-gray-400 text-sm">Staying ahead of the design and tech curve.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Arsenal;
