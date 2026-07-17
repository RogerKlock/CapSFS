import type { Metadata } from "next";
import FilantropiasGaleria from "@/components/FilantropiasGaleria";
import { filantropias } from "@/data/filantropias";
import { capitulo } from "@/data/capitulo";

export const metadata: Metadata = {
  title: "Filantropias",
  description: `Conheça as ações filantrópicas realizadas pelo ${capitulo.nome} ao longo dos anos.`,
};

export default function FilantropiasPage() {
  return (
    <div className="min-h-[calc(100svh-64px)] bg-demolay-parchment px-6 pb-20 pt-32 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="divider-ornament max-w-[220px] text-demolay-gold-600">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em]">
            Serviço ao próximo
          </span>
        </div>
        <h1 className="font-display mt-4 text-3xl font-semibold text-demolay-blue-950 sm:text-4xl">
          Filantropias
        </h1>
        <div className="mt-3 max-w-3xl space-y-4 text-sm text-demolay-blue-900/70 sm:text-base">
          <p>
            Nosso capítulo realiza inúmeras filantropias em prol da nossa
            cidade durante o ano inteiro. Diversas instituições e
            organizações já foram beneficiadas por nossos trabalhos e
            serviços, juntamente com famílias carentes, pessoas em situação
            de vulnerabilidade, áreas públicas de nossa cidade, instituições
            públicas de ensino infantil, entre outras. Nossas causas são
            inteiramente voluntárias e sem retorno financeiro para nossa
            Ordem.
          </p>
          <p>Seguimos à risca nosso principal lema:</p>
          <p className="font-display text-lg italic text-demolay-blue-950 sm:text-xl">
            &ldquo;Para ser um DeMolay, é necessário ser útil à sociedade. Mas
            para ser útil à sociedade, não é necessário ser DeMolay.&rdquo;
          </p>
          <p>
            Registro das principais ações sociais realizadas pelo capítulo ao
            longo de sua trajetória. Clique em um card para ver mais fotos e
            detalhes.
          </p>
        </div>

        <FilantropiasGaleria filantropias={filantropias} />
      </div>
    </div>
  );
}
