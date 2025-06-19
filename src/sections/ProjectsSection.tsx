"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    name: 'AeroReserve',
    desc: 'Airline reservation system using Spring Boot + Thymeleaf + MySQL. REST APIs, user auth, validation.',
    tech: ['Spring Boot', 'Thymeleaf', 'MySQL'],
    img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80',
    github: '#',
    demo: '#',
  },
  {
    name: 'CryptoLens',
    desc: 'Crypto tracker using React.js + Firebase + Chart.js. CoinGecko API, deployed on Netlify.',
    tech: ['React.js', 'Firebase', 'Chart.js'],
    img: '/images/crypto.jpg',
    github: '#',
    demo: '#',
  },
  {
    name: 'Leaf Classification (ML)',
    desc: 'Custom dataset, CNN vs BRC models, SSD detection. ML with Python, SVM, object detection.',
    tech: ['Python', 'CNN', 'SVM'],
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    github: '#',
    demo: '#',
  },
];

const ProjectsSection: React.FC = () => (
  <section id="projects" className="min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-4 md:px-8">
    <div className="max-w-5xl w-full text-center py-8 md:py-12">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center"
          >
            <img src={project.img} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-200 mb-2">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.tech.map((t) => (
                <span key={t} className="bg-indigo-600/70 text-xs px-2 py-1 rounded text-white">{t}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <FaGithub size={22} />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                <FiExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection; 