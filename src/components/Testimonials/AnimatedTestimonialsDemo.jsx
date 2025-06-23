import AnimatedTestimonials from "../motion/animated-testimonials";


export function AnimatedTestimonialsDemo() {
const testimonials = [
  {
    quote:
      "The level of precision and creativity reflected in the project delivery was truly impressive. From clean code architecture to smooth user experience, the results exceeded all expectations. The ability to bring designs to life with pixel-perfect accuracy is what set this developer apart from others in the industry.",
    name: "James Wellington",
    designation: "CTO, NexaTech Solutions",
    link: "#",
    src: "https://getweeklyupdate.com/blog/wp-content/uploads/2018/02/27.jpg",
  },
  {
    quote:
      "We were thoroughly impressed by the professionalism and consistency shown throughout the development process. The backend was not only efficient and secure, but the frontend also delivered seamless responsiveness and modern animations that elevated the entire product experience.",
    name: "Sarah Mitchell",
    designation: "Product Manager, VisionWare Inc.",
    link: "#",
    src: "https://www.hindalco.com/Upload/Images/masthead/Satish-Pai-banner-v1.webp",
  },
  {
    quote:
      "The attention to detail and deep understanding of scalable application structure made a huge difference in our project. We saw significant performance improvements and better user engagement after the new system was implemented. Excellent work and highly reliable.",
    name: "Liam Rodríguez",
    designation: "CEO, AppCrafters Co.",
    link: "#",
    src: "https://www.europeanceo.com/wp-content/uploads/2017/08/CEO-magic-touch.jpg",
  },
  {
    quote:
      "In today’s fast-paced tech world, finding someone who balances quality with speed is rare — and that’s exactly what we found here. The component reusability, modular architecture, and deep integration with modern stacks like Next.js and TypeScript showcased true mastery in web development.",
    name: "Emily Tan",
    designation: "Engineering Lead, CodeSmith Labs",
    link: "#",
    src: "https://img.freepik.com/premium-photo/happy-proud-prosperous-mid-aged-mature-professional-asian-business-man-ceo-executive-wearing-suit-standing-office-arms-crossed-looking-away-thinking-success-leadership-side-profile-view_220770-5137.jpg",
  },
];


  return <AnimatedTestimonials testimonials={testimonials} />;
}
