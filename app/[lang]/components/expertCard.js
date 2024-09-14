import Image from "next/image";
import linkedin from "../../../public/linkedincard.svg"

export default function Expert(props) {
  const pictos = props.pictos; 
  const pictosList = pictos?.map((pic) =>
    <li className="h-fit w-fit">
      <Image height={50} src={pic}/>
    </li>
  );
  return (
    <>
      <div className="p-5 h-fit  lg:min-h-[714px] xl:min-h-[642px] w-full sm:w-[400px] md:w-[500px] md:mx-auto lg:mx-none lg:w-auto  card-shadow row-span-1 bg-nav text-white flex flex-col gap-7 justify-start items-center relative">
        <div className="h-48 w-48 rounded-full ">
          <Image
            src={props.image}
            height={190}
            width={190}
            className="rounded-full"
            objectFit="cover"
          />
        </div>
        <a href={props.linkedin} target="_blank" className="absolute right-3">
        <Image height={30} className="border rounded border-orange" src={linkedin} />
        </a>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl text-center font-bold">{props.nom}</h3>
        </div>
        <p className="text-center  ">{props.desc1}</p>
        <p className="text-center ">{props.desc2}</p>
        <p className="text-center pb-4">{props.ecole}</p>
        <div className="w-3/5 relative lg:absolute lg:bottom-9 mx-auto">
          <ul className="flex w-full justify-around">{pictosList}</ul>
        </div>
      </div>
    </>
  );
}
