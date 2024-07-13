import Image from "next/image";
import location from "../../../public/adresse.png"
import mail from "../../../public/mail.png"
import telephone from "../../../public/telephone.png"

export default function Footer(){
    return (
      <div className="flex relative shado-xl w-full overflow-hidden h-[400px] gap-0">
        <div className="bg-nav w-[45%] pl-32 md:mt-0 mt-20 pt-10 z-30  text-white">
          <div className="flex gap-4 items-center">
            <Image height={40} src={location} />
            <p>117 avenue des Champs-Elysées, 75008 Paris</p>
          </div>
          <div className="flex gap-4 items-center pt-4">
            <Image height={40} src={mail} />
            <p>h.debourrousse@atega-partners.com</p>
          </div>
          <div className="flex gap-4 items-center py-4">
            <Image height={40} src={telephone} />
            <p>06 11 22 33 44</p>
          </div>
          
        </div>
        <div className="contact-image relative flex">
  
        </div>
        <div className="absolute left-[40%] top-0 bottom-0 m-auto h-[130%] z-20 w-36 rotate-12 bg-nav"></div>
      </div>
    );
}