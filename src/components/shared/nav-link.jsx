import { useState, useEffect } from "react";

export default function NavLink({ href, children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (href === "#home" && window.scrollY < 200) {
        setIsActive(true);
        return;
      }

      const section = document.querySelector(href);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= 100;

      setIsActive(isInView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  return (
    <a
      href={href}
      className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive ? "text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#8e26e4] transform origin-left transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-50"
        }`}
      />
    </a>
  );
}
