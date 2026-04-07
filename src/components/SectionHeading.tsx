"use client";

import { useRef, useEffect, useState } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center mb-16 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <span className="inline-block px-5 py-2 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase text-accent glass-accent mb-5">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-text-secondary max-w-2xl mx-auto leading-relaxed text-[15px]">
          {description}
        </p>
      )}
    </div>
  );
}
