"use client";

import { motion } from "framer-motion";
import type { Scene } from "./scenes";

type Props = {
  scene: Scene;
  index: number;
  total: number;
};

const MotionDiv = motion.div;

const ScenePanel = ({ scene, index, total }: Props) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "6rem 6vw",
        textAlign: "center",
        zIndex: 3
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "10%",
          background: scene.background.gradient,
          borderRadius: "2.5rem",
          filter: "blur(60px)",
          opacity: 0.7,
          transform: "scale(1.05)"
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "6%",
          background: scene.background.overlay,
          borderRadius: "2rem",
          opacity: 0.85,
          mixBlendMode: "screen"
        }}
      />
      {scene.background.foreground ? (
        <div
          style={{
            position: "absolute",
            inset: "12%",
            background: scene.background.foreground,
            borderRadius: "2.75rem",
            opacity: 0.6,
            mixBlendMode: "screen"
          }}
        />
      ) : null}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        style={{
          position: "relative",
          width: "min(860px, 100%)",
          padding: "4rem clamp(2rem, 5vw, 6rem)",
          borderRadius: "1.75rem",
          background: "rgba(10, 6, 12, 0.55)",
          border: "1px solid rgba(255, 215, 160, 0.25)",
          boxShadow: "0 40px 120px rgba(10, 6, 12, 0.6)"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "2.5rem",
            borderRadius: "1.25rem",
            border: "1px solid rgba(255, 215, 160, 0.15)",
            pointerEvents: "none"
          }}
        />
        <div className="light-beam" aria-hidden="true" />
        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.4, duration: 1.8 }}
          style={{
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontSize: "0.75rem",
          color: "rgba(255, 221, 180, 0.75)"
        }}
      >
        Scene {index + 1} / {total}
      </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.1 }}
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 600,
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontFamily: "'Playfair Display', 'Times New Roman', serif",
            textShadow: "0 12px 32px rgba(0,0,0,0.65)"
          }}
        >
          {scene.title}
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          style={{
            fontSize: "clamp(1.15rem, 2.5vw, 1.6rem)",
            fontStyle: "italic",
            color: "rgba(255, 230, 210, 0.9)",
            marginBottom: "2rem"
          }}
        >
          {scene.subtitle}
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: 1.8,
            color: "rgba(255, 245, 229, 0.85)"
          }}
        >
          {scene.description}
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 1.35, duration: 1.3 }}
          style={{
            marginTop: "2.4rem",
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
            color: "rgba(255, 233, 210, 0.75)",
            background: "rgba(255, 220, 190, 0.08)",
            border: "1px solid rgba(255, 220, 190, 0.15)",
            borderRadius: "1rem",
            padding: "1.2rem 1.6rem",
            backdropFilter: "blur(12px)"
          }}
        >
          {scene.focus}
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};

export default ScenePanel;
