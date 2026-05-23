"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const jobs = [
  {
    period: "03/2024 – Present",
    role: "Director of IT",
    company: "Expenti.com",
    bullets: [
      "Annual technology strategy and departmental OKRs",
      "Led enterprise carve-out: scaled team from 12 to 25 engineers",
    ],
  },
  {
    period: "05/2023 – 03/2024",
    role: "Director of Engineering & Architecture",
    company: "TheWorkshop.com",
    bullets: [
      "Digital transformation and team consolidation (90 engineers)",
      "Post-divestiture carve-out programme",
    ],
  },
  {
    period: "09/2020 – 07/2023",
    role: "Head of IT",
    company: "TheWorkshop.com",
    bullets: [
      "Rebuilt IT function from 20 to 60 professionals",
      "Three consecutive ISO 27001 certifications",
    ],
  },
  {
    period: "11/2018 – 09/2020",
    role: "Head of Infrastructure",
    company: "TheWorkshop.com",
    bullets: [
      "Infrastructure restructuring: virtualisation, storage, security",
      "Vendor and procurement management",
    ],
  },
  {
    period: "10/2015 – 10/2018",
    role: "Monitoring & Corporate Tooling Manager",
    company: "TheWorkshop.com",
    bullets: [
      "Managed Atlassian suite for 2,000+ users",
      "Built monitoring stack: Prometheus, Loki, Grafana, InfluxDB, New Relic",
    ],
  },
  {
    period: "10/2013 – 10/2015",
    role: "DevOps Engineer",
    company: "TheWorkshop.com",
    bullets: [
      "Platform team support across 500+ Java products",
      "Developed configuration management component",
    ],
  },
  {
    period: "04/2012 – 10/2013",
    role: "DevOps & Monitoring Engineer",
    company: "Riplife Technologies",
    bullets: [
      "Rebuilt monitoring infrastructure across 5+ data centres",
      "Initial CI/CD and change management implementation",
    ],
  },
  {
    period: "03/2011 – 04/2012",
    role: "Senior Linux Administrator",
    company: "IGT",
    bullets: [
      "IGT's first European cloud service",
      "Designed Linux infrastructure from scratch",
    ],
  },
  {
    period: "04/2010 – 03/2011",
    role: "Technical Project Manager",
    company: "Stan James",
    bullets: ["Managed streaming solution integration project"],
  },
  {
    period: "09/2006 – 04/2010",
    role: "IT System Administrator / Network Engineer",
    company: "Stan James",
    bullets: ["Managed distributed platform across 3 locations"],
  },
  {
    period: "02/2006 – 09/2006",
    role: "IT Engineer",
    company: "Tellonline",
    bullets: [],
  },
];

type Job = (typeof jobs)[0];

function JobCard({
  job,
  align,
  dx,
  delay,
  inView,
  isActive,
}: {
  job: Job;
  align: "left" | "right";
  dx: number;
  delay: number;
  inView: boolean;
  isActive: boolean;
}) {
  const isRight = align === "right";
  return (
    /* entrance wrapper */
    <motion.div
      initial={{ opacity: 0, x: dx }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {/* scale wrapper — reacts to isActive independently */}
      <motion.div
        animate={{ scale: isActive ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        style={{ transformOrigin: isRight ? "right center" : "left center" }}
        className={isRight ? "text-right" : "text-left"}
      >
        <p className="font-mono text-[0.6875rem] text-accent-hi tracking-[0.04em] mb-1.5">
          {job.period}
        </p>
        <p className="font-display font-semibold text-[1.0625rem] tracking-[-0.015em] text-ink leading-snug mb-0.5">
          {job.role}
        </p>
        <p className="text-[0.875rem] font-medium text-muted mb-3">{job.company}</p>
        {job.bullets.length > 0 && (
          <ul className={`space-y-1.5 flex flex-col ${isRight ? "items-end" : "items-start"}`}>
            {job.bullets.map((b, i) => (
              <li
                key={i}
                className={`flex gap-3 text-[0.9375rem] text-muted leading-relaxed max-w-[52ch]
                  ${isRight ? "flex-row-reverse" : ""}`}
              >
                <span className="text-accent flex-shrink-0">·</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
}

function TimelineItem({
  job,
  index,
  isActive,
  onRef,
}: {
  job: Job;
  index: number;
  isActive: boolean;
  onRef: (el: HTMLDivElement | null) => void;
}) {
  const localRef = useRef<HTMLDivElement>(null);
  const inView   = useInView(localRef, { once: true, margin: "-40px 0px" });
  const isLeft   = index % 2 === 0;

  const setRef = useCallback((el: HTMLDivElement | null) => {
    (localRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    onRef(el);
  }, [onRef]);

  return (
    <div
      ref={setRef}
      className="grid items-start pb-14 last:pb-0"
      style={{ gridTemplateColumns: "1fr 44px 1fr" }}
    >
      {/* LEFT slot */}
      <div className="pr-6 min-w-0">
        {isLeft && (
          <JobCard
            job={job}
            align="right"
            dx={-18}
            delay={index * 0.05}
            inView={inView}
            isActive={isActive}
          />
        )}
      </div>

      {/* CENTER: dot */}
      <div className="relative flex justify-center pt-1.5">
        <motion.div
          animate={
            isActive
              ? { scale: 1, backgroundColor: "#F59E0B", borderColor: "#F59E0B" }
              : { scale: 0.85, backgroundColor: "transparent", borderColor: "#5c5651" }
          }
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="relative z-10 rounded-full border-[1.5px] w-[9px] h-[9px]"
          style={
            isActive
              ? { boxShadow: "0 0 0 5px rgba(245,158,11,0.18)" }
              : { boxShadow: "none" }
          }
        />
      </div>

      {/* RIGHT slot */}
      <div className="pl-6 min-w-0">
        {!isLeft && (
          <JobCard
            job={job}
            align="left"
            dx={18}
            delay={index * 0.05}
            inView={inView}
            isActive={isActive}
          />
        )}
      </div>
    </div>
  );
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-spy: activate the item whose center is closest to 42% from viewport top
  useEffect(() => {
    const onScroll = () => {
      const target = window.innerHeight * 0.42;
      let closest = 0;
      let minDist  = Infinity;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const { top, height } = el.getBoundingClientRect();
        const center = top + height / 2;
        const dist   = Math.abs(center - target);
        if (dist < minDist) { minDist = dist; closest = i; }
      });

      setActiveIndex(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial active on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" className="py-28 md:py-40">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <p className="font-mono text-[0.6875rem] text-accent-hi tracking-[0.12em] uppercase mb-3">
          Career
        </p>
        <h2
          className="font-display font-bold text-ink tracking-[-0.027em] leading-[1.07] mb-3"
          style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
        >
          Professional Journey
        </h2>
        <p className="text-muted text-base max-w-[54ch] mb-16">
          A timeline of career progression and key milestones.
        </p>

        <div className="relative">
          {/* Central vertical gradient line */}
          <div
            className="absolute top-2 bottom-10 w-px pointer-events-none"
            style={{
              left: "calc(50% - 0.5px)",
              background:
                "linear-gradient(to bottom, rgba(245,158,11,0.65) 0%, rgba(245,158,11,0.08) 100%)",
            }}
          />

          {jobs.map((job, i) => (
            <TimelineItem
              key={i}
              job={job}
              index={i}
              isActive={i === activeIndex}
              onRef={(el) => { itemRefs.current[i] = el; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
