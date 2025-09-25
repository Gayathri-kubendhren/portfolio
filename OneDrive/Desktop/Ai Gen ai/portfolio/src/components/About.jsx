import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg"; // Ensure the path is correct!

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold text-cyan-400 mb-10"
      >
        About Me
      </motion.h2>

      {/* Main Content Wrapper */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Section (Image and Introduction) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 flex-shrink-0"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-cyan-500 transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          />
        </motion.div>

        {/* Right Section (Other Content) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-left space-y-6 text-gray-300 max-w-2xl mx-auto"
        >
          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl"
          >
            👋 Hey there! I'm a passionate developer focused on creating modern, responsive, and engaging web applications. 
            With a strong foundation in <span className="text-cyan-400">Full-Stack Development</span>, I specialize in 
            building dynamic websites using technologies like React, Node.js, Express, and MongoDB.
          </motion.p>

          {/* Skills Section */}
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl font-semibold text-cyan-300"
          >
            Skills & Expertise
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="list-disc pl-6"
          >
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js, Express</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>UI/UX Design:</strong> Figma, Canva, Adobe Express</li>
          </motion.ul>

          {/* Projects & Experience Section */}
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl font-semibold text-cyan-300"
          >
            Projects & Experience
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-gray-400"
          >
            One of my proudest achievements was creating an <strong>e-commerce website</strong> with dynamic product listings, user authentication, and a shopping cart. 
            The entire process helped me refine my skills in both frontend and backend technologies. You can check out my work in the <a href="#projects" className="text-cyan-400">Portfolio</a>.
          </motion.p>

          {/* Learning & Growth */}
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-xl font-semibold text-cyan-300"
          >
            Continuous Learning
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-gray-400"
          >
            I am always keen to learn and improve. Right now, I’m expanding my knowledge of <strong>UI/UX design</strong> and enhancing my expertise in advanced React concepts. 
            I am also exploring new tools and libraries to make my applications even more performant and user-friendly.
          </motion.p>

          {/* Contact Call-to-Action */}
          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 mt-6 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
