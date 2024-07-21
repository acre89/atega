"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ListAnimate({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(700);
  if (typeof window !== "undefined") {
    setWidth(useState(window.innerWidth));
    // Client-side-only code
    useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);
      // subscribe to window resize event "onComponentDidMount"
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        // unsubscribe "onComponentDestroy"
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);
  }
  const breakpoint = 768;
  if (width > breakpoint) {
    return (
      <li
      className="list-item w-full"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        transitionDelay: delay,
      }}
    >
      {children}
    </li>
    );
  }
  return (
    <li
      className="list-item w-full"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",

      }}
    >
      {children}
    </li>
  );
}
