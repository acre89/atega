import Image from "next/image";
import grand_logo from "../../public/logo2 le A.png";
import { getDictionary } from "./dictionaries";
import AccueilLien from "./components/accueilLiens";
import FooterWhite from "./components/footerWhite";
import ListAnimate from "./components/framer/list";
import DivAnimate from "./components/framer/div";
export default async function Home({ params }) {
  let t = await getDictionary(params.lang);

  return (
    <>
      <main className="overflow-hidden bg-[#ffffff]" id="scrollArea">
        <div
          className="h-screen w-screen main-page flex items-center justify-center text-center"
          id="front"
        >
          <div className="w-screen relative 2xl:w-[1536px] h-screen overflow-x-hidden">
            <Image
              src={grand_logo}
              alt="logo de l'entreprise"
              height={250}
              className=" relative z-20 hidden md:block m-auto md:absolute md:overflow-hidden md:-right-8 md:top-20"
            />
            <div className="w-full h-full flex justify-center items-center pt-12">
              <ul className="md:text-right z-20 text-center  text-white liste-accueil italic list-none md:absolute bottom-14 pb-14 md:pb-0 md:bottom-8 pr-2 right-6 md:right-12 text-2xl sm:text-3xl">
                <ListAnimate>{t.accueil.cession}</ListAnimate>
                <ListAnimate delay={"0.2s"}>
                  {t.accueil.acquisition}
                </ListAnimate>
                <ListAnimate delay={"0.4s"}>{t.accueil.levee}</ListAnimate>
                <ListAnimate delay={"0.6s"}>{t.accueil.conseil}</ListAnimate>
              </ul>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="min-h-screen  h-fit pb-10 md:pb-0 bg-nav">
            <div className="2xl:w-[1536px] block 2xl:mx-auto">
              <div className="page-title-line  text-white w-fit  ml-4 md:ml-10 lg:ml-24 pt-16  pl-5 md:pl-0 pb-5 md:pb-0">
                <h2 className="">{t.accueil.apropos}</h2>
                <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
              </div>
              <div className="mx-6 md:mx-12 lg:mx-28 mt-8 lg:mt-16 ">
                <DivAnimate>
                  <p className=" text-white full-para italic text-xl">
                    {t.apropos.intro}
                  </p>
                </DivAnimate>
              </div>
              <div className="flex mt-8 md:mt-32 justify-center items-center">
                <AccueilLien dict={t.navbar} />
              </div>
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
      <FooterWhite dict={t.footer} />
    </>
  );
}
