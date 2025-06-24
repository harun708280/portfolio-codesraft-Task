import React from "react";
import SocialLinks from "../contact/SocialLinks";
import BlurText from "../motion/BlurText";
import FadeContent from "../motion/FadeContent";
import { motion } from "framer-motion";
const NewsLatter = () => {
  return (
    <div className="px-4 relative py-16 text-center md:px-0 bg-[#0e051a] pb-20 text-white bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px] mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] overflow-hidden">
      <div className="absolute bottom-0 z-20 -left-[25%]  w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute z-10 w-40 h-40 lg:h-56 lg:w-56 -bottom-3 left-2"
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
      <p className="mb-3 text-sm font-semibold tracking-widest text-white uppercase">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          * Subscribe Newsletter
        </FadeContent>
      </p>
      <h2 className="pb-10 mb-1 text-3xl font-bold md:text-4xl">
        <div className="">
          <BlurText
            text="Subscribe for the Latest Insights"
            delay={150}
            animateBy="words"
            direction="top"
            className="flex justify-center mb-8 text-3xl font-bold text-center"
          />
        </div>
      </h2>
      <FadeContent
        blur={true}
        duration={1200}
        easing="ease-out"
        initialOpacity={0}
      >
        <form className="flex flex-col items-center max-w-xl gap-4 mx-auto sm:flex-row">
          <div className="w-full">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full px-5 py-3 text-sm text-gray-900 placeholder-gray-500 transition duration-200 ease-in-out bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 text-sm font-semibold text-white transition duration-200 ease-in-out rounded-md lg:w-1/3 bg-primary hover:bg-primary/90"
          >
            Subscribe Now
          </button>
        </form>

        {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-5">
          <SocialLinks />
        </div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400">
          © 2024 Personal Portfolio. All Rights Reserved. Designed by
          Flexestudio
        </p>
      </FadeContent>
    </div>
  );
};

export default NewsLatter;
