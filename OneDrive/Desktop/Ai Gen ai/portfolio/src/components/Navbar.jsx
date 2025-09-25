import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-black shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        {/* <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-extrabold text-cyan-400 tracking-wide"
        >
          MyPortfolio
        </motion.h1> */}
        <motion.h1
  animate={{ scale: [1, 1.1, 1] }} // 👈 zoom in / out
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{ scale: 1.2 }}
  className="text-2xl font-extrabold text-cyan-400 tracking-wide"
>
  MyPortfolio
</motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              animate={{ y: [0, -5, 0] }} // 👈 Auto bounce
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 0.2, // 👈 small delay for wave effect
              }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-400">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-gray-900 flex flex-col items-center space-y-6 py-6"
        >
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              animate={{ y: [0, -5, 0] }} // 👈 Auto bounce for mobile too
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 0.2,
              }}
              className="text-gray-200 text-lg font-medium hover:text-cyan-400"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
