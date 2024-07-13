import Image from "next/image";
import cart from "../../../public/cart.svg";
import camion from "../../../public/camion.svg";
import tech from "../../../public/tech.svg";
import energy from "../../../public/energy.svg";
import plant from "../../../public/plant.svg";
import sante from "../../../public/sante.svg";
import IconListAnimate from "./framer/iconLists";

export default function List({ dict }) {
  return (
    <div className="w-full md:w-fit h-full flex flex-row lg:inline-block justify-around">
      <ul className="flex flex-col lg:flex-row xl:flex-wrap gap-10 xl:gap-10">
        <li>
          <IconListAnimate delay={"1s"}>
            <div className="h-10 w-10 rounded-full bg-nav flex items-center justify-center">
              <Image src={cart} className="icon-image" />
            </div>
            <p className="icon-text">{dict.biens}</p>
          </IconListAnimate>
        </li>
        <IconListAnimate delay={"1.2s"}>
          <div className="h-10 w-10 rounded-full bg-nav flex items-center justify-center">
            <Image src={plant} className="icon-image" />
          </div>
          <p className="icon-text">{dict.industrie}</p>
        </IconListAnimate>
        <IconListAnimate delay={"1.4s"}>
          <div className="h-10 w-10 rounded-full bg-nav flex items-center justify-center">
            <Image src={camion} className="icon-image" />
          </div>
          <p className="icon-text">{dict.transport}</p>
        </IconListAnimate>
      </ul>
      <ul className="flex flex-col lg:flex-row lg:pt-10 flex-wrap gap-10 xl:gap-10">
        <IconListAnimate delay={"1.6s"}>
          <div className="h-10 w-10 rounded-full bg-nav flex items-center justify-center">
            <Image src={tech} className="icon-image" />
          </div>
          <p className="icon-text">Tech</p>
        </IconListAnimate>
        <IconListAnimate delay={"1.8s"}>
          <div className="h-10   w-10 rounded-full bg-nav flex items-center justify-center">
            <Image src={energy} className="icon-image " />
          </div>
          <p className="icon-text">{dict.energie}</p>
        </IconListAnimate>
        <IconListAnimate delay={"2s"}>
          <div className="h-10 w-10 rounded-full bg-nav flex items-center justify-center">
            <Image src={sante} className="icon-image" />
          </div>
          <p className="icon-text">{dict.sante}</p>
        </IconListAnimate>
      </ul>
    </div>
  );
}
