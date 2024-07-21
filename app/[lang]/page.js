import Image from "next/image";
import Footer from "./components/footer";
import grand_logo from "../../public/logo2 le A.png";
import Link from "next/link";
import { getDictionary } from "./dictionaries";
import DivAnimate from "./components/framer/div";

import AccueilLien from "./components/accueilLiens";
export default async function Home({ params }) {
  let t = await getDictionary(params.lang);
  
  return (
    <>
      <main className="overflow-hidden bg-[#ffffff]" id="scrollArea">
        
        <div
          className="h-screen overflow-y-hidden  w-screen main-page flex items-center justify-center text-center"
          id="front"
        >
          <Image
            src={grand_logo}
            height={250}
            className=" relative z-20 block m-auto md:absolute md:overflow-hidden md:-right-8 md:top-20"
          />

          <ul className="text-right z-20  text-white liste-accueil italic list-none absolute bottom-8 pr-2 right-6 md:right-12 text-3xl">
            <li>{t.accueil.cession}</li>
            <li>{t.accueil.acquisition}</li>
            <li>{t.accueil.levee}</li>
            <li>{t.accueil.conseil}</li>
          </ul>
        </div>
        <div>
          <div className="min-h-screen h-fit pb-10 md:pb-0 bg-nav">
            <div className="page-title-line  text-white w-fit  ml-4 md:ml-10 lg:ml-24 pt-16  pl-5 md:pl-0 pb-5 md:pb-0">
              <h2 className="">{t.accueil.apropos}</h2>
              <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
            </div>
            <div className="flex mt-8 md:mt-32 justify-center items-center">
              <AccueilLien dict={t.navbar} />
            </div>
          </div>
        </div>

        {/* <div className="h-screen relative">
        <div className="page-title md:top-28 pl-10 md:pl-0 pb-5 md:pb-0">
          <h2 className="text-nav text-[40px]">Notre réseau d'experts</h2>
          <Image src={dots} className="md:block hidden md:mr-4" />
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
      </main>
      <Footer />
    </>
  );
}
