"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
    <footer className="w-full py-8 text-center text-slate-300 relative backdrop-blur-sm bg-slate-900/10 border-t border-slate-700/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="text-sm">Saiteja Thadisetty</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/SaitejaThadisetty" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-125 transition-transform text-slate-300 hover:text-slate-200"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/saitejat27" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-125 transition-transform text-slate-300 hover:text-slate-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://twitter.com/SaitejaThadisetty" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-125 transition-transform text-slate-300 hover:text-slate-200"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      
      <motion.button
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.4 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-12 bg-gradient-to-r from-slate-600 to-slate-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        style={{ display: show ? 'block' : 'none' }}
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer; 