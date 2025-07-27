"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const projects = [
  {
    name: 'AeroReserve',
    desc: 'Airline reservation system using Spring Boot + Thymeleaf + MySQL. REST APIs, user auth, validation.',
    tech: ['Spring Boot', 'Thymeleaf', 'MySQL'],
    img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/SaitejaThadisetty/FlightTicketReservationSystem',
    // demo: '#',
  },
  {
    name: 'CryptoLens',
    desc: 'Crypto tracker using React.js + Firebase + Chart.js. CoinGecko API, deployed on Netlify.',
    tech: ['React.js', 'Firebase', 'Chart.js'],
    img: '/images/crypto.jpg',
    // github: '#',
    // demo: '#',
  },
  {
    name: 'Leaf Classification (ML)',
    desc: 'Custom dataset, CNN vs BRC models, SSD detection. ML with Python, SVM, object detection.',
    tech: ['Python', 'CNN', 'SVM'],
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/SaitejaThadisetty/Comparativeanalysis-of-mulitlabel-leaf-classification-using-CNN-and-BinaryRelevance-Classfier',
    // demo: '#',
  },
  {
    name: 'QuickShop',
    desc: 'Created a responsive eCommerce web application with features like user login, product search, CRUD operations, and secure checkout, utilizing MySQL for data storage and PHP for server-side scripting.',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL', 'Bootstrap'],
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/SaitejaThadisetty/QuickShop_Ecommerce',
    demo: '#',
  },
 
  {
    name: 'My Portfolio Website',
    desc: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations, project showcases, and contact functionality.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/SaitejaThadisetty/SaitejaThadisettyPortfolio',
    demo: 'https://saiteja-thadisetty-portfolio.vercel.app/',
  },

  {
    name: 'Financial Data Filtering App',
    desc: 'A responsive web app that displays, filters, and sorts financial data for Apple Inc. using the Financial Modeling Prep API. Features dark/light modes, date and value filters, and sorting options for key financial metrics.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Financial Modeling Prep API'],
    img: 'https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg',
    github: 'https://github.com/SaitejaThadisetty/Financial-Data-Filtering-Application',
    demo: 'https://financial-data-filtering-application.vercel.app/',
  },
  
];

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProjects = projects.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  );

  return (
    <section id="projects" className="min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-4 md:px-8">
      <div className="max-w-6xl w-full text-center py-8 md:py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8"
        >
          Projects
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
            aria-label="Previous projects"
          >
            <FiChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
            aria-label="Next projects"
          >
            <FiChevronRight size={24} />
          </motion.button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, i) => (
                <motion.div
                  key={`${currentIndex}-${project.name}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-lg mb-4 w-full"
                  >
                    <img 
                      src={project.img} 
                      alt={project.name} 
                      className="w-full h-40 object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-4"
                    >
                      <div className="flex gap-4">
                        <motion.a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-300"
                        >
                          <FaGithub size={20} />
                        </motion.a>
                        <motion.a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-300"
                        >
                          <FiExternalLink size={18} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-200 mb-4 text-center leading-relaxed">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + techIndex * 0.1 }}
                        className="bg-indigo-600/70 text-xs px-3 py-1 rounded-full text-white backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-4 text-sm text-gray-300"
          >
            {currentIndex + 1} / {totalPages}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 