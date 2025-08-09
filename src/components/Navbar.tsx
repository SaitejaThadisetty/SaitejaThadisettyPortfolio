"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/20 border-b border-slate-700/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <motion.a
          href="#home"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 bg-clip-text text-transparent cursor-pointer select-none hover:scale-105 transition-transform duration-300"
        >
          Saiteja Thadisetty.
        </motion.a>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-lg font-medium items-center">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1, color: '#94a3b8' }}
              className="transition-colors duration-200"
            >
              <a href={link.href} className="text-slate-200 hover:text-slate-300 transition-colors duration-200">
                {link.name}
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="transition-transform duration-200"
          >
            <a 
              href="https://drive.google.com/file/d/1LeFs1aGyxtPKUYH2qc6jkd0fwrZ_1fEu/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white px-4 py-1.5 rounded-full hover:shadow-lg transition-shadow duration-300"
            >
              <FiDownload className="text-sm" />
              <span>Resume</span>
            </a>
          </motion.li>
        </ul>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl text-slate-300 focus:outline-none z-50"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-slate-900/80 backdrop-blur-md border-l border-slate-700/30 shadow-2xl flex flex-col items-center pt-24 gap-8 md:hidden z-40"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-semibold text-slate-100 hover:text-slate-400 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1LeFs1aGyxtPKUYH2qc6jkd0fwrZ_1fEu/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow duration-300 mt-2"
                onClick={() => setMenuOpen(false)}
              >
                <FiDownload className="text-sm" />
                <span>Resume</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 