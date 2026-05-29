"use client";

import type { ReactNode } from "react";
import { usePopupSection } from "@/components/PopupSectionProvider";

type SiteNavProps = {
  children: ReactNode;
};

const SiteNav = ({ children }: SiteNavProps) => {
  const { openSection } = usePopupSection();

  return (
    <nav
      className={`grid shrink-0 grid-cols-2 place-items-center gap-x-10 gap-y-8 self-center px-10 sm:gap-x-14 sm:gap-y-10 sm:px-16 ${
        openSection ? "relative z-[60]" : ""
      }`}
      aria-label="Site navigation"
    >
      {children}
    </nav>
  );
};

export default SiteNav;
