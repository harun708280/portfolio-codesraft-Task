import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "@/components/shared/Nav";
import NewsLatter from "@/components/NewsLatter/NewsLatter";

// Lucide Icons
import { ArrowUp, ArrowDown } from "lucide-react";

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  // Show scroll buttons after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen bg-background">
      <Nav />
      <Outlet />
      <NewsLatter />

      {showButton && (
        <div className="fixed z-50 flex flex-col gap-3 bottom-6 right-6">
          <button
            onClick={scrollToTop}
            className="p-3 text-white transition rounded-full bg-primary hover:bg-blue-700"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          <button
            onClick={scrollToBottom}
            className="p-3 text-white transition rounded-full bg-primary hover:bg-blue-700"
            title="Scroll to Bottom"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
