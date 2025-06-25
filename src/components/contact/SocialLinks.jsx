


import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6 lg:justify-between">
      <Link
        to="https://www.linkedin.com/in/harun-or-rashid067/"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <Facebook size={25} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/harun-or-rashid067/"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <Linkedin size={25} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/harun-or-rashid067/"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <Twitter size={25} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/harun-or-rashid067/"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <Instagram size={25} />
      </Link>
      <Link
        to="https://github.com/harun708280"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-[#0e051a] hover:scale-110 transition-transform"
      >
        <Github size={25} />
      </Link>
    </div>
  );
};

export default SocialLinks;
