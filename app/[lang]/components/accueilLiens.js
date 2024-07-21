"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DivAnimate from "./framer/div";

export default function AccueilLien({dict}){
    const pathname = usePathname();
    const langue = pathname.split("/")[1];
    return (
      <div className="flex flex-col md:flex-row gap-10 md:gap-4 xl:gap-10 relative">
        <DivAnimate>
          <Link href={`/${langue}/a-propos`}>
            <div className="bg-white border border-orange carte relative text-nav px-6 pt-12 w-72 h-48 flex flex-col  gap-6">
              <div className="flex gap-2 items-start ">
                <div className="h-8 w-0.5 bg-orange rounded-sm"></div>
                <h2 className="text-2xl font-bold">{dict.presentation}</h2>
              </div>
              <svg
                className="absolute right-5 bottom-3"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fleche-bout"
                  d="M37.0607 31.0607C37.6464 30.4749 37.6464 29.5251 37.0607 28.9393L27.5147 19.3934C26.9289 18.8076 25.9792 18.8076 25.3934 19.3934C24.8076 19.9792 24.8076 20.9289 25.3934 21.5147L33.8787 30L25.3934 38.4853C24.8076 39.0711 24.8076 40.0208 25.3934 40.6066C25.9792 41.1924 26.9289 41.1924 27.5147 40.6066L37.0607 31.0607ZM35 31.5H36V28.5H35V31.5Z"
                />
                <path
                  className="fleche-ligne"
                  d="M19 28.5C18.1716 28.5 17.5 29.1716 17.5 30C17.5 30.8284 18.1716 31.5 19 31.5V28.5ZM19 31.5H39V28.5H19V31.5Z"
                />
              </svg>
            </div>
          </Link>
        </DivAnimate>
        <DivAnimate delay={"0.6s"}>
          <Link href={`/${langue}/expertises`}>
            <div className="bg-white border border-orange carte relative text-nav px-6 pt-12 w-72 h-48 flex flex-col  gap-6">
              <div className="flex gap-2 items-start  ">
                <div className="h-8 w-0.5 bg-orange rounded-sm"></div>
                <h2 className="text-2xl font-bold">{dict.expertises}</h2>
              </div>
              <svg
                className="absolute right-5 bottom-3"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fleche-bout"
                  d="M37.0607 31.0607C37.6464 30.4749 37.6464 29.5251 37.0607 28.9393L27.5147 19.3934C26.9289 18.8076 25.9792 18.8076 25.3934 19.3934C24.8076 19.9792 24.8076 20.9289 25.3934 21.5147L33.8787 30L25.3934 38.4853C24.8076 39.0711 24.8076 40.0208 25.3934 40.6066C25.9792 41.1924 26.9289 41.1924 27.5147 40.6066L37.0607 31.0607ZM35 31.5H36V28.5H35V31.5Z"
                />
                <path
                  className="fleche-ligne"
                  d="M19 28.5C18.1716 28.5 17.5 29.1716 17.5 30C17.5 30.8284 18.1716 31.5 19 31.5V28.5ZM19 31.5H39V28.5H19V31.5Z"
                />
              </svg>
            </div>
          </Link>
        </DivAnimate>
        <DivAnimate delay={"1.2s"}>
          <Link href={`/${langue}/equipe`}>
            <div className="bg-white border border-orange carte relative text-nav px-6 pt-12 w-72 h-48 flex flex-col gap-6">
              <div className="flex gap-2 items-start">
                <div className="h-8 w-0.5 bg-orange rounded-sm"></div>
                <h2 className="text-2xl font-bold">{dict.equipe}</h2>
              </div>

              <svg
                className="absolute right-5 bottom-3"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fleche-bout"
                  d="M37.0607 31.0607C37.6464 30.4749 37.6464 29.5251 37.0607 28.9393L27.5147 19.3934C26.9289 18.8076 25.9792 18.8076 25.3934 19.3934C24.8076 19.9792 24.8076 20.9289 25.3934 21.5147L33.8787 30L25.3934 38.4853C24.8076 39.0711 24.8076 40.0208 25.3934 40.6066C25.9792 41.1924 26.9289 41.1924 27.5147 40.6066L37.0607 31.0607ZM35 31.5H36V28.5H35V31.5Z"
                />
                <path
                  className="fleche-ligne"
                  d="M19 28.5C18.1716 28.5 17.5 29.1716 17.5 30C17.5 30.8284 18.1716 31.5 19 31.5V28.5ZM19 31.5H39V28.5H19V31.5Z"
                />
              </svg>
            </div>
          </Link>
        </DivAnimate>
      </div>
    );
}