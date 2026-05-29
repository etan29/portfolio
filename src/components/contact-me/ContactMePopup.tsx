import Image from "next/image";
import coffeeRacoon from "@/public/coffee_racoon.png";

const CONTACT_EMAIL = "emilytan2992@gmail.com";

const linkButtonClass =
  "rounded-xl border-2 border-[#C059DF] bg-[#faf2f9] px-5 py-2 font-serif text-lg text-[#C059DF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C059DF] sm:px-6 sm:text-xl";

const ContactMePopup = () => {
  return (
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
            src={coffeeRacoon}
            alt="Raccoon holding coffee"
            className="h-44 w-44 object-contain sm:h-52 sm:w-52"
            priority
          />
        </div>
      </div>

      <h2 className="mt-2 text-center font-serif text-3xl font-bold tracking-wide text-[#C059DF] sm:text-4xl">
        Emily Tan
      </h2>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <a href={`mailto:${CONTACT_EMAIL}`} className={linkButtonClass}>
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  );
};

export default ContactMePopup;
