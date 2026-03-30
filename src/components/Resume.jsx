import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ChevronRight } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 max-w-5xl mx-auto px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden glass border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-black to-accent-gold/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="relative p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-accent-gold/30 mb-6 text-accent-gold text-sm font-semibold tracking-widest uppercase">
              <FileText size={16} /> Resume
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Detailed View of My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-blue">Experience</span></h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0">
              Want to see a comprehensive breakdown of my skills, education, and professional journey? Grab a copy of my resume.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0 md:min-w-[250px]">
            <a href="/Shreya sahoo_resume.pdf" download="Shreya sahoo_resume.pdf" className="w-full relative group p-1 bg-gradient-to-r from-accent-blue to-accent-gold rounded-2xl cursor-pointer">
              <div className="bg-black px-8 py-5 rounded-[14px] flex items-center justify-between group-hover:bg-transparent transition-colors duration-300">
                <span className="font-bold text-white group-hover:text-black transition-colors">Download PDF</span>
                <Download size={20} className="text-accent-gold group-hover:text-black transition-colors" />
              </div>
            </a>
            
            <a href="/Shreya sahoo_resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between px-8 py-5 rounded-2xl glass border-white/10 hover:bg-white/5 transition-colors text-white font-semibold group">
               View in Browser <ChevronRight size={20} className="text-gray-400 group-hover:text-accent-pink group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
