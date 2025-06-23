import React from "react";
import SocialLinks from "../contact/SocialLinks";
import BlurText from "../motion/BlurText";
import FadeContent from "../motion/FadeContent";

const NewsLatter = () => {
  return (
    <div className="px-4 py-16 text-center md:px-0 bg-[#0e051a] pb-20 text-white bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px] mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] overflow-hidden">
      <p className="mb-3 text-sm font-semibold tracking-widest text-white uppercase">
          <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >* Subscribe Newsletter</FadeContent>
        
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
          className="w-1/3 px-6 py-3 text-sm font-semibold text-white transition duration-200 ease-in-out rounded-md bg-primary hover:bg-primary/90"
        >
          Subscribe Now
        </button>
      </form>

      {/* Social icons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <SocialLinks />
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-gray-400">
        © 2024 Personal Portfolio. All Rights Reserved. Designed by Flexestudio
      </p>
    </div>
  );
};

export default NewsLatter;
