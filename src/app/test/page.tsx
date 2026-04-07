"use client";

import { useState, useRef, useCallback } from "react";
import { Server, Globe, MessageSquare, Code } from "lucide-react";

const fonts = [
  { name: "Inter", variable: "var(--font-inter)", note: "Current body font" },
  { name: "Sora", variable: "var(--font-sora)", note: "Current heading font" },
  { name: "Space Grotesk", variable: "var(--font-space-grotesk)", note: "Techy, slightly monospaced feel" },
  { name: "Manrope", variable: "var(--font-manrope)", note: "Geometric, friendly, modern" },
  { name: "Plus Jakarta Sans", variable: "var(--font-plus-jakarta)", note: "Premium agency feel" },
  { name: "Outfit", variable: "var(--font-outfit)", note: "Geometric, distinctive personality" },
  { name: "Poppins", variable: "var(--font-poppins)", note: "Circular geometry, startup favourite" },
];

export default function TestPage() {
  return (
    <div className="min-h-screen pt-16 pb-32 px-8 max-w-6xl mx-auto">
      <h1 className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-medium">
        Card Hover Animations — Service Cards
      </h1>
      <p className="text-text-muted text-sm mb-12">Hover each card to see the effect.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <Label text="Style 1 — Border Light Trail"><BorderLightCard /></Label>
        <Label text="Style 2 — Glass Shine Sweep"><ShineSweepCard /></Label>
        <Label text="Style 3 — Glow Lift"><GlowLiftCard /></Label>
        <Label text="Style 4 — Frosted Reveal"><FrostedRevealCard /></Label>
        <Label text="Style 5 — Gradient Border"><GradientBorderCard /></Label>
        <Label text="Style 6 — Aurora Shift"><AuroraShiftCard /></Label>
        <Label text="Style 7 — Cursor Spotlight"><CursorSpotlightCard /></Label>
        <Label text="Style 8 — Cursor Spotlight (Process)"><CursorSpotlightProcess /></Label>
        <Label text="Style 9 — Glass Lens (Service)"><GlassLensCard /></Label>
        <Label text="Style 10 — Glass Lens (Process)"><GlassLensProcess /></Label>
      </div>

      <h1 className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-medium">
        Card Hover Animations — Process Steps
      </h1>
      <p className="text-text-muted text-sm mb-12">Smaller cards. Hover each.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-32">
        <Label text="Style A — Icon Pulse"><ProcessIconPulse /></Label>
        <Label text="Style B — Top Line Expand"><ProcessTopLine /></Label>
        <Label text="Style C — Glass Tilt"><ProcessGlassTilt /></Label>
        <Label text="Style D — Background Bloom"><ProcessBloom /></Label>
        <Label text="Style E — Border Glow"><ProcessBorderGlow /></Label>
        <Label text="Style F — Scale + Shine"><ProcessScaleShine /></Label>
      </div>

      <h1 className="text-sm uppercase tracking-[0.2em] text-accent mb-12 font-medium">
        Font Comparison
      </h1>
      <div className="space-y-2">
        {fonts.map((font) => (
          <div key={font.name} className="py-6 border-b border-white/[0.06]">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-xs text-accent font-mono tracking-wider">{font.name}</span>
              <span className="text-xs text-text-muted">{font.note}</span>
            </div>
            <p className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none" style={{ fontFamily: `${font.variable}, sans-serif` }}>DEVELOPMENT</p>
            <p className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-text-secondary" style={{ fontFamily: `${font.variable}, sans-serif` }}>We Build Systems That Run Your Business</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Label({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="text-[11px] text-accent font-mono tracking-wider mb-3 block">{text}</span>
      {children}
    </div>
  );
}

/* ============================================================
   SERVICE CARD HOVERS
   ============================================================ */

function BorderLightCard() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative rounded-2xl p-[1px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ background: hover ? "linear-gradient(135deg, rgba(0,212,255,0.5), rgba(139,92,246,0.3), rgba(0,212,255,0.1))" : "rgba(255,255,255,0.1)", transition: "background 0.5s" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: hover ? 1 : 0,
          background: "conic-gradient(from 0deg, transparent, rgba(0,212,255,0.6), transparent, rgba(139,92,246,0.4), transparent)",
          animation: hover ? "spin 3s linear infinite" : "none",
          transition: "opacity 0.5s",
        }}
      />
      <div className="relative rounded-2xl bg-[rgba(10,15,28,0.9)] backdrop-blur-xl p-8">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
          <Server size={26} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mb-3">Custom Systems</h3>
        <p className="text-sm text-text-secondary leading-relaxed">Internal tools built around how your business actually works.</p>
      </div>
    </div>
  );
}

