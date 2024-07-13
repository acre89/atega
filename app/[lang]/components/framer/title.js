"use client"; 
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TitleAnimate({children}){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div
        className="page-title-line w-fit mt-10 ml-24  pl-5 md:pl-0 pb-5 md:pb-0"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {children}
      </div>
    );
}