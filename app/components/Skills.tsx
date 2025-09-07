"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Skill = {
  name: string;
  level: number;
  color: string;
  icon: string;
  category: "frontend" | "backend" | "design" | "other";
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: 95, color: "cyber-pink", icon: "🌐", category: "frontend" },
  { name: "CSS", level: 90, color: "cyber-blue", icon: "🎨", category: "frontend" },
  { name: "JavaScript", level: 92, color: "cyber-yellow", icon: "⚡", category: "frontend" },
  { name: "TypeScript", level: 88, color: "cyber-blue", icon: "📘", category: "frontend" },
  { name: "React", level: 90, color: "cyber-blue", icon: "⚛️", category: "frontend" },
  { name: "Tailwind CSS", level: 92, color: "cyber-blue", icon: "🌊", category: "frontend" },
  { name: "Livewire", level: 80, color: "cyber-pink", icon: "⚡", category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, color: "cyber-green", icon: "🟢", category: "backend" },
  { name: "Express", level: 78, color: "cyber-green", icon: "🚂", category: "backend" },
  { name: "SQL", level: 70, color: "cyber-blue", icon: "🗄️", category: "backend" },
  { name: "CodeIgniter", level: 90, color: "cyber-blue", icon: "🔥", category: "backend" },
  { name: "Laravel", level: 82, color: "cyber-pink", icon: "🟥", category: "backend" },
  { name: "Flask", level: 80, color: "cyber-yellow", icon: "🐍", category: "backend" },
  { name: "FilamentPHP", level: 75, color: "cyber-green", icon: "🛠️", category: "backend" },

  // Design
  { name: "Figma", level: 85, color: "cyber-yellow", icon: "🎭", category: "design" },
  { name: "Adobe XD", level: 80, color: "cyber-pink", icon: "✏️", category: "design" },
  { name: "UI/UX", level: 88, color: "cyber-blue", icon: "👁️", category: "design" },
  
  // Other
  { name: "Git", level: 88, color: "cyber-yellow", icon: "🔄", category: "other" },
  { name: "Webpack", level: 75, color: "cyber-blue", icon: "📦", category: "other" },
  { name: "Jest", level: 78, color: "cyber-pink", icon: "🧪", category: "other" },
  { name: "Docker", level: 70, color: "cyber-blue", icon: "🐳", category: "other" },
];

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const categories = [
    { id: "frontend", name: "FRONTEND", icon: "💻" },
    { id: "backend", name: "BACKEND", icon: "🔧" },
    { id: "design", name: "DESIGN", icon: "🎨" },
    { id: "other", name: "OTHER", icon: "🛠️" },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 overflow-hidden bg-cyber-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-black to-black opacity-80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-pink to-transparent"></div>
      <div className="absolute top-10 left-20 w-32 h-32 bg-cyber-blue/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyber-pink/20 rounded-full filter blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="text-sm md:text-base font-mono tracking-wider bg-cyber-green/20 text-cyber-green px-3 py-1 rounded-sm">
              TECHNICAL ARSENAL
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-cyber-green neon-text-green">SKILL</span>{" "}
            <span className="text-cyber-blue neon-text">MATRIX</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            My technical capabilities span across various domains of web development,
            from frontend interfaces to backend systems and design principles.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-gray rounded-md overflow-hidden"
            >
              <div className={`px-6 py-4 bg-cyber-gray/30 border-b border-${category.id === "frontend" ? "cyber-pink" : category.id === "backend" ? "cyber-green" : category.id === "design" ? "cyber-purple" : "cyber-yellow"}/30 flex items-center`}>
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className={`text-xl font-bold text-${category.id === "frontend" ? "cyber-pink" : category.id === "backend" ? "cyber-green" : category.id === "design" ? "cyber-purple" : "cyber-yellow"}`}>
                  {category.name}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      custom={index}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-xl mr-2">{skill.icon}</span>
                          <span className="font-mono text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-${skill.color} font-mono`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-cyber-gray rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          className={`h-full bg-${skill.color} rounded-full relative`}
                        >
                          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-${skill.color}/50 to-${skill.color} animate-pulse`}></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
              </div>
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
            href="#projects"
            className="px-8 py-3 bg-transparent border border-cyber-green text-cyber-green font-bold rounded-sm hover:bg-cyber-green/10 transition-all duration-300 neon-border-green relative overflow-hidden group inline-block"
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <span className="absolute inset-0 bg-cyber-green/10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </motion.div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 100" preserveAspectRatio="none">
          <path
            d="M 0,50 Q 80,30 160,50 T 320,50 T 480,50 T 640,50 T 800,50"
            fill="none"
            stroke="#05d9e8"
            strokeWidth="2"
          />
          <path
            d="M 0,50 Q 80,70 160,50 T 320,50 T 480,50 T 640,50 T 800,50"
            fill="none"
            stroke="#ff2a6d"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
};

export default Skills; 