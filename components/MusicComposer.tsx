"use client";

import { useEffect, useRef } from "react";

type Props = {
  active: boolean;
};

type MusicEngine = {
  context: AudioContext;
  master: GainNode;
  intervalIds: number[];
  oscillators: OscillatorNode[];
  noiseSource?: AudioBufferSourceNode;
};

const createAudioContext = () => {
  if (typeof window === "undefined") {
    throw new Error("AudioContext unavailable");
  }
  const Ctor = (window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext);
  if (!Ctor) {
    throw new Error("AudioContext constructor unsupported");
  }
  const ctx = new Ctor();
  return ctx;
};

const MusicComposer = ({ active }: Props) => {
  const engineRef = useRef<MusicEngine | null>(null);

  useEffect(() => {
    if (!active) {
      if (engineRef.current) {
        engineRef.current.intervalIds.forEach((id) => window.clearInterval(id));
        engineRef.current.oscillators.forEach((osc) => {
          try {
            osc.stop();
          } catch (error) {
            // ignore
          }
        });
        engineRef.current.context.close().catch(() => undefined);
        engineRef.current = null;
      }
      return;
    }

    if (engineRef.current) {
      const ctx = engineRef.current.context;
      if (ctx.state === "suspended") {
        void ctx.resume();
      }
      return;
    }

    let ctx: AudioContext;
    try {
      ctx = createAudioContext();
    } catch {
      return;
    }
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.07, ctx.currentTime);
    master.connect(ctx.destination);

    const sitar = ctx.createOscillator();
    const sitarGain = ctx.createGain();
    sitar.type = "sawtooth";
    sitar.frequency.setValueAtTime(174.61, ctx.currentTime);
    sitarGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    sitar.connect(sitarGain);
    sitarGain.connect(master);
    sitar.start();

    const flute = ctx.createOscillator();
    const fluteGain = ctx.createGain();
    flute.type = "sine";
    flute.frequency.setValueAtTime(261.63, ctx.currentTime);
    fluteGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    flute.connect(fluteGain);
    fluteGain.connect(master);
    flute.start();

    const pad = ctx.createOscillator();
    const padGain = ctx.createGain();
    pad.type = "triangle";
    pad.frequency.setValueAtTime(130.81, ctx.currentTime);
    padGain.gain.setValueAtTime(0.00005, ctx.currentTime);
    pad.connect(padGain);
    padGain.connect(master);
    pad.start();

    const swell = ctx.createOscillator();
    const swellGain = ctx.createGain();
    swell.type = "sine";
    swell.frequency.setValueAtTime(98, ctx.currentTime);
    swellGain.gain.setValueAtTime(0.00003, ctx.currentTime);
    swell.connect(swellGain);
    swellGain.connect(master);
    swell.start();

    const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * 0.05;
    }
    const noise = ctx.createBufferSource();
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.setValueAtTime(2000, ctx.currentTime);
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.0003, ctx.currentTime);
    noise.buffer = noiseBuffer;
    noise.loop = true;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(master);
    noise.start();

    const sitarInterval = window.setInterval(() => {
      const now = ctx.currentTime;
      const base = 174.61;
      const ragas = [base, base * 1.125, base * 1.5, base * 1.333];
      const picked = ragas[Math.floor(Math.random() * ragas.length)];
      sitar.frequency.linearRampToValueAtTime(picked, now + 0.2);
      sitarGain.gain.cancelScheduledValues(now);
      sitarGain.gain.setValueAtTime(0.0001, now);
      sitarGain.gain.linearRampToValueAtTime(0.06, now + 0.1);
      sitarGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    }, 3600);

    const fluteInterval = window.setInterval(() => {
      const now = ctx.currentTime;
      const melody = [261.63, 293.66, 329.63, 349.23, 392, 440];
      const picked = melody[Math.floor(Math.random() * melody.length)];
      flute.frequency.exponentialRampToValueAtTime(picked, now + 0.5);
      fluteGain.gain.cancelScheduledValues(now);
      fluteGain.gain.setValueAtTime(0.0001, now);
      fluteGain.gain.linearRampToValueAtTime(0.04, now + 0.6);
      fluteGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.6);
    }, 5200);

    const padInterval = window.setInterval(() => {
      const now = ctx.currentTime;
      const base = 130.81;
      const chord = [base, base * 1.25, base * 1.5];
      pad.frequency.linearRampToValueAtTime(
        chord[Math.floor(Math.random() * chord.length)],
        now + 1.5
      );
      padGain.gain.cancelScheduledValues(now);
      padGain.gain.setValueAtTime(0.00005, now);
      padGain.gain.linearRampToValueAtTime(0.02, now + 1.2);
      padGain.gain.linearRampToValueAtTime(0.00005, now + 7.5);
    }, 8000);

    const swellInterval = window.setInterval(() => {
      const now = ctx.currentTime;
      swellGain.gain.cancelScheduledValues(now);
      swellGain.gain.setValueAtTime(0.00003, now);
      swellGain.gain.linearRampToValueAtTime(0.015, now + 2.5);
      swellGain.gain.linearRampToValueAtTime(0.00003, now + 8.5);
    }, 9000);

    engineRef.current = {
      context: ctx,
      master,
      oscillators: [sitar, flute, pad, swell],
      intervalIds: [sitarInterval, fluteInterval, padInterval, swellInterval],
      noiseSource: noise
    };

    void ctx.resume();

    return () => {
      if (engineRef.current) {
        engineRef.current.intervalIds.forEach((id) => window.clearInterval(id));
        engineRef.current.oscillators.forEach((osc) => {
          try {
            osc.stop();
          } catch {
            // ignore
          }
        });
        engineRef.current.noiseSource?.stop();
        engineRef.current.context.close().catch(() => undefined);
        engineRef.current = null;
      }
    };
  }, [active]);

  return null;
};

export default MusicComposer;
