import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Building2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech (Information Technology)",
      institution: "Techno Main Salt Lake, Kolkata ",
      year: "2023 \u2014 2027",
      status: "Ongoing",
      icon: <GraduationCap size={20} className="text-accent-blue" />,
      iconBg: "border-accent-blue/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "Chaipat High School (WB Board)",
      year: "2021 \u2014 2023",
      status: "Completed",
      icon: <Book size={20} className="text-accent-pink" />,
      iconBg: "border-accent-pink/30 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
    },
    {
      degree: "Secondary Education",
      institution: "Chaipat Girls' High School (WB Board)",
      year: "2021",
      status: "Completed",
      icon: <Building2 size={20} className="text-accent-gold" />,
      iconBg: "border-accent-gold/30 shadow-[0_0_15px_rgba(255,215,0,0.3)]"
    }
  ];

  return (
    <section id="education" className="py-24 max-w-5xl mx-auto px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-gold">Education</span></h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-gold rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      <div className="relative pl-8 md:pl-16">
        {/* Continuous gradient timeline line with glow */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 left-[19px] md:left-[35px] w-[2px] bg-gradient-to-b from-accent-blue via-accent-pink to-accent-gold opacity-50 origin-top"
        ></motion.div>
        
        <motion.div 
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-0 bottom-0 left-[18px] md:left-[34px] w-[4px] bg-gradient-to-b from-accent-blue via-accent-pink to-accent-gold blur-sm opacity-30"
        ></motion.div>

        {educationData.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.3, type: "spring", bounce: 0.4 }}
            className="mb-16 relative group"
          >
            {/* Timeline node icon with backglow */}
            <motion.div 
               whileHover={{ rotate: 360, scale: 1.3 }}
               transition={{ duration: 0.8, type: "spring" }}
               className="absolute -left-[54px] md:-left-[76px] top-4 w-12 h-12 flex items-center justify-center z-10"
            >
              <div className={`absolute inset-0 bg-black border ${item.iconBg} rounded-full`}></div>
              <div className="relative z-10">{item.icon}</div>
            </motion.div>
            
            <motion.div 
               whileHover={{ scale: 1.03, y: -5 }}
               transition={{ type: "spring", stiffness: 300 }}
               className="glass-card p-6 md:p-8 rounded-2xl border-white/5 hover:border-white/20 hover:bg-white/5 transition-all flex flex-col md:flex-row md:items-start justify-between gap-4 cursor-pointer shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              {/* Internal subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/0 via-accent-pink/5 to-accent-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">{item.degree}</h3>
                <p className="text-lg text-gray-400 font-medium mb-2">{item.institution}</p>
                <p className="text-gray-500 text-sm font-semibold tracking-wider font-mono">{item.year}</p>
              </div>

              {/* Status Pill */}
              <div className="shrink-0 mt-2 md:mt-0 relative z-10">
                {item.status === 'Ongoing' ? (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-accent-blue bg-accent-blue/10 border border-accent-blue/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
                    {item.status}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-green-400 bg-green-400/10 border border-green-400/30">
                    {item.status}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
