import React from "react";
import FadeContent from "../motion/FadeContent";
import DualTextEffect from "../shared/DualTextEffect.";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Mastering React in 30 Days",
    description:
      "A roadmap to learn React step-by-step and build powerful front-end apps.",
    date: "June 10, 2025",
    image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/5992673/cover_image/retina_1708x683/1005_Design-Patterns-in-React_Cover-44247834a5b31e8d08e5bbbdac4a6750.png",
  },
  {
    id: 2,
    title: "Why Tailwind CSS is a Game Changer",
    description:
      "Tailwind CSS simplifies modern UI design with utility-first classes. Here’s why you should use it.",
    date: "May 28, 2025",
    image:
      "https://v3.tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg",
  },
  {
    id: 3,
    title: "Deploying Your App on Vercel",
    description:
      "A simple guide on how to deploy your full-stack application using Vercel.",
    date: "May 12, 2025",
    image:
      "https://cdn.sanity.io/images/vftxng62/production/fd3a582aa29d8f716f657173659977746d9ee459-3800x1930.png?w=1200&fit=max&auto=format",
  },
];

const Blog = () => {
  return (
    <div className="relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0e051a] text-white">
      {/* Background Glow */}
      <div className="absolute bottom-0 -left-[15%] w-72 sm:w-96 h-72 sm:h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 z-10" />

      {/* Floating Star */}
      <motion.img
        src="star.png"
        alt="Star"
        className="absolute z-10 w-32 h-32 sm:w-44 md:w-56 sm:h-44 md:h-56 -bottom-3 left-2"
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
          <FadeContent blur duration={1000} easing="ease-out" initialOpacity={0}>
            <DualTextEffect
              largeText="blog post"
              smallText="Latest Blog Posts"
              largeTextColor="text-[#34276817]"
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
              to="https://drive.google.com/file/d/122hwCmwXHT6OhqMzb8XGJIcpYvfst27q/view?usp=sharing"
              target="_blank"
            ><button className="mt-4 text-sm font-semibold text-purple-400 hover:underline">
                    Read More →
                  </button></Link>
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
