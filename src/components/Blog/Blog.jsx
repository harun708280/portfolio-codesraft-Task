import React from "react";
import FadeContent from "../motion/FadeContent";
import DualTextEffect from "../shared/DualTextEffect.";
import { motion } from "framer-motion";
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
    <div className="relative flex items-center justify-center pb-20 overflow-hidden ">
      <div className="absolute bottom-0 z-20 -left-[15%]  w-96 h-96 bg-purple-500 opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
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
      <div className="mx-auto text-white max-w max-w-7xl">
        <div className="flex justify-center pb-12">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <DualTextEffect
              largeText="blog post"
              smallText=" Latest Blog Posts"
              largeTextColor="text-[#34276817]"
              smallTextColor="text-white/70"
              largeTextSize="text-[120px]"
              smallTextSize="text-3xl "
            />
          </FadeContent>
        </div>

        <FadeContent
          blur={true}
          duration={1200}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#130a24] border-[#1e1038] hover:border-[#2e1c58] transition-all rounded-xl overflow-hidden shadow-md hover:scale-[1.02]  duration-300 backdrop-blur-sm border border-white/10 z-50"
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
                  <button className="mt-4 text-sm font-semibold text-purple-400 hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </FadeContent>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default Blog;
