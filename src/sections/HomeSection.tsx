"use client";
import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'Creative Coder',
  'Tech Enthusiast',
];

const HomeSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState('');
  const [typing, setTyping] = React.useState(true);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing && !deleting) {
      if (displayed.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1200);
      }
    } else if (deleting) {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length - 1));
        }, 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden pb-24 md:pb-32 pt-40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-move" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-pink-400/30 via-indigo-400/20 to-purple-400/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-gradient-to-tr from-indigo-400/20 via-pink-400/20 to-purple-400/30 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center text-center gap-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex items-center justify-center mb-4"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            className="absolute w-44 h-44 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-indigo-400 via-pink-400 to-purple-400 opacity-60 blur-lg"
            style={{ zIndex: 1 }}
          />
          <motion.img
            src="/images/saiteja.jpeg"
            alt="Profile"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover border-4 border-indigo-500 shadow-xl relative z-10"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2 pb-4"
        >
          Hi, I'm Saiteja Thadisetty
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl md:text-3xl font-medium text-indigo-200 h-10 mb-2 min-h-[2.5rem] flex items-center justify-center"
        >
          {displayed}
          <span className="animate-pulse">|</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="max-w-xl text-lg md:text-xl text-gray-200"
        >
          Welcome to my portfolio! I build modern, scalable web apps and love creative coding.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HomeSection; 