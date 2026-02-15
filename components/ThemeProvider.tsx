"use client";

import { useEffect } from "react";
import { config } from "@/lib/config";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Apply CSS variables for animations using React's effect hook
    const root = document.documentElement;
    root.style.setProperty("--float-duration", config.animations.floatDuration);
    root.style.setProperty("--float-distance", config.animations.floatDistance);
    root.style.setProperty("--bounce-speed", config.animations.bounceSpeed);
  }, []);

  return <>{children}</>;
}
