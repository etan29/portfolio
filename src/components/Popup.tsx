"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type PopupProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  labelledBy: string;
};

const Popup = ({ open, onClose, children, labelledBy }: PopupProps) => {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const { body, documentElement } = document;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousBodyPadding = body.style.paddingRight;

    document.addEventListener("keydown", onKeyDown);
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    dialogRef.current?.focus({ preventScroll: true });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.paddingRight = previousBodyPadding;
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <button
        type="button"
        className="absolute inset-0 bg-black/45"
        aria-label="Close popup"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className="modal-panel relative z-10 flex h-[min(90vh,42rem)] w-full max-w-[42rem] flex-col overflow-hidden rounded-2xl bg-[#E7EDED] shadow-[0_24px_60px_rgba(0,0,0,0.28)] focus:outline-none"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Popup;
