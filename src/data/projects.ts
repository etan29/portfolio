import type { StaticImageData } from "next/image";
import aepPreview from "@/public/projects/aep_aquare.png";
import cameraPreview from "@/public/projects/camera_square.png";
import cutiePreview from "@/public/projects/cutie_square.png";
import mountPreview from "@/public/projects/mount_square.png";
import ridesPreview from "@/public/projects/rides_square.png";
import shpePreview from "@/public/projects/shpe_square.png";
import ucrPreview from "@/public/projects/ucr_square.png";
import walmartPreview from "@/public/projects/walmart_square.png";
import aepPopup from "@/public/projects-popup/aep.png";
import cutiePopup from "@/public/projects-popup/cutie.png";
import mountPopup from "@/public/projects-popup/mount.png";
import ridesPopup from "@/public/projects-popup/rides.png";
import shpePopup from "@/public/projects-popup/shpe.png";
import smartPopup from "@/public/projects-popup/smart.png";
import ucrPopup from "@/public/projects-popup/ucr.png";
import walmartPopup from "@/public/projects-popup/walmart.png";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  liveUrl?: string;
  image?: StaticImageData;
  popupImage?: StaticImageData;
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
    image: cutiePreview,
    popupImage: cutiePopup,
    imageAlt: "Cutie Hack 2026 website",
  },
  {
    id: "mount-cryptid",
    title: "Mount Cryptid",
    category: "CS 100 Final Project",
    description:
      "Used UML to design classes and game structure. Followed an Agile workflow by developing features in branches, using pull requests, and testing our team of 4's code with GoogleTest and CI.",
    tech: ["C++", "GitHub Actions"],
    github: "https://github.com/etan29/cs100-final-project",
    image: mountPreview,
    popupImage: mountPopup,
    imageAlt: "Mount Cryptid text-based adventure menu",
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
      "https://chromewebstore.google.com/detail/ucr-registration-extension/baojbphcdchacdilidncmechicklhibia?utm_source=item-share-cb",
    image: ucrPreview,
    popupImage: ucrPopup,
    imageAlt: "UCR Registration Extension course details overlay",
  },
  {
    id: "aep-ucr",
    title: "AEP @ UCR",
    category: "Web Development",
    description:
      "Developed the Association of Environmental Professionals @ UC Riverside website with a team of 8 developers from the ACM Spark (web development) program.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "shadcn/ui",
      "ESLint",
      "Prettier",
      "GitHub Actions",
      "Figma",
    ],
    github: "https://github.com/acm-ucr/aep-ucr-website",
    image: aepPreview,
    popupImage: aepPopup,
    imageAlt: "Association of Environmental Professionals at UCR website",
  },
  {
    id: "smart-security-camera",
    title: "Smart Security Camera",
    category: "Full Stack",
    description:
      "Developed a smart surveillance system with real-time video detection with a team of developers from the ACM Forge (embedded development) program.",
    tech: ["Flask", "MQTT", "YOLO", "Next.js", "TypeScript", "React"],
    github: "https://github.com/acm-ucr/surveillance-camera",
    image: cameraPreview,
    popupImage: smartPopup,
    imageAlt: "Smart security camera dashboard",
  },
  {
    id: "shpe-ucr",
    title: "SHPE @ UCR",
    category: "Web Development",
    description:
      "Developed the SHPE @ UCR Riverside website with a team of 10 developers from the ACM Spark (web development) program.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "shadcn/ui",
      "ESLint",
      "Prettier",
      "GitHub Actions",
      "Figma",
    ],
    github: "https://github.com/acm-ucr/shpe-website",
    liveUrl: "https://shpe.ucrhighlanders.org/",
    image: shpePreview,
    popupImage: shpePopup,
    imageAlt: "SHPE at UCR website",
  },
  {
    id: "walmart-sales-forecasting",
    title: "Walmart Sales Forecasting",
    category: "Python Data Analysis",
    description:
      "Built time-series forecasting models to predict retail sales and analyzed their performance across different methodologies. Mentored remotely from ACM DAS (data analytics) leads.",
    tech: ["Python", "pandas", "NumPy", "scikit-learn", "XGBoost"],
    liveUrl:
      "https://public.tableau.com/app/profile/emily.tan3498/viz/SalesData_17730864062650/Dashboard1?publish=yes",
    image: walmartPreview,
    popupImage: walmartPopup,
    imageAlt: "Walmart sales forecasting charts",
  },
  {
    id: "rides-ucr",
    title: "Rides @ UCR",
    category: "Web Development",
    description:
      "Developed the Rides @ UCR Riverside website with a team of 8 developers from the ACM Spark (web development) program.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "shadcn/ui",
      "ESLint",
      "Prettier",
      "GitHub Actions",
      "Figma",
    ],
    github: "https://github.com/acm-ucr/ridesucr-website",
    liveUrl: "https://ridesucr.com/",
    image: ridesPreview,
    popupImage: ridesPopup,
    imageAlt: "Rides at UCR website",
  },
];
