"use client";

import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex px-8 lg:px-20 py-4 shadow-xl font-extrabold text-gray-700 z-50 fixed top-0 w-full bg-gray-100">
      <div className="absolute top-1 overflow-hidden h-[5rem] w-[5rem] md:h-[6.5rem] md:w-[6.5rem]">
        <Image
          src={logo.src}
          alt="Logo"
          fill={true}
          className="border-2 border-zinc-100 object-cover rounded-full"
          sizes="(min-width: 780px) 100px, 76px"
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
      <div className="flex ml-auto md:gap-4 lg:gap-12 nav-menu lg:text-lg">
        <h2
          className="pink-link ml-auto nav-item"
          onClick={() => {
            const anchor = document.querySelector("#informazioni");
            anchor!.scrollIntoView({ behavior: "smooth", block: "start" });
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");
            hamburger!.classList.toggle("active");
            navMenu!.classList.toggle("active");
          }}
        >
          INFORMAZIONI
        </h2>
        <h2
          className="green-link nav-item"
          onClick={() => {
            const anchor = document.querySelector("#galleria");
            anchor!.scrollIntoView({ behavior: "smooth", block: "start" });
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");
            hamburger!.classList.toggle("active");
            navMenu!.classList.toggle("active");
          }}
        >
          GALLERIA
        </h2>
        <h2
          className="pink-link nav-item"
          onClick={() => {
            const anchor = document.querySelector("#istruttore");
            anchor!.scrollIntoView({ behavior: "smooth", block: "start" });
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");
            hamburger!.classList.toggle("active");
            navMenu!.classList.toggle("active");
          }}
        >
          ISTRUTTORE
        </h2>
        <h2
          className="green-link nav-item"
          onClick={() => {
            const anchor = document.querySelector("#diconodinoi");
            anchor!.scrollIntoView({ behavior: "smooth", block: "start" });
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");
            hamburger!.classList.toggle("active");
            navMenu!.classList.toggle("active");
          }}
        >
          DICONO DI NOI
        </h2>
        <h2
          className="pink-link nav-item"
          onClick={() => {
            const anchor = document.querySelector("#contatti");
            anchor!.scrollIntoView({ behavior: "smooth", block: "start" });
            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");
            hamburger!.classList.toggle("active");
            navMenu!.classList.toggle("active");
          }}
        >
          CONTATTI
        </h2>
      </div>
    </div>
  );
}
