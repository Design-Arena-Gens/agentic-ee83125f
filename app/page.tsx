"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScenePanel from "@/components/ScenePanel";
import { scenes } from "@/components/scenes";
import VoiceoverPlayer from "@/components/VoiceoverPlayer";
import MusicComposer from "@/components/MusicComposer";
import CinematicLayer from "@/components/CinematicLayer";
import ProgressRings from "@/components/ProgressRings";
import TimelineRail from "@/components/TimelineRail";

const totalDuration = scenes.reduce((acc, scene) => acc + scene.duration, 0);

export default function Home() {
  const [hasBegun, setHasBegun] = useState(false);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [completed, setCompleted] = useState(false);
  const rafRef = useRef<number | null>(null);
  const timestampRef = useRef<number | null>(null);

  useEffect(() => {
    if (!hasBegun) {
      setSceneIndex(0);
      setElapsed(0);
      setCompleted(false);
    }
  }, [hasBegun]);

  useEffect(() => {
    if (!hasBegun || completed) return;

    const tick = (time: number) => {
      if (timestampRef.current === null) {
        timestampRef.current = time;
      }
      const delta = time - timestampRef.current;
      timestampRef.current = time;
      setElapsed((prev) => {
        const next = Math.min(prev + delta, totalDuration);
        if (next >= totalDuration) {
          setCompleted(true);
          return totalDuration;
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      timestampRef.current = null;
    };
  }, [hasBegun, completed]);

  useEffect(() => {
    if (!hasBegun || completed) return;

    const current = scenes[sceneIndex];
    const timer = window.setTimeout(() => {
      setSceneIndex((prev) => {
        if (prev >= scenes.length - 1) {
          setCompleted(true);
          return prev;
        }
        return prev + 1;
      });
    }, current.duration);

    return () => window.clearTimeout(timer);
  }, [sceneIndex, hasBegun, completed]);

  useEffect(() => {
    if (elapsed >= totalDuration) {
      setCompleted(true);
    }
  }, [elapsed]);

  const currentScene = scenes[sceneIndex];
  const progress = hasBegun ? elapsed / totalDuration : 0;

  const remainingTime = useMemo(() => {
    const remaining = totalDuration - elapsed;
    return Math.max(0, remaining);
  }, [elapsed]);

  const handleStart = useCallback(() => {
    setHasBegun(true);
  }, []);

  const handleReplay = useCallback(() => {
    setSceneIndex(0);
    setElapsed(0);
    setCompleted(false);
    setHasBegun(true);
  }, []);

  return (
    <main>
      <div className="golden-overlay" />
      <CinematicLayer />
      <TimelineRail scenes={scenes} activeIndex={sceneIndex} />
      <AnimatePresence mode="wait">
        {hasBegun ? (
          <ScenePanel key={currentScene.id} scene={currentScene} index={sceneIndex} total={scenes.length} />
        ) : null}
      </AnimatePresence>
      <VoiceoverPlayer scenes={scenes} index={sceneIndex} active={hasBegun} />
      <MusicComposer active={hasBegun} />
      <ProgressRings progress={progress} label={`${Math.round(progress * 100)}%`} />
      <div
        style={{
          position: "fixed",
          right: "2rem",
          bottom: "2rem",
          zIndex: 5,
          textAlign: "right",
          color: "rgba(255, 235, 210, 0.8)",
          fontSize: "0.85rem",
          letterSpacing: "0.08em"
        }}
      >
        <div>Remaining: {(remainingTime / 1000).toFixed(0)}s</div>
        <div style={{ marginTop: "0.4rem" }}>Scene: {sceneIndex + 1} / {scenes.length}</div>
      </div>
      <AnimatePresence>
        {!hasBegun ? (
          <div
            key="overlay-start"
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(6, 3, 10, 0.83)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 7,
              backdropFilter: "blur(18px)"
            }}
          >
            <button
              type="button"
              onClick={handleStart}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.45rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "1.2rem 3.4rem",
                borderRadius: "999px",
                border: "1px solid rgba(255, 215, 160, 0.5)",
                background:
                  "linear-gradient(135deg, rgba(255, 220, 180, 0.45), rgba(255, 150, 90, 0.25))",
                color: "#fef6e4",
                cursor: "pointer",
                boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                transition: "transform 0.6s ease, background 0.6s ease"
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-6px)";
                event.currentTarget.style.background =
                  "linear-gradient(145deg, rgba(255, 230, 195, 0.75), rgba(255, 160, 100, 0.5))";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(255, 220, 180, 0.45), rgba(255, 150, 90, 0.25))";
              }}
            >
              Begin the Journey
            </button>
          </div>
        ) : null}
        {completed ? (
          <div
            key="overlay-complete"
            style={{
              position: "fixed",
              inset: 0,
              background: "linear-gradient(180deg, rgba(10, 6, 12, 0.8) 0%, rgba(10, 6, 12, 0.95) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              zIndex: 8,
              gap: "2rem",
              color: "rgba(255, 230, 210, 0.95)",
              padding: "2rem",
              textAlign: "center"
            }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                margin: 0
              }}
            >
              The Constitution of the Taj
            </h1>
            <p
              style={{
                maxWidth: "640px",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                letterSpacing: "0.02em",
                color: "rgba(255, 235, 220, 0.82)"
              }}
            >
              Carry this legacy forward—let compassion, craft, and unity be the laws you live by. Share the story, keep the marble dream alive.
            </p>
            <button
              type="button"
              onClick={handleReplay}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "1rem 3.2rem",
                borderRadius: "999px",
                border: "1px solid rgba(255, 215, 160, 0.45)",
                background:
                  "linear-gradient(135deg, rgba(255, 220, 180, 0.35), rgba(255, 150, 90, 0.2))",
                color: "#fef6e4",
                cursor: "pointer",
                boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                transition: "transform 0.6s ease, background 0.6s ease"
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-6px)";
                event.currentTarget.style.background =
                  "linear-gradient(145deg, rgba(255, 230, 195, 0.65), rgba(255, 160, 100, 0.45))";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(255, 220, 180, 0.35), rgba(255, 150, 90, 0.2))";
              }}
            >
              Replay Journey
            </button>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="sr-only" aria-live="assertive">
        {hasBegun
          ? `Scene ${sceneIndex + 1}: ${currentScene.title}. ${currentScene.description}`
          : "Ready to begin cinematic journey of the Taj Mahal."}
      </div>
    </main>
  );
}
