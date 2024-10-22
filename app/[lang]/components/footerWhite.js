
import Image from "next/image";
import location from "../../../public/localisation_black.png";
import mail from "../../../public/mail_black.png";
import telephone from "../../../public/telephone_black.png";
import Link from "next/link";
export default function FooterWhite({dict}) {
  return (
    <div className="flex relative shadow-xl w-full overflow-hidden h-fit  md:h-[400px] gap-0">
      <div className="bg-white text-nav w-full md:w-[45%] pl-0 md:pl-12 lg:pl-28  mt-0 pt-10 z-30 pb-10 md:pb-0 flex flex-col justify-start items-start">
        <div className="flex pl-4 md:pl-0 gap-2 md:gap-4 items-center">
          <Image height={40} src={location} alt="icone adresse" />
          <p>117 avenue des Champs-Elysées, 75008 Paris</p>
        </div>
        <a
          href="mailto:h.debourrousse@atega-partners.com"
          className="flex pl-4 md:pl-0 gap-2 md:gap-4  items-center pt-4"
        >
          <Image height={40} src={mail} alt="icone mail" />
          <p>h.debourrousse@atega-partners.com</p>
        </a>
        <a
          href="tel:+33 7 86 44 05 93"
          className="flex pl-4 md:pl-0 gap-2 md:gap-4  items-center py-4"
        >
          <Image height={40} src={telephone} alt="icone telephone" />
          <p>+33 7 86 44 05 93</p>
        </a>
        <div className="text-sm pt-10 pb-5 mx-5 md:mx-0 text-justify">
          {dict.texte1}
        </div>
        <Link
          className="pl-6 md:pl-0 underline md:no-underline"
          href={"/mentions"}
        >
          {dict.texte2}
        </Link>
      </div>
      <div className="contact-image relative flex"></div>
      <div className=" bg-white md:block hidden absolute left-[40%] top-0 bottom-0 m-auto h-[130%] z-20 w-36 rotate-12 "></div>
    </div>
  );
}
