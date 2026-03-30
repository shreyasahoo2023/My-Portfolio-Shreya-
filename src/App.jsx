import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeetCode from './pages/LeetCode';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Prevent scrolling while intro is active
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
      // Force scroll to top on reload so they don't spawn in the middle of the page
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent-pink selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div 
            key="main-app"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-full"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Education />
              <LeetCode />
              <Projects />
              <Certifications />
              <Resume />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
