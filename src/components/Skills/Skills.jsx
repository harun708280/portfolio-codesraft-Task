import React from "react";
import { Code, Server, Layers, PenTool, Link2, Zap } from "lucide-react";
import DualTextEffect from "../shared/DualTextEffect.";
import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";
import { ShineBorder } from "../magicui/shine-border";
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
      className="relative flex flex-col justify-center min-h-screen py-20 pb-40 overflow-hidden "
    >

      <div className="mx-auto max-w-7xl">
        <div className="absolute -bottom-28 z-20 -left-[15%]  w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        <motion.img
          src="star.png"
          alt="Star Bottom Right"
          className="absolute z-10 w-56 h-56 -bottom-3 left-2"
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
              largeTextColor="text-[#34276817]"
              smallTextColor="text-white/70"
              largeTextSize="text-[120px]"
              smallTextSize="text-3xl "
            />
          </div>

          {/* Skills & Description section */}
          <div className="flex flex-col justify-between gap-10 mt-12 lg:flex-row">
            {/* Left: Skills */}
            <div className="grid w-full grid-cols-1 gap-6 lg:w-2/3 sm:grid-cols-2">
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
                    <p className="mt-1 text-sm text-right text-white/70">
                      {skill.percentage}%
                    </p>
                  </div>
                  <div className="w-full h-3 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full transition-all duration-500 bg-purple-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Title & Description */}
            <div className="flex flex-col items-start justify-center w-full lg:w-1/2 ">
              <h2 className="mb-4 text-4xl font-semibold text-white">
                Let Explore Popular Skills and Experience
              </h2>
              <p className="text-sm leading-relaxed text-white/70">
                I combine modern UI/UX design with scalable frontend and backend
                technologies to build complete, optimized, and user-friendly web
                applications. Whether it's a single-page app or full-stack
                system, I focus on performance, accessibility, and clean code
                architecture.
              </p>
              <button className="px-4 py-2 mt-5 text-sm text-white transition duration-300 bg-purple-600 rounded-md hover:bg-purple-700">
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
