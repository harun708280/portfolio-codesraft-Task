import Hero from "@/components/shared/Hero";
import React from "react";
import Service from "../components/service/Service";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Project from "../components/Project/Project";
import Testimonials from "../components/Testimonials/Testimonials";
import Blog from "../components/Blog/Blog";
import { Contact } from "lucide-react";
import About from "../components/About/About";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />\
      <Service />
      <Skills />
      <Education />
      <Project />
      <Testimonials />
      <Blog />
      <Contact />{" "}
    </div>
  );
};

export default Home;
