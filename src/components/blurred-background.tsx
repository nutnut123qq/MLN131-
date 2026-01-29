"use client";

import { useState, useEffect } from "react";

const BACKGROUND_IMAGES = ["/1.jpg", "/2.jpg", "/3.jpg"];
const ROTATE_INTERVAL_MS = 8000;

export function BlurredBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % BACKGROUND_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden" aria-hidden>
      {BACKGROUND_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundAttachment: "fixed",
            filter: "blur(2px)",
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
