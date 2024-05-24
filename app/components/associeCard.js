import Image from "next/image";
export default function Associé(props) {
  return (
    <>
      <div className="p-5 h-[450px] row-span-1 bg-nav text-white flex flex-col gap-3 justify-start items-center">
        <div className="h-48 w-48 rounded-full border-2 border-orange">
          <Image src={props.image} height={190} width={190}  className="rounded-full"  objectFit="cover"  />
        </div>
        <h3 className="text-2xl font-bold">{props.nom}</h3>
        <p className="text-center text-lg">{props.desc} </p>
        <p className="text-center text-lg">{props.desc2}</p>
        <p className="text-center text-lg">{props.ecole}</p>
      </div>
    </>
  );
}
