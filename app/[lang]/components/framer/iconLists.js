"use client";

import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function IconListAnimate({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(700);
  if (typeof window !== "undefined") {
    const size = window.innerWidth;
    // Client-side-only code
  }
  else{
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
