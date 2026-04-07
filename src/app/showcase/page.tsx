"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  LayoutDashboard,
  Zap,
  Globe,
  Smartphone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── Ambient orbs ─────────────────────────────────────────────────────────────
function ShowcaseOrbs() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.10) 0%, rgba(0,212,255,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orbDrift1 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "45%",
          right: "-8%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.08) 0%, rgba(0,153,204,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orbDrift2 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: "10%",
          left: "20%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          filter: "blur(35px)",
          animation: "orbDrift3 26s ease-in-out infinite",
        }}
      />
    </div>
  );
}

// ─── Scroll progress bar ──────────────────────────────────────────────────────
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: "0%",
          background: "linear-gradient(90deg, #00d4ff 0%, #0099cc 100%)",
          boxShadow: "0 0 10px rgba(0,212,255,0.8)",
          transition: "width 0.05s linear",
        }}
      />
    </div>
  );
}

// ─── Dashboard mockup sub-components ─────────────────────────────────────────
function DashboardMockup({
  wireframeRef,
  topbarRef,
  sidebarRef,
  card1Ref,
  card2Ref,
  card3Ref,
  chartRef,
  tableRef,
  statusRef,
  glowRef,
}: {
  wireframeRef: React.RefObject<HTMLDivElement | null>;
  topbarRef: React.RefObject<HTMLDivElement | null>;
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  card1Ref: React.RefObject<HTMLDivElement | null>;
  card2Ref: React.RefObject<HTMLDivElement | null>;
  card3Ref: React.RefObject<HTMLDivElement | null>;
  chartRef: React.RefObject<HTMLDivElement | null>;
  tableRef: React.RefObject<HTMLDivElement | null>;
  statusRef: React.RefObject<HTMLDivElement | null>;
  glowRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={wireframeRef}
      className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden"
      style={{
        background: "rgba(6,11,24,0.9)",
        border: "1px solid rgba(0,212,255,0.25)",
        boxShadow: "0 0 0 1px rgba(0,212,255,0.1)",
        minHeight: 460,
      }}
    >
      {/* Glow overlay — pulses at end */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: "0 0 0px rgba(0,212,255,0)",
          opacity: 0,
        }}
      />

      {/* Top bar */}
      <div
        ref={topbarRef}
        className="flex items-center gap-3 px-5 py-3 border-b"
        style={{
          background: "rgba(0,212,255,0.06)",
          borderColor: "rgba(0,212,255,0.15)",
        }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
        </div>
        <span
          className="text-xs font-semibold tracking-wider"
          style={{ color: "rgba(0,212,255,0.8)" }}
        >
          AP Devotion Dashboard
        </span>
      </div>

      {/* Body: sidebar + main */}
      <div className="flex" style={{ minHeight: 420 }}>
        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className="flex-shrink-0 w-40 border-r py-4 px-3 flex flex-col gap-2"
          style={{
            background: "rgba(0,0,0,0.3)",
            borderColor: "rgba(0,212,255,0.1)",
          }}
        >
          {[
            { icon: "▣", label: "Overview" },
            { icon: "◈", label: "Analytics" },
            { icon: "◉", label: "Projects" },
            { icon: "◎", label: "Clients" },
            { icon: "◌", label: "Settings" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-2 py-2 rounded-lg text-xs"
              style={{
                background:
                  i === 0 ? "rgba(0,212,255,0.12)" : "transparent",
                border:
                  i === 0
                    ? "1px solid rgba(0,212,255,0.2)"
                    : "1px solid transparent",
                color:
                  i === 0 ? "#00d4ff" : "rgba(255,255,255,0.45)",
              }}
            >
              <span style={{ fontSize: 11 }}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main area */}
        <div className="flex-1 p-5 flex flex-col gap-4">
          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Revenue", value: "$48.2k", delta: "+12%" },
              { label: "Users", value: "3,841", delta: "+7%" },
              { label: "Uptime", value: "99.9%", delta: "✓" },
            ].map((m, i) => {
              const cardRef = [card1Ref, card2Ref, card3Ref][i];
              return (
                <div
                  key={i}
                  ref={cardRef}
                  className="rounded-xl p-3"
                  style={{
                    background: "rgba(0,212,255,0.06)",
                    border: "1px solid rgba(0,212,255,0.18)",
                  }}
                >
                  <p
                    className="text-[10px] font-semibold tracking-wider mb-1"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {m.label}
                  </p>
                  <p
                    className="text-lg font-bold font-[family-name:var(--font-sora)]"
                    style={{ color: "#00d4ff" }}
                  >
                    {m.value}
                  </p>
                  <p
                    className="text-[10px] mt-0.5"
                    style={{ color: "rgba(0,212,255,0.6)" }}
                  >
                    {m.delta}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Chart + Table row */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {/* Bar chart */}
            <div
              ref={chartRef}
              className="rounded-xl p-3 flex flex-col gap-2"
              style={{
                background: "rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-[10px] font-semibold tracking-wider"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                MONTHLY GROWTH
              </p>
              <div className="flex items-end gap-1.5 flex-1 pt-2">
                {[40, 55, 35, 70, 50, 85, 65, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, #00d4ff, #0099cc88)`,
                      opacity: 0.7 + i * 0.04,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Data table */}
            <div
              ref={tableRef}
              className="rounded-xl overflow-hidden"
              style={{
                background: "rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="flex gap-2 px-3 py-2 text-[10px] font-semibold tracking-wider"
                style={{
                  background: "rgba(0,212,255,0.08)",
                  color: "rgba(0,212,255,0.7)",
                  borderBottom: "1px solid rgba(0,212,255,0.1)",
                }}
              >
                <span className="flex-1">Project</span>
                <span className="w-14 text-center">Status</span>
                <span className="w-10 text-right">Rev</span>
              </div>
              {[
                ["Alpha", "Active", "$12k"],
                ["Beta", "Pending", "$8k"],
                ["Gamma", "Done", "$21k"],
                ["Delta", "Active", "$5k"],
              ].map(([name, status, rev], i) => (
                <div
                  key={i}
                  className="flex gap-2 px-3 py-1.5 items-center text-[10px]"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  <span className="flex-1">{name}</span>
                  <span className="w-14 text-center flex items-center justify-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full inline-block"
                      style={{
                        background:
                          status === "Active"
                            ? "#00d4ff"
                            : status === "Done"
                            ? "rgba(0,212,255,0.5)"
                            : "rgba(255,255,255,0.3)",
                      }}
                    />
                    {status}
                  </span>
                  <span
                    className="w-10 text-right font-semibold"
                    style={{ color: "#00d4ff" }}
                  >
                    {rev}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Status indicators row */}
          <div
            ref={statusRef}
            className="flex items-center gap-4 px-3 py-2 rounded-lg"
            style={{
              background: "rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span
              className="text-[10px] font-semibold tracking-wider"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              SERVICES
            </span>
            {["API", "DB", "CDN", "Auth", "Cache"].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-1 text-[10px]"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <span
                  className="status-dot w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                />
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Horizontal card mockups — full-size, detailed UI ─────────────────────────
function DashCardMockup() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden" style={{ background: "rgba(4,8,18,0.9)", border: "1px solid rgba(0,212,255,0.1)" }}>
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(0,212,255,0.05)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 mx-4 h-3.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }} />
      </div>
      <div className="flex h-[calc(100%-36px)]">
        {/* Sidebar */}
        <div className="w-[70px] border-r py-4 px-2 space-y-3 hidden md:block" style={{ borderColor: "rgba(0,212,255,0.08)", background: "rgba(0,212,255,0.03)" }}>
          {[true, false, false, false].map((active, i) => (
            <div key={i} className="h-5 rounded-md" style={{ background: active ? "rgba(0,212,255,0.2)" : "rgba(255,255,255,0.04)", border: active ? "1px solid rgba(0,212,255,0.3)" : "none" }} />
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 p-4 space-y-3">
          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2">
            {[{ v: "RM 48.2k", l: "Revenue", d: "+12%" }, { v: "1,847", l: "Orders", d: "+8%" }, { v: "324", l: "Active", d: "+23%" }].map((m) => (
              <div key={m.l} className="rounded-lg p-2.5" style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.08)" }}>
                <div className="text-[8px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{m.l}</div>
                <div className="text-sm font-bold mt-0.5" style={{ color: "#00d4ff" }}>{m.v}</div>
                <div className="text-[8px] mt-0.5" style={{ color: "rgba(0,212,255,0.6)" }}>{m.d}</div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="rounded-lg p-3" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="text-[8px] uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Monthly Revenue</div>
            <div className="flex items-end gap-1.5 h-16">
              {[40, 55, 35, 65, 50, 75, 60, 85, 70, 90, 65, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i >= 10 ? "#00d4ff" : `rgba(0,212,255,${0.2 + i * 0.06})` }} />
              ))}
            </div>
          </div>
          {/* Table */}
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
            {["E-commerce Platform", "ERP Integration", "Mobile App"].map((name, i) => (
              <div key={name} className="flex items-center gap-2 px-3 py-1.5 text-[8px]" style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff" }} />
                <span className="flex-1" style={{ color: "rgba(255,255,255,0.5)" }}>{name}</span>
                <div className="w-16 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full" style={{ width: `${85 - i * 15}%`, background: "#00d4ff", opacity: 0.6 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ERPMockup() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden" style={{ background: "rgba(4,8,18,0.9)", border: "1px solid rgba(0,212,255,0.1)" }}>
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 py-2.5" style={{ background: "rgba(0,212,255,0.05)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-green-400/70" />
        </div>
        <span className="text-[9px] font-semibold" style={{ color: "rgba(0,212,255,0.7)" }}>Inventory Manager</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Search + filter bar */}
        <div className="flex gap-2">
          <div className="flex-1 h-7 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }} />
          <div className="h-7 w-16 rounded-lg" style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }} />
        </div>
        {/* Table header */}
        <div className="flex gap-2 px-3 py-2 text-[8px] font-semibold uppercase tracking-wider" style={{ color: "rgba(0,212,255,0.7)", borderBottom: "1px solid rgba(0,212,255,0.15)" }}>
          <span className="flex-1">Item</span>
          <span className="w-12 text-center">Qty</span>
          <span className="w-14 text-center">Status</span>
          <span className="w-12 text-right">Value</span>
        </div>
        {/* Rows */}
        {[
          { item: "Steel Frame A2", qty: "248", status: "In Stock", val: "RM 12.4k" },
          { item: "Glass Panel B1", qty: "52", status: "Low", val: "RM 8.2k" },
          { item: "Circuit Board C3", qty: "1,024", status: "In Stock", val: "RM 24.6k" },
          { item: "Mounting Kit D4", qty: "186", status: "Ordered", val: "RM 3.1k" },
          { item: "Cable Bundle E5", qty: "892", status: "In Stock", val: "RM 5.8k" },
        ].map((row, i) => (
          <div key={i} className="flex gap-2 items-center px-3 py-2 text-[8px] rounded-lg hover:bg-white/[0.02]" style={{ borderBottom: "1px solid rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.55)" }}>
            <span className="flex-1 text-white/80">{row.item}</span>
            <span className="w-12 text-center">{row.qty}</span>
            <span className="w-14 text-center">
              <span className="inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: row.status === "Low" ? "#ff6b6b" : "#00d4ff", opacity: 0.8 }} />
                {row.status}
              </span>
            </span>
            <span className="w-12 text-right font-semibold" style={{ color: "#00d4ff" }}>{row.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsiteMockup() {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden" style={{ background: "rgba(4,8,18,0.9)", border: "1px solid rgba(0,212,255,0.1)" }}>
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(0,212,255,0.05)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 mx-4 h-3.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }} />
      </div>
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ background: "#00d4ff" }} />
          <div className="h-2 w-12 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        </div>
        <div className="flex gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-1.5 w-8 rounded-full" style={{ background: i === 0 ? "rgba(0,212,255,0.5)" : "rgba(255,255,255,0.08)" }} />
          ))}
        </div>
        <div className="h-5 w-14 rounded-full" style={{ background: "#00d4ff", opacity: 0.8 }} />
      </div>
      {/* Hero area */}
      <div className="px-6 py-6 space-y-3">
        <div className="h-3 w-3/5 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} />
        <div className="h-5 w-4/5 rounded-md" style={{ background: "linear-gradient(90deg, rgba(0,212,255,0.3), rgba(255,255,255,0.08))" }} />
        <div className="space-y-1.5 mt-1">
          <div className="h-1.5 w-full rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
          <div className="h-1.5 w-4/5 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-7 w-20 rounded-lg" style={{ background: "#00d4ff", opacity: 0.8 }} />
          <div className="h-7 w-20 rounded-lg" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }} />
        </div>
      </div>
      {/* Feature cards */}
      <div className="px-6 pb-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg p-3 space-y-2" style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.08)" }}>
            <div className="w-5 h-5 rounded" style={{ background: "rgba(0,212,255,0.15)" }} />
            <div className="h-1.5 w-3/4 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="h-1 w-full rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: "rgba(4,8,18,0.5)" }}>
      {/* Phone frame */}
      <div className="w-[140px] rounded-[20px] overflow-hidden" style={{ background: "rgba(4,8,18,0.95)", border: "2px solid rgba(0,212,255,0.15)", boxShadow: "0 0 30px rgba(0,212,255,0.05)" }}>
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="h-1.5 w-12 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
        </div>
        {/* Screen content */}
        <div className="px-2.5 pb-2 space-y-2">
          {/* Status bar */}
          <div className="flex justify-between items-center px-1">
            <div className="h-1 w-6 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="flex gap-1">
              <div className="h-1 w-3 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
              <div className="h-1 w-2 rounded-full" style={{ background: "#00d4ff" }} />
            </div>
          </div>
          {/* Header card */}
          <div className="rounded-xl p-2.5" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.05))", border: "1px solid rgba(0,212,255,0.15)" }}>
            <div className="h-1.5 w-2/3 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
            <div className="text-[10px] font-bold mt-1" style={{ color: "#00d4ff" }}>RM 12.4k</div>
            <div className="h-1 w-1/2 rounded-full mt-1" style={{ background: "rgba(0,212,255,0.3)" }} />
          </div>
          {/* List items */}
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 px-1 py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="w-5 h-5 rounded-lg flex-shrink-0" style={{ background: "rgba(0,212,255,0.1)" }} />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-3/4 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} />
                <div className="h-1 w-1/2 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
              </div>
            </div>
          ))}
          {/* Bottom nav */}
          <div className="flex justify-around pt-2 mt-1" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="w-4 h-4 rounded-md" style={{ background: i === 0 ? "rgba(0,212,255,0.25)" : "rgba(255,255,255,0.06)" }} />
            ))}
          </div>
        </div>
        {/* Home indicator */}
        <div className="flex justify-center py-1.5">
          <div className="h-1 w-10 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
        </div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ShowcasePage() {
  // Section 1 refs
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const heroScrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Section 2 — build sequence refs
  const buildSectionRef = useRef<HTMLDivElement>(null);
  const buildHeadingRef = useRef<HTMLParagraphElement>(null);
  const wireframeRef = useRef<HTMLDivElement>(null);
  const topbarRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const dashGlowRef = useRef<HTMLDivElement>(null);

  // Section 3 — philosophy text refs
  const phil1Ref = useRef<HTMLDivElement>(null);
  const phil2Ref = useRef<HTMLDivElement>(null);
  const phil3Ref = useRef<HTMLDivElement>(null);

  // Section 4 — horizontal scroll
  const horizontalRef = useRef<HTMLDivElement>(null);
  const horizontalInnerRef = useRef<HTMLDivElement>(null);

  // Section 5 — stats
  const statsRef = useRef<HTMLDivElement>(null);
  const statNumbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Section 6 — CTA
  const finalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    // ── Lenis smooth scroll ───────────────────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    // ── SECTION 1: Hero text — parallax fade on scroll (bidirectional via scrub)
    // Text is visible by default. Fades out smoothly as you scroll down.
    // Reappears when scrolling back up because scrub is bidirectional.
    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current,
        { yPercent: 0, opacity: 1 },
        {
          yPercent: -40,
          opacity: 0,
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: "top 20%",
            end: "bottom -20%",
            scrub: 1,
          },
        }
      );
    }
    if (heroSubRef.current) {
      gsap.fromTo(
        heroSubRef.current,
        { yPercent: 0, opacity: 1 },
        {
          yPercent: -25,
          opacity: 0,
          scrollTrigger: {
            trigger: heroSubRef.current,
            start: "top 15%",
            end: "bottom -30%",
            scrub: 1.2,
          },
        }
      );
    }
    if (heroScrollIndicatorRef.current) {
      gsap.fromTo(
        heroScrollIndicatorRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: heroScrollIndicatorRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    }

    // ── SECTION 2: Build sequence — pinned scroll ──────────────────────────────
    if (
      buildSectionRef.current &&
      wireframeRef.current &&
      topbarRef.current &&
      sidebarRef.current &&
      card1Ref.current &&
      card2Ref.current &&
      card3Ref.current &&
      chartRef.current &&
      tableRef.current &&
      statusRef.current &&
      dashGlowRef.current
    ) {
      // All dashboard pieces start invisible
      gsap.set(
        [
          topbarRef.current,
          sidebarRef.current,
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          chartRef.current,
          tableRef.current,
          statusRef.current,
        ],
        { opacity: 0, y: 0 }
      );
      gsap.set(wireframeRef.current, { opacity: 0 });
      gsap.set(topbarRef.current, { y: -40 });
      gsap.set(sidebarRef.current, { x: -60 });
      gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
        y: -30,
      });
      gsap.set(dashGlowRef.current, { opacity: 0 });

      // Find all status dots
      const statusDots =
        statusRef.current.querySelectorAll<HTMLElement>(".status-dot");

      const buildTL = gsap.timeline({
        scrollTrigger: {
          trigger: buildSectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=3000",
          invalidateOnRefresh: true,
        },
      });

      // Step 0-10%: wireframe appears
      buildTL.to(wireframeRef.current, { opacity: 1, duration: 1 }, 0);
      if (buildHeadingRef.current) {
        buildTL.fromTo(
          buildHeadingRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.8 },
          0
        );
      }

      // Step 10-20%: top bar slides down
      buildTL.to(
        topbarRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        1
      );

      // Step 20-35%: sidebar slides in
      buildTL.to(
        sidebarRef.current,
        { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" },
        2
      );

      // Step 35-50%: three metric cards drop in staggered
      buildTL.to(
        card1Ref.current,
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        3.5
      );
      buildTL.to(
        card2Ref.current,
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        4
      );
      buildTL.to(
        card3Ref.current,
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        4.5
      );

      // Step 50-65%: chart appears + bars grow
      buildTL.to(
        chartRef.current,
        { opacity: 1, duration: 1.5, ease: "power1.out" },
        5
      );
      // Animate bars: get them and scale from 0
      const bars =
        chartRef.current.querySelectorAll<HTMLDivElement>("div.flex-1");
      gsap.set(bars, { scaleY: 0, transformOrigin: "bottom" });
      buildTL.to(
        bars,
        { scaleY: 1, duration: 1.5, ease: "power2.out", stagger: 0.08 },
        5.5
      );

      // Step 65-80%: table rows populate from left
      buildTL.to(
        tableRef.current,
        { opacity: 1, duration: 1, ease: "power1.out" },
        6.5
      );
      const tableRows =
        tableRef.current.querySelectorAll<HTMLDivElement>("div.flex.gap-2");
      gsap.set(tableRows, { x: -30, opacity: 0 });
      buildTL.to(
        tableRows,
        { x: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.2 },
        7
      );

      // Step 80-90%: status indicators light up
      buildTL.to(
        statusRef.current,
        { opacity: 1, duration: 0.8, ease: "power1.out" },
        8
      );
      statusDots.forEach((dot, i) => {
        buildTL.to(
          dot,
          {
            background: "#00d4ff",
            boxShadow: "0 0 8px #00d4ff",
            duration: 0.3,
          },
          8.2 + i * 0.18
        );
      });

      // Step 90-100%: final glow pulse on whole dashboard
      buildTL.to(
        dashGlowRef.current,
        {
          opacity: 1,
          boxShadow: "0 0 60px rgba(0,212,255,0.3), inset 0 0 40px rgba(0,212,255,0.05)",
          duration: 1,
          ease: "power2.out",
        },
        9.2
      );
    }

    // ── SECTION 3: Philosophy text clip-path reveals ───────────────────────────
    [phil1Ref, phil2Ref, phil3Ref].forEach((ref) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // ── SECTION 4: Horizontal scroll ──────────────────────────────────────────
    if (horizontalRef.current && horizontalInnerRef.current) {
      gsap.to(horizontalInnerRef.current, {
        x: () =>
          -(
            horizontalInnerRef.current!.scrollWidth - window.innerWidth
          ),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + horizontalInnerRef.current!.scrollWidth,
          invalidateOnRefresh: true,
        },
      });
    }

    // ── SECTION 5: Stats count-up + card entrances ────────────────────────────
    if (statsRef.current) {
      const cards = statsRef.current.querySelectorAll(".stat-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    statNumbersRef.current.forEach((el) => {
      if (!el) return;
      const target = parseInt(el.dataset.count || "0", 10);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toString();
        },
      });
    });

    // ── SECTION 6: CTA scale-in ───────────────────────────────────────────────
    if (finalRef.current) {
      gsap.fromTo(
        finalRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: finalRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden bg-[#060b18]">
      <ShowcaseOrbs />
      <ScrollProgress />

      {/* Back link */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-text-secondary hover:text-text-primary transition-all duration-200"
          style={{ backdropFilter: "blur(16px)" }}
        >
          <ArrowLeft size={14} />
          Back
        </Link>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 1 — Cinematic Open
          ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-grid overflow-hidden">
        {/* Center-top cyan glow orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 500,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,212,255,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Main text */}
        <div
          ref={heroTextRef}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-bold font-[family-name:var(--font-sora)] tracking-tight leading-[1.05]">
            <div className="text-6xl sm:text-7xl md:text-9xl gradient-text">
              This is what
            </div>
            <div className="text-6xl sm:text-7xl md:text-9xl text-white mt-1">
              we can build.
            </div>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={heroSubRef}
          className="relative z-10 mt-8 text-lg md:text-xl text-text-secondary text-center"
        >
          Scroll to experience it.
        </p>

        {/* Scroll indicator */}
        <div
          ref={heroScrollIndicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <div
            className="w-[1px] h-16"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,212,255,0.9), transparent)",
              animation: "scrollLine 2s ease-in-out infinite",
            }}
          />
          <div
            className="w-4 h-4 border-b-2 border-r-2 rotate-45"
            style={{
              borderColor: "rgba(0,212,255,0.6)",
              animation: "showcaseChevron 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2 — The Build Sequence (pinned)
          ════════════════════════════════════════════════════════════════ */}
      <section
        ref={buildSectionRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden"
      >
        {/* Section heading */}
        <p
          ref={buildHeadingRef}
          className="text-xs tracking-[0.3em] uppercase text-text-secondary font-semibold mb-8"
          style={{ opacity: 0 }}
        >
          Watch it come together.
        </p>

        {/* Dashboard mockup */}
        <DashboardMockup
          wireframeRef={wireframeRef}
          topbarRef={topbarRef}
          sidebarRef={sidebarRef}
          card1Ref={card1Ref}
          card2Ref={card2Ref}
          card3Ref={card3Ref}
          chartRef={chartRef}
          tableRef={tableRef}
          statusRef={statusRef}
          glowRef={dashGlowRef}
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3 — Philosophy Text
          ════════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
        <div className="max-w-4xl mx-auto w-full space-y-24">
          {/* Statement 1 */}
          <div ref={phil1Ref} style={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight leading-tight">
              Every animation has a{" "}
              <span
                className="relative inline-block"
                style={{ color: "#00d4ff", textShadow: "0 0 30px rgba(0,212,255,0.5)" }}
              >
                purpose
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[2px]"
                  style={{
                    background: "linear-gradient(90deg, #00d4ff, transparent)",
                  }}
                />
              </span>
              .
            </h2>
          </div>

          {/* Statement 2 */}
          <div ref={phil2Ref} style={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight leading-tight">
              Every system is{" "}
              <span
                className="relative inline-block"
                style={{ color: "#00d4ff", textShadow: "0 0 30px rgba(0,212,255,0.5)" }}
              >
                tailored
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[2px]"
                  style={{
                    background: "linear-gradient(90deg, #00d4ff, transparent)",
                  }}
                />
              </span>{" "}
              to fit.
            </h2>
          </div>

          {/* Statement 3 */}
          <div ref={phil3Ref} style={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight leading-tight">
              Every pixel is{" "}
              <span
                className="relative inline-block"
                style={{ color: "#00d4ff", textShadow: "0 0 30px rgba(0,212,255,0.5)" }}
              >
                intentional
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[2px]"
                  style={{
                    background: "linear-gradient(90deg, #00d4ff, transparent)",
                  }}
                />
              </span>
              .
            </h2>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4 — Horizontal Scroll Gallery
          ════════════════════════════════════════════════════════════════ */}
      <section ref={horizontalRef} className="relative h-screen overflow-hidden">
        {/* Floating section label */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <p
            className="text-xs tracking-[0.35em] uppercase font-semibold text-center"
            style={{ color: "#00d4ff" }}
          >
            WHAT WE BUILD
          </p>
        </div>

        <div
          ref={horizontalInnerRef}
          className="flex h-full items-center gap-8 px-[8vw]"
          style={{ width: "fit-content", paddingTop: "3rem" }}
        >
          {[
            { title: "Custom Dashboards", desc: "Real-time analytics with beautiful data visualization", icon: LayoutDashboard, Mockup: DashCardMockup },
            { title: "Management Systems", desc: "Full-stack ERPs tailored to your business workflow", icon: Zap, Mockup: ERPMockup },
            { title: "Modern Websites", desc: "Fast, responsive sites that convert visitors to clients", icon: Globe, Mockup: WebsiteMockup },
            { title: "Mobile-First Design", desc: "Every interface works beautifully on any screen size", icon: Smartphone, Mockup: MobileMockup },
          ].map((card) => (
            <div key={card.title} className="flex-shrink-0 w-[78vw] md:w-[42vw] h-[75vh]">
              <div className="rounded-2xl h-full overflow-hidden flex flex-col" style={{ background: "rgba(10,16,30,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {/* Mockup area — takes up most of the card */}
                <div className="flex-1 min-h-0 p-4">
                  <card.Mockup />
                </div>
                {/* Caption bar at bottom */}
                <div className="px-6 py-5 flex items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
                  <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                    <card.icon size={18} style={{ color: "#00d4ff" }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-[family-name:var(--font-sora)] text-white">{card.title}</h3>
                    <p className="text-xs text-text-secondary mt-0.5">{card.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End spacer */}
          <div className="flex-shrink-0 w-[20vw] h-[75vh] flex items-center justify-center">
            <div className="text-center space-y-3">
              <div
                className="w-14 h-14 rounded-full mx-auto flex items-center justify-center"
                style={{
                  border: "1px solid rgba(0,212,255,0.3)",
                  background: "rgba(0,212,255,0.06)",
                }}
              >
                <ArrowRight size={18} className="text-accent" />
              </div>
              <p className="text-text-muted text-sm">And more…</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5 — The Numbers
          ════════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-5xl mx-auto w-full">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">
              By the numbers
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight">
              Numbers that{" "}
              <span className="gradient-text">matter</span>
            </h2>
          </div>

          {/* Stat cards */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { count: 15, suffix: "+", label: "Projects Delivered", icon: "◆" },
              { count: 10, suffix: "+", label: "Happy Clients", icon: "★" },
              { count: 99, suffix: "%", label: "Uptime SLA", icon: "▲" },
              { count: 24, suffix: "h", label: "Response Time", icon: "●" },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="stat-card relative rounded-2xl p-6 md:p-8 flex flex-col items-center text-center overflow-hidden"
                style={{
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid rgba(0,212,255,0.12)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at top right, rgba(0,212,255,0.12) 0%, transparent 70%)",
                  }}
                />

                {/* Icon */}
                <div
                  className="text-lg mb-4"
                  style={{ color: "#00d4ff", opacity: 0.7 }}
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <div
                  className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-sora)] tabular-nums"
                  style={{
                    color: "#00d4ff",
                    textShadow: "0 0 30px rgba(0,212,255,0.5)",
                  }}
                >
                  <span
                    ref={(el) => {
                      statNumbersRef.current[idx] = el;
                    }}
                    data-count={stat.count}
                  >
                    0
                  </span>
                  <span>{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="mt-3 text-xs md:text-sm text-text-secondary leading-snug">
                  {stat.label}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6 — Closing CTA
          ════════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,212,255,0.1) 0%, transparent 70%)",
          }}
        />

        <div ref={finalRef} className="text-center max-w-3xl mx-auto relative z-10">
          {/* Decorative rings */}
          <div className="relative flex items-center justify-center mb-12">
            <div
              className="absolute w-64 h-64 rounded-full pointer-events-none"
              style={{
                border: "1px solid rgba(0,212,255,0.12)",
                animation: "ringPulse 4s ease-in-out infinite",
              }}
            />
            <div
              className="absolute w-44 h-44 rounded-full pointer-events-none"
              style={{
                border: "1px solid rgba(0,212,255,0.2)",
                animation: "ringPulse 4s ease-in-out infinite 0.6s",
              }}
            />
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.35)",
                boxShadow: "0 0 40px rgba(0,212,255,0.2)",
              }}
            >
              <Zap
                size={28}
                className="text-accent"
                style={{ filter: "drop-shadow(0 0 8px #00d4ff)" }}
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-sora)] tracking-tight leading-tight text-white">
            Impressed?
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-sora)] tracking-tight leading-tight mt-1">
            <span className="gradient-text">
              Let&apos;s build yours.
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-lg mx-auto leading-relaxed">
            This page is just a taste. Imagine what we can do for your business.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative flex items-center gap-2 px-8 py-4 rounded-xl text-background font-semibold text-sm overflow-hidden"
              style={{
                background: "#00d4ff",
                color: "#060b18",
                boxShadow:
                  "0 0 25px rgba(0,212,255,0.4), 0 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              Start a Project
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-sm text-text-secondary hover:text-text-primary transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
