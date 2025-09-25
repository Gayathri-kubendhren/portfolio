// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white px-6 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"], // Move the gradient
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 z-10"
        initial={{ opacity: 0, x: "-100%" }} // Starts from left (out of screen)
        animate={{ opacity: 1, x: 0 }} // Moves into place
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Hi, I'm{" "}
        <motion.span
          className="text-purple-500"
          animate={{
            x: ["0", "10px", "-10px", "10px", "-10px", "0"], // Shake effect for the emoji
          }}
          transition={{
            duration: 1,
            repeat: Infinity, // Infinite shake animation
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          Gayathri👋
        </motion.span>
      </motion.h1>

      {/* Subtitle with Color Changing Effect */}
      <motion.p
        className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am passionate about{" "}
        <motion.span
          className="text-blue-400"
          animate={{
            color: [
                "rgb(0, 255, 255)", // Cyan
                "rgb(255, 215, 0)", // Gold
                "rgb(255, 69, 0)", // Red-Orange
                "rgb(255, 105, 180)", // Hot Pink
                "rgb(16, 185, 129)", // Emerald (tailwind emerald-400)
                 "rgb(156, 39, 176)", // Purple (tailwind purple-400)
                 "rgb(59, 130, 246)", // Blue (tailwind blue-400)
              
              
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          Full-Stack Development
        </motion.span>{" "}
        . Currently learning the{" "}
        <motion.span
          className="text-purple-400"
          animate={{
            color: [
             
              "rgb(156, 39, 176)", // Purple (tailwind purple-400)
              "rgb(59, 130, 246)", // Blue (tailwind blue-400)
              "rgb(0, 255, 255)", // Cyan
              "rgb(16, 185, 129)", // Emerald (tailwind emerald-400)
              "rgb(255, 69, 0)", // Red-Orange
              "rgb(255, 215, 0)", // Gold
              "rgb(255, 105, 180)", // Hot Pink
              
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          MERN stack
        </motion.span>{" "}
        and also exploring{" "}
        <motion.span
          className="text-emerald-400"
          animate={{
            color: [
              "rgb(59, 130, 246)", // Blue (tailwind blue-400)
              "rgb(156, 39, 176)", // Purple (tailwind purple-400)
              "rgb(16, 185, 129)", // Emerald (tailwind emerald-400)
              "rgb(255, 105, 180)", // Hot Pink
              "rgb(255, 69, 0)", // Red-Orange
              "rgb(255, 215, 0)", // Gold
              "rgb(0, 255, 255)", // Cyan
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        >
          UI/UX design
        </motion.span>{" "}
        to build modern, user-friendly web applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-purple-500 text-purple-400 font-semibold hover:bg-purple-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Floating Scroll Arrow */}
      <motion.a
        href="#about"
        className="mt-16 w-10 h-10 border-2 border-purple-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-purple-600 transition z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-purple-400">↓</span>
      </motion.a>
    </section>
  );
}

export default Hero;
