"use client";
import Image from "next/image";
import List from "./components/iconList";

import logo_blanc from "../public/logo2 le A.png";
import back from "../public/rea_bg.png";
import Card from "./components/expertCard";
import Associé from "./components/associeCard";
import flower from "../public/flower.jpg";
import dots from "../public/dots.svg";
import apropos from "../public/apropos.svg";
import competence from "../public/competence.svg";
import equipe from "../public/equipe.svg";
import arrow from "../public/arrow.svg";
import Footer from "./components/footer";
import grand_logo from "../public/logo2 le A.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden bg-[#ffffff]" id="scrollArea">
        <div
          className="h-screen overflow-y-hidden w-screen main-page flex items-center justify-center text-center"
          id="front"
        >
          <Image
            src={grand_logo}
            height={250}
            className="absolute overflow-hidden -right-8 top-20"
          />

          <ul className="text-right  text-white liste-accueil italic list-none absolute bottom-8 pr-2 right-12 text-3xl">
            <li>Cession</li>
            <li>Acquisition</li>
            <li>Levée de fond</li>
            <li>Conseil stratégique</li>
          </ul>
        </div>
        <div>
          <div className="h-screen ">
            <div className="page-title-line  text-nav w-fit mt-10 ml-32 pt-16  pl-5 md:pl-0 pb-5 md:pb-0">
              <h2 className="">A propos</h2>
              <div className="h-0.5 w-16 bg-orange rounded-sm"></div>
            </div>
            <div className="flex mt-32 justify-center items-center">
              <div className="flex gap-10 relative">
                <Link href={"/a-propos"}>
                  <div className="bg-nav carte relative text-white px-6 pt-12 w-72 h-48 flex flex-col  gap-6">
                    <div className="flex gap-2 items-start ">
                      <div className="h-8 w-0.5 bg-orange rounded-sm"></div>
                      <h2 className="text-2xl font-bold">Présentation</h2>
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
                <Link href={"/expertises"}>
                  <div className="bg-nav carte relative text-white px-6 pt-12 w-72 h-48 flex flex-col  gap-6">
                    <div className="flex gap-2 items-start  ">
                      <div className="h-8 w-0.5 bg-orange rounded-sm"></div>
                      <h2 className="text-2xl font-bold">Nos expertises</h2>
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
                <Link href={"/equipe"}>
                  <div className="bg-nav carte relative text-white px-6 pt-12 w-72 h-48 flex flex-col gap-6">
                    <div className="flex gap-2 items-start">
                      <div className="h-8 w-0.5 bg-orange rounded-sm"></div>
                      <h2 className="text-2xl font-bold">Notre équipe</h2>
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
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-screen relative">
        <div className="page-title md:top-28 pl-10 md:pl-0 pb-5 md:pb-0">
          <h2 className="text-nav text-[40px]">Notre réseau d'experts</h2>
          <Image src={dots} className="md:block hidden md:mr-4" />
        </div>
        <div className="px-40 py-28 text-center">
          <p>
            Atega Partners dispose d’un réseau d’experts, spécialistes dans leur
            domaine et disponibles pour partager leur savoir et la vision de
            leur marché. Atega Partners est ainsi en mesure d’intervenir
            efficacement sur de nombreux sujets techniques et spécifiques.
          </p>
          <div className="flex justify-between py-10">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex justify-between">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div> */}
      </main>
      <Footer />
    </>
  );
}
