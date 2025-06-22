import React from "react";
import DualTextEffect from "../shared/DualTextEffect.";
import FadeContent from "../motion/FadeContent";
import { Code, Server, Layers, PenTool, Link2, Zap } from "lucide-react";
import { motion } from "framer-motion";
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
    <section className="relative w-full min-h-screen  mt-12 flex flex-col justify-center bg-[#0e051a] pb-20 text-white bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px] mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] -webkit-mask-image-[radial-gradient(300px_circle_at_center,white,transparent)] overflow-hidden px-4">
      {/* Purple Glow - Bottom Right */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

      {/* Star Image - Bottom Right with animation */}
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute bottom-2 right-2 w-56 h-56"
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
            largeTextSize="text-[120px]"
            smallTextSize="text-3xl"
          />
        </FadeContent>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-primary/30 to-background z-20 p-6 rounded-xl border border-white/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/70 mb-4">
                {service.description}
              </p>
            </div>
            <button className="mt-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
      

      {/* CTA Button */}
    </section>
  );
};

export default Service;
