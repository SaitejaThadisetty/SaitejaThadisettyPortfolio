"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-80 backdrop-blur-md bg-gradient-to-r from-gray-900/80 to-gray-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <motion.a
          href="#home"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer select-none hover:scale-105 transition-transform duration-300"
        >
          Saiteja Thadisetty.
        </motion.a>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1, color: '#a78bfa' }}
              className="transition-colors duration-200"
            >
              <a href={link.href} className="hover:text-indigo-400 transition-colors duration-200">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl text-indigo-300 focus:outline-none z-50"
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
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-gray-900/95 shadow-2xl flex flex-col items-center pt-24 gap-8 md:hidden z-40"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-semibold text-indigo-100 hover:text-indigo-400 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 