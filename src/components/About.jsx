import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute -left-40 top-40 w-80 h-80 bg-accent-pink/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-pink">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-gold to-accent-pink mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue via-accent-pink to-accent-gold"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-2xl glass border-accent-gold/30 flex items-center justify-center p-2 shadow-[0_0_30px_rgba(255,215,0,0.15)] overflow-hidden group">
                <img src="/profile.jpg" alt="Shreya Sahoo" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-white">Shreya Sahoo</h3>
              <p className="text-accent-gold font-medium mb-6 uppercase tracking-widest text-sm">B.Tech Student & Developer</p>
              
              <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                <p>
                  I am a passionate aspiring Software Engineer with a deep admiration for problem solving and building modern, scalable web applications. Currently pursuing my B.Tech degree, I blend academic excellence with practical coding skills.
                </p>
                <p>
                  My focus lies in creating luxurious, futuristic user interfaces that don't just look stunning, but also provide intuitive, seamless user experiences. I thrive on bringing complex ideas to life through elegant code and creative design.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-center">
                  <p className="text-2xl font-bold text-accent-blue">🎓</p>
                  <p className="text-xs text-gray-400 mt-1 uppercase">B.Tech</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
