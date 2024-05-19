import Image from "next/image";

export default function Informazioni() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 h-full px-5 lg:px-10 py-8 bg-gray-100"
      id="informazioni"
    >
      <div className="flex flex-col items-center bg-white p-5 rounded-3xl shadow-2xl transition-transform transform hover:scale-95 duration-500">
        <Image
          src="/informazioni1.jpg"
          alt="Informazioni 1"
          width="0"
          height="0"
          className=" w-72 h-72 object-cover rounded-full"
          sizes="(min-width: 400px) 288px, calc(85vw - 35px)"
          quality={100}
        />
        <h2 className="my-8 text-3xl lg:text-4xl text-center font-bold text-gray-800 underline decoration-custom-green underline-offset-8 decoration-8">
          Chi Siamo?
        </h2>
        <p className="text-center font-medium text-gray-800 ">
          La SCUOLA OFF-ROAD PRO-RACE è il risultato della passione di Pierluigi
          Lasaponara e dei suoi soci per il mondo delle due ruote. Fondato con
          l’obiettivo di avvicinare appassionati di tutte le età all’uso sicuro
          e consapevole della moto, la struttura offre un ambiente accogliente,
          professionale e dedicato all’insegnamento della guida motociclistica,
          sia Off Road che On Road.
        </p>
      </div>
      <div className="flex flex-col items-center bg-white p-5 rounded-3xl shadow-2xl transition-transform transform hover:scale-95 duration-500">
        <Image
          src="/informazioni2.jpg"
          alt="Informazioni 2"
          width="0"
          height="0"
          className=" w-72 h-72 object-cover rounded-full"
          sizes="(min-width: 400px) 288px, calc(85vw - 35px)"
          quality={100}
        />
        <h2 className="my-8 text-3xl lg:text-4xl text-center font-bold text-gray-800 underline decoration-custom-pink underline-offset-8 decoration-8">
          Cosa Offriamo?
        </h2>
        <p className="text-center font-medium text-gray-800 ">
          Il nostro programma didattico flessibile e personalizzabile offre
          corsi collettivi e individuali di MINICROSS, MOTOCROSS, ENDURO,
          MOTARD, TRIAL e GUIDA SICURA, adattati ai diversi livelli di
          esperienza e di età. Mettiamo a disposizione moto e abbigliamento
          protettivo, offrendo lezioni teoriche in aula e sessioni pratiche su
          percorsi di difficoltà proporzionata al livello di crescita
          dell’allievo/a. La nostra mission è fornire un insegnamento competente
          che accompagni il pilota o l’appassionato fino al livello da lui
          desiderato, spaziando dai Primi Passi fino all’agonismo. Operiamo su
          tutte le piste omologate UISP marchigiane e delle regioni limitrofe.
        </p>
      </div>
      <div className="flex flex-col  items-center bg-white p-5 rounded-3xl shadow-2xl transition-transform transform hover:scale-95 duration-500">
        <Image
          src="/informazioni3.jpg"
          alt="Informazioni 3"
          width="0"
          height="0"
          className="w-72 h-72 object-cover rounded-full"
          sizes="(min-width: 400px) 288px, calc(85vw - 35px)"
          quality={100}
        />
        <h2 className="my-8 text-3xl lg:text-4xl text-center font-bold text-gray-800 underline decoration-custom-green underline-offset-8 decoration-8">
          Cosa Aspettarsi?
        </h2>
        <p className="text-center font-medium text-gray-800 ">
          Presso la SCUOLA OFF-ROAD PRO-RACE, gli iscritti e le iscritte possono
          aspettarsi un ambiente sicuro e controllato per imparare e crescere
          nel mondo delle due ruote. I nostri istruttori, formati e
          costantemente aggiornati dalla Struttura Motorismo della UISP, offrono
          lezioni di alta qualità. Non ci limitiamo all’insegnamento di tutte le
          specialità del Fuoristrada e ai corsi di Guida Sicura su strada, ma
          promuoviamo e prepariamo gli/le allievi/e alla tecnica della corretta
          manutenzione e regolazione della moto. <br />
          Aspettatevi un approccio integrale che formi motociclisti consapevoli
          e appassionati.
        </p>
      </div>
    </div>
  );
}
