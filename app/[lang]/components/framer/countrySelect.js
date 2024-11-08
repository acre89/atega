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

export default function Country() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const langue = pathname.split("/")[1];

  const testList= pathname.split("/")
  testList[1] = ''; 

  console.log(testList.slice(1).join("/"))
  const changeLanguage = (locale) => {
    if (langue != locale){
      const segments = pathname.split("/");
      segments[1] = locale;
      console.log(segments);
      document.cookie = `NEXT_LOCALE=${locale}; path=/`;
      router.push(segments.join("/"));
    }
    else{
      setIsOpen(false); 
    }
    
  };
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="lang-menu right-20 lg:right-32 top-8"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lang-submenu-button"
      >
        <Image src={langue == "fr" ? france : uk} height={20} />
      </motion.button>
      <motion.ul
        className="lang-submenu-list bg-gray-400/60"
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
            className="lang-submenu-link"
            onClick={() => changeLanguage('fr')}
          >
            <Image src={france} height={30} />
          </button>
        </motion.li>
        <motion.li className="submenu-item" variants={itemVariants}>
          <button
            className="lang-submenu-link"
            onClick={() => changeLanguage('en')}
          >
            <Image src={uk} height={30} />
          </button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
