"use client";

import { motion } from "framer-motion";
import type { Scene } from "./scenes";

type Props = {
  scenes: Scene[];
  activeIndex: number;
};

const TimelineRail = ({ scenes, activeIndex }: Props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        gap: "0.9rem",
        padding: "0.55rem 1.4rem",
        borderRadius: "999px",
        background: "rgba(9, 6, 12, 0.55)",
        border: "1px solid rgba(255, 215, 160, 0.25)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
        backdropFilter: "blur(12px)"
      }}
    >
      {scenes.map((scene, idx) => {
        const active = idx === activeIndex;
        return (
          <motion.div
            key={scene.id}
            initial={false}
            animate={{
              background: active
                ? "linear-gradient(135deg, rgba(255, 215, 160, 0.95), rgba(255, 160, 95, 0.9))"
                : "rgba(255, 215, 180, 0.14)",
              color: active ? "#1a0f1c" : "rgba(255, 225, 210, 0.75)",
              width: active ? 150 : 18,
              padding: active ? "0.45rem 0.85rem" : "0.45rem 0",
              borderRadius: active ? "1rem" : "50%"
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              fontSize: active ? "0.72rem" : "0.5rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontWeight: 500,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textAlign: "center",
              cursor: "default"
            }}
          >
            {active ? scene.title : ""}
          </motion.div>
        );
      })}
    </div>
  );
};

export default TimelineRail;
