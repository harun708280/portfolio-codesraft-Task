import React from "react";
import DualTextEffect from "../shared/DualTextEffect.";
import {
  SearchCheck,
  Users,
  PlayCircle,
  CheckCircle,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import FadeContent from "../motion/FadeContent";
import AnimatedContent from "../motion/AnimatedContent";

import SocialLinks from "../contact/SocialLinks";

const About = () => {
  const stats = [
    {
      id: 1,
      title: "Satisfied Clients",
      value: "120+",
      icon: <Users className="w-8 h-8 text-green-500" />,
      delay: 0.2,
      col: 2,
    },
    {
      id: 2,
      title: "Projects Running",
      value: "8",
      icon: <PlayCircle className="w-8 h-8 text-yellow-500" />,
      delay: 0.3,
      col: 1,
    },
  ];

  const secondRow = [
    {
      id: 3,
      title: "Projects Completed",
      value: "75+",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      delay: 0.4,
      col: 1,
    },
    {
      id: 4,
      title: "Years Experience",
      value: "2+",
      icon: <Award className="w-8 h-8 text-purple-500" />,
      delay: 0.5,
      col: 2,
    },
  ];

  return (
    <div className="relative py-10 overflow-hidden text-white md:py-16 lg:pb-20 bg-background">
      {/* Purple Glow */}
      <div className="absolute -bottom-28 -left-[15%] w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 z-10" />

      {/* Animated Star */}
      <motion.img
        src="star.png"
        alt="Star Bottom Left"
        className="absolute z-0 w-56 h-56 -bottom-3 left-2"
        animate={{ rotate: [360, 0], y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-20 px-4 mx-auto max-w-7xl">
        {/* Title */}
        <div className="flex justify-center">
          <FadeContent blur duration={1000}>
            <DualTextEffect
              largeText="ABOUT Me"
              smallText="About Me"
              largeTextColor="text-[#9a8ec413]"
              smallTextColor="text-white/70"
              largeTextSize="text-5xl lg:text-[120px]"
              smallTextSize="text-xl md:text-3xl lg:text-3xl  w-full flex justify-center text-center"
            />
          </FadeContent>
        </div>

        {/* Main Content */}
        <FadeContent blur duration={1200}>
          <div className="flex flex-col items-center justify-center gap-12 mt-10 lg:flex-row">
            {/* Image Section */}

            {/* Text Section */}
            <div className="w-full  lg:w-[50%] text-center lg:text-left">
              <h1 className="text-xl font-bold !leading-[60px] md:text-4xl lg:text-5xl">
                Transforming Ideas into Functional Web Solutions
              </h1>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-[#A4A4A4] font-light leading-7 text-justify">
                Our vision is to be a global leader in technology by
                continuously innovating and putting our users first. We believe
                in transparency, quality, and collaboration, and we work hard to
                turn ideas into reality.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-1 gap-2 mt-6 sm:grid-cols-2">
                {[
                  "Frontend Development",
                  "Full Stack Projects",
                  "Product Design",
                  "Project Management",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 ">
                    <SearchCheck className="text-white/70" />
                    <span className="text-lg font-medium text-white/70">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <SocialLinks />
              </div>
            </div>
            <div className="w-full  lg:w-[50%]">
              <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-2">
                {stats.map(({ id, title, value, icon, delay, col }) => (
                  <AnimatedContent key={id} delay={delay}>
                    <div
                      className={`flex flex-col items-center p-6 text-center duration-300 bg-gradient-to-b from-[#1a0c2e] to-[#160a26] shadow-lg overflow-hidden transition-all rounded-xl hover:scale-105 col-span-${col}`}
                    >
                      <div className="mb-4">{icon}</div>
                      <h3 className="text-3xl font-bold">{value}</h3>
                      <p className="mt-2 text-sm text-white/70">{title}</p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-2">
                {secondRow.map(({ id, title, value, icon, delay, col }) => (
                  <AnimatedContent key={id} delay={delay}>
                    <div
                      className={`flex flex-col items-center p-6 text-center duration-300 bg-gradient-to-b from-[#1a0c2e] to-[#160a26] shadow-lg overflow-hidden transition-all rounded-xl hover:scale-105 col-span-${col}`}
                    >
                      <div className="mb-4">{icon}</div>
                      <h3 className="text-3xl font-bold">{value}</h3>
                      <p className="mt-2 text-sm text-white/70">{title}</p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </FadeContent>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default About;
