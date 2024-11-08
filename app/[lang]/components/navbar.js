"use client";

import Image from "next/image";
import Logo from "../../../public/Logo_nav.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import linkedin from "../../../public/linkedin.svg";
import { useRouter } from "next/navigation";
import Burger from "./framer/burger";
import Country from "./framer/countrySelect";
import { useEffect } from "react";

export default function Navbar({ dict }) {
  const pathname = usePathname();
  function checkAccueil(pathname) {
    let pathname_lang = pathname.slice(3);
    if (pathname_lang == "/" || pathname_lang == "/mentions") {
        handleNavbar(0);
    } else if (pathname_lang == "/a-propos") {
      handleNavbar(1);
    } else if (pathname_lang == "/expertises") {
      handleNavbar(2);
    } else if (pathname_lang == "/equipe") {
      handleNavbar(3);
    }
  }
  const router = useRouter();
  const langue = pathname.split("/")[1];
  const changeLanguage = (e) => {
    const locale = e.target.value;
    const segments = pathname.split("/");
    segments[1] = locale;
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
    router.push(segments.join("/"));
    checkAccueil(pathname);
  };

   async function handleNavbar(id) {
    if (typeof document !== "undefined"){
      if (id == 0) {
        document.getElementById("selector").style.left = "-10px";
        document.getElementById("selector").style.opacity = "0";
      } else if (id == 1) {
        document.getElementById("selector").style.left = "65px";
        document.getElementById("selector").style.opacity = "1";
      } else if (id == 2) {
        document.getElementById("selector").style.left = "269px";
        document.getElementById("selector").style.opacity = "1";
      } else if (id == 3) {
        document.getElementById("selector").style.left = "473px";
        document.getElementById("selector").style.opacity = "1";
      }
  }}

  useEffect(() => checkAccueil(pathname), []); 

  return (
    <>
      <Script onReady={checkAccueil(pathname)} />
      <div className="fixed h-[80px] top-0 z-50 w-screen  bg-nav">
        <div
          className="2xl:w-[1536px] relative shadow-xl 2xl:shadow-none 2xl:mx-auto flex items-center justify-between"
          id="nav-bar"
        >
          <div className="lg:hidden block relative pl-6 h-[30px] w-auto">
            <Burger dict={dict} langue={langue} />
          </div>

          <Link
            href={`/${langue}`}
            className="z-50"
            onClick={() => handleNavbar(0)}
          >
            <Image height={80} src={Logo} className="logo" alt="logo de l'entreprise" />
          </Link>
          <ul className="hidden relative lg:flex text-white gap-16  pr-48 text-xl">
            <div className="selector" id="selector"></div>
            <li className="nav-item">
              <Link
                onClick={() => handleNavbar(1)}
                href={`/${langue}/a-propos`}
              >
                {dict.presentation}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => handleNavbar(2)}
                href={`/${langue}/expertises`}
              >
                {dict.expertises}
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => handleNavbar(3)} href={`/${langue}/equipe`}>
                {dict.equipe}
              </Link>
            </li>
          </ul>
          <Country />
          <div className=" lg:absolute relative right-6 flex lg:pr-6">
            <a
              href="https://www.linkedin.com/company/atega-partners/"
              target="_blank"
            >
              <Image src={linkedin} height={35} />
            </a>
          </div>
          {/* <select
            onChange={changeLanguage}
            className="lang-select absolute right-20 lg:right-32 top-8"
            defaultValue={langue}
          >
            <option value="fr">🇫🇷</option>
            <option value="en">🇬🇧</option>
          </select> */}
        </div>
      </div>
    </>
  );
}
