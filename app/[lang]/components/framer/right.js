"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function RightAnimate({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        transitionDelay: delay,
      }}
    >
      {children}
    </div>
  );
}
