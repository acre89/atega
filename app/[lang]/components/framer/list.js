"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ListAnimate({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
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
