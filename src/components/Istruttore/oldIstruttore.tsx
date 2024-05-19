import Image from "next/image";

export default function Istruttore() {
  return (
    // <div className="relative bg-gray-100">
      /* <div
        className="relative top-5 left-0"
        style={{ height: "100vh", width: "100%"}}
      >
        <Image
          src="/wave.svg"
          alt="Waves"
          fill={true}
          className="object-cover"
          sizes="100vw"
        />
      </div> */
      <div
        className="grid grid-cols-3 p-4 md:p-5 lg:p-8 bg-white rounded-2xl xl:rounded-3xl shadow-2xl m-2 md:m-5 lg:m-10 xl:m-14"
        id="istruttore"
      >
          <Image
            src="/istruttore.jpg"
            alt="Istruttore"
            width="0"
            height="0"
            className=" w-0 xl:w-full h-full object-cover"
            sizes="calc(33.31vw - 58px)"
            quality={100}
          />
        <div className="xl:col-span-2 col-span-3 xl:ml-4  flex flex-col bg-white">
          <h2 className="text-3xl md:text-4xl mb-4 md:mb-8 text-center font-extrabold text-gray-800 underline decoration-custom-pink underline-offset-8 decoration-8">
            L'ISTRUTTORE
          </h2>
          <p className="paragraph">
            Il Tecnico Educatore responsabile dell’attività formativa è
            Pierluigi Lasaponara. L’esperienza quasi cinquantennale nelle
            competizioni in tutte le attività motociclistiche e l’impegno
            ventennale all’interno della Struttura Motociclismo della UISP come
            Dirigente, Direttore di Gara e Istruttore gli hanno conferito la
            competenza necessaria all’attività che è chiamato a svolgere. Ha
            corso per molti anni nel Motocross in Piemonte, sua Regione di
            origine, salendo sempre sul podio. Solo la sfortuna, sotto forma di
            rottura meccanica del mezzo all’ultima prova, lo ha privato della
            soddisfazione di vincere un campionato regionale FMI a fine anni ’80
            nella categoria 600 4T, giungendo terzo.
          </p>
          <p className="paragraph">
            Trasferitosi nelle Marche ad inizio anni ’90 si è dedicato con
            impegno all’enduro per moltissimi anni, raccogliendo soddisfazioni
            importanti a livello regionale sia FMI che UISP e vincendo un Trofeo
            Italia UISP nel ’97 nella categoria Oltre 400 4T.
          </p>
          <p className="paragraph">
            Dal 2012 la UISP ha richiesto il suo impegno nell’improntare e
            sviluppare il progetto “PRIMI PASSI” che ha dato modo di provare
            l’esperienza della moto a oltre 700 ragazzi dai 4 ai 14 anni. Questo
            emozionante e soddisfacente impegno lo ha portato, a fine 2015, a
            ridurre a part-time la sua attività lavorativa di Responsabile della
            Qualità per aver più tempo da dedicare a trasmettere la sua
            esperienza ai giovani motociclisti. Proprio grazie a questa
            cresciuta disponibilità di tempo ha potuto dedicarsi alla frequenza
            di moltissimi corsi di comunicazione e crescita nell’ambiente
            sportivo indetti dal CONI e ha avuto modo di sperimentare tutte le
            specialità motociclistiche, dal Trial alla Velocità in Pista,
            passando per lo Speedway ed il Flat Track.
          </p>
          <p className="paragraph">
            Moltissimi fra i suoi allievi mini-crossisti si sono distinti nei
            vari campionati regionali.
          </p>
          <p className="paragraph">
            Dal 2019 ricopre l’incarico di Tecnico Formatore per le Marche, cioè
            Docente dei nuovi aspiranti Tecnici Educatori.
          </p>
        </div>
      </div>
    /* </div> */
  );
}
