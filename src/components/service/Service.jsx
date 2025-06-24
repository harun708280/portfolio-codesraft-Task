import React from "react";
import DualTextEffect from "../shared/DualTextEffect.";
import FadeContent from "../motion/FadeContent";
import { Code, Server, Layers, PenTool, Link2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services = [
  {
    title: "Frontend Development",
    description: "Responsive UI using React, Tailwind, and best UX practices.",
    icon: <Code className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Backend Development",
    description: "REST APIs with Node.js, Express, MongoDB, Mongoose.",
    icon: <Server className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Full Stack Web Apps",
    description: "End-to-end MERN stack web applications.",
    icon: <Layers className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "UI/UX Design",
    description: "Clean, modern designs using Figma & component systems.",
    icon: <PenTool className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "API Integration",
    description: "Third-party integrations like Stripe, Firebase, and more.",
    icon: <Link2 className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Website Optimization",
    description: "Improve speed, SEO, and performance of your site.",
    icon: <Zap className="w-8 h-8 text-orange-500" />,
  },
];

const Service = () => {
  return (
    <section className="relative w-full min-h-screen   lg:mt-12 flex flex-col justify-center bg-[#0e051a] pb-20 text-white bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px] mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] -webkit-mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] overflow-hidden px-4">
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
            largeText="My Service"
            smallText="My Service"
            largeTextColor="text-[#34276817]"
              smallTextColor="text-white/70"
              largeTextSize="text-4xl pt-12 lg:text-[120px]"
              smallTextSize="text-xl pt-12 md:text-3xl lg:text-3xl  w-full flex justify-center text-center"
          />
        </FadeContent>
      </div>

      {/* Services Grid */}
      <FadeContent
        blur={true}
        duration={1200}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="grid grid-cols-1 gap-6 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="z-20 flex flex-col justify-between p-6 transition-all duration-300 border bg-gradient-to-b from-[#1a0c2e] to-[#160a26]  shadow-lg overflow-hidden  rounded-xl border-white/10 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-white/70">
                  {service.description}
                </p>
              </div>
                 <Link
              to="https://drive.google.com/file/d/122hwCmwXHT6OhqMzb8XGJIcpYvfst27q/view?usp=sharing"
              target="_blank"
            ><button className="px-4 py-2 mt-auto text-sm text-white transition duration-300 rounded-md bg-primary hover:bg-primary">
                Learn More
              </button></Link>
              
            </div>
          ))}
        </div>
      </FadeContent>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />

      {/* CTA Button */}
    </section>
  );
};

export default Service;
