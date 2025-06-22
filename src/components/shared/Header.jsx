import React from "react";
import BlurText from "../motion/BlurText";
import RotatingText from "../motion/RotatingText";
import { Link } from "react-router-dom";
import { ShimmerButton } from "../ui/shimmer-button";
import { ExternalLink, Send } from "lucide-react";
import AnimatedContent from "../motion/AnimatedContent";

const Header = () => {
  return (
    <div>
      <div className="max-w-7xl w-[76%] mx-auto text-center">
        <BlurText
          text="Hi I'm Alex Robert"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-7xl text-center flex justify-center font-bold mb-8"
        />

        <AnimatedContent delay={0.3}>
          <p className="text-lg font-semibold">
            {" "}
            I specialize in creating fast, responsive, and scalable web
            applications using{" "}
            <span className="text-white mx-2 bg-primary py-1 px-2 font-bold rounded-sm">
              React, Node.js, and MongoDB{" "}
            </span>
            building secure, high-performance web applications with clean
            architecture that bridges intuitive user interfaces with scalable
            backend systems
          </p>
        </AnimatedContent>

        <AnimatedContent delay={0.6}>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex gap-4 mt-10 justify-center"
          >
            <Link
              to="https://drive.google.com/file/d/1FoiDLHETnPeHPw5Uwr7xxkO9cPpbAfOb/view?usp=sharing"
              target="_blank"
            >
              <ShimmerButton background="#6000fa" className="shadow-2xl">
                <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg font-open-sans">
                  View My Resume <ExternalLink size={20} />
                </span>
              </ShimmerButton>
            </Link>
            <Link to="/blog">
              <ShimmerButton
                background="#bdacff"
                shimmerColor="#0e051a"
                className="shadow-2xl"
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
