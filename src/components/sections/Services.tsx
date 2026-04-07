"use client";

import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import {
  Monitor,
  Server,
  Database,
  Globe,
  Layout,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Custom Systems",
    description:
      "Internal tools built around how your business actually works. Inventory, invoicing, production tracking, CRM — all in one place.",
    features: [
      "ERP & Management Systems",
      "Inventory & Stock Control",
      "Invoicing & Documents",
      "Dashboard & Analytics",
      "Role-based Access",
    ],
  },
  {
    icon: Globe,
    title: "Websites & Web Apps",
    description:
      "Fast, modern websites that look professional and convert visitors into customers. From landing pages to full web applications.",
    features: [
      "Company Websites",
      "Landing Pages",
      "Web Applications",
      "E-commerce",
      "Mobile-Responsive Design",
    ],
  },
];

const techStack = [
  { icon: Monitor, label: "React / Next.js" },
  { icon: Layout, label: "Vue.js" },
  { icon: Server, label: "Node.js / Express" },
  { icon: Database, label: "PostgreSQL / MySQL" },
  { icon: Globe, label: "Laravel" },
  { icon: Smartphone, label: "Mobile-First" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 section-glow">
      <div className="absolute inset-0 bg-glow opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          label="What We Do"
          title="Solutions Built for Real Businesses"
          description="We don't do templates. Every system is designed around your workflow, your team, and your goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <TiltCard key={service.title} className="p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-7">
                <service.icon size={26} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-sora)] mb-4">
                {service.title}
              </h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[14px] text-text-secondary"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>

        {/* Tech stack strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {techStack.map((tech) => (
            <TiltCard
              key={tech.label}
              className="px-4 py-5 flex flex-col items-center gap-3 text-center"
              tiltAmount={16}
              perspective={500}
            >
              <tech.icon size={22} className="text-accent" />
              <span className="text-xs text-text-muted font-medium">
                {tech.label}
              </span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
