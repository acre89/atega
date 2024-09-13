import Associé from "../components/associeCard";
import henri from "../../../public/henri.jpeg";
import alfred from "../../../public/alfred.jpeg";
import ilan from "../../../public/Ilan.jpeg";
import eric from "../../../public/eric.png";
import francoise from "../../../public/francoise.png";
import talabor from "../../../public/talabor.png";
import Footer from "../components/footer";
import { getDictionary } from "../dictionaries";
import TitleAnimate from "../components/framer/title";
import DivAnimate from "../components/framer/right";
import industrie from "../../../public/industrie.png";
import finance from "../../../public/finance.png";
import inge from "../../../public/ingénierie.png";
import sante from "../../../public/santé.png";
import tech from "../../../public/tech.png";
import Expert from "../components/expertCard";

export default async function Equipe({ params }) {
  let t = await getDictionary(params.lang);
  return (
    <>
      <div
        id="equipe"
        className="2xl:w-[1536px] overflow-hidden 2xl:mx-auto min-h-screen h-fit relative py-24"
      >
        <TitleAnimate>
          <h2 className="text-nav">{t.navbar.equipe}</h2>
          <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
        </TitleAnimate>
        <div className="mx-6 md:mx-12 lg:mx-28 mt-16 flex flex-col items-center lg:grid gap-16 lg:gap-3 lg:grid-cols-3 lg:grid-rows-1">
          <DivAnimate delay={"0.6s"}>
            <Associé
              image={henri}
              nom="Henri de Bourrousse"
              sous_titre={t.equipe.subtitle}
              desc={t.equipe.henri}
              ecole={t.equipe.master + " - " + "Audencia"}
              telephone="+33 7 86 44 05 93"
              mail="h.debourrousse@atega-partners.com"
              linkedin="https://www.linkedin.com/in/henri-de-bourrousse-539472120/"
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
              linkedin="https://www.linkedin.com/in/alfredvahe/"
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
              linkedin="https://www.linkedin.com/in/ilan-didier-438216176/"
            />
          </DivAnimate>
        </div>
      </div>
      <div
        id="reseau"
        className="2xl:w-[1536px] overflow-hidden 2xl:mx-auto min-h-screen h-fit relative pb-24"
      >
        <TitleAnimate>
          <h2 className="text-nav">{t.navbar.reseau}</h2>
          <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
        </TitleAnimate>
        <div className="mx-6 md:mx-12 lg:mx-28 mt-16 flex flex-col items-center lg:grid gap-16 lg:gap-3 lg:grid-cols-3 lg:grid-rows-1">
          <DivAnimate delay={"0.6s"}>
            <Expert
              image={eric}
              nom="Eric de Tocqueville"
              desc1={t.reseau.eric1}
              desc2={t.reseau.eric2}
              ecole={t.reseau.eric3}
              pictos={[industrie, tech, inge]}
              linkedin="https://www.linkedin.com/in/talabor-szabo/"
            />
          </DivAnimate>
          <DivAnimate delay={"1.2s"}>
            <Expert
              image={francoise}
              nom="Françoise Duveau"
              desc1={t.reseau.francoise1}
              desc2={t.reseau.francoise2}
              pictos={[sante]}
              linkedin="https://www.linkedin.com/in/francoise-duveau-a9625415/"
            />
          </DivAnimate>
          <DivAnimate delay={"1.8s"}>
            <Expert
              image={talabor}
              nom="Talabor Szabo"
              desc1={t.reseau.talabor1}
              desc2={t.reseau.talabor2}
              ecole={t.reseau.talabor3}
              pictos={[finance]}
              linkedin="https://www.linkedin.com/in/eric-de-tocqueville-32119531/"
            />
          </DivAnimate>
        </div>
      </div>
      <Footer dict={t.footer} />
    </>
  );
}
