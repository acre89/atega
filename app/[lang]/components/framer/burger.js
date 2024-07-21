"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Burger({dict, langue}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="submenu-button"
      >
        <svg width="30" height="30" viewBox="0 0 20 20">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </motion.button>
      <motion.ul
        className="submenu-list "
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% )",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50%)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li className="submenu-item" variants={itemVariants}>
          <Link
            className="submenu-link"
            onClick={() => setIsOpen(!isOpen)}
            href={`/${langue}/a-propos`}
          >
            {dict.presentation}
          </Link>
        </motion.li>
        <motion.li className="submenu-item" variants={itemVariants}>
          <Link
            onClick={() => setIsOpen(!isOpen)}
            href={`/${langue}/expertises`}
            className="submenu-link"
          >
            {dict.expertises}
          </Link>
        </motion.li>
        <motion.li className="submenu-item" variants={itemVariants}>
          <Link
            className="submenu-link"
            onClick={() => setIsOpen(!isOpen)}
            href={`/${langue}/equipe`}
          >
            {dict.equipe}
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
