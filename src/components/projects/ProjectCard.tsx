import Image from "next/image";
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
      className="shadow-cyan group focus-visible:outline-ink relative aspect-square w-full overflow-hidden rounded-2xl bg-black text-left text-white transition-transform duration-200 hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      ) : (
        <span className="bg-tile absolute inset-0" />
      )}

      <span className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/60 group-focus-visible:bg-black/60">
        <span className="absolute inset-x-3 top-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:inset-x-4 sm:top-4">
          <span className="block font-serif text-base leading-tight sm:text-xl md:text-2xl">
            {project.title}
          </span>
          <span className="mt-0.5 block font-sans text-xs text-white/80 sm:mt-1 sm:text-sm md:text-base">
            {project.category}
          </span>
        </span>

        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Plus className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
        </span>
      </span>
    </button>
  );
};

export default ProjectCard;
