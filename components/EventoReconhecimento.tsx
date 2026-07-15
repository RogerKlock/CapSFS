import Image from "next/image";
import Carrossel from "./Carrossel";
import type { EventoReconhecimento as EventoType } from "@/data/reconhecimento";

export default function EventoReconhecimento({ evento }: { evento: EventoType }) {
  return (
    <section className="space-y-10 sm:space-y-14">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        {evento.periodo && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-demolay-gold-600">
            {evento.periodo}
          </p>
        )}
        <h2 className="font-display mt-2 text-2xl font-semibold text-demolay-blue-950 sm:text-3xl">
          {evento.titulo}
        </h2>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-white shadow-xl sm:aspect-[21/9]">
          <Image
            src={evento.imagemPrincipal}
            alt={evento.titulo}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-5 px-6 sm:px-10">
        {evento.paragrafos.map((paragrafo, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-demolay-blue-900/80 sm:text-lg sm:leading-loose"
          >
            {paragrafo}
          </p>
        ))}
      </div>

      <Carrossel
        imagens={evento.imagensCarrossel}
        altTexto={`Foto do evento ${evento.titulo}`}
        tamanhoCard="w-52 sm:w-72 md:w-80"
      />
    </section>
  );
}
