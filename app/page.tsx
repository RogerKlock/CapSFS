import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Carrossel from "@/components/Carrossel";
import Biografia from "@/components/Biografia";
import { capitulo } from "@/data/capitulo";
import { fotosCarrossel } from "@/data/carrossel";

export const metadata: Metadata = {
  title: "Home",
  description: `Conheça o ${capitulo.nome}, sua história, valores e trajetória como capítulo da Ordem DeMolay em ${capitulo.cidadeEstado}.`,
};

// Degradê que funde o carrossel com o azul do hero acima e o pergaminho da
// biografia abaixo — ver Hero.tsx para o motivo do "blue-800" (cor final do
// gradiente do hero, já sem influência da vinheta/textura).
const fundoCarrosselHome = {
  background:
    "linear-gradient(to bottom, var(--color-demolay-blue-800) 0%, var(--color-demolay-blue-800) 32%, var(--color-demolay-parchment) 68%, var(--color-demolay-parchment) 100%)",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Carrossel
        imagens={fotosCarrossel}
        fundo={fundoCarrosselHome}
        altTexto="Momento do capítulo"
      />
      <Biografia />
    </>
  );
}
