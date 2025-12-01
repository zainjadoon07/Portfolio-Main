"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function ScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenisRef.current.destroy();
  }, []);

  return <div>{children}</div>;
}
