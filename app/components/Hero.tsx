"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const calculateDistance = (x: number, y: number) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      return Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
    }
    return 0;
  };

  const distance = calculateDistance(mousePosition.x, mousePosition.y);
  const maxDistance = heroRef.current
    ? Math.sqrt(
        Math.pow(heroRef.current.offsetWidth / 2, 2) +
          Math.pow(heroRef.current.offsetHeight / 2, 2)
      )
    : 500;
  const intensity = 1 - Math.min(distance / maxDistance, 1);

  const glowStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(5, 217, 232, ${intensity * 0.2}), transparent 40%)`,
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={glowStyle}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-black to-black opacity-80"></div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,217,232,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(5,217,232,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyber-blue opacity-30"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-4 inline-block"
            >
              <span className="text-sm md:text-base font-mono tracking-wider bg-cyber-pink/20 text-cyber-pink px-3 py-1 rounded-sm">
                WELCOME TO THE FUTURE
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch"
              data-text="M. ANJAS LEONARDI"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="block">
                <span className="text-cyber-blue neon-text">M. ANJAS</span>{" "}
                <span className="text-cyber-pink neon-text-pink">LEONARDI</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Exploring the digital frontier with cutting-edge web development and
              futuristic design. Enter a world where code meets creativity.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-cyber-pink text-black font-bold rounded-sm hover:bg-cyber-pink/90 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">VIEW PROJECTS</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-cyber-blue text-cyber-blue font-bold rounded-sm hover:bg-cyber-blue/10 transition-all duration-300 neon-border relative overflow-hidden group"
              >
                <span className="relative z-10">CONTACT ME</span>
                <span className="absolute inset-0 bg-cyber-blue/10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </motion.div>
          </motion.div>

          {/* 3D or Image Element */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/20 to-cyber-blue/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-2 border-2 border-cyber-blue rounded-full neon-border animate-spin-slow"></div>
              <div className="absolute inset-6 border border-cyber-pink rounded-full neon-border-pink animate-reverse-spin"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5/6 h-5/6 relative"> {/* diperbesar dari 2/3 → 5/6 */}
                  {/* Profile image with neon border */}
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-cyber-blue neon-border relative">
                    <img
                      src="/img/profile.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 