import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Trophy, Image as ImageIcon, X } from 'lucide-react';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certs = [
    {
      title: "Startup Summit of NIRMITI 2024 \u2014 Participant",
      issuer: "Regent Education & Research Foundation Group of Institutions",
      date: "October 2024",
      icon: <Award size={32} className="text-accent-gold" />,
      color: "from-accent-gold",
      border: "hover:border-accent-gold/50",
      image: "/nirmiti-cert.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-24 max-w-7xl mx-auto px-6 relative perspective-1000">
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-10 right-20 w-64 h-64 bg-accent-pink/10 rounded-full blur-[100px] pointer-events-none"
      ></motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        className="mb-20 flex flex-col items-center md:items-start text-center md:text-left relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-gold">Achievements</span></h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-accent-pink to-accent-gold rounded-full mx-auto md:mx-0"
        ></motion.div>
      </motion.div>

      <div className="flex justify-center md:justify-start">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, rotateX: 20, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.2, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative z-10 flex flex-col w-full max-w-2xl"
          >
            {/* Infinite pulse backplate glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.03, 1],
                opacity: [0.15, 0.4, 0.15]
              }}
              transition={{ repeat: Infinity, duration: 3, delay: i }}
              className={`absolute -inset-1 bg-gradient-to-r ${cert.color} to-accent-gold rounded-3xl blur-xl group-hover:blur-2xl transition duration-500`}
            ></motion.div>
            
            <div className={`glass-card p-8 relative flex flex-col flex-1 items-center sm:items-start border border-white/10 ${cert.border} transition-colors duration-300 backdrop-blur-xl bg-black/40 overflow-hidden`}>
              
              {/* Optional background image fade on hover */}
              {cert.image && (
                 <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none">
                   <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-sm" />
                 </div>
              )}

              <motion.div 
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] shrink-0 z-10 overflow-hidden relative cursor-crosshair mb-6"
              >
                {cert.icon}
              </motion.div>
              
              <div className="flex-1 text-center sm:text-left flex flex-col justify-start z-10 w-full mb-6">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{cert.title}</h3>
                
                <p className="text-accent-gold font-medium flex items-start gap-2 text-sm text-left mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-ping shrink-0 mt-1.5"></span>
                  {cert.issuer}
                </p>
                
                <span className="text-gray-500 text-xs font-mono bg-white/5 px-2 py-1 rounded-md self-start">{cert.date}</span>
              </div>
              
              <div className="mt-auto z-10 relative">
                {cert.image ? (
                  <motion.button 
                    onClick={() => setSelectedImage(cert.image)}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-accent-gold hover:text-white transition-colors"
                  >
                    View Image <ImageIcon size={16} />
                  </motion.button>
                ) : (
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-accent-blue hover:text-accent-pink transition-colors"
                  >
                    View Credential <ExternalLink size={16} />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-md cursor-pointer"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden glass p-2 border-white/20 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-accent-pink hover:text-white transition-colors border border-white/10"
              >
                <X size={24} />
              </button>
              <img src={selectedImage} alt="Certificate view" className="w-full h-auto object-contain max-h-[85vh] rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certifications;
