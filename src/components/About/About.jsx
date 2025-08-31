import React from "react";
import DualTextEffect from "../shared/DualTextEffect.";
import {
  SearchCheck,
  Users,
  PlayCircle,
  CheckCircle,
  Award,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import FadeContent from "../motion/FadeContent";
import AnimatedContent from "../motion/AnimatedContent";

import SocialLinks from "../contact/SocialLinks";

const About = () => {
  return (
    <div className="relative py-10 overflow-hidden text-white md:py-16 lg:pb-20 bg-background">
      {/* Animated Star */}
      <motion.img
        src="star.png"
        alt="Star Bottom Left"
        className="absolute z-0 w-56 h-56 -bottom-20 left-2"
        animate={{ rotate: [360, 0], y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-20 px-4 mx-auto max-w-7xl">
        {/* Title */}
        <div className="flex justify-center">
          <FadeContent blur duration={1000}>
            <DualTextEffect
              largeText="ABOUT ME"
              smallText="About Me"
              largeTextColor="text-[#9a8ec413]"
              smallTextColor="text-white/70"
              largeTextSize="text-5xl lg:text-[120px]"
              smallTextSize="text-xl md:text-3xl lg:text-3xl w-full flex justify-center text-center"
            />
          </FadeContent>
        </div>

        {/* Main Content */}
        <FadeContent blur duration={1200}>
          <div className="flex flex-col items-center justify-center gap-12 mt-10 lg:mt-20 lg:flex-row">
            {/* Text Section */}
            <div className="w-full lg:w-[50%] text-center lg:text-left">
              <h1 className="text-xl font-bold leading-snug md:text-4xl lg:text-4xl md:leading-tight lg:leading-tight">
                Building Practical Web Solutions with Real-World Experience
              </h1>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-[#A4A4A4] font-light leading-7 text-justify">
                I'm a passionate web developer who blends creativity with
                functionality. I’ve completed the{" "}
                <strong>Complete Web Development Course</strong> from
                Programming Hero and previously contributed as a{" "}
                <strong>frontend developer intern</strong> at Codesraft and
                Durdom Crafters. Currently, I’m working as a{" "}
                <strong>Frontend Developer</strong> at{" "}
                <strong>PlutoHub Agency</strong>, where I build high-quality,
                scalable, and user-friendly web solutions for clients across
                various industries. These experiences have helped me develop
                production-ready applications and refine both my coding and team
                collaboration skills.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-1 gap-2 mt-6 sm:grid-cols-2">
                {[
                  "Frontend Development",
                  "Full Stack Projects",
                  "Responsive UI Design",
                  "Professional Experience",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <SearchCheck className="text-white/70" />
                    <span className="text-lg font-medium text-white/70">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-4">
                <SocialLinks />
              </div>
            </div>

            {/* Stats Section */}
            <div className="w-full lg:w-[50%]">
              {/* First Row */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {[
                  {
                    id: 3,
                    title: "Professional Experience",
                    value: "1+ Years",
                    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
                    delay: 0.4,
                    col: 1,
                  },
                  {
                    id: 2,
                    title: "Internship Experience",
                    value: "2",
                    icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
                    delay: 0.3,
                    col: 1,
                  },
                ].map(({ id, title, value, icon, delay, col }) => (
                  <AnimatedContent key={id} delay={delay}>
                    <div
                      className={`flex flex-col items-center p-6 text-center duration-300 bg-gradient-to-b from-[#1a0c2e] to-[#160a26] shadow-lg overflow-hidden transition-all rounded-xl hover:scale-105 col-span-${col}`}
                    >
                      <div className="mb-4">{icon}</div>
                      <h3 className="text-3xl font-bold">{value}</h3>
                      <p className="mt-2 text-lg font-normal text-white/70">
                        {title}
                      </p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-2">
                {[
                  {
                    id: 1,
                    title: "Organizations Served",
                    value: "4",
                    icon: <Users className="w-8 h-8 text-green-500" />,
                    delay: 0.2,
                    col: 2,
                  },

                  {
                    id: 4,
                    title: "Projects Completed",
                    value: "8+",
                    icon: <PlayCircle className="w-8 h-8 text-purple-500" />,
                    delay: 0.5,
                    col: 2,
                  },
                ].map(({ id, title, value, icon, delay, col }) => (
                  <AnimatedContent key={id} delay={delay}>
                    <div
                      className={`flex flex-col items-center p-6 text-center duration-300 bg-gradient-to-b from-[#1a0c2e] to-[#160a26] shadow-lg overflow-hidden transition-all rounded-xl hover:scale-105 col-span-${col}`}
                    >
                      <div className="mb-4">{icon}</div>
                      <h3 className="text-3xl font-bold">{value}</h3>
                      <p className="mt-2 text-lg text-white/70">{title}</p>
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
