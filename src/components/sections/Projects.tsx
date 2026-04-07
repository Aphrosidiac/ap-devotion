"use client";

import { useRef, useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const featuredProjects = [
  {
    title: "Dream Garage",
    category: "Workshop Management System",
    description:
      "Complete car workshop management system with document generation, stock tracking, customer management, and real-time dashboard analytics. Built for a Malaysian automotive workshop to replace manual spreadsheet workflows.",
    tech: ["Vue 3", "Express", "PostgreSQL", "Chart.js"],
  },
  {
    title: "Shuda Logistics",
    category: "Distribution Management",
    description:
      "Distribution and logistics management platform handling delivery scheduling, route management, and real-time tracking for a Malaysian logistics company.",
    tech: ["Vue 3", "Express", "PostgreSQL"],
  },
];

const otherProjects = [
  {
    title: "SisoPrint",
    category: "Signage & Printing ERP",
    description:
      "Full internal system for a printing company — orders, production kanban, quotations, invoicing, inventory, and a customer-facing website.",
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    title: "CetakNow",
    category: "Printing ERP System",
    description:
      "Enterprise resource planning system for printing operations with WhatsApp integration, production tracking, and automated invoicing.",
    tech: ["Vue 3", "Express", "PostgreSQL"],
  },
  {
    title: "ServerDashConf",
    category: "Server Management Dashboard",
    description:
      "SSH-based server deployment dashboard with database browser, analytics, and multi-server management capabilities.",
    tech: ["Vue 3", "Node.js", "SSH2"],
  },
];

function BrowserMockup({ accent }: { accent: string }) {
  return (
    <div className="w-[88%] mx-auto rounded-xl border border-white/[0.1] bg-[#080e1e] overflow-hidden shadow-2xl shadow-black/50">
      <div className="h-8 bg-[#0c1428] border-b border-white/[0.08] flex items-center px-3 gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 mx-6">
          <div className="h-4 rounded-md bg-white/[0.05] border border-white/[0.08] max-w-[200px] mx-auto" />
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex gap-3 mb-4">
          <div className={`w-20 h-3 rounded-full ${accent}`} />
          <div className="w-14 h-3 rounded-full bg-white/[0.08]" />
          <div className="w-16 h-3 rounded-full bg-white/[0.08]" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-16 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
          <div className="h-16 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
          <div className="h-16 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
        </div>
        <div className="h-20 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
      </div>
    </div>
  );
}

function FeaturedCard({
  project,
  delay,
  accentColor,
}: {
  project: (typeof featuredProjects)[0];
  delay: number;
  accentColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl overflow-hidden h-full transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="relative py-8 bg-gradient-to-b from-accent/[0.03] to-transparent">
        <BrowserMockup accent={accentColor} />
      </div>
      <div className="p-8 pt-4">
        <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.15em]">
          {project.category}
        </span>
        <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mt-2 mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-text-muted bg-white/[0.05] border border-white/[0.08]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 section-glow">
      <div className="absolute inset-0 bg-glow opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Our Work"
          title="Real Projects, Real Impact"
          description="Systems we've built for Malaysian businesses. Each one solves a real problem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project, i) => (
            <FeaturedCard
              key={project.title}
              project={project}
              delay={i * 150}
              accentColor={i === 0 ? "bg-accent/40" : "bg-purple-500/40"}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <GlassCard key={project.title} className="p-7">
              <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.15em]">
                {project.category}
              </span>
              <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mt-2 mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-text-muted bg-white/[0.05] border border-white/[0.08]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
