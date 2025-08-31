import AnimatedTestimonials from "../motion/animated-testimonials";


export function AnimatedTestimonialsDemo() {
const testimonials = [
   {
    quote:
      "We were excited to welcome Harun to Durdom Crafters as a Frontend Intern. His professionalism and eagerness to learn set a strong foundation for impactful collaboration.",
    name: "Fahmida Khan",
    designation: "CEO, Durdom Crafters",
    link: "mailto:info@durdomcrafters.com", // or official site if available
    src: "/c3.jpg",
  },
  {
    quote:
      "Harun showed outstanding commitment throughout the Complete Web Development Course. His quick learning ability, dedication, and timely delivery of assignments truly impressed us.",
    name: "Jhankar Mahbub",
    designation: "CEO, Programming Hero",
    link: "https://programming-hero.com", // or certificate link if hosted
    src: "/c1.jpg", // Update to actual hosted image path or keep locally
  },
  {
    quote:
      "Harun consistently delivered high-quality work during his internship at Codesraft. His project contributions were timely and well-structured, demonstrating both technical skill and responsibility.",
    name: "MD. Iftekhar Ahammed",
    designation: "Chairman, Codesraft",
    link: "https://www.codesraft.com", // or offer letter if hosted
    src: "/c2.jpg",
  },
  {
    quote:
      "We were excited to welcome Harun to Durdom Crafters as a Frontend Intern. His professionalism and eagerness to learn set a strong foundation for impactful collaboration.",
    name: "Fahmida Khan",
    designation: "CEO, Durdom Crafters",
    link: "mailto:info@durdomcrafters.com", // or official site if available
    src: "/c3.jpg",
  },
];



  return <AnimatedTestimonials testimonials={testimonials} />;
}
