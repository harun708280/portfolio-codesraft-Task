import React from "react";
import DualTextEffect from "../shared/DualTextEffect.";
import { TextLoop } from "../motion/TextLoop";
import { SearchCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Users, PlayCircle, CheckCircle, Award } from "lucide-react";
import FadeContent from "../motion/FadeContent";
import AnimatedContent from "../motion/AnimatedContent";

const About = () => {
  const stats = [
    {
      id: 1,
      title: "Satisfied Clients",
      value: "120+",
      icon: <Users className="w-8 h-8 text-green-500" />,
      delay:0.2,
    },
    {
      id: 2,
      title: "Projects Running",
      value: "8",
      icon: <PlayCircle className="w-8 h-8 text-yellow-500" />,
      delay:0.3,
    },
    {
      id: 3,
      title: "Projects Completed",
      value: "75+",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      delay:0.4,
    },
    {
      id: 4,
      title: "Years Experience",
      value: "2+",
      icon: <Award className="w-8 h-8 text-purple-500" />,
      delay:0.5,
    },
  ];
  return (
    <div className="relative overflow-hidden py-12">
      <div className="max-w-7xl   mx-auto min-h-screen flex flex-col justify-center">
        {/* Purple Glow - Bottom Right */}
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
        <div className="flex justify-center">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <DualTextEffect
              largeText="ABOUT Me"
              smallText="About Me"
              largeTextColor="text-[#34276817]"
              smallTextColor="text-white/70"
              largeTextSize="text-[120px]"
              smallTextSize="text-3xl"
            />
          </FadeContent>
        </div>
        <div className="">
          <FadeContent
            blur={true}
            duration={1200}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex  flex-col lg:flex-row flex-wrap mt-8 justify-center lg:justify-around items-center w-full gap-8 ">
              {/* Image Section */}

              <div className="w-full  sm:w-3/4 md:w-1/2 lg:w-[45%] flex justify-center">
                <div className="rounded-xl z-10 overflow-hidden shadow-lg w-full h-full">
                  <img
                    className="w-full h-auto object-cover"
                    src="./man.jpg"
                    alt="Profile"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="w-full sm:w-3/4 md:w-1/2 lg:w-2/4 text-center lg:text-left"
              >
                <div>
                  <h1 className="text-6xl leading-[70px] font-bold text-white">
                    Best Web Developer
                    <br />
                    In Bangladesh
                  </h1>

                  {/* <TextLoop className="text-sm sm:text-base md:text-lg text-[#A4A4A4] font-normal font-openSans">
                <span>MERN Stack Developer</span>
                <span>Front End Developer</span>
                <span>Full Stack Developer</span>
                <span>Problem Solver</span>
              </TextLoop> */}
                </div>
                <div className="py-6">
                  <p className="text-sm sm:text-base md:text-lg text-[#A4A4A4] font-light  leading-7 pb-4  text-justify">
                    Our vision is to be a global leader in technology by
                    continuously innovating and putting our users first. We
                    believe in transparency, quality, and collaboration, and we
                    work hard to turn ideas into reality
                  </p>
                  <div className="">
                    <div class=" grid grid-cols-2 gap-3">
                      <div class="flex items-center gap-4 p-4 ">
                        <SearchCheck className="text-white/70 " />
                        <span class="text-lg font-medium text-white/70">
                          Frontend Development
                        </span>
                      </div>
                      <div class="flex items-center gap-4 p-4 ">
                        <SearchCheck className="text-white/70 " />
                        <span class="text-lg font-medium text-white/70">
                          Full Stack Projects
                        </span>
                      </div>
                      <div class="flex items-center gap-4 p-4 ">
                        <SearchCheck className="text-white/70 " />
                        <span class="text-lg font-medium text-white/70">
                          Product Design
                        </span>
                      </div>
                      <div class="flex items-center gap-4 p-4 ">
                        <SearchCheck className="text-white/70 " />
                        <span class="text-lg font-medium text-white/70">
                          Project Management
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeContent>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {stats.map(({ id, title, value, icon,delay }) => (
              <div className="z-30" key={id}>
                <AnimatedContent  delay={delay} className="z-30">
                <div className="bg-gradient-to-br from-primary/30 to-background p-6  rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                  <div className="mb-4">{icon}</div>
                  <h3 className="text-3xl font-bold text-white">{value}</h3>
                  <p className="text-white/70 mt-2 text-sm">{title}</p>
                </div>
              </AnimatedContent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
