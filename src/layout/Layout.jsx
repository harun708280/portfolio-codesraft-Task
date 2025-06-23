import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/contact/Contact";
import Education from "@/components/Education/Education";
import Project from "@/components/Project/Project";
import AnimatedCard from "@/components/service/AnimatedCard";
import Service from "@/components/service/Service";
import Nav from "@/components/shared/Nav";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";
import Home from "@/page/Home";
import React from "react";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Home />
      <About />\
      <Service />
      <Skills/>
      <Education/>
      <Project/>
      <Testimonials/>
      <Blog/>
      <Contact/>
    </div>
  );
};

export default Layout;
