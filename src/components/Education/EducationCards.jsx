"use client";

import { useState, useEffect } from "react";
import { Calendar, Trophy } from "lucide-react";
import AnimatedContent from "../motion/AnimatedContent";

export default function EducationCards({
  title,
  subtitle,
  year,
  period,
  description,
  icon: Icon,
  height,
  delay,
  achievements,
  subjects,
  delays,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <AnimatedContent delay={delays}>
      <div
        className={`w-full md:w-72 ${height} bg-gradient-to-b from-[#1a0c2e] to-[#160a26] rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${
          isHovered
            ? "transform scale-[1.02] shadow-xl shadow-purple-900/20"
            : "shadow-md shadow-black/30"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col h-full p-6 border border-purple-900/20 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <div
              className={`p-3 rounded-xl bg-purple-900/20 text-purple-400 transition-all duration-300 ${
                isHovered ? "bg-purple-900/30 text-purple-300" : ""
              }`}
            >
              <Icon size={24} />
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent"></div>
          </div>

          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <h4 className="mb-4 text-sm text-purple-400">{subtitle}</h4>

          <div className="flex items-center justify-between mb-4">
            <h6 className="text-sm">{year}</h6>
            <div className="flex items-center text-xs text-[#A4A4A4] mt-1">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{period}</span>
            </div>
          </div>

          <p className="text-[#A4A4A4] text-sm leading-relaxed flex-grow mb-4">
            {description}
          </p>

          <div className="flex items-center text-sm mb-2.5">
            <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
            <h6 className="text-sm">Key Achievements</h6>
          </div>

          <div className="flex gap-2">
            <p className="px-2 py-1 text-xs text-purple-300 rounded-full bg-purple-900/30">
              GPA: {achievements?.gpa}
            </p>
            <p className="px-2 py-1 text-xs text-purple-300 rounded-full bg-purple-900/30">
              Subject: {achievements?.subject}
            </p>
          </div>

          <div className="pt-4 mt-6 border-t border-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {subjects?.map((subject, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs text-purple-300 rounded bg-purple-900/30"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}
