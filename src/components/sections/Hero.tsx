"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Database, Code2, BellRing, TrendingUp } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const float1Ref = useRef<HTMLDivElement>(null);
  const float2Ref = useRef<HTMLDivElement>(null);
  const float3Ref = useRef<HTMLDivElement>(null);
  const float4Ref = useRef<HTMLDivElement>(null);
  const float5Ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      // Normalized -0.5 to 0.5
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };
    };

    const tick = () => {
      const { x, y } = mouseRef.current;

      // Dashboard: subtle opposite movement (depth = slow, opposite)
      if (dashboardRef.current) {
        dashboardRef.current.style.transform = `translate(${-x * 18}px, ${-y * 12}px)`;
      }
      // Float 1 — notification (medium depth, forward)
      if (float1Ref.current) {
        float1Ref.current.style.transform = `translate(${x * 32}px, ${y * 20}px)`;
      }
      // Float 2 — chart widget (faster)
      if (float2Ref.current) {
        float2Ref.current.style.transform = `translate(${x * 48}px, ${y * 36}px)`;
      }
      // Float 3 — code bracket (slow, opposite)
      if (float3Ref.current) {
        float3Ref.current.style.transform = `translate(${-x * 26}px, ${-y * 18}px)`;
      }
      // Float 4 — database icon (medium forward)
      if (float4Ref.current) {
        float4Ref.current.style.transform = `translate(${x * 22}px, ${y * 30}px)`;
      }
      // Float 5 — uptime metric (fastest, forward)
      if (float5Ref.current) {
        float5Ref.current.style.transform = `translate(${x * 56}px, ${y * 40}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-glow pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[20%] w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[150px] pointer-events-none" />

      {/* ── MAIN CONTENT GRID ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: TEXT ── */}
        <div className="flex flex-col items-start">

          {/* Badge */}
          <div className="hero-animate-d1 mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-accent glass-accent">
              <span className="hero-pulse-dot w-2 h-2 rounded-full bg-accent" />
              Custom Systems &amp; Web Development
            </span>
          </div>

          {/* Headline — 3 lines, staggered */}
          <h1 className="font-[family-name:var(--font-sora)] font-bold tracking-tight leading-[1.08] text-5xl sm:text-6xl lg:text-7xl">
            <span className="hero-slide-d1 block text-text-primary">
              We Build Systems
            </span>
            <span className="hero-slide-d2 block gradient-text">
              That Run Your
            </span>
            <span className="hero-slide-d3 block gradient-text">
              Business
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-animate-d3 mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
            From internal ERPs to customer-facing websites, we craft tailored
            digital solutions for Malaysian businesses that need to move fast
            and scale smart.
          </p>

          {/* CTAs */}
          <div className="hero-animate-d4 mt-10 flex flex-col sm:flex-row items-start gap-4">
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
            <Link
              href="/#projects"
              className="flex items-center gap-2 px-8 py-4 rounded-xl glass font-semibold text-sm text-text-secondary hover:text-text-primary transition-all duration-300"
            >
              See Our Work
            </Link>
          </div>
        </div>

        {/* ── RIGHT: DASHBOARD MOCKUP ── */}
        <div className="relative flex items-center justify-center min-h-[420px]">

          {/* Dashboard card */}
          <div
            ref={dashboardRef}
            className="hero-dashboard-enter relative w-full max-w-[420px] glass rounded-2xl overflow-hidden will-change-transform hero-float"
            style={{ transformOrigin: "center center" }}
          >
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <div className="flex gap-1 ml-4">
                {["Overview", "Analytics", "Reports"].map((tab, i) => (
                  <span
                    key={tab}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      i === 0
                        ? "bg-accent/20 text-accent border border-accent/30"
                        : "text-text-muted hover:text-text-secondary"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>

            {/* Dashboard body */}
            <div className="p-5 space-y-4">

              {/* Metric row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Revenue", value: "RM 48.2k", delta: "+12%" },
                  { label: "Orders", value: "1,847", delta: "+8%" },
                  { label: "Users", value: "9,320", delta: "+23%" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{m.label}</p>
                    <p className="text-sm font-bold text-text-primary font-[family-name:var(--font-sora)]">{m.value}</p>
                    <p className="text-[10px] text-green-400 mt-0.5">{m.delta}</p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-[10px] text-text-muted uppercase tracking-wider mb-3">Monthly Revenue</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 65, 48, 72, 55, 88, 61, 95, 70, 82, 58, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm hero-bar-enter" style={{
                      height: `${h}%`,
                      background: i === 11
                        ? "linear-gradient(180deg, #00d4ff, #0099cc)"
                        : i >= 9
                        ? "rgba(0,212,255,0.45)"
                        : "rgba(255,255,255,0.12)",
                      animationDelay: `${0.8 + i * 0.04}s`,
                    }} />
                  ))}
                </div>
              </div>

              {/* Data rows */}
              <div className="space-y-2">
                {[
                  { name: "E-commerce Platform", status: "live", pct: 94 },
                  { name: "ERP Integration", status: "build", pct: 67 },
                  { name: "Customer Portal", status: "live", pct: 88 },
                ].map((row) => (
                  <div key={row.name} className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: row.status === "live" ? "#4ade80" : "#facc15", boxShadow: `0 0 6px ${row.status === "live" ? "#4ade80" : "#facc15"}` }}
                    />
                    <span className="text-xs text-text-secondary flex-1 truncate">{row.name}</span>
                    <div className="w-20 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${row.pct}%`, background: "linear-gradient(90deg, #00d4ff, #0099cc)" }}
                      />
                    </div>
                    <span className="text-[10px] text-text-muted w-8 text-right">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FLOATING FRAGMENTS ── */}

          {/* 1 — Notification card (top-left of dashboard area) */}
          <div
            ref={float1Ref}
            className="absolute -top-4 -left-2 md:-left-10 hero-float-enter-1 will-change-transform"
            style={{ animationDelay: "1s" }}
          >
            <div className="glass rounded-xl px-3 py-2.5 flex items-center gap-2.5 hero-bob-1 shadow-lg" style={{ minWidth: 170 }}>
              <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,212,255,0.15)", border: "1px solid rgba(0,212,255,0.3)" }}>
                <BellRing size={13} className="text-accent" />
              </span>
              <div>
                <p className="text-[11px] font-semibold text-text-primary leading-tight">New order received</p>
                <p className="text-[10px] text-text-muted">just now</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-accent hero-pulse-dot flex-shrink-0" />
            </div>
          </div>

          {/* 2 — Mini chart widget (top-right) */}
          <div
            ref={float2Ref}
            className="absolute -top-6 right-0 md:-right-8 hero-float-enter-2 will-change-transform"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="glass rounded-xl p-3 hero-bob-2">
              <p className="text-[10px] text-text-muted mb-2">Weekly</p>
              <div className="flex items-end gap-1 h-8">
                {[50, 80, 60, 100, 70].map((h, i) => (
                  <div key={i} className="w-3 rounded-sm" style={{
                    height: `${h}%`,
                    background: i === 3 ? "#00d4ff" : "rgba(0,212,255,0.3)",
                  }} />
                ))}
              </div>
            </div>
          </div>

          {/* 3 — Code bracket (bottom-left) */}
          <div
            ref={float3Ref}
            className="absolute -bottom-4 -left-4 md:-left-12 hero-float-enter-3 will-change-transform"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="glass rounded-full w-12 h-12 flex items-center justify-center hero-bob-3" style={{ border: "1px solid rgba(0,212,255,0.2)" }}>
              <Code2 size={18} className="text-accent" />
            </div>
          </div>

          {/* 4 — Database icon (bottom-right) */}
          <div
            ref={float4Ref}
            className="absolute bottom-8 -right-2 md:-right-10 hero-float-enter-4 will-change-transform"
            style={{ animationDelay: "1.3s" }}
          >
            <div className="glass rounded-full w-11 h-11 flex items-center justify-center hero-bob-1" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
              <Database size={15} className="text-text-secondary" />
            </div>
          </div>

          {/* 5 — Uptime metric card (mid-right) */}
          <div
            ref={float5Ref}
            className="absolute top-1/2 -right-4 md:-right-14 -translate-y-1/2 hero-float-enter-5 will-change-transform"
            style={{ animationDelay: "1.4s" }}
          >
            <div className="glass rounded-xl px-3 py-2 hero-bob-2">
              <p className="text-[10px] text-text-muted">Uptime</p>
              <p className="text-sm font-bold text-green-400 font-[family-name:var(--font-sora)]">99.9%</p>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-1 h-2 rounded-sm" style={{ background: i < 7 ? "#4ade80" : "rgba(255,255,255,0.15)" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-animate-d5 absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="animate-float">
          <ChevronDown size={22} className="text-text-muted" />
        </div>
      </div>
    </section>
  );
}
