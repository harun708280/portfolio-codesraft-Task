
import React from "react";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import DualTextEffect from "../shared/DualTextEffect.";
import { motion } from "framer-motion"
import FadeContent from "../motion/FadeContent";

const Testimonials = () => {
  return (
    <section className="relative w-full  mt-12 flex  justify-center bg-[#0e051a] text-white overflow-hidden">
      {/* Purple glow effect - bottom right */}
       <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute w-56 h-56 bottom-2 right-2"
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
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-purple-500 rounded-full w-96 h-96 opacity-40 blur-3xl"></div>

      {/* Container */}
      <div className="container px-4 md:px-6 lg:px-16">
        {/* start text section */}
        <div
          className="flex flex-col items-center justify-center space-y-8 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Dual Text Effect */}
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <DualTextEffect
              largeText="testimonial"
              smallText="My Testimonial"
              largeTextColor="text-[#34276817]"
              smallTextColor="text-white/70"
              largeTextSize="text-[120px]"
              smallTextSize="text-3xl "
            />
          </FadeContent>
        </div>
        {/* End Text Section */}

        <FadeContent
            blur={true}
            duration={1200}
            easing="ease-out"
            initialOpacity={0}
          >
            <AnimatedTestimonialsDemo />
          </FadeContent>

        
      </div>
       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Testimonials;
