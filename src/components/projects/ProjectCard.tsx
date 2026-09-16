import { Plus } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`${project.title}: view details`}
      className="shadow-cyan group focus-visible:outline-ink relative aspect-square w-full rounded-2xl bg-black text-left text-white transition-transform duration-200 hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span className="relative block h-full w-full overflow-hidden rounded-2xl">
        <span className="absolute inset-x-2 top-2 transition-opacity duration-200 sm:inset-x-4 sm:top-4 md:group-hover:opacity-0 md:group-focus-visible:opacity-0">
          <span className="block font-serif text-base leading-tight sm:text-xl md:text-2xl">
            {project.title}
          </span>
          <span className="mt-0.5 block font-sans text-xs text-white/70 sm:mt-1 sm:text-sm md:text-base">
            {project.category}
          </span>
        </span>

        <span className="absolute inset-0 flex items-center justify-center text-white/80 transition-opacity duration-200 md:group-hover:opacity-0 md:group-focus-visible:opacity-0">
          <Plus className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
        </span>

        <span className="absolute inset-0 hidden flex-col justify-end bg-neutral-600/95 p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:flex">
          <span className="font-serif text-2xl leading-tight">
            {project.title}
          </span>
          <span className="mt-2 font-sans text-base leading-relaxed text-white/90">
            {project.description}
          </span>
        </span>
      </span>
    </button>
  );
};

export default ProjectCard;
