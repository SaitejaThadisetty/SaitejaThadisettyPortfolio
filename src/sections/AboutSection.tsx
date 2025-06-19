"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => (
  <section id="about" className="min-h-[60vh] flex items-center justify-center bg-gray-900 text-white px-4 md:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg">I'm a Computer Science graduate student at the University of Central Missouri with a 4.0 GPA. Currently working as an Embedded Software Engineer Intern at Honeywell Technology Solutions, where I've developed automation frameworks and full-stack applications. I'm passionate about creating efficient solutions and have experience in both web development and machine learning.</p>
    </motion.div>
  </section>
);

export default AboutSection; 