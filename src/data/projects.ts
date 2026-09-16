import type { StaticImageData } from "next/image";
import dasPreview from "@/public/projects_images/DAS.png";
import registrationPreview from "@/public/projects_images/Registration.png";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  liveUrl?: string;
  image?: StaticImageData;
  imageAlt?: string;
  imageContain?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "cutie-hack-2026",
    title: "Cutie Hack 2026",
    category: "Web Development",
    description:
      "Currently developing the hackathon website for Cutie Hack, which hosts 300+ participants.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "ESLint"],
    github: "https://github.com/cutiehack-ucr/cutie-hack-2026-website",
  },
  {
    id: "ucr-registration-extension",
    title: "UCR Registration Extension",
    category: "Chrome Extension",
    description:
      "Built a Chrome extension that unified course difficulty data from multiple sources into a single registration tool, helping 100+ students make more informed course decisions.",
    tech: [
      "JavaScript",
      "TypeScript",
      "Chrome Extensions",
      "Service Workers",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/etan29/ucr-registration-extension",
    liveUrl:
      "https://chromewebstore.google.com/detail/ucr-registration-extensio/baojbphcdchacdilidncmechicklhibia",
    image: registrationPreview,
    imageAlt: "UCR Registration Extension logo",
    imageContain: true,
  },
  {
    id: "mount-cryptid",
    title: "Mount Cryptid",
    category: "CS 100 Final Project",
    description: "CS 100 final project at UC Riverside.",
    tech: [],
    github: "https://github.com/etan29/cs100-final-project",
  },
  {
    id: "aep-ucr",
    title: "AEP@UCR",
    category: "Web Development",
    description:
      "Developing the campus organization website, implementing Figma designs and resolving weekly pull requests in an Agile workflow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    id: "smart-security-camera",
    title: "Smart Security Camera",
    category: "Full Stack",
    description:
      "Developed and integrated computer vision streaming pipelines into the frontend using Flask video feeds and MQTT messaging.",
    tech: ["Next.js", "Flask", "MQTT"],
  },
  {
    id: "shpe-ucr",
    title: "SHPE@UCR",
    category: "Web Development",
    description:
      "Developing the campus organization website, implementing Figma designs and resolving weekly pull requests in an Agile workflow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    id: "walmart-sales-forecasting",
    title: "Walmart Sales Forecasting",
    category: "Python Data Analysis",
    description:
      "Developed time-series forecasting models (ARIMA, SARIMAX, XGBoost) on a Walmart Weekly Sales dataset to predict 4–12 week horizons.",
    tech: ["Python", "pandas", "XGBoost"],
    image: dasPreview,
    imageAlt: "Walmart Sales Forecasting project graphic",
    imageContain: true,
  },
  {
    id: "rides-ucr",
    title: "Rides@UCR",
    category: "Web Development",
    description:
      "Developing the campus organization website, implementing Figma designs and resolving weekly pull requests in an Agile workflow.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
];
