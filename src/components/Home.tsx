import Image from "next/image";
import AboutMeButton from "@/components/about-me/AboutMeButton";
import ContactMeButton from "@/components/contact-me/ContactMeButton";
import ExperienceButton from "@/components/experience/ExperienceButton";
import { PopupSectionProvider } from "@/components/PopupSectionProvider";
import ProjectsButton from "@/components/projects/ProjectsButton";
import SiteNav from "@/components/SiteNav";
import sleepingRacoon from "@/public/sleeping_racoon.png";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <main className="relative flex flex-1 bg-[#B5C7D7]">
        <PopupSectionProvider>
          <SiteNav>
            <div className="page-load-reveal page-load-reveal--delay-0">
              <AboutMeButton />
            </div>
            <div className="page-load-reveal page-load-reveal--delay-1">
              <ExperienceButton />
            </div>
            <div className="page-load-reveal page-load-reveal--delay-2">
              <ProjectsButton />
            </div>
            <div className="page-load-reveal page-load-reveal--delay-3">
              <ContactMeButton />
            </div>
          </SiteNav>
        </PopupSectionProvider>
        <div className="flex flex-1 items-center justify-center"></div>
      </main>
      <div className="h-1 w-full shrink-0 bg-[#C059DF]" aria-hidden />
      <footer className="relative h-[22vh] w-full shrink-0 bg-[#F5CFDF]">
        <Image
          src={sleepingRacoon}
          alt=""
          className="page-load-reveal page-load-reveal--delay-4 absolute bottom-24 left-40 h-auto max-h-[95%] w-[24rem] object-contain object-bottom sm:bottom-28 sm:left-52 sm:w-[29rem]"
          aria-hidden
        />
      </footer>
    </div>
  );
};

export default Home;
