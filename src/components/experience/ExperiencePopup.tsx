import InfoCard from "@/components/InfoCard";
import acmForgeLogo from "@/public/experience_images/ACM_Forge.png";
import highlanderRacingLogo from "@/public/experience_images/Highlander_racing.png";
import sparkLogo from "@/public/experience_images/SPARK.svg";
import sweLogo from "@/public/experience_images/SWE.png";

const EXPERIENCES = [
  {
    title: "ACM Spark",
    position: "Web Developer",
    date: "Jan 2026–Present",
    image: sparkLogo,
    imageAlt: "ACM Spark logo",
    highlights: [
      "Built scalable UI components with Next.js, TypeScript, and Tailwind CSS",
      "Developed responsive interfaces optimized across devices",
      "Collaborated in Git-based team workflows for feature development",
    ],
  },
  {
    title: "ACM Forge",
    position: "Fullstack Developer",
    date: "Apr 2026–Present",
    image: acmForgeLogo,
    imageAlt: "ACM Forge logo",
    highlights: [
      "Developed a real-time smart surveillance dashboard using Next.js and React",
      "Integrated Flask video streams and MQTT messaging into the frontend",
      "Worked in a multidisciplinary engineering team on CV-powered systems",
    ],
  },
  {
    title: "Formula SAE Highlander Racing",
    position: "Computer Science Associate",
    date: "Oct 2025–Present",
    image: highlanderRacingLogo,
    imageAlt: "Formula SAE Highlander Racing logo",
    highlights: [
      "Programmed an STM32 microcontroller for CAN bus communication",
      "Improved embedded control performance using state machines and DMA",
    ],
  },
  {
    title: "SWE Beehive",
    position: "Embedded Systems & CV Engineer",
    date: "Apr 2026–Present",
    image: sweLogo,
    imageAlt: "SWE Beehive logo",
    highlights: [
      "Co-developing an IoT desk robot using BlazePose posture detection",
      "Integrating sensors, timers, audio cues, and servo controls across Raspberry Pi and Windows systems",
    ],
  },
] as const;

const ExperiencePopup = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-5">
        {EXPERIENCES.map((experience) => (
          <InfoCard
            key={experience.title}
            title={experience.title}
            position={experience.position}
            date={experience.date}
            image={experience.image}
            imageAlt={experience.imageAlt}
          >
            <ul className="list-disc space-y-1 pl-4">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </InfoCard>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePopup;
