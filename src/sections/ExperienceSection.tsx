"use client";
import React from 'react';
import { motion } from 'framer-motion';

// High-quality Honeywell logo from official site
const honeywellLogo = '/images/honeywell.png';

const points = [
  'Built Selenium automation framework (reduced testing by 90%)',
  'Developed smart meter dashboards using React.js, Spring Boot, PostgreSQL',
  'Used Kubernetes observability tools for protocol debugging',
  'Received the "Bravo Award" for being recognized as the Best Employee of the Business Group, honoring exceptional contributions to the design and development of the automation framework',
];

const ExperienceSection: React.FC = () => (
  <section id="experience" className="min-h-[60vh] flex items-center justify-center text-white px-4 md:px-8">
    <div className="max-w-3xl w-full text-center">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md bg-slate-800/30 border border-slate-600/30 rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 mb-12"
      >
        <img src={honeywellLogo} alt="Honeywell" className="w-44 h-16 object-contain mb-4 md:mb-0 bg-white rounded-lg p-2" />
        <div className="flex-1 text-left">
          <h3 className="text-xl font-semibold mb-1">Embedded Software Engineer Intern</h3>
          <span className="text-sm text-slate-300 mb-2 block">Honeywell Technology Solutions</span>
          <span className="text-xs text-gray-400 mb-4 block">Jan 2024 - Jul 2024</span>
          <ul className="list-disc ml-5 space-y-2">
            {points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-base"
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection; 