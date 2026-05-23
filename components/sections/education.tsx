"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const degrees = [
  {
    period: "2024 – 2025",
    degree: "MBA",
    school: "Imperial College London",
    department: "Imperial Business School",
    location: "London, United Kingdom",
    distinction: "with Distinction",
  },
  {
    period: "2001 – 2005",
    degree: "BSc (Hons) Computer Systems Engineering",
    school: "Universidad de Málaga",
    department: null,
    location: "Málaga, Spain",
    distinction: null,
  },
];

function EduEntry({ edu, index }: { edu: (typeof degrees)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`py-10 ${index === 0 ? "border-t border-[var(--border-subtle)]" : ""} border-b border-[var(--border-subtle)]`}
    >
      <p className="font-mono text-[0.6875rem] text-accent-hi tracking-[0.04em] mb-4">
        {edu.period}
      </p>
      <p className="font-display font-bold text-[1.375rem] tracking-[-0.02em] text-ink leading-snug mb-2">
        {edu.degree}
      </p>
      <p className="text-[0.9375rem] text-muted leading-relaxed">
        {edu.school}
        {edu.department && (
          <span className="text-subtle"> · {edu.department}</span>
        )}
      </p>
      <p className="text-[0.8125rem] text-subtle mt-1">{edu.location}</p>
      {edu.distinction && (
        <span className="inline-block mt-5 font-mono text-[0.625rem] tracking-[0.1em] uppercase text-accent border border-accent/32 px-2 py-0.5 rounded-[2px]">
          {edu.distinction}
        </span>
      )}
    </motion.div>
  );
}

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <p className="font-mono text-[0.6875rem] text-accent-hi tracking-[0.12em] uppercase mb-3">
          Education
        </p>
        <h2
          className="font-display font-bold text-ink tracking-[-0.027em] leading-[1.07] mb-10"
          style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
        >
          Academic Background
        </h2>
        <div className="max-w-[700px]">
          {degrees.map((edu, i) => (
            <EduEntry key={edu.degree} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
