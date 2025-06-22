import About from "@/components/About/About";
import AnimatedCard from "@/components/service/AnimatedCard";
import Service from "@/components/service/Service";
import Nav from "@/components/shared/Nav";
import Skills from "@/components/Skills/Skills";
import Home from "@/page/Home";
import React from "react";

const Layout = () => {
  return (
    <div className="bg-background  min-h-screen">
      <Nav />
      <Home />
      <About />\
      <Service />
      <Skills/>
    </div>
  );
};

export default Layout;