function ShineSweepCard() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative rounded-2xl glass p-8 overflow-hidden cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: hover ? 1 : 0,
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
          backgroundSize: "200% 100%",
          animation: hover ? "shineSweep 0.8s ease-out forwards" : "none",
          transition: "opacity 0.3s",
        }}
      />
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 transition-all duration-300 ${hover ? "bg-accent/20 border-accent/30" : ""}`}>
          <Globe size={26} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mb-3">Websites & Web Apps</h3>
        <p className="text-sm text-text-secondary leading-relaxed">Fast, modern websites that convert visitors into customers.</p>
      </div>
    </div>
  );
}

function GlowLiftCard() {
  return (
    <div className="group relative cursor-pointer">
      <div className="absolute inset-x-4 bottom-0 h-1/2 rounded-2xl bg-accent/0 group-hover:bg-accent/10 blur-2xl transition-all duration-500 group-hover:scale-110 pointer-events-none" />
      <div className="relative rounded-2xl glass p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-accent/25 group-hover:shadow-[0_20px_60px_rgba(0,212,255,0.15)]">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
          <Server size={26} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mb-3">Custom Systems</h3>
        <p className="text-sm text-text-secondary leading-relaxed">Internal tools built around how your business actually works.</p>
      </div>
    </div>
  );
}

function FrostedRevealCard() {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border border-white/[0.1] hover:border-white/[0.18]"
      style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(0,212,255,0.1) 0%, transparent 60%)" }}
      />
      <div className="relative p-8">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-500">
          <Globe size={26} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mb-3 group-hover:text-accent transition-colors duration-500">Websites & Web Apps</h3>
        <p className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-500">Fast, modern websites that convert visitors into customers.</p>
      </div>
    </div>
  );
}

function GradientBorderCard() {
  return (
    <div className="group relative rounded-2xl p-[1px] cursor-pointer" style={{ background: "rgba(255,255,255,0.1)" }}>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.6), rgba(139,92,246,0.4), rgba(0,212,255,0.2))" }}
      />
      <div className="relative rounded-[15px] p-8" style={{ background: "rgba(10,15,28,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
        <div
          className="absolute inset-0 rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(0,212,255,0.08) 0%, transparent 50%)" }}
        />
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
            <Server size={26} className="text-accent" />
          </div>
          <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mb-3">Custom Systems</h3>
          <p className="text-sm text-text-secondary leading-relaxed">Internal tools built around how your business actually works.</p>
        </div>
      </div>
    </div>
  );
}

function AuroraShiftCard() {
  return (
    <div className="group relative rounded-2xl glass p-8 overflow-hidden cursor-pointer">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 60%)", animation: "auroraMove1 4s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 60%)", animation: "auroraMove2 5s ease-in-out infinite" }}
        />
      </div>
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
          <Globe size={26} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mb-3">Websites & Web Apps</h3>
        <p className="text-sm text-text-secondary leading-relaxed">Fast, modern websites that convert visitors into customers.</p>
      </div>
    </div>
  );
}

/* ============================================================
   PROCESS CARD HOVERS
   ============================================================ */

function ProcessIconPulse() {
  return (
    <div className="group glass rounded-2xl p-8 text-center cursor-pointer transition-all duration-300">
      <div className="relative w-14 h-14 mx-auto mb-5">
        <div className="absolute inset-0 rounded-2xl bg-accent/20 opacity-0 group-hover:opacity-100 group-hover:scale-[1.8] transition-all duration-700 pointer-events-none" />
        <div className="relative w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
          <MessageSquare size={24} className="text-accent" />
        </div>
      </div>
      <span className="text-xs font-mono text-accent/70 mb-2 block">01</span>
      <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mb-3">Discuss</h3>
      <p className="text-sm text-text-secondary leading-relaxed">We understand your business needs.</p>
    </div>
  );
}

function ProcessTopLine() {
  return (
    <div className="group glass rounded-2xl p-8 text-center cursor-pointer relative overflow-hidden transition-all duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-8 group-hover:w-full bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-500 pointer-events-none" />
      <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
        <Code size={24} className="text-accent" />
      </div>
      <span className="text-xs font-mono text-accent/70 mb-2 block">03</span>
      <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mb-3">Develop</h3>
      <p className="text-sm text-text-secondary leading-relaxed">Fast iterations, real demos you can test.</p>
    </div>
  );
}

function ProcessGlassTilt() {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`, transition: "transform 0.1s ease-out" });
  };
  const handleLeave = () => {
    setStyle({ transform: "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)", transition: "transform 0.4s ease-out" });
  };

  return (
    <div className="glass rounded-2xl p-8 text-center cursor-pointer" style={style} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
        <MessageSquare size={24} className="text-accent" />
      </div>
      <span className="text-xs font-mono text-accent/70 mb-2 block">01</span>
      <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mb-3">Discuss</h3>
      <p className="text-sm text-text-secondary leading-relaxed">We understand your business needs.</p>
    </div>
  );
}

