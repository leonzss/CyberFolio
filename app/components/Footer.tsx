"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-cyber-black py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cyber-dark opacity-50"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-pink to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="text-2xl font-bold font-mono relative inline-block mb-4">
              <span className="text-cyber-blue neon-text relative z-10">CYBER</span>
              <span className="text-cyber-pink neon-text-pink relative z-10">FOLIO</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue to-cyber-pink opacity-30 blur-lg -z-10"></div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Exploring the digital frontier with cutting-edge web development and
              futuristic design. Enter a world where code meets creativity.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/leonzss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-cyber-dark border border-cyber-gray hover:border-cyber-blue flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-gray-400 group-hover:text-cyber-blue transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/manjasleonardi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-cyber-dark border border-cyber-gray hover:border-cyber-blue flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-gray-400 group-hover:text-cyber-blue transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </span>
              </a>

              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-cyber-dark border border-cyber-gray hover:border-cyber-blue flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-gray-400 group-hover:text-cyber-blue transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </span>
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-cyber-blue font-mono text-lg mb-4 neon-text">NAVIGATION</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 flex items-center"
                >
                  <span className="text-cyber-blue mr-2">▹</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 flex items-center"
                >
                  <span className="text-cyber-blue mr-2">▹</span> About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 flex items-center"
                >
                  <span className="text-cyber-blue mr-2">▹</span> Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 flex items-center"
                >
                  <span className="text-cyber-blue mr-2">▹</span> Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 flex items-center"
                >
                  <span className="text-cyber-blue mr-2">▹</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-cyber-pink font-mono text-lg mb-4 neon-text-pink">CONTACT</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-start">
                <span className="text-cyber-pink mr-2 mt-1">✉</span>
                <a
                  href="mailto:anjasleonardi88@gmail.com"
                  className="hover:text-cyber-pink transition-colors duration-300"
                >
                  anjasleonardi88@gmail.com
                </a>
              </li>
              {/* <li className="text-gray-400 flex items-start">
                <span className="text-cyber-pink mr-2 mt-1">📱</span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-cyber-pink transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li> */}
              <li className="text-gray-400 flex items-start">
                <span className="text-cyber-pink mr-2 mt-1">📍</span>
                <span>Palembang, South Sumatera, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyber-gray/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} <span className="text-cyber-blue">CYBERFOLIO</span>. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-cyber-blue text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-cyber-blue text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-500 hover:text-cyber-blue text-sm transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="inline-block"
          >
            <span className="text-xs text-gray-500 font-mono">
              <span className="text-cyber-pink">[</span> DESIGNED AND DEVELOPED WITH{" "}
              <span className="text-cyber-pink">❤</span> IN THE DIGITAL REALM{" "}
              <span className="text-cyber-pink">]</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-5 pointer-events-none">
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
    </footer>
  );
};

export default Footer; 