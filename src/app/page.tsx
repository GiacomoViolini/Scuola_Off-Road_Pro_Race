import Hero from "@/components/Hero/Hero";
import Informazioni from "@/components/Informazioni/Informazioni";
import Navbar from "@/components/Navbar/Navbar";
import Galleria from "@/components/Galleria/Galleria";
import Istruttore from "@/components/Istruttore/Istruttore";
import Contatti from "@/components/Contatti/Contatti";
import DiconoDiNoi from "@/components/DiconoDiNoi/DiconoDiNoi";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Informazioni />
      <Galleria />
      <Istruttore />
      <DiconoDiNoi />
      <Contatti />
    </main>
  );
}