function ProcessBloom() {
  return (
    <div className="group glass rounded-2xl p-8 text-center cursor-pointer relative overflow-hidden transition-all duration-300">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 30%, rgba(0,212,255,0.15) 0%, transparent 60%)" }}
      />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-all duration-300">
          <Code size={24} className="text-accent" />
        </div>
        <span className="text-xs font-mono text-accent/70 mb-2 block">03</span>
        <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mb-3">Develop</h3>
        <p className="text-sm text-text-secondary leading-relaxed">Fast iterations, real demos you can test.</p>
      </div>
    </div>
  );
}

function ProcessBorderGlow() {
  return (
    <div
      className="group rounded-2xl p-8 text-center cursor-pointer relative transition-all duration-500 border border-white/[0.1] hover:border-accent/40"
      style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: "0 0 30px rgba(0,212,255,0.15), inset 0 0 30px rgba(0,212,255,0.05)" }}
      />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
          <MessageSquare size={24} className="text-accent" />
        </div>
        <span className="text-xs font-mono text-accent/70 mb-2 block">01</span>
        <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mb-3">Discuss</h3>
        <p className="text-sm text-text-secondary leading-relaxed">We understand your business needs.</p>
      </div>
    </div>
  );
}

function ProcessScaleShine() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="glass rounded-2xl p-8 text-center cursor-pointer overflow-hidden relative transition-all duration-300"
      style={{ transform: hover ? "scale(1.04)" : "scale(1)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: hover ? 1 : 0,
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 48%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.07) 52%, transparent 60%)",
          backgroundSize: "250% 100%",
          animation: hover ? "processShine 0.6s ease-out forwards" : "none",
          transition: "opacity 0.3s",
        }}
      />
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5 transition-all duration-300 ${hover ? "bg-accent/20" : ""}`}>
          <Code size={24} className="text-accent" />
        </div>
        <span className="text-xs font-mono text-accent/70 mb-2 block">03</span>
        <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mb-3">Develop</h3>
        <p className="text-sm text-text-secondary leading-relaxed">Fast iterations, real demos you can test.</p>
      </div>
    </div>
  );
}

/* ============================================================
   CURSOR SPOTLIGHT — spotlight + 3D tilt + glowing glass border
   ============================================================ */

function CursorSpotlightCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
    const tiltX = ((y / rect.height) - 0.5) * -12;
    const tiltY = ((x / rect.width) - 0.5) * 12;
    setTilt({ x: tiltX, y: tiltY });
  }, []);

  return (
    <div
      className="relative"
      style={{ perspective: "800px" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); setPos({ x: 0, y: 0 }); setTilt({ x: 0, y: 0 }); }}
    >
      {/* Glow underneath card on hover */}
      <div
        className="absolute inset-x-6 bottom-0 h-1/2 rounded-2xl pointer-events-none"
        style={{
          opacity: hovering ? 1 : 0,
          background: "rgba(0,212,255,0.08)",
          filter: "blur(25px)",
          transform: hovering ? "scaleX(1.05)" : "scaleX(0.9)",
          transition: "all 0.5s ease",
        }}
      />

      {/* Gradient border wrapper — 3D tilt applied here */}
      <div
        ref={cardRef}
        className="relative rounded-2xl p-[1px] overflow-hidden cursor-pointer"
        style={{
          background: hovering ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
          transform: hovering
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0)",
          transition: hovering ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMove}
      >
        {/* Cursor-following border glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: hovering ? 1 : 0,
            background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(0,212,255,0.4) 0%, rgba(139,92,246,0.15) 30%, transparent 60%)`,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Card inner */}
        <div
          className="relative rounded-[15px] overflow-hidden"
          style={{
            background: "rgba(10,16,30,0.92)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          }}
        >
          {/* Cursor spotlight inside card */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 350,
              height: 350,
              left: pos.x - 175,
              top: pos.y - 175,
              opacity: hovering ? 1 : 0,
              background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(0,212,255,0.04) 30%, transparent 60%)",
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
            style={{
              opacity: hovering ? 1 : 0,
              background: `radial-gradient(600px circle at ${pos.x}px 0px, rgba(0,212,255,0.5) 0%, transparent 50%)`,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300"
              style={{
                background: hovering ? "rgba(0,212,255,0.15)" : "rgba(0,212,255,0.08)",
                borderColor: hovering ? "rgba(0,212,255,0.3)" : "rgba(0,212,255,0.15)",
              }}
            >
              <Server size={26} className="text-accent" />
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mb-3">Custom Systems</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Internal tools built around how your business actually works. Inventory, invoicing, production tracking.
            </p>
            <ul className="mt-5 space-y-2">
              {["ERP & Management Systems", "Dashboard & Analytics", "Role-based Access"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-[13px] text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function CursorSpotlightProcess() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
    const tiltX = ((y / rect.height) - 0.5) * -14;
    const tiltY = ((x / rect.width) - 0.5) * 14;
    setTilt({ x: tiltX, y: tiltY });
  }, []);

  return (
    <div
      className="relative"
      style={{ perspective: "600px" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); setPos({ x: 0, y: 0 }); setTilt({ x: 0, y: 0 }); }}
    >
      {/* Glow underneath */}
      <div
        className="absolute inset-x-4 bottom-0 h-1/2 rounded-2xl pointer-events-none"
        style={{
          opacity: hovering ? 1 : 0,
          background: "rgba(0,212,255,0.06)",
          filter: "blur(20px)",
          transition: "all 0.5s ease",
        }}
      />

      {/* Gradient border wrapper — 3D tilt */}
      <div
        ref={cardRef}
        className="relative rounded-2xl p-[1px] overflow-hidden cursor-pointer"
        style={{
          background: hovering ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
          transform: hovering
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-3px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0)",
          transition: hovering ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMove}
      >
        {/* Cursor-following border glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: hovering ? 1 : 0,
            background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(0,212,255,0.4) 0%, rgba(139,92,246,0.12) 35%, transparent 60%)`,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Card inner */}
        <div
          className="relative rounded-[15px] overflow-hidden text-center"
          style={{
            background: "rgba(10,16,30,0.92)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          }}
        >
          {/* Cursor spotlight */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 250,
              height: 250,
              left: pos.x - 125,
              top: pos.y - 125,
              opacity: hovering ? 1 : 0,
              background: "radial-gradient(circle, rgba(0,212,255,0.14) 0%, rgba(0,212,255,0.03) 35%, transparent 60%)",
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
            style={{
              opacity: hovering ? 1 : 0,
              background: `radial-gradient(400px circle at ${pos.x}px 0px, rgba(0,212,255,0.5) 0%, transparent 50%)`,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 border transition-all duration-300"
              style={{
                background: hovering ? "rgba(0,212,255,0.15)" : "rgba(0,212,255,0.08)",
                borderColor: hovering ? "rgba(0,212,255,0.3)" : "rgba(0,212,255,0.15)",
              }}
            >
              <Code size={24} className="text-accent" />
            </div>
            <span className="text-xs font-mono text-accent/70 mb-2 block">03</span>
            <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mb-3">Develop</h3>
            <p className="text-sm text-text-secondary leading-relaxed">Fast iterations, real demos you can test.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ============================================================
   GLASS LENS — seamless frosted area follows cursor
   No borders, no rings. Just soft frost + glow that bleeds.
   ============================================================ */

function GlassLensCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [hovering, setHovering] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.08] transition-all duration-300"
      style={{ background: "rgba(8,14,28,0.7)" }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); setPos({ x: -999, y: -999 }); }}
    >
      {/* Layer 1: Large soft outer glow — bleeds out wide */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          left: pos.x - 250,
          top: pos.y - 250,
          opacity: hovering ? 0.7 : 0,
          transition: "opacity 0.4s ease",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Layer 2: Mid frost — the actual glass distortion zone */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 320,
          height: 320,
          left: pos.x - 160,
          top: pos.y - 160,
          opacity: hovering ? 1 : 0,
          transition: "opacity 0.3s ease",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)",
          backdropFilter: "blur(30px) saturate(1.6) brightness(1.2)",
          WebkitBackdropFilter: "blur(30px) saturate(1.6) brightness(1.2)",
        }}
      />

      {/* Layer 3: Tight hot center — bright frosted core */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 160,
          height: 160,
          left: pos.x - 80,
          top: pos.y - 80,
          opacity: hovering ? 1 : 0,
          transition: "opacity 0.2s ease",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 50%, transparent 80%)",
          backdropFilter: "blur(50px) saturate(2) brightness(1.4)",
          WebkitBackdropFilter: "blur(50px) saturate(2) brightness(1.4)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
          <Server size={26} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold font-[family-name:var(--font-sora)] mb-3">Custom Systems</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          Internal tools built around how your business actually works. Inventory, invoicing, production tracking.
        </p>
        <ul className="mt-5 space-y-2">
          {["ERP & Management Systems", "Dashboard & Analytics", "Role-based Access"].map((f) => (
            <li key={f} className="flex items-center gap-3 text-[13px] text-text-secondary">
              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GlassLensProcess() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [hovering, setHovering] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden cursor-pointer text-center border border-white/[0.08] transition-all duration-300"
      style={{ background: "rgba(8,14,28,0.7)" }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); setPos({ x: -999, y: -999 }); }}
    >
      {/* Outer glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 350,
          height: 350,
          left: pos.x - 175,
          top: pos.y - 175,
          opacity: hovering ? 0.7 : 0,
          transition: "opacity 0.4s ease",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
          filter: "blur(25px)",
        }}
      />

      {/* Mid frost */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 220,
          height: 220,
          left: pos.x - 110,
          top: pos.y - 110,
          opacity: hovering ? 1 : 0,
          transition: "opacity 0.3s ease",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 45%, transparent 70%)",
          backdropFilter: "blur(30px) saturate(1.6) brightness(1.2)",
          WebkitBackdropFilter: "blur(30px) saturate(1.6) brightness(1.2)",
        }}
      />

      {/* Hot center */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 100,
          height: 100,
          left: pos.x - 50,
          top: pos.y - 50,
          opacity: hovering ? 1 : 0,
          transition: "opacity 0.2s ease",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          backdropFilter: "blur(50px) saturate(2) brightness(1.4)",
          WebkitBackdropFilter: "blur(50px) saturate(2) brightness(1.4)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
          <Code size={24} className="text-accent" />
        </div>
        <span className="text-xs font-mono text-accent/70 mb-2 block">03</span>
        <h3 className="text-lg font-bold font-[family-name:var(--font-sora)] mb-3">Develop</h3>
        <p className="text-sm text-text-secondary leading-relaxed">Fast iterations, real demos you can test.</p>
      </div>
    </div>
  );
}
