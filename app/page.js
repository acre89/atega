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
          Conseil financier engagé auprès des entrepreneurs
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
        <div className=" md:pl-40 pl-10 pr-10 flex flex-col md:flex-row justify-center items-start gap-3">
          <div className="flex flex-col gap-8 w-10/12">
            <div className="">
              <h2 className="text-2xl pb-5 text-orange">Cession</h2>
              <p>
                Atega Partners fournit un support stratégique et technique et
                sur mesure durant toute l'opération, qu'il s'agisse d'une
                cession partielle ou totale d'une entreprise, d'une filiale, ou
                d'une branche d'activité, incluant la vente de titres ou de
                fonds de commerce. Notre équipe élabore l'ensemble des documents
                nécessaires au succès de l'opération. Nous explorons toutes les
                possibilités de contreparties, même celles aux synergies moins
                apparentes, et identifions les acquéreurs potentiels dont les
                intérêts sont clairement alignés, sur le plan financier et
                extra-financier.
                <br /> <br />
                Notre expertise en ingénierie financière et en négociation nous
                permet d'établir la valeur de marché la plus précise. Nous
                assurons une coordination étroite avec tous les acteurs
                impliqués, de l'audit aux négociations, jusqu'au closing de
                l'opération.
                <br /> <br />
                Identification d’acheteurs industriels ou financiers pour
                réaliser des cessions totales ou partielles.
              </p>
            </div>
            <div className="">
              <h2 className="text-2xl pb-5 text-orange">Acquisition</h2>
              <p>
                Nous offrons un soutien crucial pour les transactions de
                croissance externe, telles que l'acquisition de titres ou de
                fonds de commerce.
                <br />
                <br /> Atega Partners assiste les dirigeants dans l'élaboration
                de la structure et la stratégie de croissance externe. Nous
                dressons une liste de cibles potentielles basée sur les critères
                définis par le client. Suite à une analyse minutieuse et à
                l'approbation du client, nous engageons des discussions avec les
                entreprises ciblées et négocions les lettres d'intention avec
                leurs dirigeants.
                <br />
                <br /> Notre compétence en structuration des transactions de
                croissance externe nous permet d'améliorer la recherche de
                financements, qu'ils soient sous forme de dette bancaire ou
                d'apport en capital. Nous guidons les dirigeants à travers les
                négociations avec les différentes parties prenantes et les
                accompagnons à chaque étape du processus jusqu'à la finalisation
                de l'opération. Expertise dans l’identification, l’évaluation et
                la réalisation d'acquisitions stratégiques.
              </p>
            </div>
          </div>
          <div className="pt-80 flex items-center justify-center ">
            <Image src={center} className="md:block hidden" />
          </div>
          <div className="flex flex-col gap-8 w-10/12">
            <div className="">
              <h2 className="text-2xl pb-5 text-orange">Levée de fonds</h2>
              <p>
                Atega Partners se positionne en véritable chef d'orchestre pour
                l'obtention de financements, en apportant un conseil stratégique
                et financier et en vous connectant à notre vaste réseau
                d'investisseurs privés et institutionnels.
                <br />
                <br /> Notre équipe guide les dirigeants dans la planification
                de leur levée de fonds. Nous préparons tous les documents
                nécessaires pour répondre aux attentes des investisseurs. Avant
                les présentations, nous préparons soigneusement les dirigeants
                pour maximiser leur performance lors des rencontres, que nous
                organisons également. Nous négocions les conditions
                d'investissement et soutenons nos clients à chaque étape du
                processus, jusqu'à la conclusion de l'opération. <br />
                <br />
                Pleinement engagé dans votre opération, Atega Partners maximise
                ses efforts afin d'atteindre les meilleurs résultats pour chaque
                transaction.
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
      <div
        id="equipe"
        className="md:h-fit min-h-screen relative pt-16 md:pt-40"
      >
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
