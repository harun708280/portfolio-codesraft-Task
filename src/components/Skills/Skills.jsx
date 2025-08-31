import React from "react";
import { Code, Server, Layers, PenTool, Link2, Zap } from "lucide-react";
import DualTextEffect from "../shared/DualTextEffect.";
import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";
import FadeContent from "../motion/FadeContent";
import { Link } from "react-router-dom";

const Skills = () => {
 const skillData = [
  {
    title: "Frontend Development",
    percentage: 95,
    icon: Code,
    bgColor: "bg-purple-600",
  },
  {
    title: "Backend Development",
    percentage: 85,
    icon: Server,
    bgColor: "bg-green-600",
  },
  {
    title: "Full Stack Web Apps",
    percentage: 80,
    icon: Layers,
    bgColor: "bg-blue-600",
  },
  {
    title: "API Integration",
    percentage: 80,
    icon: Link2,
    bgColor: "bg-yellow-600",
  },
];


  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center min-h-screen py-20 overflow-hidden lg:pb-40"
    >
      <div className="w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* background effects */}
        
       
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute w-40 h-40 -bottom-20 right-2 md:w-56 md:h-56"
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

        {/* content container */}
        <div className="container mx-auto">
          {/* title */}
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <FadeContent
              blur
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <DualTextEffect
                largeText="SKILLS"
                smallText="Skills"
                largeTextColor="text-[#9a8ec413]"
                smallTextColor="text-white/70"
                largeTextSize="text-4xl sm:text-5xl lg:text-[120px]"
                smallTextSize="text-lg sm:text-xl md:text-3xl w-full flex justify-center text-center"
              />
            </FadeContent>
          </div>

          {/* skills + description */}
          <FadeContent
            blur
            duration={1200}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex flex-col-reverse justify-between gap-10 mt-12 lg:flex-row">
              {/* skill grid */}
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">
                {skillData.map(
                  ({ title, percentage, icon: Icon, bgColor }, i) => (
                    <div
                      key={i}
                      className={`relative rounded-2xl p-6 py-10 text-white bg-gradient-to-b from-[#1a0c2e] to-[#160a26] overflow-hidden`}
                    >
                      {/* background big icon blur */}
                      <div className="absolute text-white/10 text-[100px] top-5 right-3 z-0">
                        <Icon className="w-24 h-24" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Icon className="w-10 h-10 p-2 rounded-md bg-white/20" />
                            <h3 className="text-xl font-semibold">{title}</h3>
                          </div>
                          <p className="text-sm text-white/80">{percentage}%</p>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-3 mt-2 overflow-hidden rounded-full bg-white/20">
                          <div
                            className="h-full bg-white rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* description */}
              <div className="flex flex-col justify-center w-full lg:w-1/3">
                <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                  Let’s Explore Popular Skills and Experience
                </h2>
                <p className="text-sm leading-relaxed sm:text-base text-white/70">
                  I combine modern UI/UX design with scalable frontend and
                  backend technologies to build complete, optimized, and
                  user-friendly web applications.
                </p>
                <Link
                  to="https://drive.google.com/file/d/11ILSeM_HOQaq27uFQfwfm6XjUxRqIw8o/view?usp=sharing?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  <button className="px-4 py-2 mt-5 text-sm text-white transition duration-300 rounded-md bg-primary hover:bg-primary/80">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* skills logos carousel */}
            <SkillCard />
          </FadeContent>
        </div>

        {/* bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default Skills;
