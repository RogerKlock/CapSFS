import type { Metadata } from "next";
import FestilhaConteudo from "@/components/FestilhaConteudo";
import { capitulo } from "@/data/capitulo";

export const metadata: Metadata = {
  title: "Festilha",
  description: `Conheça a participação do ${capitulo.nome} na Festilha, a tradicional festa gastronômica de São Francisco do Sul.`,
};

export default function FestilhaPage() {
  return (
    <div className="min-h-[calc(100svh-64px)] bg-demolay-parchment px-6 pb-20 pt-32 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="divider-ornament max-w-[200px] text-demolay-gold-600">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em]">
            Tradição gastronômica
          </span>
        </div>
        <h1 className="font-display mt-4 text-3xl font-semibold text-demolay-blue-950 sm:text-4xl">
          Festilha
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-demolay-blue-900/70 sm:text-base">
          Desde 2024, o capítulo participa de um dos principais eventos
          gastronômicos de São Francisco do Sul.
        </p>

        <div className="mt-12">
          <FestilhaConteudo />
        </div>
      </div>
    </div>
  );
}
