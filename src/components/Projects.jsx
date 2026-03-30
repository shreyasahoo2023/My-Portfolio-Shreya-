import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Terminal, Cpu, Globe, Layout, Sparkles } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Hook Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
    
    // For the custom glow follow
    setMousePos({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Staggered Child Variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative glass-card rounded-[2.5rem] overflow-hidden group transition-all duration-500 border ${project.accent} flex flex-col min-h-[550px] shadow-2xl`}
    >
      {/* Dynamic Cursor Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* Project Image Header with Clip Reveal */}
      <div className="h-72 w-full relative overflow-hidden flex items-center justify-center shrink-0">
        <motion.div 
          initial={{ scale: 1.2, filter: "blur(10px)" }}
          animate={isHovered ? { scale: 1.05, filter: "blur(0px)" } : { scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
        </motion.div>
        
        {/* Decorative Badge */}
        <div className="absolute top-6 right-6 z-20">
          <div className="glass px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-xs font-bold text-white tracking-widest uppercase">
            {project.id === 1 ? <Cpu size={14} className="text-accent-blue" /> : <Layout size={14} className="text-accent-pink" />}
            {project.techStack[0]}
          </div>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-1 relative z-20" style={{ transform: "translateZ(50px)" }}>
        <motion.div custom={1} variants={contentVariants} className="flex justify-between items-start mb-4">
           <h3 className="text-3xl font-black text-white tracking-tight">{project.title}</h3>
           <Sparkles className="text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
        </motion.div>

        <motion.p custom={2} variants={contentVariants} className="text-gray-400 text-lg mb-8 leading-relaxed font-medium">
          {project.description}
        </motion.p>
        
        <motion.div custom={3} variants={contentVariants} className="flex flex-wrap gap-3 mb-auto">
          {project.techStack.map((tech, i) => (
            <span key={i} className="text-xs font-black px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 uppercase tracking-widest transition-all hover:bg-white/10 hover:text-white">
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div custom={4} variants={contentVariants} className="flex items-center gap-5 mt-10">
          {project.liveLink !== "#" && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 relative group/link py-4 rounded-2xl overflow-hidden font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95">
              <div className="absolute inset-0 bg-white"></div>
              <span className="relative z-10 text-black flex items-center gap-2">
                Live Preview <ExternalLink size={18} strokeWidth={3} />
              </span>
            </a>
          )}
          {project.githubLink !== "#" && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border border-white/10 shadow-xl group/git">
              <Terminal size={24} className="group-hover/git:rotate-12 transition-transform" />
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Attendance System",
      description: "A high-performance neural vision system for automated campus attendance. Features real-time face detection and comprehensive dashboard monitoring.",
      techStack: ["React", "FaceAPI", "Python", "Vite"],
      image: "/ai_attendance_system_v2.png",
      accent: "hover:border-accent-blue/50 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]",
      liveLink: "https://ai-attendance.netlify.app/dashboard",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Mindful Mate",
      description: "A wellness-first AI interface designed to support mental health tracking and therapeutic interactions. Focuses on accessibility and emotional safety.",
      techStack: ["UI/UX", "Framer", "Figma", "Node.js"],
      image: "/mindful_mate_mental_health_ui.png",
      accent: "hover:border-accent-pink/50 group-hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)]",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'backOut' }}
        className="mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
           <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-pink to-accent-gold">Projects</span></h2>
           <div className="w-32 h-2 bg-gradient-to-r from-accent-blue to-accent-pink rounded-full"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
