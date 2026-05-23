"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <section id="contact" className="py-28 md:py-36 bg-surface">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-[0.6875rem] text-accent tracking-[0.12em] uppercase mb-3">
            Get in Touch
          </p>
          <h2
            className="font-display font-bold text-ink tracking-[-0.03em] leading-[1.07] mb-4"
            style={{ fontSize: "clamp(2rem, 5.5vw, 3.75rem)" }}
          >
            Let&apos;s Connect
          </h2>
          <p className="text-muted text-base max-w-[48ch] mb-8">
            Available for consultation and collaboration. I typically respond
            within 24 hours.
          </p>

          <a
            href="mailto:mjvillarejo@gmail.com"
            className="group inline-block font-display font-semibold text-ink tracking-[-0.02em] mb-10 relative"
            style={{ fontSize: "clamp(1.125rem, 3vw, 1.75rem)" }}
          >
            mjvillarejo@gmail.com
            <span className="absolute bottom-[-2px] left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-[350ms]" />
          </a>

          <div className="flex gap-4 flex-wrap">
            <Button asChild>
              <a href="mailto:mjvillarejo@gmail.com">Email Directly</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://linkedin.com/in/mvillarejo"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
