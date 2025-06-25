import React from "react";
import FadeContent from "../motion/FadeContent";
import DualTextEffect from "../shared/DualTextEffect.";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    img: "https://techmatrix18.com/articles/imgs/1703121210_e-commerce.png",
    cols: "col-span-2",
  },
  {
    id: 2,
    img: "https://happay.com/blog/wp-content/uploads/sites/12/2023/11/corporate-finance.webp",
    cols: "col-span-1",
  },
  {
    id: 3,
    img: "https://img.freepik.com/premium-vector/project-management-web-template_93487-539.jpg",
    cols: "col-span-1",
  },
  {
    id: 4,
    img: "https://cityservice.co.id/wp-content/uploads/2023/02/SEC-1024x683.jpg",
    cols: "col-span-1",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSer-OI3pq2A_-X6VUfvW88r-ifqTGE9stXRA&s",
    cols: "col-span-1",
  },
];

const ProjectCard = ({ img, cols }) => (
  <div
    className={`relative group bg-gradient-to-b from-[#1a0c2e] to-[#160a26] rounded-md overflow-hidden ${cols}`}
  >
    <img
      src={img}
      className="object-cover w-full h-64 p-2 rounded-md sm:h-72 md:h-80"
      alt="project"
    />
    {/* Hover Overlay */}
    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100">
      <a
        href="https://work-wave-by-harun.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-5 py-2 font-semibold text-white transition rounded bg-primary hover:bg-primary/80">
          View Details
        </button>
      </a>
    </div>
  </div>
);

const Project = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -bottom-28 -left-[15%] w-72 sm:w-96 h-72 sm:h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 z-20" />
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute z-10 w-32 h-32 sm:w-56 sm:h-56 -bottom-3 left-2"
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
