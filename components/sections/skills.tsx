"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const groups = [
  {
    title: "Strategy & Programme Delivery",
    tags: [
      "IT Strategy & Roadmap Planning",
      "M&A & Carve-out Management",
      "Complex Programme Delivery",
      "Distributed Team Leadership",
      "Europe · APAC · UK",
    ],
  },
  {
    title: "Enterprise Architecture & Integration",
    tags: [
      "Enterprise Architecture",
      "ERP / HRIS / CRM Integration",
      "Digital Transformation",
      "GCP · AWS · Azure",
      "Microsoft 365",
      "Infrastructure Modernisation",
    ],
  },
  {
    title: "Compliance & Governance",
    tags: [
      "ISO 27001 (5+ audit cycles)",
      "GDPR & Data Protection",
      "IT Governance",
      "Risk Management",
      "Change Management",
      "Business Continuity & DR",
      "Vendor Management",
    ],
  },
  {
    title: "Leadership & Operations",
    tags: [
      "Team Leadership & Coaching",
      "Stakeholder Management",
      "Budget & P&L",
      "ITSM (Jira SM · Freshdesk)",
      "Agile · DevOps · ITIL",
      "SLA & KPI Management",
    ],
  },
  {
    title: "Emerging Technologies",
    tags: [
      "Agentic AI & Workflow Automation",
      "Generative AI",
      "AI-Powered Internal Products",
      "Claude Code",
      "AIOps",
      "Human-Centred Design",
    ],
  },
];

function SkillGroup({ group, index }: { group: (typeof groups)[0]; index: number }) {
  const ref          = useRef<HTMLDivElement>(null);
  const inView       = useInView(ref, { once: true, margin: "-40px 0px" });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? false : { opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={shouldReduce ? { duration: 0 } : { duration: 0.5, delay: index * 0.07 }}
    >
      <p className="font-display font-semibold text-[0.9375rem] tracking-[-0.01em] text-ink pb-3 mb-4 border-b border-[var(--border-subtle)]">
        {group.title}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.8125rem] text-muted bg-surface2 border border-[var(--border-subtle)]
                       px-3 py-1 rounded-[2px] hover:text-ink hover:border-subtle/60 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        <p className="font-mono text-[0.6875rem] text-accent-hi tracking-[0.12em] uppercase mb-3">
          Competencies
        </p>
        <h2
          className="font-display font-bold text-ink tracking-[-0.027em] leading-[1.07] mb-3"
          style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
        >
          Core Competencies
        </h2>
        <p className="text-muted text-base max-w-[54ch] mb-16">
          The domains where I create the most impact.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <SkillGroup key={g.title} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
