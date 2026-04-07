"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Zap, Users, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Built to Fit",
    description:
      "No cookie-cutter templates. Every system is designed around your actual business workflow.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We ship fast. Working demos in days, not months. You see progress every step of the way.",
  },
  {
    icon: Shield,
    title: "Production-Ready",
    description:
      "We don't hand off half-baked prototypes. Deployed, secured, and ready for your team to use.",
  },
  {
    icon: Users,
    title: "Local Understanding",
    description:
      "We're based in Malaysia and understand how local businesses operate. No timezone gaps.",
  },
];

export default function About() {
  return (
    <section className="relative py-32 section-glow">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Why AP Devotion"
          title="We Get Things Done"
          description="Small team, big output. We focus on building exactly what you need — nothing more, nothing less."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center group hover:border-accent/15 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                <reason.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-base font-bold font-[family-name:var(--font-sora)] mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
