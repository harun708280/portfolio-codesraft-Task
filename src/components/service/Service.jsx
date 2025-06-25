import React from "react";

import FadeContent from "../motion/FadeContent";
import { Code, Server, Layers, PenTool, Link2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import DualTextEffect from "../shared/DualTextEffect.";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, fast, and accessible UIs using React.js, Tailwind CSS and component-driven design.",
    icon: Code,
    bgColor: "bg-gradient-to-b from-[#1a0c2e] to-[#160a26]",
  },
  {
    title: "Backend Development",
    description:
      "Developing robust RESTful APIs using Node.js, Express, and MongoDB with secure authentication.",
    icon: Server,
    bgColor: "bg-gradient-to-b from-[#1a0c2e] to-[#160a26]",
  },
  {
    title: "Full Stack Solutions",
    description:
      "Delivering complete MERN stack web applications with real-world functionality.",
    icon: Layers,
    bgColor: "bg-gradient-to-b from-[#1a0c2e] to-[#160a26]",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces with Figma & custom design systems focused on usability.",
    icon: PenTool,
    bgColor: "bg-gradient-to-b from-[#1a0c2e] to-[#160a26]",
  },
  {
    title: "API Integrations",
    description:
      "Integrating 3rd-party services like Stripe, Firebase, Clerk, and more.",
    icon: Link2,
    bgColor: "bg-gradient-to-b from-[#1a0c2e] to-[#160a26]",
  },
  {
    title: "Performance Optimization",
    description:
      "Speeding up your site and improving SEO, Core Web Vitals & Lighthouse scores.",
    icon: Zap,
    bgColor: "bg-gradient-to-b from-[#1a0c2e] to-[#160a26]",
  },
];

const Service = () => {
  return (
    <section
      className="relative w-full min-h-screen lg:mt-12 flex flex-col justify-center bg-[#0e051a] pb-20 text-white
      bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]
      mask-image-[radial-gradient(300px_circle_at_center,white,transparent)]
      -webkit-mask-image-[radial-gradient(300px_circle_at_center,white,transparent)]
      overflow-hidden px-4"
    >
      {/* Purple Glow - Bottom Right */}
      <div className="absolute bottom-0 transform translate-x-1/2 translate-y-1/2 bg-purple-500 rounded-full right-10 w-96 h-96 opacity-40 blur-3xl" />

      {/* Star Image - Bottom Right with animation */}
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute w-56 h-56 bottom-2 right-2"
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

      {/* Section Title */}
      <div className="flex justify-center">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <DualTextEffect
            largeText="What I Do Best"
            smallText="My Service"
            largeTextColor="text-[#9a8ec413]"
            smallTextColor="text-white/70"
            largeTextSize="text-4xl pt-12 lg:text-[120px]"
            smallTextSize="text-xl pt-12 md:text-3xl lg:text-3xl w-full flex justify-center text-center"
          />
        </FadeContent>
      </div>

      {/* Services Grid */}
      <FadeContent blur duration={1200}>
        <div className="relative z-10 grid grid-cols-1 gap-8 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {services.map(({ title, description, icon: Icon, bgColor }, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 py-10 text-white shadow-lg ${bgColor} overflow-hidden`}
            >
              <div className="absolute text-white/10 text-[100px] top-5 right-3 z-0">
                <Icon className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <div className="flex gap-4">
                  <Icon className="w-10 h-10 p-2 mb-4 rounded-md bg-white/15" />
                  <h3 className="mb-2 text-xl font-semibold ">{title}</h3>
                </div>
                <p className="text- opacity-90">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeContent>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Service;
