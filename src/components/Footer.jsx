import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-20 pt-[1px] bg-gradient-to-r from-accent-blue via-accent-pink to-accent-gold">
      <div className="py-8 text-center bg-background flex flex-col items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter mb-4">
          SS<span className="text-accent-gold">.</span>
        </a>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Shreya Sahoo. Crafted with React, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
