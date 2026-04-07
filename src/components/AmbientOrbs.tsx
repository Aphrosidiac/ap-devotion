"use client";

/**
 * Ambient gradient orbs placed behind glass cards.
 * These give backdrop-filter something colorful to blur through,
 * making the glassmorphism effect actually visible on dark backgrounds.
 */
export default function AmbientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top-center cyan glow */}
      <div
        className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Left blue orb */}
      <div
        className="absolute top-[30%] -left-[200px] w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,100,220,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Right purple orb */}
      <div
        className="absolute top-[50%] -right-[150px] w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Center-bottom cyan/teal orb */}
      <div
        className="absolute top-[70%] left-[30%] w-[700px] h-[500px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,200,220,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Bottom-right blue orb */}
      <div
        className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(56,100,220,0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
