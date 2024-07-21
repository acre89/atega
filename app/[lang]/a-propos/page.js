import List from "../components/iconList";
import Footer from "../components/footer";
import { getDictionary } from "../dictionaries";
import ListAnimate from "../components/framer/list";
import TitleAnimate from "../components/framer/title";
import DivAnimate from "../components/framer/div";
export default async function Propos({ params }) {
  let t = await getDictionary(params.lang);

  return (
    <>
      <div
        id="a-propos"
        className="pt-24 h-fit w-screen 2xl:w-[1536px] pb-24  2xl:mx-auto text-nav relative "
      >
        <TitleAnimate>
          <h2 className="">{t.navbar.presentation}</h2>
          <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
        </TitleAnimate>

        <div className=" mx-6 md:mx-12 lg:mx-28 mt-16">
          <div className="">
            <DivAnimate>
              <p className="pb-24 text-center text-xl ">{t.apropos.intro}</p>
            </DivAnimate>
            <div className="flex flex-col md:flex-row md:justify-between pb-5 md:pb-16 ">
              <div className="w-fit">
                <DivAnimate>
                  <h2 className="pb-8 text-3xl font-bold">
                    {t.apropos.missions}
                  </h2>
                </DivAnimate>

                <ul className="list-disc text-xl pl-4">
                  <ListAnimate delay={"1s"}>
                    {t.apropos.bullet10} <em>{t.apropos.bullet11}</em>{" "}
                    {t.apropos.bullet12}
                  </ListAnimate>
                  <ListAnimate delay={"1.2s"}>
                    <em>{t.apropos.bullet20}</em> {t.apropos.bullet21}
                  </ListAnimate>
                  <ListAnimate delay={"1.4s"}>
                    {t.apropos.bullet30} <em>{t.apropos.bullet31}</em>{" "}
                    {t.apropos.bullet32} <em>{t.apropos.bullet33}</em>
                  </ListAnimate>

                  <ListAnimate delay={"1.6s"}>
                    <em>{t.apropos.bullet40}</em> {t.apropos.bullet41}
                  </ListAnimate>

                  <ListAnimate delay={"1.8s"}>
                    {t.apropos.bullet51} <em>{t.apropos.bullet52} </em> <br />{" "}
                    <em>{t.apropos.bullet53}</em>
                  </ListAnimate>
                </ul>
              </div>
              <div className="flex flex-col">
                <DivAnimate delay={"0.6s"}>
                  <h2 className="pb-8 mt-10 md:mt-0 font-bold text-3xl">
                    {t.apropos.secteurs}
                  </h2>
                </DivAnimate>
                <List dict={t.liste} />
              </div>
            </div>
            <DivAnimate>
              <div className="bg-nav px-6 py-3 text-xl shadow-xl text-white text-center italic mt-10 md:mt-16">
                {t.apropos.encart1}{" "}
                <em className="italic">{t.apropos.encart2}</em>{" "}
                {t.apropos.encart3}{" "}
                <em className="italic">{t.apropos.encart4}</em>{" "}
                {t.apropos.encart5}
              </div>
            </DivAnimate>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
