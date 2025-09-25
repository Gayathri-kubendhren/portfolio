


import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 py-6 text-center text-gray-400"
    >
      <p>© {new Date().getFullYear()} Gayathri.❤️All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;
