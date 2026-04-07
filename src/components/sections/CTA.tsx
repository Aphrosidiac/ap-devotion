"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-sora)] tracking-tight leading-tight">
            Ready to Build
            <br />
            <span className="gradient-text glow-text">Something That Works?</span>
          </h2>
          <p className="mt-8 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Tell us about your business and what you need. We&apos;ll figure out the
            best way to make it happen.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-background font-bold text-sm hover:bg-accent-dark transition-all duration-300 glow"
            >
              Start a Project
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="https://wa.me/60139078719"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl glass glass-hover font-semibold text-sm text-text-secondary hover:text-text-primary transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
