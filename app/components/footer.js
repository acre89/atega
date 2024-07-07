import Image from "next/image";
import location from "../../public/location.svg"
import mail from "../../public/mail.svg"

export default function Footer(){
    return (
      <div className="flex relative w-full overflow-hidden h-[400px] gap-0">
        <div className="bg-nav w-[45%] pl-32 text-xl md:mt-0 mt-20 pt-10 z-30  text-white">
          <div className="flex gap-9 items-center">
            <div className="h-16 w-16 rounded-full flex justify-center items-center bg-white border border-orange">
              <Image src={location} />
            </div>
            <p>117 avenue des Champs-Elysées, 75008 Paris</p>
          </div>
          <div className="flex gap-9 items-center pt-10">
            <div className="h-16 w-16 rounded-full flex justify-center items-center bg-white border border-orange">
              <Image src={mail}  />
            </div>
            <p>h.debourrousse@atega-partners.com</p>
          </div>
        </div>
        <div className="contact-image"></div>
        <div className="absolute left-[40%] top-0 bottom-0 m-auto h-[130%] z-20 w-36 rotate-12 bg-nav"></div>
      </div>
    );
}