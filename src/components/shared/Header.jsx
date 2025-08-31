import React from "react";
import BlurText from "../motion/BlurText";
import RotatingText from "../motion/RotatingText";
import { Link } from "react-router-dom";
import { ShimmerButton } from "../ui/shimmer-button";
import { ExternalLink, Send } from "lucide-react";
import AnimatedContent from "../motion/AnimatedContent";
import FadeContent from "../motion/FadeContent";

const Header = () => {
  return (
    <div>
      <div className="max-w-7xl min-h-screen h-full relative lg:w-[76%] mx-auto lg:text-center flex flex-col justify-center items-center">
        <div className="flex items-center justify-center w-full mt-8 md:mt-24">
          <FadeContent blur duration={1200}>
            <div
              className="relative w-full max-w-[300px] md:max-w-[500px] aspect-square bg-cover bg-center bg-no-repeat rounded-xl shadow-xl flex items-center justify-center"
              style={{ backgroundImage: "url('./mainIcons.svg')" }}
            >
              <img
                src="./ha.png"
                alt="Profile"
                className="relative z-10 object-contain w-full h-auto"
              />
            </div>
          </FadeContent>
        </div>
        <BlurText
          text="Hi I'm Harun Or Rashid"
          delay={150}
          animateBy="words"
          direction="top"
          className="flex justify-center text-2xl font-bold -mt-14 md:-mt-24 lg:-mt-20 md:mb-5 md:text-3xl ter lg:text-7xl"
        />

        <AnimatedContent delay={0.3}>
          <p className="max-w-6xl mb-5 font-semibold lg:mb-10 md:text-lg">
            {" "}
            I specialize in creating fast, responsive, and scalable web
            applications using{" "}
            <span className="px-2 py-1 mx-2 font-bold text-white rounded-sm bg-primary">
              React, Node.js, and MongoDB{" "}
            </span>
            building secure, high-performance web applications with clean
            architecture that bridges intuitive user interfaces with scalable
            backend systems
          </p>
       
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-wrap justify-center gap-4 pb-10"
          >
            <Link
              to="https://drive.google.com/file/d/11ILSeM_HOQaq27uFQfwfm6XjUxRqIw8o/view?usp=sharing"
              target="_blank"
              className="z-50"
            >
              <ShimmerButton background="#6000fa" className="z-50 shadow-2xl ">
                <span className="flex items-center gap-2 text-sm font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap dark:from-white dark:to-slate-900/10 lg:text-lg font-open-sans">
                  View My Resume <ExternalLink size={20} />
                </span>
              </ShimmerButton>
            </Link>
            <Link to="/blog">
              <ShimmerButton
                background="#bdacff"
                shimmerColor="#0e051a"
                className="z-50 shadow-2xl"
              >
                <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#0e051a] dark:from-white dark:to-slate-900/10 lg:text-lg font-open-sans">
                  Learn More <Send size={20} />
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Header;