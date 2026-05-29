"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PopupSection = "about" | "experience" | "projects" | "contact";

type PopupSectionContextValue = {
  openSection: PopupSection | null;
  openPopup: (section: PopupSection) => void;
  closePopup: () => void;
  isOpen: (section: PopupSection) => boolean;
};

const PopupSectionContext = createContext<PopupSectionContextValue | null>(
  null,
);

export const PopupSectionProvider = ({ children }: { children: ReactNode }) => {
  const [openSection, setOpenSection] = useState<PopupSection | null>(null);

  const openPopup = useCallback((section: PopupSection) => {
    setOpenSection(section);
  }, []);

  const closePopup = useCallback(() => {
    setOpenSection(null);
  }, []);

  const isOpen = useCallback(
    (section: PopupSection) => openSection === section,
    [openSection],
  );

  const value = useMemo(
    () => ({ openSection, openPopup, closePopup, isOpen }),
    [openSection, openPopup, closePopup, isOpen],
  );

  return (
    <PopupSectionContext.Provider value={value}>
      {children}
    </PopupSectionContext.Provider>
  );
};

export const usePopupSection = () => {
  const context = useContext(PopupSectionContext);
  if (!context) {
    throw new Error("usePopupSection must be used within PopupSectionProvider");
  }
  return context;
};
