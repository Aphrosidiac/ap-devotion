"use client";

import { useRef, useCallback, useEffect, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  perspective?: number;
}

export default function TiltCard({
  children,
  className = "",
  tiltAmount = 12,
  perspective = 800,
}: TiltCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const underglowRef = useRef<HTMLDivElement>(null);
  const borderGlowRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const topLineRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false);
  const rafId = useRef<number>(0);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  // Smooth lerp animation loop — no React re-renders
  useEffect(() => {
    let active = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      if (!active) return;

      current.current.x = lerp(current.current.x, target.current.x, 0.15);
      current.current.y = lerp(current.current.y, target.current.y, 0.15);

      const x = current.current.x;
      const y = current.current.y;
      const card = cardRef.current;
      const rect = card?.getBoundingClientRect();

      if (card && rect && hasMoved.current) {
        const tiltX = ((y / rect.height) - 0.5) * -tiltAmount;
        const tiltY = ((x / rect.width) - 0.5) * tiltAmount;

        card.style.transition = "background 0.3s ease";
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
        card.style.background = "rgba(255,255,255,0.1)";

        if (borderGlowRef.current) {
          borderGlowRef.current.style.opacity = "1";
          borderGlowRef.current.style.background = `radial-gradient(500px circle at ${x}px ${y}px, rgba(0,212,255,0.4) 0%, rgba(139,92,246,0.15) 30%, transparent 60%)`;
        }

        if (spotlightRef.current) {
          spotlightRef.current.style.opacity = "1";
          spotlightRef.current.style.left = `${x - 175}px`;
          spotlightRef.current.style.top = `${y - 175}px`;
        }

        if (topLineRef.current) {
          topLineRef.current.style.opacity = "1";
          topLineRef.current.style.background = `radial-gradient(600px circle at ${x}px 0px, rgba(0,212,255,0.5) 0%, transparent 50%)`;
        }

        if (underglowRef.current) {
          underglowRef.current.style.opacity = "1";
          underglowRef.current.style.transform = "scaleX(1.05)";
        }
      }

      rafId.current = requestAnimationFrame(tick);
    };

    const el = wrapperRef.current;
    if (!el) return;

    const onEnter = () => {
      active = true;
      rafId.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      if (!hasMoved.current) {
        // First move: seed current position to skip lerp from (0,0)
        hasMoved.current = true;
        current.current.x = mx;
        current.current.y = my;
      }
      target.current.x = mx;
      target.current.y = my;
    };

    const onLeave = () => {
      active = false;
      hasMoved.current = false;
      cancelAnimationFrame(rafId.current);

      if (cardRef.current) {
        cardRef.current.style.transition = "transform 0.4s ease-out, background 0.4s ease";
        cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
        cardRef.current.style.background = "rgba(255,255,255,0.06)";
      }
      if (borderGlowRef.current) borderGlowRef.current.style.opacity = "0";
      if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
      if (topLineRef.current) topLineRef.current.style.opacity = "0";
      if (underglowRef.current) {
        underglowRef.current.style.opacity = "0";
        underglowRef.current.style.transform = "scaleX(0.9)";
      }

      target.current = { x: 0, y: 0 };
      current.current = { x: 0, y: 0 };
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [tiltAmount]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ perspective: `${perspective}px` }}
    >
      {/* Underglow */}
      <div
        ref={underglowRef}
        className="absolute inset-x-6 bottom-0 h-1/2 rounded-2xl pointer-events-none"
        style={{
          opacity: 0,
          background: "rgba(0,212,255,0.07)",
          filter: "blur(25px)",
          transform: "scaleX(0.9)",
          transition: "all 0.5s ease",
        }}
      />

      {/* Tilt + gradient border wrapper */}
      <div
        ref={cardRef}
        className="relative rounded-2xl p-[1px] overflow-hidden cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.06)",
          transformStyle: "preserve-3d",
          willChange: "transform",
          transition: "background 0.4s ease",
        }}
      >
        {/* Cursor-following border glow */}
        <div
          ref={borderGlowRef}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            opacity: 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Card inner */}
        <div
          className={`relative rounded-[15px] overflow-hidden ${className}`}
          style={{
            background: "rgba(10,16,30,0.92)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          }}
        >
          {/* Cursor spotlight */}
          <div
            ref={spotlightRef}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 350,
              height: 350,
              opacity: 0,
              background:
                "radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(0,212,255,0.04) 30%, transparent 60%)",
              transition: "opacity 0.4s ease",
              willChange: "left, top",
            }}
          />

          {/* Top accent line */}
          <div
            ref={topLineRef}
            className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
            style={{
              opacity: 0,
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Content */}
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
