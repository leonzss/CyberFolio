"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  color: "pink" | "blue" | "purple" | "green";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Classification and Detection of Roasted Coffee Beans with Convolutional Neural Networks (CNN)",
    description:
      "A cutting-edge web application with AI-powered features. Built with Python, TensorFlow / PyTorch, and OpenCV.",
    tags: ["Python", "Flask", "AI", "TensorFlow / PyTorch", "OpenCV"],
    image: "",
    link: "https://github.com/leonzss/Classification-and-Detection-of-Roasted-Coffee-Beans",
    color: "pink",
  },
  {
    id: 2,
    title: "E-Government Services for Caturtunggal Village",
    description:
      "The Caturtunggal Village E-Government System enables residents to access administrative services online.",
    tags: ["PHP", "Laravel", "Bootstrap", "Node.js"],
    image: "https://github.com/leonzss/E-pelayanan-desa-caturtunggal",
    link: "#",
    color: "blue",
  },
  {
    id: 3,
    title: "Reservation System for Coffee Shops and Restaurants",
    description:
      "A reservation system for coffee shops and restaurants that enables online table booking and efficient reservation management.",
    tags: ["PHP", "CodeIgniter 3", "HTML/CSS", "Bootstrap", "JavaScript"],
    image: "/project3.jpg",
    link: "https://github.com/leonzss/Reservation-Coffee-and-Resto",
    color: "purple",
  },
  {
    id: 4,
    title: "Administrative Permit Service Information System",
    description:
      "An administrative permit system that simplifies application submission and tracking while enhancing efficiency and transparency.",
    tags: ["PHP", "Laravel", "Filamentphp", "Livewire", "Leaflet", "Tailwind CSS"],
    image: "/project4.jpg",
    link: "#",
    color: "green",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 overflow-hidden bg-cyber-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-black to-black opacity-80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-cyber-purple/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-cyber-pink/20 rounded-full filter blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="text-sm md:text-base font-mono tracking-wider bg-cyber-purple/20 text-cyber-purple px-3 py-1 rounded-sm">
              DIGITAL CREATIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-cyber-purple neon-text-purple">FEATURED</span>{" "}
            <span className="text-cyber-blue neon-text">PROJECTS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Explore my portfolio of innovative digital projects that showcase my
            technical skills and creative vision.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-md bg-cyber-dark/50 backdrop-blur-sm border border-cyber-gray hover:border-cyber-${project.color} transition-all duration-300`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder for project image */}
                <div className={`absolute inset-0 bg-cyber-${project.color}/20 flex items-center justify-center`}>
                  <span className={`text-cyber-${project.color} text-6xl font-bold opacity-30`}>
                    {/* {project.title.charAt(0)} */}
                  </span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-70"></div>
                
                {/* Glitch Effect */}
                <div className={`absolute inset-0 bg-cyber-${project.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Project Info */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 text-cyber-${project.color} neon-text-${project.color === "blue" ? "blue" : project.color === "pink" ? "pink" : project.color === "purple" ? "purple" : "green"}`}>
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs font-mono py-1 px-2 rounded-sm bg-cyber-${project.color}/20 text-cyber-${project.color}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className={`px-4 py-2 bg-transparent border border-cyber-${project.color} text-cyber-${project.color} text-sm font-bold rounded-sm hover:bg-cyber-${project.color}/10 transition-all duration-300 neon-border-${project.color === "blue" ? "blue" : project.color === "pink" ? "pink" : project.color === "purple" ? "purple" : "green"} relative overflow-hidden group inline-flex items-center`}
                  >
                    <span className="relative z-10 mr-2">VIEW PROJECT</span>
                    <span className="relative z-10">→</span>
                    <span className={`absolute inset-0 bg-cyber-${project.color}/10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
                  </a>
                  
                  <div className={`w-10 h-10 rounded-full border border-cyber-${project.color} flex items-center justify-center neon-border-${project.color === "blue" ? "blue" : project.color === "pink" ? "pink" : project.color === "purple" ? "purple" : "green"}`}>
                    <span className={`text-cyber-${project.color}`}>{project.id}</span>
                  </div>
                </div>
              </div>
              
              {/* Animated Border */}
              {activeProject === project.id && (
                <>
                  <motion.div
                    className={`absolute top-0 left-0 w-full h-0.5 bg-cyber-${project.color}`}
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className={`absolute top-0 right-0 w-0.5 h-full bg-cyber-${project.color}`}
                    initial={{ scaleY: 0, transformOrigin: "top" }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  />
                  <motion.div
                    className={`absolute bottom-0 right-0 w-full h-0.5 bg-cyber-${project.color}`}
                    initial={{ scaleX: 0, transformOrigin: "right" }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <motion.div
                    className={`absolute bottom-0 left-0 w-0.5 h-full bg-cyber-${project.color}`}
                    initial={{ scaleY: 0, transformOrigin: "bottom" }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/leonzss"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border border-cyber-purple text-cyber-purple font-bold rounded-sm hover:bg-cyber-purple/10 transition-all duration-300 neon-border-purple relative overflow-hidden group inline-block"
          >
            <span className="relative z-10">VIEW ALL PROJECTS</span>
            <span className="absolute inset-0 bg-cyber-purple/10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </motion.div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 100" preserveAspectRatio="none">
          <path
            d="M 0,50 Q 80,30 160,50 T 320,50 T 480,50 T 640,50 T 800,50"
            fill="none"
            stroke="#9d4edd"
            strokeWidth="2"
          />
          <path
            d="M 0,50 Q 80,70 160,50 T 320,50 T 480,50 T 640,50 T 800,50"
            fill="none"
            stroke="#05d9e8"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
};

export default Projects;
