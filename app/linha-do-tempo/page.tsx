import type { Metadata } from "next";
import LinhaDoTempo from "@/components/LinhaDoTempo";
import { capitulo } from "@/data/capitulo";

export const metadata: Metadata = {
  title: "Linha do Tempo",
  description: `Confira a trajetória de gestões do ${capitulo.nome} ao longo dos anos.`,
};

export default function LinhaDoTempoPage() {
  return (
    <div className="flex min-h-[calc(100svh-64px)] flex-col justify-center gap-8 bg-demolay-parchment pt-32 pb-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="divider-ornament max-w-[200px] text-demolay-gold-600">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em]">
            Nossa trajetória
          </span>
        </div>
        <h1 className="font-display mt-4 text-3xl font-semibold text-demolay-blue-950 sm:text-4xl">
          Linha do Tempo
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-demolay-blue-900/70 sm:text-base">
          Na Ordem DeMolay, um ano é composto por duas gestões, uma para cada
          semestre. Para cada gestão nova, é eleito um novo Mestre
          Conselheiro, que será o líder e o representante do Capítulo durante
          o mandato subsequente. Assumir o cargo de Mestre Conselheiro e
          liderar os demais meninos durante a gestão é uma das principais
          lições de liderança, temperamento, pensamento lógico e
          desenvolvimento pessoal para o jovem.
        </p>
      </div>

      <LinhaDoTempo />
    </div>
  );
}
