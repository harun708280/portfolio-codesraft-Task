import React from 'react';
import { motion } from "framer-motion";
import Header from './Header';
const Hero = () => {
    return (
         <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#0e051a] text-white overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* Purple Glow - Top Left */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      {/* Purple Glow - Bottom Right */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

      {/* Star Image - Top Left with animation */}
       <motion.img
        src="star.png"
        alt="Star Top Left"
        className="absolute -top-4 -left-10 w-48 h-48"
        animate={{
          rotate: [0, 360],
          y: [0, -10, 0, 10, 0], 
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Star Image - Bottom Right with animation */}
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute bottom-2 right-2 w-56 h-56"
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

      {/* Main Content Placeholder */}
      <div className="z-10 text-center px-4">
        <Header/>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
    </section>
    );
};

export default Hero;