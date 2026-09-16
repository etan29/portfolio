"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { PROJECTS, type Project } from "@/data/projects";

const RevealOnScroll = ({
  children,
  delayMs,
}: {
  children: ReactNode;
  delayMs: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={visible ? "scroll-reveal is-visible" : "scroll-reveal"}
      style={visible ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-14 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <h2 className="text-cyan-shadow text-ink font-serif text-3xl sm:text-4xl">
            Projects
          </h2>
          <p className="text-muted mt-1 hidden font-sans text-xl sm:text-2xl md:block">
            Click to view details!
          </p>
          <p className="text-muted mt-1 font-sans text-xl md:hidden">
            Tap to view details!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={project.id} delayMs={(index % 4) * 160}>
              <ProjectCard project={project} onOpen={setSelected} />
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
