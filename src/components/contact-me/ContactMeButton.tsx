"use client";

import Image from "next/image";
import ContactMePopup from "@/components/contact-me/ContactMePopup";
import Popup from "@/components/Popup";
import { usePopupSection } from "@/components/PopupSectionProvider";
import coffeeRacoon from "@/public/coffee_racoon.png";

const ContactMeButton = () => {
  const { isOpen, openPopup, closePopup } = usePopupSection();
  const open = isOpen("contact");

  return (
    <>
      <button
        type="button"
        onClick={() => openPopup("contact")}
        className="racoon-nav-btn focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C059DF]"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="contact-me-popup"
      >
        <Image src={coffeeRacoon} alt="" className="racoon-nav-btn__image" />
        <span className="racoon-nav-btn__label">contact me</span>
      </button>

      <Popup
        open={open}
        onClose={closePopup}
        title="contact me"
        labelledBy="contact-me-popup-title"
      >
        <div id="contact-me-popup" className="h-full">
          <ContactMePopup />
        </div>
      </Popup>
    </>
  );
};

export default ContactMeButton;
