import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Project from "@/components/Project/Project";
import AnimatedCard from "@/components/service/AnimatedCard";
import Service from "@/components/service/Service";
import Nav from "@/components/shared/Nav";
import Skills from "@/components/Skills/Skills";
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
    </div>
  );
};

export default Layout;
