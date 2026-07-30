import React from "react";
import DualTextEffect from "../shared/DualTextEffect.";
import {
  SearchCheck,
  Users,
  PlayCircle,
  CheckCircle,
  Award,
  Briefcase,
  Smile,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";
import FadeContent from "../motion/FadeContent";
import AnimatedContent from "../motion/AnimatedContent";

import SocialLinks from "../contact/SocialLinks";

const About = () => {
  return (
    <div className="relative overflow-hidden text-white md:pt-16  bg-background">
      {/* Animated Star */}
      {/* <motion.img
        src="star.png"
        alt="Star Bottom Left"
        className="absolute z-0 w-56 h-56 -bottom-20 left-2"
        animate={{ rotate: [360, 0], y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      /> */}

      <div className="relative z-20 px-4 mx-auto max-w-7xl">
        {/* Title */}
        <div className="flex justify-center">
          <FadeContent blur duration={1000}>
            <DualTextEffect
              largeText="ABOUT ME"
              smallText="About Me"
              largeTextColor="text-[#9a8ec413]"
              smallTextColor="text-white/80"
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
                I'm a passionate <strong>Full Stack Software Developer</strong> with over
                <strong> 1 year of professional experience</strong> building modern,
                scalable, and production-ready web applications. I completed the
                <strong> Complete Web Development Course</strong> from Programming Hero,
                where I built a strong foundation in modern web technologies and software
                engineering principles.
                <br />
                <br />
                I started my professional journey as a
                <strong> Full Stack Developer Intern at PlutoHub</strong>, where I gained
                hands-on experience developing responsive web applications, integrating REST
                APIs, and collaborating within an Agile development environment.
                <br />
                <br />
                After that, I joined <strong>Coderaft</strong> as a
                <strong> Full Stack Developer</strong>, contributing to production-ready
                business applications, admin dashboards, authentication systems, CMS-based
                solutions, and scalable backend services.
                <br />
                <br />
                Currently, I'm working as a <strong>Full Stack Developer at SoftwareZon</strong>,
                building high-performance web applications using
                <strong>
                  {" "}
                  Next.js, React.js, Node.js, Express.js, Prisma, PostgreSQL, MongoDB, and
                  TypeScript
                </strong>
                . I enjoy solving real-world problems, writing clean and maintainable code,
                and creating digital experiences that are fast, secure, and user-friendly.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-1 gap-2 mt-6 sm:grid-cols-2">
                {[
                  "Full Stack Development",
                  "Next.js & React.js",
                  "REST API Development",
                  "Database Design",
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
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    id: 1,
                    title: "Years Experience",
                    value: "1.5+",
                    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
                    delay: 0.2,
                  },
                  {
                    id: 2,
                    title: "Companies Worked",
                    value: "3",
                    icon: <Users className="w-8 h-8 text-orange-500" />,
                    delay: 0.3,
                  },
                  {
                    id: 3,
                    title: "Projects Completed",
                    value: "10+",
                    icon: <PlayCircle className="w-8 h-8 text-green-500" />,
                    delay: 0.4,
                  },
                  {
                    id: 4,
                    title: "Technologies",
                    value: "15+",
                    icon: <Award className="w-8 h-8 text-purple-500" />,
                    delay: 0.5,
                  },
                  {
                    id: 5,
                    title: "Happy Clients",
                    value: "20+",
                    icon: <Smile className="w-8 h-8 text-yellow-400" />,
                    delay: 0.6,
                  },
                  {
                    id: 6,
                    title: "Open Source",
                    value: "5+",
                    icon: <GitBranch className="w-8 h-8 text-pink-500" />,
                    delay: 0.7,
                  },
                ].map(({ id, title, value, icon, delay }) => (
                  <AnimatedContent key={id} delay={delay}>
                    <div className="flex flex-col items-center p-6 text-center duration-300 bg-gradient-to-b from-[#1a0c2e] to-[#160a26] shadow-lg overflow-hidden transition-all rounded-xl hover:scale-105 h-full">
                      <div className="mb-4">{icon}</div>
                      <h3 className="text-3xl font-bold">{value}</h3>
                      <p className="mt-2 text-lg font-normal text-white/70">
                        {title}
                      </p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </div>
        </FadeContent>
      </div>



    </div>
  );
};

export default About;
