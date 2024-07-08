"use client";
import Image from "next/image";
import Logo from "../../public/Logo_nav.png";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function Navbar() {
  const href_ = usePathname();
  console.log(href_);
  var [accueil, setAccueil] = useState(true);
  function checkAccueil(href_){
    if (href_ == '/'){
      setAccueil(false)
    }
    else{
      setAccueil(true)
    }
  }  

  

  async function handleNavbar(id){
    if (id == 0){
      document.getElementById("selector").style.left = "-10px";
      document.getElementById("selector").style.opacity = "0";
    }
    else if (id == 1){
      document.getElementById("selector").style.left = "45px";
      document.getElementById("selector").style.opacity = "1";
      
    }
    else if (id == 2){
      document.getElementById("selector").style.left = "209px";
      document.getElementById("selector").style.opacity = "1";
    }
    else if (id == 3){
      document.getElementById("selector").style.left = "373px"
      document.getElementById("selector").style.opacity = "1";
    }
  }

  return (
    <>
    <Script onLoad={() => {checkAccueil(href_)}} />
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
          <Link href={"/"} onClick={() => handleNavbar(0)}>
            <Image height={80} src={Logo} className="logo" />
          </Link>
          <ul className="hidden relative md:flex text-white gap-16  pr-12 text-xl">
            <div className="selector" id="selector"></div>
            <li className="nav-item">
              <Link onClick={() => handleNavbar(1)} href={"/a-propos"}>
                A propos
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => handleNavbar(2)} href={"/expertises"}>
                Expertises
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => handleNavbar(3)} href={"/equipe"}>
                Equipe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
