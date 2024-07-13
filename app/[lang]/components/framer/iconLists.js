"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export default function IconListAnimate({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ul
      className="flex flex-col items-center gap-3 w-28"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        transitionDelay: delay,
      }}
    >
      {children}
    </ul>
  );
}
