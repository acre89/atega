import Image from "next/image";
import mail from "../../public/mail.png";
import telephone from "../../public/telephone.png";
export default function Associé(props) {
  return (
    <>
      <div className="p-5 h-fit md:h-[800px] lg:h-[800px] xl:[800px] row-span-1 bg-nav text-white flex flex-col gap-7 justify-start items-center">
        <div className="h-48 w-48 rounded-full border-2 border-orange">
          <Image src={props.image} height={190} width={190}  className="rounded-full"  objectFit="cover"  />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl text-center font-bold">{props.nom}</h3>
          <p className="text-center text-sm italic">{props.sous_titre} </p>
        </div>
        <p className="text-center ">{props.desc}</p>
        <p className="text-center pb-4">{props.ecole}</p>
        <Image src={telephone} height={45} />
        <p className="text-center pb-4">{props.telephone}</p>
        <Image src={mail} height={45} />
        <p className="text-center">{props.mail}</p>
      </div>
    </>
  );
}
