import Logo from "../../public/logo.svg";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      
        <div className="fixed z-10 w-screen h-fit flex items-center justify-between bg-nav">
          <Image src={Logo} className="logo" />
          <ul className="flex text-white gap-24 pr-12 text-xl">
                <li><a href="#a-propos">A propos</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#equipe">Equipe</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
    
    </>
  );
}
