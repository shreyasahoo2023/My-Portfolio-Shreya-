import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Server, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <LayoutTemplate className="text-accent-blue" size={28} />,
      skills: ["HTML", "CSS", "React", "JavaScript"],
      borderClass: "border-accent-blue/30 group-hover:border-accent-blue/50",
      glowClass: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      skillHoverClass: "hover:bg-accent-blue/10 hover:border-accent-blue/50 hover:text-accent-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
    },
    {
      title: "Backend",
      icon: <Server className="text-accent-pink" size={28} />,
      skills: ["Python"],
      borderClass: "border-accent-pink/30 group-hover:border-accent-pink/50",
      glowClass: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
      skillHoverClass: "hover:bg-accent-pink/10 hover:border-accent-pink/50 hover:text-accent-pink hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
    },
    {
      title: "Coding Languages",
      icon: <Terminal className="text-accent-gold" size={28} />,
      skills: ["Python", "C", "Java"],
      borderClass: "border-accent-gold/30 group-hover:border-accent-gold/50",
      glowClass: "group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]",
      skillHoverClass: "hover:bg-accent-gold/10 hover:border-accent-gold/50 hover:text-accent-gold hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0a0a] border-y border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-pink/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-pink">Skills</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-gold to-accent-pink rounded-full"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`glass-card p-8 flex flex-col gap-6 group transition-all duration-500 border ${category.borderClass} ${category.glowClass}`}
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className={`px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium transition-all cursor-default ${category.skillHoverClass}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
