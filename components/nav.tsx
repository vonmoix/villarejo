"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#experience",     label: "Experience"  },
  { href: "#education",      label: "Education"   },
  { href: "#skills",         label: "Skills"      },
  { href: "#tech",           label: "Tech Stack"  },
  { href: "#certifications", label: "Credentials" },
  { href: "#about",          label: "About"       },
];

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen]   = useState(false);
  const burgerRef         = useRef<HTMLButtonElement>(null);
  const overlayRef        = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Focus management
  useEffect(() => {
    if (open) {
      overlayRef.current?.focus();
    } else {
      burgerRef.current?.focus();
    }
  }, [open]);

  // Escape key closes menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[500] py-4 transition-all duration-300",
        stuck && "bg-bg/88 backdrop-blur-[14px]"
      )}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#" className="font-display font-bold tracking-[-0.02em] text-[1.1875rem] text-ink">
          M<span className="text-accent">V</span>
        </a>

        {/* desktop */}
        <ul className="hidden md:flex items-center gap-4 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[0.8125rem] font-medium text-muted hover:text-ink transition-colors tracking-[0.01em]"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-[0.8125rem] font-medium text-accent border border-accent/40 px-4 py-1.5
                         rounded-[3px] hover:bg-accent/10 transition-colors"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* burger */}
        <button
          ref={burgerRef}
          className="flex md:hidden flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer z-[510]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={cn("block w-5 h-[1.5px] bg-muted transition-transform duration-200", open && "translate-y-[6.5px] rotate-45")} />
          <span className={cn("block w-5 h-[1.5px] bg-muted transition-opacity duration-200",  open && "opacity-0")} />
          <span className={cn("block w-5 h-[1.5px] bg-muted transition-transform duration-200", open && "-translate-y-[6.5px] -rotate-45")} />
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            tabIndex={-1}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-bg z-[505] flex flex-col items-center justify-center gap-10 outline-none"
          >
            {[...links, { href: "#contact", label: "Get in touch" }].map(({ href, label }) => (
              <a
                key={`${href}-${label}`}
                href={href}
                onClick={close}
                className="text-2xl font-medium text-muted hover:text-ink transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
