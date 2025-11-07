/* eslint-disable no-console */
"use client";

import { useEffect, useRef, useState } from "react";
import type { Scene } from "./scenes";

type Props = {
  scenes: Scene[];
  index: number;
  active: boolean;
};

const VOICE_PREFERENCE = ["hi-IN", "hi_IN", "hi", "en-IN", "en_GB"];

const VoiceoverPlayer = ({ scenes, index, active }: Props) => {
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }

    setSupported(true);
  }, []);

  useEffect(() => {
    if (!active || !supported || typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    const synth = window.speechSynthesis;
    synth.cancel();

    const scene = scenes[index];
    if (!scene) return;

    const utter = new SpeechSynthesisUtterance(scene.voiceover);
    utter.pitch = 0.95;
    utter.rate = 0.86;
    utter.volume = 1;

    const selectVoice = () => {
      const voices = synth.getVoices();
      for (const pref of VOICE_PREFERENCE) {
        const found = voices.find((voice) => voice.lang === pref || voice.name.includes(pref));
        if (found) {
          return found;
        }
      }

      // fallback to first available voice
      return voices[0] ?? null;
    };

    const assignVoice = () => {
      const voice = selectVoice();
      if (voice) {
        utter.voice = voice;
      }
      synth.speak(utter);
    };

    if (synth.getVoices().length === 0) {
      const handleVoicesChanged = () => {
        assignVoice();
        synth.removeEventListener("voiceschanged", handleVoicesChanged);
      };
      synth.addEventListener("voiceschanged", handleVoicesChanged);
    } else {
      assignVoice();
    }

    utteranceRef.current = utter;

    return () => {
      synth.cancel();
      utteranceRef.current = null;
    };
  }, [active, index, scenes, supported]);

  return supported ? null : (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        background: "rgba(0,0,0,0.55)",
        padding: "0.75rem 1rem",
        borderRadius: "0.75rem",
        border: "1px solid rgba(255, 215, 160, 0.4)",
        fontSize: "0.85rem",
        maxWidth: "18rem",
        lineHeight: 1.4,
        zIndex: 10
      }}
    >
      आपका ब्राउज़र हिंदी वॉयसओवर का समर्थन नहीं करता है। कृपया समर्थित ब्राउज़र में देखें।
    </div>
  );
};

export default VoiceoverPlayer;
