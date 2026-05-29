"use client";

import Image from "next/image";
import ExperiencePopup from "@/components/experience/ExperiencePopup";
import Popup from "@/components/Popup";
import { usePopupSection } from "@/components/PopupSectionProvider";
import happyRacoon from "@/public/happy_racoon.png";

const ExperienceButton = () => {
  const { isOpen, openPopup, closePopup } = usePopupSection();
  const open = isOpen("experience");

  return (
    <>
      <button
        type="button"
        onClick={() => openPopup("experience")}
        className="racoon-nav-btn focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C059DF]"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="experience-popup"
      >
        <Image src={happyRacoon} alt="" className="racoon-nav-btn__image" />
        <span className="racoon-nav-btn__label">experience</span>
      </button>

      <Popup
        open={open}
        onClose={closePopup}
        title="experience"
        labelledBy="experience-popup-title"
      >
        <div id="experience-popup">
          <ExperiencePopup />
        </div>
      </Popup>
    </>
  );
};

export default ExperienceButton;
