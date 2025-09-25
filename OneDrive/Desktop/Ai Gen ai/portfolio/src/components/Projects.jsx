import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "LastBulkMail",
      desc: "A bulk email sender app with template support and Node.js backend.",
      img: "https://img.icons8.com/fluency/200/new-post.png",
      link: "https://github.com/Gayathri-kubendhren/LastBulkMail",
    },
    {
      title: "Weather App",
      desc: "Simple React weather application using OpenWeather API.",
      img: "https://img.icons8.com/fluency/200/partly-cloudy-day.png",
      link: "https://github.com/Gayathri-kubendhren/weatherapp",
    },
    {
      title: "Todo Project",
      desc: "Full-stack Todo app with React frontend and Node.js backend.",
      img: "https://img.icons8.com/fluency/200/todo-list.png",
      link: "https://github.com/Gayathri-kubendhren/Adtodo-Project",
    },
    {
      title: "Reestar Project",
      desc: "Frontend HTML & CSS  app to explore product catalog design.",
      img: "https://img.icons8.com/color/200/shopping-cart.png",
      link: "https://github.com/Gayathri-kubendhren/Reestar-project",
    },
    {
      title: "Sales Project",
      desc: "Sales management system with HTML , CSS and Javascript.",
      img: "https://img.icons8.com/color/200/sales-performance.png",
      link: "https://github.com/Gayathri-kubendhren/Sales-project",
    },
    {
      title: "Portfolio Website",
      desc: "Simple personal portfolio website with HTML + CSS .",
      img: "https://img.icons8.com/color/200/portfolio.png",
      link: "https://github.com/Gayathri-kubendhren/portfolio",
    },
    {
      title: "Perfume Project",
      desc: "A static perfume showcase website built with HTML & CSS.",
      img: "https://img.icons8.com/fluency/200/perfume-bottle.png",
      link: "https://github.com/Gayathri-kubendhren/perfumy-correct",
    },
    {
      title: "Udemy Clone",
      desc: "Udemy clone built using HTML, CSS, and JavaScript.",
      img: "https://img.icons8.com/color/200/graduation-cap.png",
      link: "https://github.com/Gayathri-kubendhren/udemy-",
    },
    {
      title: "Trip Adviser",
      desc: "Stylish travel adviser web interface with HTML, CSS & Tailwind.",
      img: "https://img.icons8.com/fluency/200/beach.png",
      link: "https://github.com/Gayathri-kubendhren/Trip-1",
    },
    {
      title: "Greenden",
      desc: "Plants for your interior with responsive design using Tailwind.",
      img: "https://img.icons8.com/color/200/plant-under-sun.png",
      link: "https://github.com/Gayathri-kubendhren/Greenden",
    },
    {
      title: "Blog Portfolio",
      desc: "A full-stack blog app built with React, Node.js, MongoDB & Express.",
      img: "https://img.icons8.com/fluency/200/blog.png",
      link: "https://github.com/Gayathri-kubendhren/blog",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-cyan-400 mb-12"
      >
        🚀 My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center hover:shadow-cyan-500/40"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm">{project.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
