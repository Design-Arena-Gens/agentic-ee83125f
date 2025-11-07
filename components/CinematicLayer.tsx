"use client";

import { memo, useEffect, useMemo, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const PARTICLE_COUNT = 140;

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  drift: number;
  speed: number;
  opacity: number;
};

const createParticles = (count: number): Particle[] => {
  return Array.from({ length: count }).map((_, idx) => ({
    id: idx,
    x: Math.random(),
    y: Math.random(),
    size: Math.random() * 0.8 + 0.2,
    drift: Math.random() * 0.0002 + 0.00005,
    speed: Math.random() * 0.00035 + 0.0002,
    opacity: Math.random() * 0.45 + 0.35
  }));
};

const CinematicLayer = () => {
  const particlesRef = useRef<Particle[]>(createParticles(PARTICLE_COUNT));
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--width", `${window.innerWidth}px`);
      containerRef.current.style.setProperty("--height", `${window.innerHeight}px`);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useAnimationFrame((_, delta) => {
    particlesRef.current = particlesRef.current.map((particle) => {
      let nextY = particle.y + particle.speed * (delta / 16);
      if (nextY > 1.1) {
        nextY = -0.1;
      }
      const nextX = particle.x + Math.sin(nextY * Math.PI * 2) * particle.drift;
      return {
        ...particle,
        x: nextX,
        y: nextY
      };
    });

    if (containerRef.current) {
      for (const child of Array.from(containerRef.current.children)) {
        const particle = particlesRef.current[Number(child.getAttribute("data-id"))];
        if (!particle) continue;
        const element = child as HTMLDivElement;
        element.style.transform = `translate3d(${particle.x * 100}vw, ${particle.y * 100}vh, 0) scale(${particle.size})`;
        element.style.opacity = `${particle.opacity}`;
      }
    }
  });

  const elements = useMemo(
    () =>
      particlesRef.current.map((particle) => (
        <motion.div
          key={particle.id}
          data-id={particle.id}
          style={{
            position: "absolute",
            width: "1.6rem",
            height: "1.6rem",
            background: "radial-gradient(circle, rgba(255, 215, 160, 0.55), transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
            mixBlendMode: "screen",
            boxShadow: "0 0 18px rgba(255, 200, 150, 0.45)"
          }}
        />
      )),
    []
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2
      }}
    >
      {elements}
    </div>
  );
};

export default memo(CinematicLayer);
