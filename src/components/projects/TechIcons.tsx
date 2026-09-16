import type { SimpleIcon } from "simple-icons";
import {
  siChromewebstore,
  siCss,
  siEslint,
  siFigma,
  siFlask,
  siHtml5,
  siJavascript,
  siMqtt,
  siNextdotjs,
  siPandas,
  siPwa,
  siPython,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

type TechIconsProps = {
  tech: string[];
};

const TECH_ICONS: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Tailwind CSS": siTailwindcss,
  Figma: siFigma,
  ESLint: siEslint,
  "Chrome Extensions": siChromewebstore,
  "Service Workers": siPwa,
  HTML: siHtml5,
  CSS: siCss,
  Flask: siFlask,
  MQTT: siMqtt,
  Python: siPython,
  pandas: siPandas,
};

const BrandIcon = ({ icon, label }: { icon: SimpleIcon; label: string }) => {
  return (
    <li title={label}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        aria-label={label}
        className="text-ink h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{label}</title>
        <path fill="currentColor" d={icon.path} />
      </svg>
    </li>
  );
};

const XgboostIcon = () => {
  return (
    <li title="XGBoost">
      <svg
        role="img"
        viewBox="0 0 24 24"
        aria-label="XGBoost"
        className="text-ink h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>XGBoost</title>
        <path
          fill="currentColor"
          d="M6.2 7.2 10.1 12 6.2 16.8h2.4L12 13.2l3.4 3.6h2.4L13.9 12l3.9-4.8h-2.4L12 10.8 8.6 7.2z"
        />
      </svg>
    </li>
  );
};

const TechIcons = ({ tech }: TechIconsProps) => {
  if (tech.length === 0) return null;

  return (
    <ul className="flex flex-wrap items-center gap-2.5">
      {tech.map((item) => {
        if (item === "XGBoost") {
          return <XgboostIcon key={item} />;
        }

        const icon = TECH_ICONS[item];
        if (!icon) return null;

        return <BrandIcon key={item} icon={icon} label={item} />;
      })}
    </ul>
  );
};

export default TechIcons;
