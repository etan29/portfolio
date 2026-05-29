"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type PopupProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  labelledBy?: string;
  zIndexClass?: string;
};

const trafficLightClass =
  "h-4 w-4 shrink-0 rounded-full border border-black/[0.06] sm:h-5 sm:w-5";

const modalCloseStack: Array<() => void> = [];

const Popup = ({
  open,
  onClose,
  children,
  title,
  labelledBy,
  zIndexClass = "z-50",
}: PopupProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    modalCloseStack.push(onClose);

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        modalCloseStack[modalCloseStack.length - 1] === onClose
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      const index = modalCloseStack.lastIndexOf(onClose);
      if (index !== -1) modalCloseStack.splice(index, 1);
      document.removeEventListener("keydown", onKeyDown);
      if (modalCloseStack.length === 0) {
        document.body.style.overflow = "";
      }
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 ${zIndexClass} flex items-center justify-end p-4 pr-12 pl-8 sm:pr-20 sm:pl-16`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-transparent"
        aria-label="Close popup"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="popup-window relative z-10 flex h-[78vh] max-h-[calc(100vh-2rem)] w-[58vw] max-w-none flex-col overflow-hidden rounded-[20px] border-2 border-[#C059DF] shadow-[0_12px_40px_rgba(0,0,0,0.18),0_6px_20px_rgba(192,89,223,0.25),0_2px_8px_rgba(0,0,0,0.08)]"
      >
        <header className="relative flex shrink-0 items-center justify-between gap-4 border-b-2 border-[#C059DF] px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className={`${trafficLightClass} bg-[#ff9b9b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C059DF]`}
              aria-label="Close"
            />
            <span className={`${trafficLightClass} bg-[#f5d88a]`} aria-hidden />
            <span className={`${trafficLightClass} bg-[#8ee4b4]`} aria-hidden />
          </div>
          {title ? (
            <span
              id={labelledBy}
              className="max-w-[70%] text-right text-2xl font-medium tracking-wide text-[#c059df] sm:text-3xl"
            >
              {title}.
            </span>
          ) : null}
        </header>
        <div className="relative min-h-0 flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Popup;
