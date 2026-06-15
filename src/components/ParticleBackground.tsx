"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Memuat versi slim agar ukuran bundle website tetap sangat kecil
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" }, // Partikel akan bereaksi saat kursor mendekat
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.5 } },
          },
        },
        particles: {
          color: { value: "#3b82f6" }, // Warna biru futuristik (Blue-500)
          links: {
            color: "#8b5cf6", // Gradien ke ungu (Purple-500)
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: { enable: true, width: 800 },
            value: 60, // Jumlah partikel yang pas untuk estetika
          },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
}