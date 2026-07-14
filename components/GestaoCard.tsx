import Image from "next/image";
import type { Gestao } from "@/data/gestoes";

export default function GestaoCard({ gestao }: { gestao: Gestao }) {
  return (
    <article className="group flex h-full w-[280px] flex-col overflow-hidden rounded-2xl border border-demolay-blue-900/10 bg-white shadow-[0_1px_2px_rgba(1,13,28,0.06),0_12px_28px_-12px_rgba(1,13,28,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(1,13,28,0.08),0_20px_36px_-14px_rgba(1,13,28,0.32)] sm:w-[320px]">
      <div className="relative h-40 w-full shrink-0 overflow-hidden bg-demolay-blue-900 sm:h-48">
        {gestao.imagem ? (
          <Image
            src={gestao.imagem}
            alt={`Foto da Gestão ${gestao.ano}`}
            fill
            sizes="(max-width: 640px) 280px, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-demolay-gold-400">
            <span className="text-sm font-medium">{gestao.ano}</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-demolay-gold-600 via-demolay-gold-400 to-demolay-gold-600" />
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <h3 className="font-display text-lg font-semibold text-demolay-blue-950">
          Gestão {gestao.ano}
        </h3>
        <p className="text-sm font-medium tracking-wide text-demolay-gold-600">
          Mestre Conselheiro: {gestao.responsavel}
        </p>
        {gestao.descricao && (
          <p className="mt-1 text-sm leading-relaxed text-demolay-blue-900/75">
            {gestao.descricao}
          </p>
        )}
      </div>
    </article>
  );
}
