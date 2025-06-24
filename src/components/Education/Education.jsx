import FadeContent from "../motion/FadeContent";
import DualTextEffect from "../shared/DualTextEffect.";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";


const Education = () => {
  return (
    <section className="relative min-h-screen pb-20 w-full  flex items-center justify-center bg-[#0e051a] text-white overflow-hidden">
      {/* Purple glow effect - bottom right */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-purple-500 rounded-full w-96 h-96 opacity-40 blur-3xl"></div>
        <motion.img
          src="star.png"
          alt="Star Bottom Right"
          className="absolute bottom-0 right-0 z-10 w-56 h-56"
          animate={{
            rotate: [360, 0],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.img>

      {/* container */}
      <div className="container relative z-10 px-4 md:px-6 lg:px-16">
        {/* start text section */}
        <div
          className="flex flex-col items-center justify-center space-y-6 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Dual Text Effect */}
                   <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <DualTextEffect
              largeText="Education"
              smallText="Education"
              largeTextColor="text-[#34276817]"
                smallTextColor="text-white/70"
                largeTextSize="text-4xl sm:text-5xl lg:text-[120px]"
                smallTextSize="text-lg sm:text-xl md:text-3xl w-full flex justify-center text-center"
            />
          </FadeContent>
        </div>
        {/* End Text Section */}

        <EducationCard />
        
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0e051a] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Education;
