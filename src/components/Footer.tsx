"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Footer: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
        controls.start({ opacity: 1, y: 0 });
      } else {
        setShow(false);
        controls.start({ opacity: 0, y: 40 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-6 bg-gray-950 text-center text-gray-400 relative">
      <span>© 2025 Saiteja Thadisetty. All rights reserved.</span>
      <motion.button
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.4 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        style={{ display: show ? 'block' : 'none' }}
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer; 