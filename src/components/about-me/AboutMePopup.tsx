"use client";

import Image from "next/image";
import { useState } from "react";
import Popup from "@/components/Popup";
import bobaRacoon from "@/public/boba_racoon.png";

const ABOUT_ME_LINKS = {
  resume: "/resume.pdf",
  linkedin: "https://www.linkedin.com/in/emilytan29",
  github: "https://github.com/etan29",
} as const;

const linkButtonClass =
  "rounded-xl border-2 border-[#C059DF] bg-[#faf2f9] px-5 py-2 font-serif text-lg text-[#C059DF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C059DF] sm:px-6 sm:text-xl";

const AboutMePopup = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center px-8 pt-8 pb-10">
        <div className="relative isolate h-52 w-52 sm:h-60 sm:w-60">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div
              className="h-40 w-40 rounded-full border-2 border-[#C059DF] bg-white sm:h-44 sm:w-44"
              aria-hidden
            />
          </div>
          <div className="absolute inset-0 z-10 flex items-center justify-center pl-3 sm:pl-4">
            <Image
              src={bobaRacoon}
              alt="Raccoon holding boba tea"
              className="h-44 w-44 object-contain sm:h-52 sm:w-52"
              priority
            />
          </div>
        </div>

        <h2 className="mt-2 text-center font-serif text-3xl font-bold tracking-wide text-[#C059DF] sm:text-4xl">
          Emily Tan
        </h2>
        <p className="mt-2 max-w-md text-center font-serif text-lg leading-relaxed text-[#a677b1] sm:text-xl">
          hi! My name is Emily and I am a first year computer science student at
          the University of California, Riverside.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className={linkButtonClass}
          >
            Resume
          </button>
          <a
            href={ABOUT_ME_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass}
          >
            LinkedIn
          </a>
          <a
            href={ABOUT_ME_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass}
          >
            GitHub
          </a>
        </div>
      </div>

      <Popup
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        title="resume"
        labelledBy="resume-popup-title"
        zIndexClass="z-[60]"
      >
        <iframe
          src={ABOUT_ME_LINKS.resume}
          title="Emily Tan Resume"
          className="h-full min-h-[65vh] w-full border-0 bg-white"
        />
      </Popup>
    </>
  );
};

export default AboutMePopup;
