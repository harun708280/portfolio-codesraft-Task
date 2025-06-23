import React from "react";
import FadeContent from "../motion/FadeContent";
import DualTextEffect from "../shared/DualTextEffect.";
import { Link } from "react-router-dom";
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
    className={`relative z-50 overflow-hidden group bg-gradient-to-b from-[#1a0c2e] to-[#160a26] rounded-md ${cols}`}
  >
    <img
      src={img}
      className="h-[400px] z-50 w-full rounded-md p-4 object-cover"
      alt="project"
    />

    {/* Hover Overlay */}
    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100">
      <a
        href="https://work-wave-by-harun.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-5 py-2 font-semibold text-white transition rounded bg-primary hover:bg-primary">
          View Details
        </button>
      </a>
    </div>
  </div>
);

const Project = () => {
  return (
   <div className="relative min-h-screen overflow-hidden">
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
     <div className="px-4 mx-auto max-w-7xl">
      <div className="flex justify-center mb-10">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <DualTextEffect
            largeText="Best Project"
            smallText="Best Project"
            largeTextColor="text-[#34276817]"
            smallTextColor="text-white/70"
            largeTextSize="text-[120px]"
            smallTextSize="text-3xl"
          />
        </FadeContent>
      </div>

      {/* First Line */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ProjectCard {...projects[0]} />
        <ProjectCard {...projects[1]} />
      </div>

      {/* Second Line */}
      <div className="grid grid-cols-1 gap-6 pb-20 mt-10 md:grid-cols-3">
        <ProjectCard {...projects[2]} />
        <ProjectCard {...projects[3]} />
        <ProjectCard {...projects[4]} />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
   </div>
  );
};

export default Project;
