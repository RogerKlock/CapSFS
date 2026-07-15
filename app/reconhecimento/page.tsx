import type { Metadata } from "next";
import EventoReconhecimento from "@/components/EventoReconhecimento";
import { eventosReconhecimento } from "@/data/reconhecimento";
import { capitulo } from "@/data/capitulo";

export const metadata: Metadata = {
  title: "Reconhecimento na Sociedade",
  description: `Conheça os eventos em que o ${capitulo.nome} representa a Ordem DeMolay perante a sociedade de São Francisco do Sul.`,
};

export default function ReconhecimentoPage() {
  return (
    <div className="min-h-[calc(100svh-64px)] bg-demolay-parchment pb-20 pt-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="divider-ornament max-w-[220px] text-demolay-gold-600">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em]">
            Presença institucional
          </span>
        </div>
        <h1 className="font-display mt-4 text-3xl font-semibold text-demolay-blue-950 sm:text-4xl">
          Reconhecimento na Sociedade
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-demolay-blue-900/70 sm:text-base">
          Momentos em que o capítulo representa a Ordem DeMolay perante a
          comunidade de São Francisco do Sul.
        </p>
      </div>

      <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28">
        {eventosReconhecimento.map((evento) => (
          <EventoReconhecimento key={evento.id} evento={evento} />
        ))}
      </div>
    </div>
  );
}
