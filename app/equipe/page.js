import Image from "next/image";
import Associé from "../components/associeCard";
import dots from "../../public/dots_underline.svg";
import henri from "../../public/henri.jpg";
import alfred from "../../public/alfred.jpg";
import ilan from "../../public/Ilan.jpeg";
import logo_blanc from "../../public/logo2 le A.png";
import Footer from "../components/footer";
export default function Equipe(){
    return (
      <>
        <div
          id="equipe"
          className="2xl:w-[1536px]  2xl:mx-auto md:h-fit relative md:pt-24"
        >
          <div className="page-title-line w-fit mt-10 ml-40  pl-5 md:pl-0 pb-5 md:pb-0">
            <h2 className="text-nav">Notre équipe</h2>
            <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
          </div>
          <div className="mx-40 mt-16 flex flex-col md:grid gap-8 md:gap-3 md:grid-cols-3 md:grid-rows-2">
            <Associé
              image={henri}
              nom="Henri de Bourrousse"
              desc="Henri est associé et co-fondateur d'Atega Partners."
              desc2="Chez Atega Partners, Henri est principalement en charge des opérations de cession et de transmission"
              ecole="Il est titulaire d'un Master en finance d'entreprise d’Audencia Business School."
            />
            <Associé
              image={alfred}
              nom="Alfred Vahe"
              desc="Alfred est associé et co-fondateur d'Atega Partners."
              desc2="Chez Atega Partners, Alfred s'occupe principalement des levées de fonds ainsi que des acquisitions ciblées"
              ecole="Il est diplômé de l’emlyon business school."
            />
            <Associé
              image={ilan}
              nom="Alfred Vahe"
              desc="Alfred est associé et co-fondateur d'Atega Partners."
              desc2="Chez Atega Partners, Alfred s'occupe principalement des levées de fonds ainsi que des acquisitions ciblées"
              ecole="Il est diplômé de l’emlyon business school."
            />
            <div className="col-span-full rows-span-2 h-80 group-image md:flex hidden justify-center items-end">
              <div className=" bottom-3 left-1/2 z-10">
                <Image src={logo_blanc} height={90} />
              </div>
            </div>
          </div>
        </div>
          <Footer />
      </>
    );
}