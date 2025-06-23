import React from "react";
import style from "./Contact.module.css";
import ContactSection from "./ContactSection";
import { motion } from "framer-motion";
import FadeContent from "../motion/FadeContent";
const Contact = () => {
  return (
    <section
      id="contact"
      className={`${style.background} relative w-full my-12 flex items-center justify-center bg-[#0e051a] text-white overflow-hidden`}
    >
      {/* Purple glow effect - bottom left */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-purple-500 rounded-full w-96 h-96 opacity-40 blur-3xl"></div>

      {/* Container */}
      <div className="container px-4 md:px-6 lg:px-16">
        <FadeContent
            blur={true}
            duration={1200}
            easing="ease-out"
            initialOpacity={0}
          ><ContactSection /></FadeContent>
        
      </div>
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute z-10 w-56 h-56 -bottom-3 right-2"
        animate={{
          rotate: [360, 0],
          y: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Contact;
