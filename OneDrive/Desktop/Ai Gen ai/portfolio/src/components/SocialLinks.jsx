import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub size={40} />,
      link: "https://github.com/Gayathri-kubendhren",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={40} />,
      link: "https://www.linkedin.com/in/gayathri-kubenthiran-b320a3256/",
      color: "hover:text-blue-500",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope size={40} />,
      link: "mailto:gk4113611@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <section id="socials" className="pt-1 pb-16 bg-gray-950 text-center">
      
      <div className="flex justify-center gap-10">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            // Entry animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // Hover & tap effects
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            // Floating bounce animation
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.5, // staggered delay
              ease: "easeInOut",
            }}
            className={`text-white transition-colors duration-300 ${social.color}`}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default SocialLinks;
