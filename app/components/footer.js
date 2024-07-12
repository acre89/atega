import Image from "next/image";
import location from "../../public/adresse.png"
import mail from "../../public/mail.png"
import telephone from "../../public/telephone.png"
import logo_blanc from "../../public/logo_blanc.png"
import Link from "next/link";
export default function Footer(){
    return (
      <div className="flex relative w-full overflow-hidden h-[400px] gap-0">
        <div className="bg-nav w-[45%] pl-32 text-xl md:mt-0 mt-20 pt-10 z-30  text-white">
          <div className="flex gap-9 items-center">
            <Image height={45} src={location} />
            <p>117 avenue des Champs-Elysées, 75008 Paris</p>
          </div>
          <div className="flex gap-9 items-center pt-10">
            <Image height={45} src={mail} />
            <p>h.debourrousse@atega-partners.com</p>
          </div>
          <div className="flex gap-9 items-center py-10">
            <Image height={45} src={telephone} />
            <p>06 11 22 33 44</p>
          </div>
          
        </div>
        <div className="contact-image relative flex">
          <div className="w-1/2"></div>
          <div className="w-1/2  inline-block h-full relative ">
            <Image
              height={120}
              className="absolute bottom-0 left-0 right-0 margin-auto"
              src={logo_blanc}
            />
          </div>
        </div>
        <div className="absolute left-[40%] top-0 bottom-0 m-auto h-[130%] z-20 w-36 rotate-12 bg-nav"></div>
      </div>
    );
}