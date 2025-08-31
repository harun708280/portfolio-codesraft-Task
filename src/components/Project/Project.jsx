import React from "react";
import FadeContent from "../motion/FadeContent";
import DualTextEffect from "../shared/DualTextEffect.";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    img: "/7.png",
    cols: "col-span-2",
    link:"https://work-wave-by-harun.vercel.app/"
  },
  {
    id: 2,
    img: "/6.png",
    cols: "col-span-1",
    link:"https://gradius.ai/"
  },
  {
    id: 3,
    img: "/5.png",
    cols: "col-span-1",
    link:'https://xynexa.vercel.app/'
  },
  {
    id: 4,
    img: "/4.png",
    cols: "col-span-1",
    link:'https://stafmate-by-harun.netlify.app/'
  },
  {
    id: 5,
    img: "/1.png",
    cols: "col-span-1",
    link:'https://raintor-task-three.vercel.app/'
  },
];

const ProjectCard = ({ img,link, cols }) => (
  <div
    className={`relative group bg-gradient-to-b from-[#1a0c2e] to-[#160a26] rounded-md overflow-hidden sm:h-72 md:h-80 ${cols}`}
  >
    {/* Image */}
    <img
      src={img}
      className="w-full h-full rounded-md object-"
      alt="project"
    />

    {/* Hover Overlay */}
    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100">
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-5 py-2 font-semibold text-white transition rounded bg-primary hover:bg-primary/80">
          View Details
        </button>
      </Link>
    </div>
  </div>
);



const Project = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative Elements */}
      {/* <div className="absolute -bottom-28 -left-[15%] w-72 sm:w-96 h-72 sm:h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 z-20" /> */}
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute z-10 w-32 h-32 sm:w-56 sm:h-56 -bottom-20 left-2"
        animate={{ rotate: [360, 0], y: [0, -10, 0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <div className="flex justify-center mb-10">
          <FadeContent
            blur
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <DualTextEffect
              largeText="Best Project"
              smallText="Best Project"
              largeTextColor="text-[#9a8ec413]"
              smallTextColor="text-white/70"
              largeTextSize="text-4xl sm:text-5xl lg:text-[120px]"
              smallTextSize="text-xl sm:text-2xl lg:text-3xl"
            />
          </FadeContent>
        </div>

        {/* First Line */}
        <FadeContent blur duration={1200} easing="ease-out" initialOpacity={0}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ProjectCard {...projects[0]} />
            <ProjectCard {...projects[1]} />
          </div>
        </FadeContent>

        {/* Second Line */}
        <FadeContent blur duration={1300} easing="ease-out" initialOpacity={0}>
          <div className="grid grid-cols-1 gap-6 pb-20 mt-10 md:grid-cols-3">
            <ProjectCard {...projects[2]} />
            <ProjectCard {...projects[3]} />
            <ProjectCard {...projects[4]} />
          </div>
        </FadeContent>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default Project;
