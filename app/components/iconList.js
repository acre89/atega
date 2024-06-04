import Image from "next/image";
import cart from "../../public/cart.svg"; 
import camion from "../../public/camion.svg"; 
import tech from "../../public/tech.svg"; 
import health from "../../public/health.svg"; 
import plant from "../../public/plant.svg"; 
import energie from "../../public/camion.svg"; 

export default function List(){
    return (
      <div className="w-full md:w-fit h-full flex flex-row lg:block justify-around ">
        <div className="flex flex-col lg:flex-row xl:flex-wrap gap-10 xl:gap-24">
          <div className="flex flex-col items-center gap-3 w-28">
            <div className="h-14 w-14 rounded-full bg-nav flex items-center justify-center">
              <Image src={cart} className="icon-image" />
            </div>
            <p className="icon-text">Biens de consommation</p>
          </div>
          <div className="flex flex-col items-center gap-3 w-28">
            <div className="h-14 w-14 rounded-full bg-nav flex items-center justify-center">
              <Image src={plant} className="icon-image" />
            </div>
            <p className="icon-text">Industrie</p>
          </div>
          <div className="flex flex-col items-center gap-3 w-28">
            <div className="h-14 w-14 rounded-full bg-nav flex items-center justify-center">
              <Image src={camion} className="icon-image" />
            </div>
            <p className="icon-text">Transport & logistique</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:pt-10 flex-wrap gap-10 xl:gap-24">
          <div className="flex flex-col items-center pb-7 lg:pb-0  gap-3 w-28">
            <div className="h-14 w-14 rounded-full bg-nav flex items-center justify-center">
              <Image src={tech} className="icon-image" />
            </div>
            <p className="icon-text">Tech</p>
          </div>
          <div className="flex flex-col items-center gap-3 w-28">
            <div className="h-14 w-14 rounded-full bg-nav flex items-center justify-center">
              <Image src={energie} className="icon-image" />
            </div>
            <p className="icon-text">Energie</p>
          </div>
          <div className="flex flex-col items-center gap-3 w-28">
            <div className="h-14 w-14 rounded-full bg-nav flex items-center justify-center">
              <Image src={health} className="icon-image" />
            </div>
            <p className="icon-text">Santé</p>
          </div>
        </div>
      </div>
    );
}