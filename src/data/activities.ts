import type { StaticImageData } from "next/image";
import acmLogo from "@/public/Activities/ACM.svg";
import highlanderRacingLogo from "@/public/Activities/Highlander_racing.png";
import hsyatLogo from "@/public/Activities/HSYAT.svg";

export type ActivityRole = {
  title: string;
  date: string;
  highlights: string[];
};

export type ActivityGroup = {
  organization: string;
  logo?: StaticImageData;
  logoAlt?: string;
  logoClassName?: string;
  roles: ActivityRole[];
};

export const ACTIVITIES: ActivityGroup[] = [
  {
    organization: "ACM@UCR",
    logo: acmLogo,
    logoAlt: "ACM@UCR logo",
    roles: [
      {
        title: "Lead Software Engineer @ Cutie/Citrus Hack",
        date: "Jun 2026 – Present",
        highlights: [
          "Building and overseeing software for Cutie Hack, one of ACM's hackathons which hosts 300+ participants",
        ],
      },
      {
        title: "Frontend Developer",
        date: "Jan 2026 – Present",
        highlights: [
          "Developing websites for campus organizations, implementing Figma designs and resolving weekly pull requests in an Agile development workflow",
        ],
      },
      {
        title: "Full Stack Developer",
        date: "Apr 2026 – Jun 2026",
        highlights: [
          "Developed and integrated computer vision streaming pipelines into the frontend using Flask video feeds and MQTT messaging",
        ],
      },
      {
        title: "Data Science Project",
        date: "Jan 2026 – Mar 2026",
        highlights: [
          "Developed time-series forecasting models (ARIMA, SARIMAX, XGBoost) on a Walmart Weekly Sales dataset to predict 4–12 week horizons",
        ],
      },
    ],
  },
  {
    organization: "Highlander Racing",
    logo: highlanderRacingLogo,
    logoAlt: "Highlander Racing logo",
    logoClassName: "bg-black",
    roles: [
      {
        title: "Computer Science Associate",
        date: "Nov 2025 – Present",
        highlights: [
          "Redesigned vehicle control logic using state machines and DMA to improve system speed and reduce CPU load",
        ],
      },
      {
        title: "Intern",
        date: "Oct 2025 – Nov 2025",
        highlights: [
          "Programmed an STM32 microcontroller to transmit and process CAN bus messages for real-time vehicle systems",
        ],
      },
    ],
  },
  {
    organization: "High School Youth Action Team",
    logo: hsyatLogo,
    logoAlt: "High School Youth Action Team logo",
    roles: [
      {
        title: "Volunteer",
        date: "Oct 2021 – Jun 2025",
        highlights: [
          "Collaborated with a team of 20+ volunteers to organize and run Relay For Life fundraising events, raising over $10,000 to support cancer patients",
          "Guided 30+ elementary school students one-on-one in using technology, assisting with device navigation, Wi-Fi setup, and introductory Scratch activities",
          "Provided directions, answered questions, and resolved visitor concerns for guests at the Great Park Visitor Center",
        ],
      },
    ],
  },
];
