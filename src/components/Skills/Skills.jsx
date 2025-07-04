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
      icon: <Code className="w-5 h-5 text-purple-400" />,
    },
    {
      title: "Backend Development",
      percentage: 85,
      icon: <Server className="w-5 h-5 text-green-400" />,
    },
    {
      title: "Full Stack Web Apps",
      percentage: 80,
      icon: <Layers className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "UI/UX Design",
      percentage: 75,
      icon: <PenTool className="w-5 h-5 text-pink-400" />,
    },
    {
      title: "API Integration",
      percentage: 80,
      icon: <Link2 className="w-5 h-5 text-yellow-400" />,
    },
    {
      title: "Website Optimization",
      percentage: 90,
      icon: <Zap className="w-5 h-5 text-orange-400" />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center min-h-screen py-20 overflow-hidden lg:pb-40"
    >
      <div className="w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* background effects */}
        <div className="absolute -bottom-28 z-20 -left-[15%] w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        <motion.img
          src="star.png"
          alt="Star Bottom Right"
          className="absolute z-10 w-32 h-32 sm:w-56 sm:h-56 -bottom-3 left-2"
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
            <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
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
          <FadeContent blur duration={1200} easing="ease-out" initialOpacity={0}>
            <div className="flex flex-col-reverse justify-between gap-10 mt-12 lg:flex-row">
              {/* skill grid */}
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">
                {skillData.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#1a0f2c] border border-white/10 p-5 rounded-lg shadow hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <h3 className="text-lg font-semibold text-white">
                          {skill.title}
                        </h3>
                      </div>
                      <p className="text-sm text-white/70">{skill.percentage}%</p>
                    </div>
                    <div className="w-full h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full transition-all duration-500 rounded-full bg-primary"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* description */}
              <div className="flex flex-col justify-center w-full lg:w-1/3">
                <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                  Let’s Explore Popular Skills and Experience
                </h2>
                <p className="text-sm leading-relaxed sm:text-base text-white/70">
                  I combine modern UI/UX design with scalable frontend and backend
                  technologies to build complete, optimized, and user-friendly web
                  applications.
                </p>
                   <Link
              to="https://drive.google.com/file/d/122hwCmwXHT6OhqMzb8XGJIcpYvfst27q/view?usp=sharing"
              target="_blank"
            > <button className="px-4 py-2 mt-5 text-sm text-white transition duration-300 rounded-md bg-primary hover:bg-primary/80">
                  Learn More
                </button></Link>
               
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
