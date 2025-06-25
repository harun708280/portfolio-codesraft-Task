"use client";
import { GraduationCap } from "lucide-react";
import EducationCards from "./EducationCards";

const cards = [
  {
    id: 1,
    title: "Bachelor of Business Administration",
    subtitle: "Habibullah Bahar College",
    year: "1st Year",
    period: "2020-2021",
    description:
      "Learned business fundamentals and introductory management concepts.",
    icon: GraduationCap,
    // height: "h-[470px]",
    delay: 0,
    achievements: {
      gpa: "2.50",
      subject: "Management",
    },
    subjects: [
      "BD History",
      "MicroEcon",
      "Acct. Prin",
      "Biz Intro",
      "Mgmt Prin",
      "Mktg Prin",
    ],
    delay: 0.2,
  },
  {
    id: 2,
    title: "Bachelor of Business Administration",
    subtitle: "Habibullah Bahar College",
    year: "2nd Year",
    period: "2022-2023",
    description: "Studied core business disciplines and case analysis methods.",
    icon: GraduationCap,
    // height: "h-[500px]",
    delay: 100,
    achievements: {
      gpa: "2.33",
      subject: "Management",
    },
    subjects: [
      "HR Management",
      "Biz Communication",
      "Business Law",
      "Finance Principles",
      "Business Math",
      "IT for Business",
      "MacroEcon",
    ],
    delay: 0.3,
  },
  {
    id: 3,
    title: "Bachelor of Business Administration",
    subtitle: "Habibullah Bahar College",
    year: "3rd Year",
    period: "2024-2025",
    description: "Focused on strategic management and financial analysis.",
    icon: GraduationCap,
    height: "h-[570px]",
    delay: 200,
    achievements: {
      gpa: "N/A",
      subject: "Management",
    },
    subjects: [
      "Operations Mgmt",
      "Business Stats",
      "Org Behavior",
      "Bangladesh Tax",
      "Company Law",
      "Marketing Mgmt",
      "Management Acct",
    ],
    delay: 0.4,
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
          delays={card.delay}
        />
      ))}
    </div>
  );
};

export default EducationCard;
