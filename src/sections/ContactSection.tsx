"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection: React.FC = () => (
  <section id="contact" className="min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-4 md:px-8">
    <div className="max-w-xl w-full text-center py-8 md:py-12">
      <h2 className="text-3xl font-bold mb-8 mt-4">Contact</h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 mb-6"
        onSubmit={e => e.preventDefault()}
      >
        <input type="text" placeholder="Name" className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
        <input type="email" placeholder="Email" className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
        <textarea placeholder="Message" className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={4} required />
        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded font-semibold hover:scale-105 transition-transform">Send</button>
      </motion.form>
      <div className="mb-2 text-indigo-300">thadisetty.saiteja@gmail.com</div>
      <div className="flex justify-center gap-6 mt-6 mb-2">
        <a href="https://github.com/SaitejaThadisetty" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com/in/saitejat27" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
          <FaLinkedin size={28} />
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection; 