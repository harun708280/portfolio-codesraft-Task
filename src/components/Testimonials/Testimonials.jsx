import React from "react";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import DualTextEffect from "../shared/DualTextEffect.";
import { motion } from "framer-motion";
import FadeContent from "../motion/FadeContent";

const Testimonials = () => {
  return (
    <section className="relative w-full lg:mt-12 flex justify-center bg-[#0e051a] text-white overflow-hidden py-20">
      {/* Floating Star Animation */}
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute w-32 h-32 sm:w-40 md:w-56 sm:h-40 md:h-56 bottom-2 right-2"
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

      {/* Purple Background Glow */}
      <div className="absolute bottom-0 right-0 z-10 transform translate-x-1/2 translate-y-1/2 bg-purple-500 rounded-full w-72 sm:w-96 h-72 sm:h-96 opacity-40 blur-3xl"></div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full px-4 max-w-7xl sm:px-6 lg:px-16">
        {/* Title */}
        <div className="flex flex-col items-center justify-center mb-12 space-y-8 text-center">
          <FadeContent
            blur
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <DualTextEffect
              largeText="testimonial"
              smallText="My Testimonial"
              largeTextColor="text-[#9a8ec413]"
              smallTextColor="text-white/70"
              largeTextSize="text-4xl sm:text-5xl lg:text-[120px]"
              smallTextSize="text-xl sm:text-2xl lg:text-3xl w-full"
            />
          </FadeContent>
        </div>

        {/* Testimonials Carousel */}
        <FadeContent blur duration={1200} easing="ease-out" initialOpacity={0}>
          <AnimatedTestimonialsDemo />
        </FadeContent>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Testimonials;
