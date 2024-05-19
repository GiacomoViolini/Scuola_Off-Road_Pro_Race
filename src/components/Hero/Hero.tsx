"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import Image from "next/image";

const Hero = () => {
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

  return (
    <div className="relative mt-16 md:mt-14">
      <Image src="/TextLogo.png" alt="Logo" width={300} height={100} className="hero-text"/>
      <button
        className="hero-button"
        onClick={() => {
          const anchor = document.querySelector("#informazioni");
          anchor!.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      >
        SCOPRI DI PIÙ{" "}
      </button>
      <div className="dark-overlay"></div>
      <Slide prevArrow={<></>}>
        <div className="each-slide-effect">
          <div
            className="relative overflow-hidden"
            style={{ height: "96vh", width: "100vw" }}
          >
            <Image
              src={images[0]}
              alt="Hero Image 1"
              fill={true}
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="relative overflow-hidden"
            style={{ height: "96vh", width: "100vw" }}
          >
            <Image
              src={images[1]}
              alt="Hero Image 2"
              fill={true}
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="relative overflow-hidden"
            style={{ height: "96vh", width: "100vw" }}
          >
            <Image
              src={images[2]}
              alt="Hero Image 3"
              fill={true}
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Hero;
