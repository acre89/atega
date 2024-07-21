"use client";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function RightAnimate({ children, delay }) {
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
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        
      }}
    >
      {children}
    </div>
  );
}
