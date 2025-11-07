"use client";

import { motion } from "framer-motion";

type Props = {
  progress: number;
  label?: string;
};

const circumference = 2 * Math.PI * 48;

const ProgressRings = ({ progress, label }: Props) => {
  const safeProgress = Math.min(Math.max(progress, 0), 1);
  const strokeDashoffset = circumference - safeProgress * circumference;
  return (
    <div
      style={{
        position: "fixed",
        left: "2rem",
        bottom: "2rem",
        width: "130px",
        height: "130px",
        zIndex: 6
      }}
    >
      <svg
        width="130"
        height="130"
        viewBox="0 0 130 130"
        style={{
          transform: "rotate(-90deg)"
        }}
      >
        <circle
          cx="65"
          cy="65"
          r="48"
          fill="none"
          stroke="rgba(255, 215, 160, 0.15)"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <motion.circle
          cx="65"
          cy="65"
          r="48"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 225, 190, 0.95)" />
            <stop offset="100%" stopColor="rgba(255, 170, 100, 0.8)" />
          </linearGradient>
        </defs>
      </svg>
      <div
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotate(90deg)",
          fontSize: "0.85rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255, 225, 200, 0.85)"
        }}
      >
        {label ?? `${Math.round(safeProgress * 100)}%`}
      </div>
    </div>
  );
};

export default ProgressRings;
