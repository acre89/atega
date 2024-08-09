"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import france from "../../../../public/france.svg"; 
import uk from "../../../../public/uk.svg"; 
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Country({checkAccueil}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const langue = pathname.split("/")[1];
  const changeLanguage = (locale) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    console.log(segments.join("/"));
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
    router.push(segments.join("/"));
    checkAccueil(pathname);
  };
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="absolute right-20 lg:right-32 top-8"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="submenu-button"
      >
        <Image src={france} height={20} />
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
          <button
            className="submenu-link"
            onClick={() => changeLanguage('fr')}
          >
            <Image src={france} height={30} />
          </button>
        </motion.li>
        <motion.li className="submenu-item" variants={itemVariants}>
          <button
            className="submenu-link"
            onClick={() => changeLanguage('uk')}
          >
            <Image src={uk} height={30} />
          </button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
