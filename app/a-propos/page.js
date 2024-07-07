import Image from "next/image";
import dots from "../../public/dots_underline.svg";
import List from "../components/iconList";
import Footer from "../components/footer";

export default function Propos(){
    return (
      <>
        <div
          id="a-propos"
          className="pt-10 md:pt-24 h-fit w-screen 2xl:w-[1536px] pb-24  2xl:mx-auto text-nav relative "
        >
          <div className="page-title-line w-fit mt-10 ml-40  pl-5 md:pl-0 pb-5 md:pb-0">
            <h2 className="">A propos</h2>
            <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
          </div>

          <div className="mx-40 mt-16">
            <div className="">
              <p className="pb-24 text-center text-xl ">
                Société indépendante de conseil financier spécialisée dans les
                opérations stratégiques des PME, Atega Partners accompagne ses
                clients dans leurs cessions, transmissions, acquisitions, levée
                de fonds, recomposition de capital
              </p>
              <div className="flex flex-col md:flex-row md:justify-between pb-5 md:pb-16 ">
                <div className="w-fit">
                  <h2 className="pb-8 text-3xl font-bold">Nos missions</h2>

                  <ul className="list-disc text-xl pl-4">
                    <li>
                      Concrétiser les{" "}
                      <span className="font-bold">ambitions</span> des
                      dirigeants
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
                <div className="flex flex-col">
                  <h2 className="pb-8 font-bold text-3xl">Secteurs couverts</h2>
                  <List />
                </div>
              </div>

              <div className="bg-nav px-6 py-3 mx-20  text-white text-center italic mt-10 md:mt-16">
                Atega Partners, au plus proche des dirigeants, vous accompagnera
                avec un conseil exclusif et sur mesure tout au long de notre
                mission à vos côtés
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}