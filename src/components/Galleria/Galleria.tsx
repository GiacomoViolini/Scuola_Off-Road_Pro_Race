import Image from "next/image";

export default function Galleria() {
  const images = [
    "/galleria/g1.JPG",
    "/galleria/g2.jpg",
    "/galleria/g3.JPG",
    "/galleria/g4.jpg",
    "/galleria/g5.jpg",
    "/galleria/g6.jpg",
    "/galleria/g7.jpg",
    "/galleria/g8.JPG",
    "/galleria/g9.jpg",
    "/galleria/g10.jpg",
    "/galleria/g11.jpg",
    "/galleria/g12.jpg",
  ];
  const guida = [
    "/guida_sicura/s1.jfif",
    "/guida_sicura/s2.jpg",
    "/guida_sicura/s3.png",
    "/guida_sicura/s4.jpg",
    "/guida_sicura/s5.png",
    "/guida_sicura/s6.jfif",
  ];
  return (
    <div className="bg-gray-100 pt-5 px-5">
      <h2
        className="text-center lg:text-left lg:ml-10  mb-6 text-3xl lg:text-4xl font-extrabold text-gray-800 underline decoration-custom-green decoration-8 underline-offset-8"
        id="galleria"
      >
        GALLERIA
      </h2>
      <h3 className="text-center lg:text-left lg:ml-10  mb-6 text-2xl font-extrabold text-zinc-600">
        Off-Road
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-8 gap-x-2 place-items-center">
        <Image
          src={images[0]}
          alt="Galleria 1"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[1]}
          alt="Galleria 2"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[2]}
          alt="Galleria 3"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[3]}
          alt="Galleria 4"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[4]}
          alt="Galleria 5"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[5]}
          alt="Galleria 6"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[6]}
          alt="Galleria 7"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[7]}
          alt="Galleria 8"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[8]}
          alt="Galleria 9"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[9]}
          alt="Galleria 10"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[10]}
          alt="Galleria 11"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={images[11]}
          alt="Galleria 12"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
      </div>
      <h3 className="text-center lg:text-left lg:ml-10 my-6 text-2xl font-extrabold text-zinc-600">
        Guida Sicura
      </h3>
      <div className="grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-3 gap-y-8 gap-x-2 place-items-center">
        <Image
          src={guida[0]}
          alt="Galleria Guida 1"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={guida[1]}
          alt="Galleria Guida 2"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={guida[2]}
          alt="Galleria Guida 3"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={guida[3]}
          alt="Galleria Guida 4"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={guida[4]}
          alt="Galleria Guida 5"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
        <Image
          src={guida[5]}
          alt="Galleria Guida 6"
          width="0"
          height="0"
          className="gallery"
          sizes="(min-width: 1540px) 31.64vw, (min-width: 780px) calc(47.43vw - 22px), calc(95vw - 38px)"
          quality={100}
        />
      </div>
    </div>
  );
}
