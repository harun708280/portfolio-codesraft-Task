
import React from "react";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import DualTextEffect from "../shared/DualTextEffect.";


const Testimonials = () => {
  return (
    <section className="relative w-full min-h-screen mt-12 flex  justify-center bg-[#0e051a] text-white overflow-hidden">
      {/* Purple glow effect - bottom right */}
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
          <DualTextEffect
            largeText=" testimonial"
            smallText="My Testimonial"
            largeTextColor="text-[#3a2a5e18]"
            smallTextColor="text-white"
            largeTextSize="text-[40px] md:text-[80px] lg:text-[100px]"
            smallTextSize="text-lg md:text-2xl lg:text-[40px]"
          />
        </div>
        {/* End Text Section */}

        <AnimatedTestimonialsDemo />
      </div>
    </section>
  );
};

export default Testimonials;
