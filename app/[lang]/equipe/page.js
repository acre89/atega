import Associé from "../components/associeCard";
import henri from "../../../public/henri.jpeg";
import alfred from "../../../public/alfred.jpeg";
import ilan from "../../../public/Ilan.jpeg";
import Footer from "../components/footer";
import { getDictionary } from "../dictionaries";
import TitleAnimate from "../components/framer/title";
import DivAnimate from "../components/framer/right";
export default async function Equipe({ params }) {
  let t = await getDictionary(params.lang);
  return (
    <>
      <div
        id="equipe"
        className="2xl:w-[1536px]  2xl:mx-auto md:h-fit relative md:pt-24"
      >
        <TitleAnimate>
          <h2 className="text-nav">{t.navbar.equipe}</h2>
          <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
        </TitleAnimate>
        <div className="mx-28 my-16 flex flex-col md:grid gap-24 md:gap-3 md:grid-cols-3 md:grid-rows-1">
          <DivAnimate delay={"0.6s"}>
            <Associé
              image={henri}
              nom="Henri de Bourrousse"
              sous_titre={t.equipe.subtitle}
              desc={t.equipe.henri}
              ecole={t.equipe.master + " - " + "Audencia"}
              telephone="+33 7 86 44 05 93"
              mail="h.debourrousse@atega-partners.com"
            />
          </DivAnimate>
          <DivAnimate delay={"1.2s"}>
            <Associé
              image={alfred}
              nom="Alfred Vahe"
              sous_titre={t.equipe.subtitle}
              desc={t.equipe.alfred}
              ecole={t.equipe.master + " - " + "EMLyon"}
              telephone="+33 6 51 08 27 08"
              mail="a.vahe@atega-partners.com"
            />
          </DivAnimate>
          <DivAnimate delay={"1.8s"}>
            <Associé
              image={ilan}
              nom="Ilan Didier"
              sous_titre={t.equipe.subtitle}
              desc={t.equipe.ilan}
              ecole={t.equipe.master + " - " + "TBS Education"}
              telephone="+33 6 46 16 88 40"
              mail="i.didier@atega-partners.com"
            />
          </DivAnimate>
        </div>
      </div>
      <Footer />
    </>
  );
}
