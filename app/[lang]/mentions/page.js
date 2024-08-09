import { getDictionary } from "../dictionaries";
export default async function Mentions({params}){
    let t = await getDictionary(params.lang);
    return (
      <>
        <div
          id="mentions"
          className="pt-24 h-fit w-screen 2xl:w-[1536px] pb-24  2xl:mx-auto text-nav relative "
        >
          <h1 className="page-title-line w-fit mt-10 ml-4 md:ml-10 lg:ml-24 pl-5 md:pl-0 pb-5 md:pb-0">
            <h2 className="">{t.mentions.titre}</h2>
            <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
          </h1>
          <div className=" mx-6 md:mx-12 lg:mx-28 mt-16">
            <p className="py-4">{t.mentions.texte1}</p>
            <p className="py-4">{t.mentions.texte2}</p>
            <p className="py-4">{t.mentions.texte3}</p>
            <p>{t.mentions.texte4}</p>
          </div>
        </div>
      </>
    );
}