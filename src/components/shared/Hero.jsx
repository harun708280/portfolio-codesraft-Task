import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

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

      {/* Purple Glows */}
      <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full left-10 w-72 h-72 md:w-96 md:h-96 opacity-40 blur-3xl" />
      <div className="absolute bottom-0 transform translate-x-1/2 translate-y-1/2 bg-purple-500 rounded-full right-10 w-72 h-72 md:w-96 md:h-96 opacity-40 blur-3xl" />

      {/* Animated Stars */}
      <motion.img
        src="star.png"
        alt="Star Top Left"
        className="absolute w-32 h-32 -top-4 -left-10 md:w-48 md:h-48"
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

      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute w-40 h-40 bottom-2 right-2 md:w-56 md:h-56"
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

      {/* Main Content */}
      <div className="z-10 px-4 text-center">
        <Header />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
