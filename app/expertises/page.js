import dots from "../../public/dots_underline.svg";
import Image from "next/image";
import Footer from "../components/footer";
export default function Expertises() {
  return (
    <>
      {/* OPTION 1 */}
      <div
        id="expertise"
        className="2xl:w-[1536px]  2xl:mx-auto pt-10 md:pt-24 relative pb-24  text-nav "
      >
        <div className="page-title-line w-fit mt-10 ml-32  pl-5 md:pl-0 pb-5 md:pb-0">
          <h2 className="">Nos expertises</h2>
          <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
        </div>
        <div className="mx-28 mt-16">
          <div className=" w-full h-fit relative flex flex-col md:grid gap-20 md:grid-cols-2 md:grid-rows-2">
            <div className=" ">
              <h2 className="text-2xl text-center pb-2 font-bold ex-titre">
                Cession
              </h2>
              <div className="h-0.5 w-full bg-orange mb-5"></div>
              <p className="text-justify">
                Atega Partners fournit un{" "}
                <em>
                  {" "}
                  support stratégique et technique et sur mesure durant toute
                  l'opération
                </em>
                , qu'il s'agisse d'une cession partielle ou totale d'une
                entreprise, d'une filiale, ou d'une branche d'activité, incluant
                la vente de titres ou de fonds de commerce.
                <br /> <br /> Notre équipe élabore l'ensemble des documents
                nécessaires au succès de l'opération. Nous explorons
                <em> toutes les possibilités de contreparties</em>, même celles
                aux synergies moins apparentes, et identifions les acquéreurs
                potentiels dont les intérêts sont clairement alignés, sur le
                plan financier et extra-financier. Notre expertise en ingénierie
                financière et en négociation nous permet d'établir
                <em> la valeur de marché la plus précise</em>. Nous assurons une
                <em> coordination étroite</em> avec tous les acteurs impliqués,
                de l'audit aux négociations, jusqu'au
                <em> closing de l'opération</em>.
              </p>
            </div>
            <div className=" ">
              <h2 className="text-2xl pb-2 ex-titre text-center font-bold">
                Acquisition
              </h2>
              <div className="h-0.5 w-full bg-orange mb-5"></div>
              <p className="text-justify ">
                Nous offrons un soutien crucial pour les transactions de
                croissance externe, telles que l'acquisition de titres ou de
                fonds de commerce. Atega Partners assiste les dirigeants dans
                <em>
                  {" "}
                  l'élaboration de la structure et la stratégie de croissance
                  externe
                </em>
                . <br />
                <br /> Nous dressons une <em> liste</em> de
                <em> cibles potentielles</em> basée sur les
                <em> critères définis par le client</em>. Suite à une analyse
                <em> minutieuse</em> et à l'approbation du client, nous
                engageons des discussions avec les entreprises ciblées et
                négocions les lettres d'intention avec leurs dirigeants. Notre
                compétence en structuration des transactions de croissance
                externe nous permet{" "}
                <em>d'améliorer la recherche de financements</em>, qu'ils soient
                sous forme de dette bancaire ou d'apport en capital. Nous
                guidons les dirigeants à travers les <em> négociations</em> avec
                les différentes parties prenantes et les accompagnons à chaque
                étape du processus{" "}
                <em>jusqu'à la finalisation de l'opération</em>.
              </p>
            </div>

            <div className="">
              <h2 className="text-2xl ex-titre pb-2 text-center  font-bold">
                Levée de fonds
              </h2>
              <div className="h-0.5 w-full bg-orange mb-5"></div>
              <p className="text-justify">
                Atega Partners se positionne en véritable{" "}
                <em>chef d'orchestre pour l'obtention de financements</em>, en
                apportant un conseil stratégique et financier et en vous
                connectant à notre{" "}
                <em>vaste réseau d'investisseurs privés et institutionnels</em>.
                <br />
                <br /> Notre équipe guide les dirigeants dans la{" "}
                <em>planification</em>
                de leur levée de fonds. Nous préparons tous les documents
                nécessaires pour répondre aux attentes des investisseurs. Avant
                les présentations, nous préparons soigneusement les dirigeants
                pour <em> maximiser leur performance</em> lors des rencontres,
                que nous organisons également. Nous{" "}
                <em>négocions les conditions d'investissement</em> et{" "}
                <em>soutenons</em>
                nos clients à chaque étape du processus,{" "}
                <em>jusqu'à la conclusion de l'opération</em>. Pleinement engagé
                dans votre opération, Atega Partners maximise ses efforts afin
                d'atteindre les meilleurs résultats pour chaque transaction.
              </p>
            </div>
            <div className="">
              <h2 className="text-2xl ex-titre pb-2 text-center font-bold">
                Réorganisation du capital
              </h2>
              <div className="h-0.5 w-full bg-orange mb-5"></div>
              <p className="text-justify">
                Atega Partners se positionne en véritable{" "}
                <em>chef d'orchestre pour l'obtention de financements</em>, en
                apportant un conseil stratégique et financier et en vous
                connectant à notre{" "}
                <em>vaste réseau d'investisseurs privés et institutionnels</em>.
                <br />
                <br /> Notre équipe guide les dirigeants dans la{" "}
                <em>planification</em>
                de leur levée de fonds. Nous préparons tous les documents
                nécessaires pour répondre aux attentes des investisseurs. Avant
                les présentations, nous préparons soigneusement les dirigeants
                pour <em> maximiser leur performance</em> lors des rencontres,
                que nous organisons également. Nous{" "}
                <em>négocions les conditions d'investissement</em> et{" "}
                <em>soutenons</em>
                nos clients à chaque étape du processus,{" "}
                <em>jusqu'à la conclusion de l'opération</em>. Pleinement engagé
                dans votre opération, Atega Partners maximise ses efforts afin
                d'atteindre les meilleurs résultats pour chaque transaction.
              </p>
            </div>
          </div>
          <div className="bg-nav px-6 py-3 mx-20  text-white text-center italic mt-10 md:mt-16">
            Atega Partners s'engage à répondre aux{" "}
            <em className="italic">besoins spécifiques</em> de ses clients.
            <br /> Nos services de conseil pour vos opérations de cession,
            acquisition, levée de fonds et réorganisation du capital sont conçus
            pour vous fournir des{" "}
            <em className="italic">solutions sur mesure</em>, assurant ainsi une
            réponse <em className="italic">adaptée</em> à votre demande.
          </div>
        </div>
      </div>

      {/* OPTION 2 */}
      <div
        id="expertise"
        className="2xl:w-[1536px]  2xl:mx-auto pt-10 md:pt-24 relative pb-24  text-nav "
      >
        <div className="page-title-line w-fit mt-10 ml-32  pl-5 md:pl-0 pb-5 md:pb-0">
          <h2 className="">Nos expertises</h2>
          <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
        </div>
        <div className="mx-28 mt-16">
          <div className=" w-full h-fit relative flex text-white flex-col md:grid gap-12 md:grid-cols-2 md:grid-rows-2">
            <div className=" bg-nav p-4">
              <h2 className="text-2xl text-center pb-2 font-bold ex-titre">
                Cession
              </h2>
              <div className="h-0.5 w-full bg-orange mb-5"></div>
              <p className="text-justify">
                Atega Partners fournit un{" "}
                <em>
                  {" "}
                  support stratégique et technique et sur mesure durant toute
                  l'opération
                </em>
                , qu'il s'agisse d'une cession partielle ou totale d'une
                entreprise, d'une filiale, ou d'une branche d'activité, incluant
                la vente de titres ou de fonds de commerce.
                <br /> <br /> Notre équipe élabore l'ensemble des documents
                nécessaires au succès de l'opération. Nous explorons
                <em> toutes les possibilités de contreparties</em>, même celles
                aux synergies moins apparentes, et identifions les acquéreurs
                potentiels dont les intérêts sont clairement alignés, sur le
                plan financier et extra-financier. Notre expertise en ingénierie
                financière et en négociation nous permet d'établir
                <em> la valeur de marché la plus précise</em>. Nous assurons une
                <em> coordination étroite</em> avec tous les acteurs impliqués,
                de l'audit aux négociations, jusqu'au
                <em> closing de l'opération</em>.
              </p>
            </div>
            <div className="bg-nav p-4 ">
              <h2 className="text-2xl pb-2 text-center ex-titre font-bold">
                Acquisition
              </h2>
              <div className="h-0.5 w-full bg-orange mb-5"></div>
              <p className="text-justify ">
                Nous offrons un soutien crucial pour les transactions de
                croissance externe, telles que l'acquisition de titres ou de
                fonds de commerce. Atega Partners assiste les dirigeants dans
                <em>
                  {" "}
                  l'élaboration de la structure et la stratégie de croissance
                  externe
                </em>
                . <br />
                <br /> Nous dressons une <em> liste</em> de
                <em> cibles potentielles</em> basée sur les
                <em> critères définis par le client</em>. Suite à une analyse
                <em> minutieuse</em> et à l'approbation du client, nous
                engageons des discussions avec les entreprises ciblées et
                négocions les lettres d'intention avec leurs dirigeants. Notre
                compétence en structuration des transactions de croissance
                externe nous permet{" "}
                <em>d'améliorer la recherche de financements</em>, qu'ils soient
                sous forme de dette bancaire ou d'apport en capital. Nous
                guidons les dirigeants à travers les <em> négociations</em> avec
                les différentes parties prenantes et les accompagnons à chaque
                étape du processus{" "}
                <em>jusqu'à la finalisation de l'opération</em>.
              </p>
            </div>

            <div className="bg-nav p-4">
              <h2 className="text-2xl pb-2 text-center ex-titre font-bold">
                Levée de fonds
              </h2>
              <div className="h-0.5 w-full bg-orange mb-5"></div>
              <p className="text-justify">
                Atega Partners se positionne en véritable{" "}
                <em>chef d'orchestre pour l'obtention de financements</em>, en
                apportant un conseil stratégique et financier et en vous
                connectant à notre{" "}
                <em>vaste réseau d'investisseurs privés et institutionnels</em>.
                <br />
                <br /> Notre équipe guide les dirigeants dans la{" "}
                <em>planification</em>
                de leur levée de fonds. Nous préparons tous les documents
                nécessaires pour répondre aux attentes des investisseurs. Avant
                les présentations, nous préparons soigneusement les dirigeants
                pour <em> maximiser leur performance</em> lors des rencontres,
                que nous organisons également. Nous{" "}
                <em>négocions les conditions d'investissement</em> et{" "}
                <em>soutenons</em>
                nos clients à chaque étape du processus,{" "}
                <em>jusqu'à la conclusion de l'opération</em>. Pleinement engagé
                dans votre opération, Atega Partners maximise ses efforts afin
                d'atteindre les meilleurs résultats pour chaque transaction.
              </p>
            </div>
            <div className="bg-nav p-4">
              <h2 className="text-2xl pb-2 text-center ex-titre font-bold">
                Réorganisation du capital
              </h2>
              <div className="h-0.5 w-full bg-orange mb-5"></div>
              <p className="text-justify">
                Atega Partners se positionne en véritable{" "}
                <em>chef d'orchestre pour l'obtention de financements</em>, en
                apportant un conseil stratégique et financier et en vous
                connectant à notre{" "}
                <em>vaste réseau d'investisseurs privés et institutionnels</em>.
                <br />
                <br /> Notre équipe guide les dirigeants dans la{" "}
                <em>planification</em>
                de leur levée de fonds. Nous préparons tous les documents
                nécessaires pour répondre aux attentes des investisseurs. Avant
                les présentations, nous préparons soigneusement les dirigeants
                pour <em> maximiser leur performance</em> lors des rencontres,
                que nous organisons également. Nous{" "}
                <em>négocions les conditions d'investissement</em> et{" "}
                <em>soutenons</em>
                nos clients à chaque étape du processus,{" "}
                <em>jusqu'à la conclusion de l'opération</em>. Pleinement engagé
                dans votre opération, Atega Partners maximise ses efforts afin
                d'atteindre les meilleurs résultats pour chaque transaction.
              </p>
            </div>
          </div>
          <div className="bg-nav px-6 py-3 mx-20  text-white text-center italic mt-10 md:mt-16">
            Atega Partners s'engage à répondre aux{" "}
            <em className="italic">besoins spécifiques</em> de ses clients.
            <br /> Nos services de conseil pour vos opérations de cession,
            acquisition, levée de fonds et réorganisation du capital sont conçus
            pour vous fournir des{" "}
            <em className="italic">solutions sur mesure</em>, assurant ainsi une
            réponse <em className="italic">adaptée</em> à votre demande.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
