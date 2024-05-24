export default function Card() {
  return (
    <>
      <div className="w-fit ">
        <div className="flex px-3 pb-3 items-center gap-6">
          <div className="h-28 w-28 rounded-full border border-nav flex justify-center items-center">
            <p>photo</p>
          </div>
          <div className="text-xl">Nom Prénom</div>
        </div>
        <div className="w-full border h-28 border-nav"></div>
      </div>
    </>
  );
}
