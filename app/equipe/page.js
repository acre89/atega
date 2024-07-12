import Image from "next/image";
import Associé from "../components/associeCard";
import dots from "../../public/dots_underline.svg";
import henri from "../../public/henri.jpeg";
import alfred from "../../public/alfred.jpeg";
import ilan from "../../public/Ilan.jpeg";
import logo_blanc from "../../public/logo2 le A.png";
import Footer from "../components/footer";
export default function Equipe() {
  return (
    <>
      <div
        id="equipe"
        className="2xl:w-[1536px]  2xl:mx-auto md:h-fit relative md:pt-24"
      >
        <div className="page-title-line w-fit mt-10 ml-32  pl-5 md:pl-0 pb-5 md:pb-0">
          <h2 className="text-nav">Notre équipe</h2>
          <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
        </div>
        <div className="mx-40 my-16 flex flex-col md:grid gap-8 md:gap-3 md:grid-cols-3 md:grid-rows-1">
          <Associé
            image={henri}
            nom="Henri de Bourrousse"
            sous_titre="Co-fondateur & associé"
            desc="Chez Atega Partners, Henri est principalement en charge des opérations de cession et de transmission"
            ecole="Il est diplômé d’Audencia Business School."
            telephone="+33 7 86 44 05 93"
            mail="h.debourrousse@atega-partners.com"
          />
          <Associé
            image={alfred}
            nom="Alfred Vahe"
            sous_titre="Co-fondateur & associé"
            desc="Chez Atega Partners, Alfred s'occupe principalement des levées de fonds ainsi que des acquisitions ciblées"
            ecole="Il est diplômé de l’EMLyon Business School."
            telephone="+33 6 51 08 27 08"
            mail="a.vahe@atega-partners.com"
          />
          <Associé
            image={ilan}
            nom="Ilan Didier"
            sous_titre="Co-fondateur & associé"
            desc="Chez Atega Partners, Ilan intervient dans les opérations à effet de levier et recompositions de capital."
            ecole="Il est diplômé de la Toulouse Business School."
            telephone="+33 6 46 16 88 40"
            mail="i.didier@atega-partners.com"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
