import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedTestimonials = ({ testimonials, autoplay = true }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 7000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="w-full mx-auto md:pb-24 pt-8 pb-6 lg:pl-[100px]">
      <div className="relative flex flex-col items-center justify-center md:gap-20 md:mt-20 md:flex-row">
        {/* Left side image */}
        <div className="w-full ">
          <div className="relative w-full h-80">
            <AnimatePresence>
              {testimonials.map((item, index) => (
                <motion.div
                  key={item.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="relative">
                      <img
                        src={item.src}
                        alt={item.name}
                        className="w-full rounded-2xl  md:h-[450px] h-[250px]"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right side content */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="mb-2 text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-[#bdacff]">
              {testimonials[active].designation}
            </p>

            <motion.p className="md:text-base text-sm text-[#A4A4A4] leading-relaxed text-balance mt-8 md:mb-4 text-justify">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center bg-gray-100 rounded-full h-7 w-7 dark:bg-neutral-800 group/button"
            >
              <ArrowLeft className="w-5 h-5 text-black transition-transform duration-300 dark:text-neutral-400 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center bg-gray-100 rounded-full h-7 w-7 dark:bg-neutral-800 group/button"
            >
              <ArrowRight className="w-5 h-5 text-black transition-transform duration-300 dark:text-neutral-400 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
