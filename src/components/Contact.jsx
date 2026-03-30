import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const GithubIcon = ({size=18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({size=18}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-accent-pink to-accent-blue">Connect</span></h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-accent-gold via-accent-pink to-accent-blue mx-auto rounded-full mb-8"
        ></motion.div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="lg:col-span-2 flex flex-col justify-center gap-8"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-10 border border-white/10 hover:border-accent-pink/30 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-pink/5 rounded-full blur-[50px] group-hover:bg-accent-pink/20 transition-colors duration-500"></div>
            
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 transition-transform">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreya.sahoo2023@gmail.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-accent-pink/10 flex items-center justify-center text-accent-pink border border-accent-pink/20 shadow-inner hover:bg-accent-pink/20 transition-colors cursor-pointer">
                  <Mail size={24} />
                </a>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Email Me At</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreya.sahoo2023@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-accent-pink transition-colors font-semibold">shreya.sahoo2023@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 transition-transform">
                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20 shadow-inner">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Location</p>
                  <p className="text-lg text-white font-semibold">India</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 font-medium mb-5">Social Profiles</p>
              <div className="flex gap-4">
                <a href="https://github.com/shreyasahoo2023" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:border-accent-gold transition-all hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]">
                  <GithubIcon size={20} />
                </a>
                
                <a href="https://www.linkedin.com/in/shreya-sahoo2027" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:border-accent-blue transition-all hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <form 
            action="https://formsubmit.co/shreya.sahoo2023@gmail.com" 
            method="POST" 
            className="glass-card p-8 md:p-12 border border-white/10 flex flex-col gap-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            {/* FormSubmit Config */}
            <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-sm text-gray-400 font-bold tracking-[0.2em]">YOUR NAME</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="John Doe" 
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-sm text-gray-400 font-bold tracking-[0.2em]">YOUR EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="john@example.com" 
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-accent-pink/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-pink/20 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="subject" className="text-sm text-gray-400 font-bold tracking-[0.2em]">SUBJECT</label>
              <input 
                type="text" 
                id="subject" 
                name="Subject"
                placeholder="Project Inquiry" 
                required
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-accent-gold/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-gold/20 transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="text-sm text-gray-400 font-bold tracking-[0.2em]">MESSAGE</label>
              <textarea 
                id="message" 
                name="message"
                rows="6" 
                placeholder="Hello, I'd like to talk about..." 
                required
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-accent-blue/20 transition-all duration-300 resize-none"
              ></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="group/btn relative mt-2 px-8 py-5 overflow-hidden rounded-xl font-black text-black flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(59,130,246,0.3)] text-xl tracking-widest uppercase cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-pink to-accent-gold group-hover/btn:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-3">
                Send Message <Send size={22} strokeWidth={3} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
