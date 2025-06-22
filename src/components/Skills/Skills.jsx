import React from "react";
import { Code, Server, Layers, PenTool, Link2, Zap } from "lucide-react";
import DualTextEffect from "../shared/DualTextEffect.";
import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";
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
      className=" min-h-screen flex flex-col justify-center relative overflow-hidden py-20 "
    >

      <div className="max-w-7xl   mx-auto">
        <div className="absolute -bottom-28 z-20 -left-[15%]  w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        <motion.img
          src="star.png"
          alt="Star Bottom Right"
          className="absolute -bottom-3 z-10 left-2 w-56 h-56"
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
        <div className="container ">
          {/* Title section */}
          <div
            className="flex flex-col items-center justify-center space-y-6 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <DualTextEffect
              largeText="SKILLS"
              smallText="Skills"
              largeTextColor="text-[#3a2a5e18]"
              smallTextColor="text-white"
              largeTextSize="text-[40px] md:text-[80px] lg:text-[100px]"
              smallTextSize="text-lg md:text-2xl lg:text-[40px]"
            />
          </div>

          {/* Skills & Description section */}
          <div className="flex  flex-col lg:flex-row justify-between gap-10 mt-12">
            {/* Left: Skills */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillData.map((skill, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-[#1a0f2c] border border-white/10 p-5 rounded-lg shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {skill.icon}
                    <h3 className="text-lg font-semibold text-white">
                      {skill.title}
                    </h3>
                    <p className="text-right text-sm mt-1 text-white/70">
                      {skill.percentage}%
                    </p>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Title & Description */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start ">
              <h2 className="text-4xl font-semibold mb-4 text-white">
                Let Explore Popular Skills and Experience
              </h2>
              <p className="text-white/70 leading-relaxed text-sm">
                I combine modern UI/UX design with scalable frontend and backend
                technologies to build complete, optimized, and user-friendly web
                applications. Whether it's a single-page app or full-stack
                system, I focus on performance, accessibility, and clean code
                architecture.
              </p>
              <button className=" mt-5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <SkillCard />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default Skills;
