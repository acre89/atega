import Image from "next/image";
import mail from "../../../public/mail.png";
import telephone from "../../../public/telephone.png";
import linkedin from "../../../public/linkedincard.svg";
export default function Associé(props) {
  return (
    <>
      <div className="p-5 lg:px-2 xl:px-5 h-fit md:h-[840px] w-full sm:w-[400px] md:w-[500px] md:mx-auto lg:mx-none lg:w-auto lg:h-[900px] xl:h-[840px] card-shadow relative row-span-1 bg-nav text-white flex flex-col gap-7 justify-start items-center">
        <a href={props.linkedin} target="_blank" className="absolute right-3">
          <Image
            height={30}
            className="border rounded border-orange"
            src={linkedin}
          />
        </a>
        <div className="h-48 w-48 rounded-full border-2 border-orange">
          <Image
            src={props.image}
            height={190}
            width={190}
            className="rounded-full"
            objectFit="cover"
            alt="photo de nos collaborateurs"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl text-center font-bold">{props.nom}</h3>
          <p className="text-center text-sm italic">{props.sous_titre} </p>
        </div>
        <p className="text-center min-h-[48px] ">{props.desc}</p>
        <p className="text-center min-h-[120px]">{props.desc2}</p>
        <p className="text-center pb-4 min-h-[24px]">{props.ecole}</p>
        <div className="md:flex  hidden md:flex-col md:items-center md:justify-start">
          <Image src={telephone} height={45} />
          <p className="text-center pb-10 pt-2">{props.telephone}</p>
          <a
            href={`mailto: ${props.mail}`}
            className="flex flex-col items-center"
          >
            <Image src={mail} height={45} />
            <p className="text-center pt-2">{props.mail}</p>
          </a>
        </div>
      </div>
    </>
  );
}
