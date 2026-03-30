import React from 'react';

const TechStack = () => {
  const tools = [
    "Figma", "Sketch", "Framer", "Webflow", "React", "Vue.js", "Tailwind", "Three.js", "Node.js", "Next.js",
    "Figma", "Sketch", "Framer", "Webflow", "React", "Vue.js", "Tailwind", "Three.js", "Node.js", "Next.js" // Duplicated to ensure smooth loop
  ];

  return (
    <section className="py-20 bg-white/5 border-y border-white/10 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex gap-12 sm:gap-24 items-center pl-12 sm:pl-24">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/10 hover:from-neon-yellow hover:to-neon-pink transition-all duration-300 cursor-default uppercase tracking-tighter"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
