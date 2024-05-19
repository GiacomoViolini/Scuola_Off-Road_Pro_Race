"use client";

import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex px-8 lg:px-20 py-4 shadow-xl font-extrabold text-gray-700 z-50 fixed top-0 w-full bg-gray-100">
      <div className="absolute top-1 overflow-hidden" style={{height: "6.5rem", width: "6.5rem"}}>
          <Image
            src={logo.src}
            alt="Logo"
            fill={true}
            className="border-2 border-zinc-100 object-cover rounded-full"
            sizes="101px"
            quality={100}
          />
        </div>
      <div
        className="hamburger ml-auto"
        onClick={() => {
          const hamburger = document.querySelector(".hamburger");
          const navMenu = document.querySelector(".nav-menu");
          hamburger!.classList.toggle("active");
          navMenu!.classList.toggle("active");
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="flex ml-auto md:gap-8 lg:gap-12 nav-menu text-lg lg:text-xl">
        <h2
          className="pink-link ml-auto nav-item"
          onClick={() => {
            const anchor = document.querySelector("#informazioni");
            anchor!.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          INFORMAZIONI
        </h2>
        <h2
          className="green-link nav-item"
          onClick={() => {
            const anchor = document.querySelector("#galleria");
            anchor!.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          GALLERIA
        </h2>
        <h2
          className="pink-link nav-item"
          onClick={() => {
            const anchor = document.querySelector("#istruttore");
            anchor!.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          ISTRUTTORE
        </h2>
        <h2
          className="green-link nav-item"
          onClick={() => {
            const anchor = document.querySelector("#diconodinoi");
            anchor!.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          DICONO DI NOI
        </h2>
        <h2
          className="pink-link nav-item"
          onClick={() => {
            const anchor = document.querySelector("#contatti");
            anchor!.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          CONTATTI
        </h2>
      </div>
    </div>
  );
}
