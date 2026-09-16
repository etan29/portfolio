"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/data/site";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#activities", label: "Activities" },
] as const;

const navLinkClass =
  "text-ink inline-block font-serif text-xl tracking-wide transition duration-200 hover:scale-105 hover:[text-shadow:0_4px_4px_rgb(98_169_166_/_0.45)]";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="shadow-cyan relative sticky top-0 z-40 bg-white">
      <div className="px-5 sm:px-8">
        <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between">
          <a
            href="#about"
            onClick={closeMenu}
            className="text-ink inline-block font-serif text-xl tracking-wide transition duration-200 hover:scale-105 hover:[text-shadow:0_4px_4px_rgb(98_169_166_/_0.45)] sm:text-2xl"
          >
            {SITE.name}
          </a>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="text-ink rounded-md p-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="shadow-cyan absolute inset-x-0 top-full z-40 bg-white md:hidden"
        >
          <div className="px-5 sm:px-8">
            <nav
              className="mx-auto flex max-w-6xl flex-col items-end gap-4 py-4"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
