"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certs = [
  { name: "Lean IT Foundation & Lean IT Kaizen", issuer: "Lean IT Association", year: "2017" },
  { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", year: "2016" },
  { name: "ITIL Foundation", issuer: "AXELOS / PeopleCert", year: "2016" },
  { name: "PRINCE2 Foundation", issuer: "ILX Group / AXELOS", year: "2010" },
];

function CertRow({ cert, index }: { cert: (typeof certs)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-32px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`flex items-baseline justify-between gap-5 py-4
        ${index === 0 ? "border-t border-[var(--border-subtle)]" : ""}
        border-b border-[var(--border-subtle)]`}
    >
      <div>
        <p className="text-[0.9375rem] font-medium text-ink">{cert.name}</p>
        <p className="text-[0.8125rem] text-muted mt-0.5">{cert.issuer}</p>
      </div>
      <span className="font-mono text-[0.6875rem] text-subtle tracking-[0.04em] flex-shrink-0">
        {cert.year}
      </span>
    </motion.div>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-surface">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <p className="font-mono text-[0.6875rem] text-accent tracking-[0.12em] uppercase mb-3">
          Credentials
        </p>
        <h2
          className="font-display font-bold text-ink tracking-[-0.027em] leading-[1.07] mb-12"
          style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
        >
          Professional Credentials
        </h2>

        <div>
          {certs.map((c, i) => (
            <CertRow key={c.name} cert={c} index={i} />
          ))}
        </div>

        <div className="mt-8 p-5 md:p-6 bg-bg border border-[var(--border-subtle)] rounded-lg">
          <p className="font-mono text-[0.625rem] tracking-[0.1em] uppercase text-subtle mb-3">
            Technical Foundations
          </p>
          <p className="font-mono text-[0.875rem] text-muted tracking-[0.02em]">
            MCTS 2008 · RHCSA · RHCT · CCNA Security · CCNA · MCSE 2003
          </p>
        </div>
      </div>
    </section>
  );
}
