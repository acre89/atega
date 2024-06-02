import Image from "next/image";
import Navbar from "./components/navbar";
import List from "./components/iconList";
import henri from "../public/henri.jpg";
import alfred from "../public/alfred.jpg";
import ilan from "../public/ilan.png";
import logo_blanc from "../public/logo2 le A.png";
import back from "../public/rea_bg.png";
import Card from "./components/expertCard";
import Associé from "./components/associeCard";
import center from "../public/center.png";
import dots from "../public/dots.svg";

export default function Home() {
  return (
    <main className=" bg-[#ffffff]">
      <Navbar />
      <div className="h-screen w-screen main-page flex items-center justify-center text-center ">
        <h1 className="px-24 text-white title">
          Partenaire exclusif des dirigeants
        </h1>
      </div>
      <div
        id="a-propos"
        className="pt-10 md:pt-40 h-fit md:h-screen w-screen text-nav relative "
      >
        <div className="page-title md:top-40 pl-5 md:pl-0 pb-5 md:pb-0">
          <h2 className="">A propos</h2>
          <Image src={dots} className="md:block hidden" />
        </div>
        <div className="px-5 md:px-40 ">
          <p className="pb-12 text-center text-lg">
            Société indépendante de conseil financier spécialisée dans les
            opérations stratégiques des PME, Atega Partners accompagne ses
            clients dans leurs cessions, transmissions, acquisitions, levée de
            fonds, recomposition de capital
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-32 pb-5 md:pb-16 w-full">
            <div className="flex flex-col items-baseline">
              <h2 className="pb-8 text-2xl">Secteurs couverts</h2>
              <List />
            </div>
            <div className="w-fit ">
              <h2 className="pb-8 text-2xl">Nos missions</h2>
              <ul className="list-disc text-lg pl-4">
                <li>
                  Concrétiser les <em>amibtions</em> des dirigeants
                </li>
                <li className="pt-5">
                  <em>Valoriser</em> le patrimoine professionnel
                </li>
                <li className="pt-5">
                  <em>Pérenniser</em> l'activité
                </li>
                <li className="pt-5">
                  Sécuriser le <em>développement</em>
                </li>
                <li className="pt-5">
                  Implémenter des <em>solutions sur mesure</em>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-nav px-6 py-3  md:mx-32 text-white text-center italic">
            Atega Partners, au plus proche des dirigeants, vous accompagnera
            avec un conseil exclusif et sur mesure tout au long de notre mission
            à vos côtés
          </div>
        </div>
      </div>
      <div id="expertise" className=" md:pt-40 pt-16 relative  text-nav ">
        <div className="page-title md:top-40 pl-5 md:pl-0 pb-5 md:pb-0">
          <h2 className="">Nos expertises</h2>
          <Image src={dots} className="md:block hidden" />
        </div>
        <div className=" md:pl-40 pl-10 pr-10 flex flex-col md:flex-row justify-center  items-center gap-3">
          <div className="flex flex-col gap-8">
            <div className="">
              <h2 className="text-2xl pb-5 text-orange">Cession</h2>
              <p>
                Identification d’acheteurs industriels ou financiers pour
                réaliser des cessions totales ou partielles.
                <br /> <br />
                Préparation et mise en valeur de la société en vue de la
                cession.
                <br />
                <br />
                Objectifs : nouveaux projets, départ à la retraite, etc.
              </p>
            </div>
            <div className="">
              <h2 className="text-2xl pb-5 text-orange">Acquisition</h2>
              <p>
                Expertise dans l’identification, l’évaluation et la réalisation
                d'acquisitions stratégiques.
                <br />
                <br />
                Objectifs : acquérir de nouvelles compétences, élargir son
                positionnement géographique, gagner des parts de marché, etc.
              </p>
            </div>
          </div>
          <div className="">
            <Image src={center} className="md:block hidden" />
          </div>
          <div className="flex flex-col gap-8">
            <div className="">
              <h2 className="text-2xl pb-5 text-orange">Levée de fonds</h2>
              <p>
                Préparation de la documentation, mise en relation avec des
                investisseurs industriels, privés ou fonds d’investissement.
                <br />
                <br />
                Objectifs : développer un nouveau produit, obtenir un
                financement pour faire croître son activité, etc.
              </p>
            </div>
            <div className="">
              <h2 className="text-2xl pb-5 text-orange">
                Réorganisation du capital
              </h2>
              <p>
                Accompagnement stratégique dans la transmission partielle ou
                totale.
                <br />
                <br />
                Objectifs : réaliser la monétisation de son patrimoine
                professionnel, transmettre son entreprise au management, etc.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-nav px-6 py-3 mx-5 md:mx-72 text-white text-center italic mt-10 md:mt-16">
          Atega Partners s'engage à répondre aux besoins spécifiques de ses
          clients. Nos services de cession, acquisition, levée de fonds et
          réorganisation du capital sont conçus pour fournir des solutions sur
          mesure, assurant ainsi une réponse adaptée à votre demande.
        </div>
      </div>
      <div id="equipe" className="md:h-fit min-h-screen relative pt-16 md:pt-40">
        <div className="page-title md:top-40 pl-5 md:pl-0 pb-5 md:pb-0">
          <h2 className="text-nav">Notre équipe</h2>
          <Image src={dots} className="md:block hidden" />
        </div>
        <div className="md:pl-40 pl-5 pr-5 flex flex-col md:grid gap-8 md:gap-3 md:grid-cols-2 md:grid-rows-2">
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
          <div className="col-span-full rows-span-2 h-80 group-image md:flex hidden justify-center items-end">
            <div className=" bottom-3 left-1/2 z-10">
              <Image src={logo_blanc} height={90} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-screen relative">
        <div className="page-title md:top-28 pl-10 md:pl-0 pb-5 md:pb-0">
          <h2 className="text-nav text-[40px]">Notre réseau d'experts</h2>
          <Image src={dots} className="md:block hidden" />
        </div>
        <div className="px-40 py-28 text-center">
          <p>
            Atega Partners dispose d’un réseau d’experts, spécialistes dans leur
            domaine et disponibles pour partager leur savoir et la vision de
            leur marché. Atega Partners est ainsi en mesure d’intervenir
            efficacement sur de nombreux sujets techniques et spécifiques.
          </p>
          <div className="flex justify-between py-10">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-between">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div> */}
      <div>
        <div className="bg-nav text-xl md:mt-0 mt-20 p-24 text-white">
          <div className="flex gap-9 items-center">
            <div className="h-24 w-24 rounded-full bg-white border border-orange"></div>
            <p>
              117 avenue des Champs-Elysées <br /> 75008 Paris
            </p>
          </div>
          <div className="flex gap-9 items-center py-24">
            <div className="h-24 w-24 rounded-full bg-white border border-orange"></div>
            <p>contact@atega-partners.com</p>
          </div>
          <div className="flex gap-9 items-center">
            <div className="h-24 w-24 rounded-full bg-white border border-orange"></div>
            <p>www.atega-partners.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
