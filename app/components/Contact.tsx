"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Update input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Kirim via EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ EmailJS Error:", error);
      setFormError("Failed to transmit message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 overflow-hidden bg-cyber-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-black to-black opacity-80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-cyber-green/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-cyber-blue/20 rounded-full filter blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="text-sm md:text-base font-mono tracking-wider bg-cyber-green/20 text-cyber-green px-3 py-1 rounded-sm">
              NEURAL LINK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="text-cyber-green neon-text-green">ESTABLISH</span>{" "}
            <span className="text-cyber-blue neon-text">CONNECTION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Ready to collaborate on your next digital project? Send me a message
            and let's create something extraordinary together.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
        >

          {/* Contact Form */}
          <motion.div className="order-2 md:order-1">
            <div className="bg-cyber-dark/50 backdrop-blur-sm border border-cyber-gray rounded-md p-6 md:p-8 relative">
              {/* Terminal-like header */}
                <div className="absolute top-0 left-0 w-full bg-cyber-gray/30 px-4 py-2 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-cyber-pink"></div>
                    <div className="w-3 h-3 rounded-full bg-cyber-yellow"></div>
                    <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
                  </div>
                <div className="ml-4 text-xs font-mono text-cyber-green">
                    user@cybernet ~ /contact
                </div>
              </div>

            <div className="mt-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyber-green/20 flex items-center justify-center">
                    <span className="text-cyber-green text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-cyber-green mb-2">
                    MESSAGE TRANSMITTED
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Your message has been successfully sent.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 border border-cyber-green text-cyber-green rounded-sm hover:bg-cyber-green/10 transition-all"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-mono text-cyber-green mb-2">
                      IDENTIFIER [NAME]
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-black/50 border border-cyber-gray px-4 py-3 rounded-sm"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-mono text-cyber-green mb-2">
                      COMM CHANNEL [EMAIL]
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-black/50 border border-cyber-gray px-4 py-3 rounded-sm"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm font-mono text-cyber-green mb-2">
                      DATA PACKET [MESSAGE]
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-cyber-black/50 border border-cyber-gray px-4 py-3 rounded-sm resize-none"
                    />
                  </div>

                  {formError && (
                    <div className="text-cyber-pink text-sm font-mono">
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-cyber-green text-black font-bold rounded-sm hover:bg-cyber-green/90"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

          {/* Contact Info */}
          <motion.div className="order-1 md:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-cyber-blue mb-4 neon-text">
                  CONNECTION DETAILS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-sm bg-cyber-blue/20 flex items-center justify-center mr-4 mt-1">
                      <span className="text-cyber-blue text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-gray-400 mb-1">
                        EMAIL
                      </h4>
                      <a
                        href="mailto:anjasleonardi88@gmail.com"
                        className="text-cyber-blue hover:text-cyber-blue/80 transition-colors duration-300"
                      >
                        anjasleonardi88@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="w-10 h-10 rounded-sm bg-cyber-green/20 flex items-center justify-center mr-4 mt-1">
                      <span className="text-cyber-green text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-gray-400 mb-1">
                        PHONE
                      </h4>
                      <a
                        href="tel:+1234567890"
                        className="text-cyber-green hover:text-cyber-green/80 transition-colors duration-300"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div> */}

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-sm bg-cyber-pink/20 flex items-center justify-center mr-4 mt-1">
                      <span className="text-cyber-pink text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-gray-400 mb-1">
                        LOCATION
                      </h4>
                      <p className="text-cyber-pink">
                        Palembang, South Sumatera, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyber-blue mb-4 neon-text">
                  NETWORK NODES
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/leonzss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-sm bg-cyber-dark border border-cyber-gray hover:border-cyber-blue flex items-center justify-center transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-cyber-blue transition-colors duration-300 text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                    className="w-12 h-12 rounded-sm bg-cyber-dark border border-cyber-gray hover:border-cyber-blue flex items-center justify-center transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-cyber-blue transition-colors duration-300 text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                    className="w-12 h-12 rounded-sm bg-cyber-dark border border-cyber-gray hover:border-cyber-blue flex items-center justify-center transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-cyber-blue transition-colors duration-300 text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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

                  {/* <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-sm bg-cyber-dark border border-cyber-gray hover:border-cyber-blue flex items-center justify-center transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-cyber-blue transition-colors duration-300 text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                      </svg>
                    </span>
                  </a> */}
                </div>
              </div>

              <div className="p-6 bg-cyber-dark/30 border border-cyber-gray rounded-md">
                <h3 className="text-xl font-bold text-cyber-green mb-4 neon-text-green">
                  AVAILABILITY STATUS
                </h3>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse mr-2"></div>
                  <p className="text-gray-300">
                    Currently available for freelance projects and collaborations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Circuit Board Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 100" preserveAspectRatio="none">
          <path
            d="M 0,50 Q 80,30 160,50 T 320,50 T 480,50 T 640,50 T 800,50"
            fill="none"
            stroke="#39ff14"
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