"use client";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";


export default function DivAnimate({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(700);
  if (typeof window !== "undefined") {
    const size = window.innerWidth;
    // Client-side-only code
  } else {
    const size = 600;
  }
  useEffect(() => {
    const handleResizeWindow = () => setWidth(size);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const breakpoint = 768;
  if (width > breakpoint) {
    return (
      <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        transitionDelay: delay
      }}
    >
      {children}
    </div>
    );
  }
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
      }}
    >
      {children}
    </div>
  );
}
