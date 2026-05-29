"use client";

import Image from "next/image";
import { useEffect } from "react";
import AboutMePopup from "@/components/about-me/AboutMePopup";
import Popup from "@/components/Popup";
import { usePopupSection } from "@/components/PopupSectionProvider";
import bobaRacoon from "@/public/boba_racoon.png";

const AboutMeButton = () => {
  const { isOpen, openPopup, closePopup } = usePopupSection();
  const open = isOpen("about");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const timer = window.setTimeout(() => openPopup("about"), 550);
    return () => window.clearTimeout(timer);
  }, [openPopup]);

  return (
    <>
      <button
        type="button"
        onClick={() => openPopup("about")}
        className="racoon-nav-btn focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C059DF]"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="about-me-popup"
      >
        <Image
          src={bobaRacoon}
          alt=""
          className="racoon-nav-btn__image"
          priority
        />
        <span className="racoon-nav-btn__label">about me</span>
      </button>

      <Popup
        open={open}
        onClose={closePopup}
        title="about me"
        labelledBy="about-me-popup-title"
      >
        <div id="about-me-popup" className="h-full">
          <AboutMePopup />
        </div>
      </Popup>
    </>
  );
};

export default AboutMeButton;
