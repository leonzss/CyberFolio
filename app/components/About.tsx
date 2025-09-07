"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const aboutText = `
> INITIALIZING PERSONAL PROFILE...
> ACCESSING NEURAL DATABASE...
> RETRIEVING BIOGRAPHICAL DATA...

NAME: M. ANJAS LEONARDI
OCCUPATION: WEB DEVELOPER & DIGITAL CREATOR
STATUS: ONLINE

I am a passionate web developer with a focus on creating immersive digital experiences. My journey in the digital realm began with a fascination for how technology and creativity intersect.

With expertise in modern web technologies and a keen eye for design, I craft websites and applications that not only function flawlessly but also engage users on a deeper level.

My approach combines technical precision with artistic vision, resulting in digital products that stand out in today's crowded online landscape.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or seeking inspiration in both digital and physical worlds.

> CONNECTION ESTABLISHED...
`;

  useEffect(() => {
    if (isInView && currentIndex < aboutText.length) {
      const timeout = setTimeout(() => {
        setTypedText(aboutText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, Math.random() * 30 + 10); // Random typing speed for realistic effect

      return () => clearTimeout(timeout);
    }
  }, [isInView, currentIndex, aboutText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden bg-cyber-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-black to-black opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row gap-10 md:gap-20 items-center"
          ref={ref}
        >
          {/* Terminal Section */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <div className="bg-cyber-dark border border-cyber-blue rounded-md neon-border overflow-hidden">
              <div className="bg-cyber-gray px-4 py-2 flex items-center justify-between border-b border-cyber-blue/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-cyber-pink"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
                </div>
                <div className="text-xs font-mono text-cyber-blue">user@cybernet ~ /about</div>
                <div className="w-4"></div>
              </div>
              <div className="p-4 font-mono text-sm md:text-base text-cyber-blue h-[400px] md:h-[500px] overflow-y-auto">
                <pre className="whitespace-pre-wrap">
                  {typedText}
                  {showCursor && <span className="text-cyber-pink">▌</span>}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2"
          >
            <motion.div variants={itemVariants} className="mb-4 inline-block">
              <span className="text-sm md:text-base font-mono tracking-wider bg-cyber-blue/20 text-cyber-blue px-3 py-1 rounded-sm">
                ABOUT ME
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              <span className="text-cyber-pink neon-text-pink">DIGITAL</span>{" "}
              <span className="text-cyber-blue neon-text">INNOVATOR</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6"
            >
              I transform ideas into digital reality, creating web experiences that
              push boundaries and captivate users.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-sm bg-cyber-pink/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-cyber-pink text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyber-pink mb-2">Fast Learner</h3>
                  <p className="text-gray-300">
                    Quickly adapting to new technologies and methodologies to stay at the cutting edge.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-sm bg-cyber-blue/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-cyber-blue text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyber-blue mb-2">Creative Problem Solver</h3>
                  <p className="text-gray-300">
                    Finding innovative solutions to complex challenges through creative thinking.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-sm bg-cyber-purple/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-cyber-purple text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyber-purple mb-2">Detail Oriented</h3>
                  <p className="text-gray-300">
                    Paying close attention to every aspect of a project to ensure pixel-perfect execution.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="#skills"
                className="px-8 py-3 bg-transparent border border-cyber-pink text-cyber-pink font-bold rounded-sm hover:bg-cyber-pink/10 transition-all duration-300 neon-border-pink relative overflow-hidden group inline-block"
              >
                <span className="relative z-10">EXPLORE SKILLS</span>
                <span className="absolute inset-0 bg-cyber-pink/10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
      <div className="absolute -bottom-10 right-0 w-40 h-40 bg-cyber-blue/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyber-pink/20 rounded-full filter blur-2xl"></div>
    </section>
  );
};

export default About; 
