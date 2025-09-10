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
    title: "Classification and Detection of Roasted Coffee Beans with CNN",
    description:
      "A cutting-edge web application with AI-powered features. Built with Python, TensorFlow / PyTorch, and OpenCV.",
    tags: ["Python", "Flask", "AI", "TensorFlow / PyTorch", "OpenCV"],
    image: "#",
    link: "https://github.com/leonzss/Classification-and-Detection-of-Roasted-Coffee-Beans",
    color: "pink",
  },
  {
    id: 2,
    title: "E-Government Services for Caturtunggal Village",
    description:
      "The Caturtunggal Village E-Government System enables residents to access administrative services online.",
    tags: ["PHP", "Laravel", "Bootstrap", "Node.js"],
    image: "#",
    link: "https://github.com/leonzss/E-pelayanan-desa-caturtunggal",
    color: "blue",
  },
  {
    id: 3,
    title: "Reservation System for Coffee Shops and Restaurants",
    description:
      "A reservation system for coffee shops and restaurants that enables online table booking and efficient reservation management.",
    tags: ["PHP", "CodeIgniter 3", "HTML/CSS", "Bootstrap", "JavaScript"],
    image: "#",
    link: "https://github.com/leonzss/Reservation-Coffee-and-Resto",
    color: "purple",
  },
  {
    id: 4,
    title: "Administrative Permit Service Information System",
    description:
      "An administrative permit system that simplifies application submission and tracking while enhancing efficiency and transparency.",
    tags: ["PHP", "Laravel", "Filamentphp", "Livewire", "Leaflet", "Tailwind CSS"],
    image: "#",
    link: "https://sialap-dpmptsp.muaraenimkab.go.id",
    color: "green",
  },
];

// ✅ Mapping Tailwind classes
const colorClasses = {
  pink: {
    text: "text-cyber-pink",
    bg: "bg-cyber-pink",
    border: "border-cyber-pink",
    neon: "neon-text-pink",
    neonBorder: "neon-border-pink",
  },
  blue: {
    text: "text-cyber-blue",
    bg: "bg-cyber-blue",
    border: "border-cyber-blue",
    neon: "neon-text-blue",
    neonBorder: "neon-border-blue",
  },
  purple: {
    text: "text-cyber-purple",
    bg: "bg-cyber-purple",
    border: "border-cyber-purple",
    neon: "neon-text-purple",
    neonBorder: "neon-border-purple",
  },
  green: {
    text: "text-cyber-green",
    bg: "bg-cyber-green",
    border: "border-cyber-green",
    neon: "neon-text-green",
    neonBorder: "neon-border-green",
  },
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden bg-cyber-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-black to-black opacity-80"></div>
      </div>

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
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {projects.map((project) => {
            const color = colorClasses[project.color];
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-md bg-cyber-dark/50 backdrop-blur-sm border border-cyber-gray hover:${color.border} transition-all duration-300`}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project Card */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 ${color.bg}/20 flex items-center justify-center`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-70"></div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 ${color.text} ${color.neon}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs font-mono py-1 px-2 rounded-sm ${color.bg}/20 ${color.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 bg-transparent ${color.border} ${color.text} text-sm font-bold rounded-sm hover:${color.bg}/10 transition-all duration-300 ${color.neonBorder}`}
                  >
                    VIEW PROJECT →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
