import Footer from "../components/footer";
import TitleAnimate from "../components/framer/title";
import { getDictionary } from "../dictionaries";
import DivAnimate from "../components/framer/div";
export default async function Expertises({ params }) {
  let t = await getDictionary(params.lang);
  return (
    <>
      <div
        id="expertise"
        className="2xl:w-[1536px]  2xl:mx-auto pt-24 relative pb-24  text-nav "
      >
        <TitleAnimate>
          <h2 className="">{t.navbar.expertises}</h2>
          <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
        </TitleAnimate>
        <div className="mx-6 md:mx-12 lg:mx-28 mt-16">
          <div className=" w-full h-fit relative flex flex-col md:grid gap-20 md:grid-cols-2 md:grid-rows-2">
            <DivAnimate delay={"0.6s"}>
              <div className=" ">
                <h2 className="text-2xl text-center pb-2 font-bold ex-titre">
                  {t.expertise.cession_titre}
                </h2>
                <div className="h-0.5 w-full bg-orange mb-5"></div>
                <p className="text-justify">
                  {t.expertise.cession1} <em> {t.expertise.cession2}</em>
                  {t.expertise.cession3}
                  <br /> <br /> {t.expertise.cession4}
                  <em> {t.expertise.cession5}</em>
                  {t.expertise.cession6}
                  <em> {t.expertise.cession7}</em>
                  {t.expertise.cession8}
                  <em> {t.expertise.cession9}</em> {t.expertise.cession10}
                  <em>{t.expertise.cession11}</em>.
                </p>
              </div>
            </DivAnimate>
            <DivAnimate delay={"1.2s"}>
              <div className=" ">
                <h2 className="text-2xl pb-2 ex-titre text-center font-bold">
                  {t.expertise.acquisition_titre}
                </h2>
                <div className="h-0.5 w-full bg-orange mb-5"></div>
                <p className="text-justify ">
                  {t.expertise.acquisition1}
                  <em> {t.expertise.acquisition2}</em>
                  . <br />
                  <br /> {t.expertise.acquisition3}
                  <em> {t.expertise.acquisition4}</em>{" "}
                  {t.expertise.acquisition5}
                  <em> {t.expertise.acquisition6}</em>
                  {t.expertise.acquisition7}
                  <em> {t.expertise.acquisition8}</em>
                  {t.expertise.acquisition9}{" "}
                  <em>{t.expertise.acquisition10}</em>,
                  {t.expertise.acquisition11}{" "}
                  <em>{t.expertise.acquisition12}</em>{" "}
                  {t.expertise.acquisition13}{" "}
                  <em>{t.expertise.acquisition14}</em>.
                </p>
              </div>
            </DivAnimate>
            <DivAnimate delay={"1.8s"}>
              <div className="">
                <h2 className="text-2xl ex-titre pb-2 text-center  font-bold">
                  {t.expertise.fond_titre}
                </h2>
                <div className="h-0.5 w-full bg-orange mb-5"></div>
                <p className="text-justify">
                  {t.expertise.fond1} <em>{t.expertise.fond2}</em>,
                  {t.expertise.fond3} <em>{t.expertise.fond4}</em>.
                  <br />
                  <br />
                  {t.expertise.fond5} <em>{t.expertise.fond6}</em>{" "}
                  {t.expertise.fond7} <em> {t.expertise.fond8}</em>{" "}
                  {t.expertise.fond9} <em>{t.expertise.fond10}</em>
                  <em>{t.expertise.fond11}</em>
                  {t.expertise.fond12} <em>{t.expertise.fond13}</em>
                  {t.expertise.fond14}
                </p>
              </div>
            </DivAnimate>
            <DivAnimate delay={"2.4s"}>
              <div className="pb-10 md:pb-0">
                <h2 className="text-2xl ex-titre pb-2 text-center font-bold">
                  {t.expertise.reorga_titre}
                </h2>
                <div className="h-0.5 w-full bg-orange mb-5"></div>
                <p className="text-justify">
                  {t.expertise.reorga1} <em>{t.expertise.reorga2}</em>
                  {t.expertise.reorga3} <em>{t.expertise.reorga4}</em>
                  {t.expertise.reorga5}.
                  <br />
                  <br /> {t.expertise.reorga6} <em>{t.expertise.reorga7}</em>
                  {t.expertise.reorga8}
                  <em>{t.expertise.reorga9}</em>. {t.expertise.reorga10}{" "}
                  <em>{t.expertise.reorga11}</em>
                  <br />
                  <br />
                  {t.expertise.reorga12}
                  <em>{t.expertise.reorga13}</em>
                  {t.expertise.reorga14}
                  <em>{t.expertise.reorga15}</em>
                  {t.expertise.reorga16}
                </p>
              </div>
            </DivAnimate>
          </div>
          <DivAnimate>
            <div className="bg-nav px-6 py-3 shadow-xl text-xl  text-white text-center italic mt-10 md:mt-16">
              {t.expertise.encart1}{" "}
              <em className="italic">{t.expertise.encart2}</em>{" "}
              {t.expertise.encart3}
              <br /> {t.expertise.encart4}{" "}
              <em className="italic">{t.expertise.encart5}</em>{" "}
              {t.expertise.encart6}{" "}
              <em className="italic">{t.expertise.encart7}</em>{" "}
              {t.expertise.encart8}
            </div>
          </DivAnimate>
        </div>
      </div>
      <Footer dict={t.footer} />
    </>
  );
}
