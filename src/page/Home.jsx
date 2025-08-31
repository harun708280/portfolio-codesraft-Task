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
import Contacts from "./Contacts";

const Home = () => {
  return (
    <div className="">
      {/* Hero/Banner Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Services Offered Section */}
      {/* <Service /> */}

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Projects Section */}
      <Project />

      <Testimonials />

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <Contacts />
    </div>
  );
};

export default Home;
