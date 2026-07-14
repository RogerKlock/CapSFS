import Image from "next/image";
import type { Filantropia } from "@/data/filantropias";

export default function FilantropiaCard({
  filantropia,
  onClick,
}: {
  filantropia: Filantropia;
  onClick: () => void;
}) {
  const capa = filantropia.imagens[0];
  const temMaisFotos = filantropia.imagens.length > 1;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-2xl border border-demolay-blue-900/10 bg-white text-left shadow-[0_1px_2px_rgba(1,13,28,0.06),0_12px_28px_-12px_rgba(1,13,28,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(1,13,28,0.08),0_20px_36px_-14px_rgba(1,13,28,0.32)]"
    >
      <div className="relative h-56 w-full overflow-hidden bg-demolay-blue-900">
        {capa && (
          <Image
            src={capa}
            alt={filantropia.titulo}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-demolay-blue-950/60 via-transparent to-transparent" />
        {filantropia.ano && (
          <span className="absolute right-3 top-3 rounded-full bg-demolay-blue-950/85 px-3 py-1 text-xs font-semibold tracking-wide text-demolay-gold-400 backdrop-blur-sm">
            {filantropia.ano}
          </span>
        )}
        {temMaisFotos && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-demolay-blue-950/85 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z"
              />
            </svg>
            {filantropia.imagens.length}
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-demolay-blue-950/85 px-3 py-1.5 text-center text-xs font-medium uppercase tracking-[0.15em] text-demolay-gold-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Ver fotos e detalhes
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold text-demolay-blue-950">
          {filantropia.titulo}
        </h3>
        <p className="text-sm leading-relaxed text-demolay-blue-900/75">
          {filantropia.descricao}
        </p>
      </div>
    </button>
  );
}
