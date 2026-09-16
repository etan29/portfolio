import type { ReactNode } from "react";
import Image from "next/image";
import { FileText, Mail } from "lucide-react";
import githubIcon from "@/public/GitHub.svg";
import linkedinIcon from "@/public/Linkedin.svg";
import { SITE, withBasePath } from "@/data/site";

const SOCIAL_LINKS: {
  href: string;
  label: string;
  icon: ReactNode;
  external: boolean;
}[] = [
  {
    href: SITE.github,
    label: "GitHub",
    icon: (
      <Image
        src={githubIcon}
        alt=""
        className="h-8 w-8"
        width={32}
        height={32}
      />
    ),
    external: true,
  },
  {
    href: SITE.linkedin,
    label: "LinkedIn",
    icon: (
      <Image
        src={linkedinIcon}
        alt=""
        className="h-8 w-8"
        width={32}
        height={32}
      />
    ),
    external: true,
  },
  {
    href: `mailto:${SITE.email}`,
    label: "Email",
    icon: <Mail className="h-8 w-8" strokeWidth={1.75} />,
    external: false,
  },
  {
    href: withBasePath(SITE.resumePath),
    label: "Resume",
    icon: <FileText className="h-8 w-8" strokeWidth={1.75} />,
    external: true,
  },
];

const Hero = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100svh-3.5rem)] items-center justify-center overflow-hidden px-5 pt-10 pb-24 sm:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(98_169_166_/_0.28)_0%,#ffffff_72%)]"
        aria-hidden
      />
      <div className="page-load-reveal relative max-w-3xl text-center">
        <h1 className="text-cyan-shadow text-ink font-serif text-6xl tracking-tight sm:text-7xl md:text-8xl">
          {SITE.name}
        </h1>
        <ul className="mt-5 flex items-center justify-center gap-1">
          {SOCIAL_LINKS.map(({ href, label, icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-ink inline-flex items-center justify-center p-1 transition-transform duration-200 hover:scale-110"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-ink mx-auto mt-1 max-w-2xl font-sans text-lg leading-relaxed sm:text-xl">
          {SITE.intro}
        </p>
      </div>
    </section>
  );
};

export default Hero;
