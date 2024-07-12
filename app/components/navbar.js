"use client";
import Image from "next/image";
import Logo from "../../public/Logo_nav.png";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import linkedin from "../../public/linkedin.svg";


export default function Navbar() {
  const href_ = usePathname();
  console.log(href_);
  var [accueil, setAccueil] = useState(true);
  function checkAccueil(href_){
    if (href_ == '/'){
      setAccueil(false);
    }
    else if (href_ == '/a-propos'){
      setAccueil(true);
      handleNavbar(1); 
    }
    else if (href_ == "/expertises") {
      setAccueil(true);
      handleNavbar(2);
    } else if (href_ == "/equipe") {
      setAccueil(true);
      handleNavbar(3);
    }
  }  

  

  async function handleNavbar(id){
    if (id == 0){
      document.getElementById("selector").style.left = "-10px";
      document.getElementById("selector").style.opacity = "0";
    }
    else if (id == 1){
      document.getElementById("selector").style.left = "65px";
      document.getElementById("selector").style.opacity = "1";
      
    }
    else if (id == 2){
      document.getElementById("selector").style.left = "269px";
      document.getElementById("selector").style.opacity = "1";
    }
    else if (id == 3){
      document.getElementById("selector").style.left = "473px"
      document.getElementById("selector").style.opacity = "1";
    }
  }

  return (
    <>
      <Script
        onLoad={() => {
          checkAccueil(href_);
        }}
      />
      <div
        className={
          accueil
            ? "fixed  z-50 w-screen h-fit  bg-nav"
            : "fixed  z-50 w-screen h-fit  bg-black"
        }
      >
        <div
          className="2xl:w-[1536px]  2xl:mx-auto flex items-center justify-center md:justify-between"
          id="nav-bar"
        >
          <div className="flex gap-8 items-center">
          <Link href={"/"} onClick={() => handleNavbar(0)}>
            <Image height={80} src={Logo} className="logo" />
          </Link>
          <a
            href="https://www.linkedin.com/company/atega-partners/"
            target="_blank"
          >
            <Image src={linkedin} height={35} />
          </a>
          </div>
          <ul className="hidden relative md:flex text-white gap-16  pr-12 text-xl">
            <div className="selector" id="selector"></div>
            <li className="nav-item">
              <Link onClick={() => handleNavbar(1)} href={"/a-propos"}>
                Présentation
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => handleNavbar(2)} href={"/expertises"}>
                Nos Expertises
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => handleNavbar(3)} href={"/equipe"}>
                Notre Equipe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
