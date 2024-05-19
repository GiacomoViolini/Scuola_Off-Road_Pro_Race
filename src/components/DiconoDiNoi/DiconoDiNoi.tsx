"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    text: "Mi hai insegnato ad andare in moto totalmente da zero, le giornate di allenamento erano ben strutturate e programmate per divertirsi tutti insieme. Sempre disponibile per tutto, dai passaggi tecnici ai problemi di manutenzione della moto. Super preparato con moltissima voglia di insegnare e trasmettere la passione per il cross.",
    person: "Federico Calvano",
  },
  {
    text: "Sono ormai 3 anni che frequento la scuola Pro-Race di Pierluigi e grazie alla sua esperienza e la capacità di trasmettere la sua grande passione per l'off-road, sono riuscitaa raggiungere risultati che mai mi sarei aspettata!",
    person: "Lucia Bartolucci",
  },
  {
    text: "Ci affidiamo sempre all’esperienza e professionalità dell’istruttore. In base al meteo sa sempre scegliere la pista migliore e adatta ai ragazzi. A volte è necessario saltare gli allenamenti per altre esigenze personali ma non pretendiamo assolutamente che ci si adatti alle esigenze di ognuno. Sarebbe preferibile sapere con maggiore anticipo la giornata e luogo dell’allenamento ma siamo consapevoli che spesso ciò non è possibile e quindi non è un grosso problema. La durata degli allenamenti la stabilisce l’istruttore e per noi va bene come decide lui in base alla sua esperienza. Qualità del servizio perfetta. Capacità tecniche dell’istruttore ottime, sia in pista che fuori pista e per consigli manutenzione. Capacità di comunicazione dell’istruttore ottime, sempre molto cordiale e ottimo il rapporto che instaura sia con gli allievi che con i genitori. Molto attento e disponibile ad ascoltare il parere di tutti i genitori. ",
    person: "Vanessa e Francesco Giannini",
  },
  {
    text: "Preferisco allenarmi di domenica perché c’è più tempo e vorrei rimanere tutto il giorno. Pierluigi spiega nei minimi dettagli la pista prima di iniziare l’allenamento, poi ci porta a fare un giro di ricognizione per conoscere bene la pista, soffermandosi sui punti che secondo lui serve una specifica tecnica. Per questo mi trovo molto bene con Pierluigi. E’ un ottimo istruttore.",
    person: "Pierfrancesco Giannini",
  },
  {
    text: "Massima cordialità e simpatia di Pierluigi, persona preparatissima e disponibilissima, che già dal primo incontro ti fa sentire come se fosse un tuo amico da sempre. In una parola, il top",
    person: "Francesco Pacini",
  },
];

const DiconoDiNoi = () => {
  const [i, setI] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handlePrev = () => {
    setOpacity(0);
    if (i == 0) {
      setI(reviews.length - 1);
    } else {
      setI(i - 1);
    }
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const handleNext = () => {
    setOpacity(0);
    if (i == reviews.length - 1 || i+1 == reviews.length - 1) {
      setI(0);
    } else {
      setI(i + 1);
    }
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  return (
    <div className="h-view bg-gray-100">
    <div className="flex flex-col md:flex-row justify-between mx-4 lg:mx-10">
        <h2
            className="text-center lg:text-left mb-6 text-4xl lg:text-5xl font-extrabold text-gray-800 underline decoration-custom-green decoration-8 underline-offset-8"
            id="diconodinoi"
        >
            DICONO DI NOI
        </h2>
        <a
            href="mailto:prorace@libero.it"
            className="review-button"
        >
            Invia la tua recensione
        </a>
    </div>
      <div className="flex items-center mx-4">
        <button
          className="bg-zinc-700 text-white font-bold w-10 h-10 p-3 rounded-full flex items-center justify-center"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 md:py-10 md:px-6"
          id="istruttore"
        >
          <div
            className={`flex flex-col items-center justify-center bg-white h-[35rem] md:h-[27rem] p-2 md:py-4 md:px-8 rounded-3xl shadow-2xl opacity-${opacity}`}
          >
            <h2 className="my-1 md:my-5 text-sm md:text-lg text-center font-semibold text-zinc-500">
              &ldquo;{reviews[i].text}
            </h2>
            <p className="text-center md:text-xl font-bold text-zinc-800 ">
              {reviews[i].person}
            </p>
          </div>
          {i+1 < reviews.length && (
            <div
              className={`hidden lg:flex flex-col items-center justify-center bg-white h-[27rem] py-4 px-8 rounded-3xl shadow-2xl opacity-${opacity}`}
            >
              <h2 className="my-5 lg:text-lg text-center font-semibold text-zinc-500">
                &ldquo;{reviews[i+1].text}
              </h2>
              <p className="text-center text-lg lg:text-xl font-bold text-zinc-800 ">
                {reviews[i+1].person}
              </p>
            </div>
          )}
        </div>
        <button
          className="bg-zinc-700 text-white font-bold w-10 h-10 p-3 rounded-full flex items-center justify-center"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
export default DiconoDiNoi;

