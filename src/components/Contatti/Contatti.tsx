import Image from "next/image";

export default function Contatti() {
  return (
    <div
      className="bg-slate-100 py-8"
      style={{
        backgroundImage: 'url("wave.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2
        className="text-center lg:text-left lg:ml-10 mb-6 text-3xl lg:text-4xl font-extrabold text-gray-800 underline decoration-custom-pink decoration-8 underline-offset-8"
        id="contatti"
      >
        CONTATTI
      </h2>
      <div className="flex flex-col xl:flex-row xl:gap-20 items-center xl:items-start xl:mx-10">
        <Image
          src="/Contatti.png"
          alt="Contatti"
          width="0"
          height="0"
          className="w-11/12 xl:w-1/2 h-full xl:h-[28rem] object-cover rounded-lg border-2 border-zinc-300"
          sizes="(min-width: 1280px) 47.67vw, 91.67vw"
        />
        <div className="flex flex-col gap-2 xl:gap-4 text-zinc-600 mt-4 xl:mt-0 xl:text-left bg-white border-2 border-zinc-300 rounded-lg w-11/12 xl:w-1/2 h-full xl:h-[28rem] p-4 shadow-lg">
          <h2 className="text-lg lg:text-xl">
            📧 Email:{" "}
            <a
              href="mailto:prorace@libero.it"
              className="text-xl lg:text-2xl inline font-semibold underline text-zinc-700 hover:text-zinc-900 "
            >
              prorace@libero.it
            </a>
          </h2>
          <h2 className="text-lg lg:text-xl">
            📷 Instagram:{" "}
            <a
              href="http://instagram.com/_u/asd_scuola_off_road_prorace"
              className="text-xl lg:text-2xl inline font-semibold underline text-zinc-700 hover:text-zinc-900 "
            >
              asd_scuola_off_road_prorace
            </a>
          </h2>
          <h2 className="text-lg lg:text-xl">
            📘 Facebook:{" "}
            <a
              href="http://www.facebook.com/pierluigi.lasaponara"
              className="text-xl lg:text-2xl inline font-semibold underline text-zinc-700 hover:text-zinc-900 "
            >
              Pierluigi Lasaponara
            </a>
          </h2>
          <h2 className="text-lg lg:text-xl">
            📞 Telefono:{" "}
            <p className="text-xl lg:text-2xl inline font-semibold text-zinc-700 ">
              (39) 3934058438
            </p>
          </h2>
          <h2 className="text-lg lg:text-xl">
            🏠 Indirizzo:{" "}
            <p className="text-xl lg:text-2xl inline font-semibold text-zinc-700 ">
              Via Cellini 13, 60027 Osimo (AN)
            </p>
          </h2>
          <h2 className="text-lg lg:text-xl">
            💼 C.F. e P.IVA:{" "}
            <p className="text-xl lg:text-2xl inline font-semibold text-zinc-700 ">
              02880690421
            </p>
          </h2>
          <h2 className="lg:text-lg font-extrabold mt-auto">
            © Copyright Scuola Off Road Pro-Race
          </h2>
        </div>
      </div>
    </div>
  );
}
