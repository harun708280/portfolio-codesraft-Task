import React, { useState } from "react";
import FadeContent from "../motion/FadeContent";
import DualTextEffect from "../shared/DualTextEffect.";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ChevronDown } from "lucide-react";

const projects = [
  {
    id: 1,
    img: "/p1.png",
    title: "Project One",
    link: "https://work-wave-by-harun.vercel.app/",
  },
  {
    id: 2,
    img: "/p2.png",
    title: "Project Two",
    link: "https://gradius.ai/",
  },
  {
    id: 3,
    img: "/p3.png",
    title: "Project Three",
    link: "https://xynexa.vercel.app/",
  },
  {
    id: 4,
    img: "/p4.png",
    title: "Project Four",
    link: "https://stafmate-by-harun.netlify.app/",
  },
  {
    id: 5,
    img: "/p5.png",
    title: "Project Five",
    link: "https://raintor-task-three.vercel.app/",
  },
  {
    id: 6,
    img: "/p6.png",
    title: "Project Six",
    link: "#",
  },
  {
    id: 7,
    img: "/p7.png",
    title: "Project Seven",
    link: "#",
  },
  {
    id: 8,
    img: "/p8.png",
    title: "Project Eight",
    link: "#",
  },
  {
    id: 9,
    img: "/p9.png",
    title: "Project Nine",
    link: "#",
  },
  {
    id: 10,
    img: "/p10.png",
    title: "Project Ten",
    link: "#",
  },
];

const ProjectCard = ({ img, title, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
    className="relative group rounded-xl overflow-hidden bg-gradient-to-b from-[#1a0c2e] to-[#160a26] border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] hover:border-purple-400/50 transition-all duration-300 h-[220px] sm:h-[260px] md:h-[300px]"
  >
    {/* Image */}
    <img
      src={img}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Gradient Overlay always visible at bottom */}
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

    {/* Title at bottom */}
    <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 translate-y-0 transition-all duration-300 group-hover:-translate-y-12">
      <p className="text-white font-semibold text-base tracking-wide">{title}</p>
    </div>

    {/* Hover full overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
      <Link to={link} target="_blank" rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-2.5 font-semibold text-white bg-primary rounded-full shadow-lg hover:bg-primary/80 transition-colors duration-200"
        >
          <ExternalLink className="w-4 h-4" />
          View Live
        </motion.button>
      </Link>
    </div>
  </motion.div>
);

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="relative overflow-hidden py-16 text-white">
      {/* Decorative star */}
      <motion.img
        src="star.png"
        alt="Star"
        className="absolute z-10 w-32 h-32 sm:w-48 sm:h-48 -bottom-16 left-4 opacity-50 pointer-events-none"
        animate={{ rotate: [360, 0], y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <div className="flex justify-center mb-12">
          <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
            <DualTextEffect
              largeText="Best Projects"
              smallText="Best Projects"
              largeTextColor="text-[#9a8ec413]"
              smallTextColor="text-white/80"
              largeTextSize="text-4xl sm:text-5xl lg:text-[120px]"
              smallTextSize="text-xl sm:text-2xl lg:text-3xl"
            />
          </FadeContent>
        </div>

        {/* 2-per-row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 font-semibold text-white rounded-full border border-purple-500/50 bg-gradient-to-r from-purple-600/20 to-violet-600/20 hover:from-purple-600/40 hover:to-violet-600/40 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.4)] transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                More Projects
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-purple-300" />
                </motion.span>
              </span>
            </motion.button>
          </div>
        )}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default Project;
