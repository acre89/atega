import Logo from "../../public/logo.svg";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="fixed  z-50 w-screen h-fit  bg-nav">
        <div className="2xl:w-[1536px]  2xl:mx-auto flex items-center justify-center md:justify-between">
          <Image src={Logo} className="logo" />
          <ul className="hidden md:flex text-white gap-16 lg:gap-24 pr-12 text-xl">
            <li>
              <a href="#a-propos">A propos</a>
            </li>
            <li>
              <a href="#expertise">Expertise</a>
            </li>
            <li>
              <a href="#equipe">Equipe</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
