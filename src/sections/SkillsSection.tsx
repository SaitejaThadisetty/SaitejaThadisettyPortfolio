"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaGit } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiSelenium, SiMysql, SiPostgresql, SiFirebase } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava className="text-[#f89820]" /> },
  { name: 'Python', icon: <FaPython className="text-[#3776ab]" /> },
  { name: 'JavaScript', icon: <FaJs className="text-[#f7df1e]" /> },
  { name: 'React.js', icon: <FaReact className="text-[#61dafb]" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6db33f]" /> },
  { name: 'SQL', icon: <FaDatabase className="text-[#4479a1]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { name: 'Selenium', icon: <SiSelenium className="text-[#43b02a]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#3c873a]" /> },
  { name: 'REST APIs', icon: <FaDatabase className="text-[#e34c26]" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#00758f]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-[#ffca28]" /> },
  { name: 'Git', icon: <FaGit className="text-[#f34f29]" /> },
];

const SkillsSection: React.FC = () => (
  <section id="skills" className="min-h-[50vh] flex items-center justify-center text-white px-4 md:px-8">
    <div className="max-w-4xl w-full text-center py-8 md:py-12">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="text-4xl md:text-5xl mb-2 drop-shadow-lg">
              {skill.icon}
            </div>
            <span className="text-xs md:text-sm opacity-0 group-hover:opacity-100 bg-gray-800 px-2 py-1 rounded mt-1 transition-opacity duration-200">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection; 