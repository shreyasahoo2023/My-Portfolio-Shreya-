import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const IntroScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 2.5s duration for the loader sequence
    const duration = 2500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500); // Wait half a second before triggering unmount fade
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Particle generation for premium floating background effect
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  }));

  // Typography characters for cascading reveal
  const titleText = "SHREYA SAHOO".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* Background dark premium gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-pink/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      {/* Floating particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/30 blur-[1px] pointer-events-none"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay
          }}
        />
      ))}

      {/* Centered Content Block */}
      <div className="relative z-10 flex flex-col items-center shrink-0 w-full px-6">
        
        {/* Animated SVG SS Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-10 drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Draw animation for First S */}
            <motion.path
              d="M 45 25 C 45 5, 15 5, 15 30 C 15 55, 45 45, 45 70 C 45 95, 15 95, 15 75"
              stroke="url(#gradientSS)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Draw animation for Second S */}
            <motion.path
              d="M 85 25 C 85 5, 55 5, 55 30 C 55 55, 85 45, 85 70 C 85 95, 55 95, 55 75"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
            <defs>
              <linearGradient id="gradientSS" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="0.5" stopColor="#ec4899" />
                <stop offset="1" stopColor="#ffd700" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Welcome Text */}
        <div className="flex flex-col items-center text-center overflow-hidden mb-12">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 text-xs md:text-sm tracking-[0.3em] font-medium uppercase mb-4"
          >
            Welcome to My Portfolio
          </motion.h2>
          
          <div className="flex space-x-2">
            {titleText.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.05,
                  ease: "easeOut"
                }}
                className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Dynamic Loading Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="w-48 md:w-72 h-[3px] bg-white/10 rounded-full overflow-hidden relative"
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-accent-blue via-accent-pink to-accent-gold shadow-[0_0_15px_rgba(236,72,153,0.8)] rounded-full"
            style={{ width: `${progress}%` }}
            layout
          />
        </motion.div>
        
        {/* Percentage Tracker */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-between w-48 md:w-72 mt-3"
        >
          <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Loading Core</span>
          <span className="text-[10px] text-accent-gold font-mono">{Math.round(progress)}%</span>
        </motion.div>
        
      </div>
    </motion.div>
  );
};

export default IntroScreen;
