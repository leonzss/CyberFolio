"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-black/80 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            href="#home"
            className="text-2xl md:text-3xl font-bold font-mono relative group"
            onClick={() => handleNavClick("#home")}
          >
            <span className="text-cyber-blue neon-text relative z-10">CYBER</span>
            <span className="text-cyber-pink neon-text-pink relative z-10">FOLIO</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue to-cyber-pink opacity-30 group-hover:opacity-100 blur-lg transition-all duration-300 -z-10"></div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`relative font-mono text-sm tracking-wider transition-all duration-300 hover:text-cyber-pink ${
                      activeSection === item.href.replace("#", "")
                        ? "text-cyber-pink neon-text-pink"
                        : "text-foreground"
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                    {activeSection === item.href.replace("#", "") && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyber-pink"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <MobileMenu navItems={navItems} activeSection={activeSection} handleNavClick={handleNavClick} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

type MobileMenuProps = {
  navItems: NavItem[];
  activeSection: string;
  handleNavClick: (href: string) => void;
};

const MobileMenu = ({ navItems, activeSection, handleNavClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (href: string) => {
    handleNavClick(href);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="flex flex-col space-y-1.5 p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-cyber-pink neon-border-pink rounded-full block"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-cyber-blue neon-border rounded-full block"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-cyber-pink neon-border-pink rounded-full block"
        />
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-full right-0 w-full overflow-hidden bg-cyber-dark/90 backdrop-blur-md"
      >
        <div className="p-5">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-cyber-gray/30 pb-2">
                <Link
                  href={item.href}
                  className={`block font-mono text-sm tracking-wider transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-cyber-pink neon-text-pink"
                      : "text-foreground"
                  }`}
                  onClick={() => handleClick(item.href)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar; 