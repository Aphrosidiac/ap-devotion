"use client";

import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { MessageSquare, Pencil, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discuss",
    description:
      "We sit down and understand your business — what you need, how you work, and where the pain points are.",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Design",
    description:
      "We map out the solution. Clean UI, smooth UX, architecture that makes sense for your scale.",
  },
  {
    icon: Code,
    number: "03",
    title: "Develop",
    description:
      "We build it. Fast iterations, real demos you can test. No black box — you see progress as it happens.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy",
    description:
      "We launch, train your team, and make sure everything runs. Ongoing support when you need it.",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 section-glow">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          label="How We Work"
          title="From Idea to Production"
          description="A straightforward process built around getting things done, not dragging them out."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <TiltCard
              key={step.number}
              className="p-8 text-center"
              tiltAmount={14}
              perspective={600}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                <step.icon size={24} className="text-accent" />
              </div>
              <span className="text-xs font-mono text-accent/70 mb-2 block tracking-wider">
                {step.number}
              </span>
              <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
