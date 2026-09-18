import Image from "next/image";
import { ImageIcon } from "lucide-react";
import Popup from "@/components/Popup";
import TechIcons from "@/components/projects/TechIcons";
import type { Project } from "@/data/projects";
import githubIcon from "@/public/GitHub.svg";
import linkIcon from "@/public/link.svg";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const open = project !== null;

  return (
    <Popup open={open} onClose={onClose} labelledBy="project-modal-title">
      {project ? (
        <article className="flex h-full min-h-0 flex-col">
          <div className="relative aspect-[868/550] w-full shrink-0 overflow-hidden">
            {project.popupImage || project.image ? (
              <Image
                src={project.popupImage ?? project.image!}
                alt={project.imageAlt ?? project.title}
                fill
                className="object-cover"
                sizes="42rem"
              />
            ) : (
              <div className="bg-tile text-ink/25 flex h-full w-full items-center justify-center">
                <ImageIcon className="h-14 w-14" strokeWidth={1.25} />
              </div>
            )}
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-5 pt-4">
              <h3
                id="project-modal-title"
                className="text-cyan-shadow text-ink font-serif text-xl sm:text-2xl"
              >
                {project.title}
              </h3>
              <p className="text-ink mt-1.5 font-sans text-base leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto pt-3 pb-3">
                <TechIcons tech={project.tech} />
              </div>
            </div>

            <footer className="bg-mint flex shrink-0 items-center gap-3 px-5 py-3.5">
              <div className="flex items-center gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="text-ink inline-flex transition-transform duration-200 hover:scale-110"
                  >
                    <Image
                      src={githubIcon}
                      alt=""
                      className="h-8 w-8 object-contain"
                      width={32}
                      height={32}
                    />
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
                    <Image
                      src={linkIcon}
                      alt=""
                      className="h-6 w-6 object-contain"
                      width={24}
                      height={24}
                    />
                  </a>
                ) : null}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="text-ink ml-auto font-sans text-xl tracking-wide transition-transform duration-200 hover:scale-105 sm:text-2xl"
              >
                Close
              </button>
            </footer>
          </div>
        </article>
      ) : null}
    </Popup>
  );
};

export default ProjectModal;
