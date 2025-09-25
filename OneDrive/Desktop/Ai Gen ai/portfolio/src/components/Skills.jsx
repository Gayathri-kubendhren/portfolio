import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Figma",
    "Adobe Express",
    "Git/Github",
    "Python"
  ];

  return (
    <section id="skills" className="py-20 bg-black text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-purple-400 mb-10"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 text-cyan-400 font-semibold py-4 rounded-lg shadow-md hover:bg-cyan-400 hover:text-black transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
