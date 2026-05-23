"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siAmazonaws, siMicrosoftazure, siMicrosoftoffice } from "simple-icons";
import Image from "next/image";

const SI = "https://cdn.simpleicons.org";
const AMBER = "#f59e0b";

// Unified logo descriptor — either CDN url or inline SVG path from the package
type Tech =
  | { name: string; src: string; path?: never }
  | { name: string; path: string; src?: never };

const technologies: Tech[] = [
  { name: "AWS",           path: siAmazonaws.path },
  { name: "Google Cloud",  src: `${SI}/googlecloud/${AMBER.slice(1)}` },
  { name: "Azure",         path: siMicrosoftazure.path },
  { name: "Microsoft 365", path: siMicrosoftoffice.path },
  { name: "Docker",        src: `${SI}/docker/${AMBER.slice(1)}` },
  { name: "Kubernetes",    src: `${SI}/kubernetes/${AMBER.slice(1)}` },
  { name: "Terraform",     src: `${SI}/terraform/${AMBER.slice(1)}` },
  { name: "GitHub",        src: `${SI}/github/${AMBER.slice(1)}` },
  { name: "Grafana",       src: `${SI}/grafana/${AMBER.slice(1)}` },
  { name: "Prometheus",    src: `${SI}/prometheus/${AMBER.slice(1)}` },
  { name: "InfluxDB",      src: `${SI}/influxdb/${AMBER.slice(1)}` },
  { name: "New Relic",     src: `${SI}/newrelic/${AMBER.slice(1)}` },
  { name: "Atlassian",     src: `${SI}/atlassian/${AMBER.slice(1)}` },
  { name: "Jira",          src: `${SI}/jira/${AMBER.slice(1)}` },
  { name: "Linux",         src: `${SI}/linux/${AMBER.slice(1)}` },
  { name: "Anthropic",     src: `${SI}/anthropic/${AMBER.slice(1)}` },
];

function Logo({ tech }: { tech: Tech }) {
  const [failed, setFailed] = useState(false);

  if (tech.path) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ color: "var(--accent)" }}
        fill="currentColor"
      >
        <path d={tech.path} />
      </svg>
    );
  }

  if (failed) {
    return (
      <span className="font-mono text-[0.5rem] tracking-[0.06em] uppercase text-accent text-center leading-tight px-1">
        {tech.name}
      </span>
    );
  }

  return (
    <Image
      src={tech.src!}
      alt={tech.name}
      width={36}
      height={36}
      onError={() => setFailed(true)}
      className="w-full h-full object-contain"
      unoptimized
    />
  );
}

export function TechStack() {
  const ref          = useRef<HTMLDivElement>(null);
  const inView       = useInView(ref, { once: true, margin: "-60px 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <section id="tech" className="py-16 md:py-20 border-t border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <p className="font-mono text-[0.6875rem] text-accent-hi tracking-[0.12em] uppercase mb-3">
          Tech Stack
        </p>
        <h2
          className="font-display font-bold text-ink tracking-[-0.027em] leading-[1.07] mb-3"
          style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
        >
          Technologies
        </h2>
        <p className="text-muted text-base max-w-[54ch] mb-16">
          Platforms and tools at the core of my work.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-6 gap-y-10"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={shouldReduce ? false : { opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={shouldReduce ? { duration: 0 } : { duration: 0.4, delay: i * 0.045 }}
              className="group flex flex-col items-center gap-3 cursor-default"
            >
              <div className="w-9 h-9 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                <Logo tech={tech} />
              </div>
              <span className="font-mono text-[0.5625rem] tracking-[0.06em] uppercase text-subtle group-hover:text-muted transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
