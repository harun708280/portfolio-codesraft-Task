import React from "react";
import FadeContent from "../motion/FadeContent";
import DualTextEffect from "../shared/DualTextEffect.";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Mastering NextJs in 30 Days",
    description:
      "A roadmap to learn NextJs step-by-step and build powerful front-end apps.",
    date: "June 10, 2025",
    image:
      "/next.jpg",
      link:'https://www.linkedin.com/posts/harun-or-rashid067_reactjs-nextjs-frontenddeveloper-activity-7340470758663458817-rRxR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE5KD4MB3FVLSHK6wynTNlr6paUJNwW_bPQ'
  },
  {
    id: 2,
    title: "Why  Redux is a Game Changer",
    description:
      "Redux simplifies modern UI design with utility-first classes. Here’s why you should use it.",
    date: "May 28, 2025",
    image:
      "/redux.jpg",
      link:'https://www.linkedin.com/posts/harun-or-rashid067_reactjs-reduxtoolkit-rtkquery-activity-7332495646047830017-oSkS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE5KD4MB3FVLSHK6wynTNlr6paUJNwW_bPQ'
  },
  {
    id: 3,
    title: "Deploying Your App on Vercel",
    description:
      "A simple guide on how to deploy your full-stack application using Vercel.",
    date: "May 12, 2025",
    image:
      "https://cdn.sanity.io/images/vftxng62/production/fd3a582aa29d8f716f657173659977746d9ee459-3800x1930.png?w=1200&fit=max&auto=format",
      link:'https://www.linkedin.com/posts/harun-or-rashid067_reactjs-nextjs-frontenddeveloper-activity-7340470758663458817-rRxR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE5KD4MB3FVLSHK6wynTNlr6paUJNwW_bPQ'
  },
];

const Blog = () => {
  return (
    <div className="relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0e051a] text-white">
      {/* Background Glow */}
      {/* <div className="absolute bottom-0 -left-[15%] w-72 sm:w-96 h-72 sm:h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 z-10" /> */}

      {/* Floating Star */}
      
      <motion.img
        src="star.png"
        alt="Star Bottom Right"
        className="absolute w-40 h-40 -bottom-20 right-2 md:w-56 md:h-56"
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

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl">
        {/* Section Title */}
        <div className="flex justify-center pb-12">
          <FadeContent
            blur
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <DualTextEffect
              largeText="blog post"
              smallText="Latest Blog Posts"
              largeTextColor="text-[#9a8ec413]"
              smallTextColor="text-white/70"
              largeTextSize="text-4xl sm:text-5xl lg:text-[120px]"
              smallTextSize="text-xl w-ful  sm:text-xl  text-center lg:text-3xl"
            />
          </FadeContent>
        </div>

        {/* Blog Cards */}
        <FadeContent blur duration={1200} easing="ease-out" initialOpacity={0}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#130a24] border border-white/10 rounded-xl shadow-md overflow-hidden hover:scale-[1.02] hover:border-[#2e1c58] transition-all duration-300 backdrop-blur-sm"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <p className="mb-2 text-sm text-purple-400">{blog.date}</p>
                  <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-300">{blog.description}</p>
                  <Link
                    to={blog.link}
                    target="_blank"
                  >
                    <button className="mt-4 text-sm font-semibold text-purple-400 hover:underline">
                      Read More →
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeContent>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Blog;
