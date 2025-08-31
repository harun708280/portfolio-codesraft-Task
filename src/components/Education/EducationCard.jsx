"use client";

import { GraduationCap, School, Laptop } from "lucide-react";
import EducationCards from "./EducationCards";

const cards = [
  {
    id: 1,
    title: "Secondary School Certificate (SSC)",
    subtitle: "Nageswari Doyamoyee Pilot Academy",
    year: "2022",
    period: "2021-2022",
    height: "h-[510px]",
    description:
      "Completed SSC from Science group with core focus on Physics, Chemistry, and Math.",
    icon: School, // 🎓 স্কুল আইকন
    achievements: {
      gpa: "5.00",
      subject: "Science",
    },
    subjects: [
      "Physics",
      "Chemistry",
      "Math",
      "Biology",
      "ICT",
      "English",
    ],
    delay: 0.1,
  },
  {
    id: 2,
    title: "Diploma in Computer Science & Technology",
    subtitle: "Rangpur Polytechnic Institute",
    year: "2022 - Present",
    period: "2022-2026",
    description:
      "Learning software development fundamentals, web technologies, networking, and data structures.",
    icon: GraduationCap, // 🎓 গ্র্যাজুয়েশন আইকন
    achievements: {
      gpa: "N/A",
      subject: "Computer Science",
    },
    height: "h-[540px]",
    subjects: [
      "C Programming",
      "Web Design",
      "Database",
      "Networking",
      "Java",
      "Operating Systems",
    ],
    delay: 0.2,
  },
  {
    id: 3,
    title: "Professional Full Stack Developer Course",
    subtitle: "Programming Hero (Remote)",
    year: "2024",
     height: "h-[570px]",
    period: "Level 01 – Level 02",
    description:
      "Building real-world full stack applications using React.js, Next.js, Node.js, MongoDB, and more.",
    icon: Laptop, // 💻 ল্যাপটপ আইকন
    achievements: {
      gpa: "N/A",
      subject: "Full Stack Dev:",
    },
    subjects: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      
      "Express.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    delay: 0.3,
  },
];

const EducationCard = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex flex-col flex-wrap items-center justify-center w-full gap-6 mx-auto mt-8 mb-2 overflow-hidden md:flex-row md:items-end"
    >
      {cards.map((card) => (
        <EducationCards
          key={card.id}
          title={card.title}
          subtitle={card.subtitle}
          year={card.year}
          period={card.period}
          description={card.description}
          icon={card.icon}
          height={card?.height}
          delay={card.delay}
          achievements={card.achievements}
          subjects={card.subjects}
        />
      ))}
    </div>
  );
};

export default EducationCard;
