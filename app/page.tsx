import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Carrossel from "@/components/Carrossel";
import Biografia from "@/components/Biografia";
import { capitulo } from "@/data/capitulo";

export const metadata: Metadata = {
  title: "Home",
  description: `Conheça o ${capitulo.nome}, sua história, valores e trajetória como capítulo da Ordem DeMolay em ${capitulo.cidadeEstado}.`,
};

export default function Home() {
  return (
    <>
      <Hero />
      <Carrossel />
      <Biografia />
    </>
  );
}
