import Image from "next/image";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import Popup from "@/components/Popup";
import TechIcons from "@/components/projects/TechIcons";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const open = project !== null;

  return (
    <Popup open={open} onClose={onClose} labelledBy="project-modal-title">
      {project ? (
        <article>
          <div className="shadow-cyan mx-auto w-[min(100%,22rem)]">
            <div className="bg-tile relative aspect-square w-full overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  fill
                  className={
                    project.imageContain ? "object-contain p-8" : "object-cover"
                  }
                  sizes="22rem"
                />
              ) : (
                <div className="text-ink/25 flex h-full w-full items-center justify-center">
                  <ImageIcon className="h-14 w-14" strokeWidth={1.25} />
                </div>
              )}
            </div>
          </div>

          <div className="px-6 py-6 sm:px-7">
            <h3
              id="project-modal-title"
              className="text-cyan-shadow text-ink font-serif text-2xl sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="text-muted mt-1.5 font-sans text-base leading-relaxed sm:text-lg">
              {project.description}
            </p>
            <div className="mt-5">
              <TechIcons tech={project.tech} />
            </div>
          </div>

          <footer className="bg-mint flex items-center gap-3 px-6 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="text-ink inline-flex transition-transform duration-200 hover:scale-110"
                >
                  <Github className="h-6 w-6" strokeWidth={1.75} />
                </a>
              ) : null}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live site`}
                  className="text-ink inline-flex transition-transform duration-200 hover:scale-110"
                >
                  <ExternalLink className="h-6 w-6" strokeWidth={1.75} />
                </a>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-ink ml-auto font-sans text-base font-medium tracking-wide transition-transform duration-200 hover:scale-105"
            >
              Close
            </button>
          </footer>
        </article>
      ) : null}
    </Popup>
  );
};

export default ProjectModal;
