"use client";

import Image from "next/image";
import Popup from "@/components/Popup";
import { usePopupSection } from "@/components/PopupSectionProvider";
import ProjectsPopup from "@/components/projects/ProjectsPopup";
import coolRacoon from "@/public/cool_racoon.png";

const ProjectsButton = () => {
  const { isOpen, openPopup, closePopup } = usePopupSection();
  const open = isOpen("projects");

  return (
    <>
      <button
        type="button"
        onClick={() => openPopup("projects")}
        className="racoon-nav-btn focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C059DF]"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="projects-popup"
      >
        <Image src={coolRacoon} alt="" className="racoon-nav-btn__image" />
        <span className="racoon-nav-btn__label">projects</span>
      </button>

      <Popup
        open={open}
        onClose={closePopup}
        title="projects"
        labelledBy="projects-popup-title"
      >
        <div id="projects-popup">
          <ProjectsPopup />
        </div>
      </Popup>
    </>
  );
};

export default ProjectsButton;
