import InfoCard from "@/components/InfoCard";
import dasPreview from "@/public/projects_images/DAS.png";
import deepminePreview from "@/public/projects_images/Glitch@ucla_google_deepmine.png";
import makathonPreview from "@/public/projects_images/makathon.png";
import registrationPreview from "@/public/projects_images/Registration.png";

const PROJECTS = [
  {
    title: "UCR Registration Extension",
    tech: "Next.js • TypeScript • Chrome Extensions API",
    description:
      "Built a Chrome extension used by 50+ students that combines course registration data, professor ratings, and difficulty metrics into a unified UCR registration experience. Designed SPA-aware DOM injection and persistent caching systems.",
    image: registrationPreview,
    imageAlt: "UCR Registration Extension preview",
  },
  {
    title: "Pill-E — BioEngineering Makeathon",
    tech: "Embedded Systems • IoT • Bluetooth",
    description:
      "Developed the embedded control system for a smart pill dispenser, including dispensing logic, device state management, and bluetooth integration. Tested and calibrated hardware for reliable real-time operation.",
    image: makathonPreview,
    imageAlt: "Pill-E smart pill dispenser preview",
  },
  {
    title: "DevTunes — GLITCH@UCLA Google DeepMind Hackathon",
    tech: "AI • Workflow Design • Developer Tools",
    description:
      "Created an AI-powered system that generates adaptive soundtracks from source code analysis. Contributed to modular workflow architecture and technical documentation.",
    image: deepminePreview,
    imageAlt: "DevTunes AI soundtrack generator preview",
  },
  {
    title: "ACM DAS Walmart Sales Forecasting",
    tech: "Python • pandas • XGBoost • Time Series",
    description:
      "Built and evaluated forecasting models including ARIMA, SARIMAX, and XGBoost on retail sales data. Engineered seasonal and holiday-based features to improve predictive performance and analyze forecasting tradeoffs.",
    image: dasPreview,
    imageAlt: "Walmart Sales Forecasting preview",
  },
] as const;

const ProjectsPopup = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project) => (
          <InfoCard
            key={project.title}
            title={project.title}
            position={project.tech}
            date=""
            image={project.image}
            imageAlt={project.imageAlt}
          >
            <p>{project.description}</p>
          </InfoCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPopup;
