"use client";

import { useState } from "react";
import type { Filantropia } from "@/data/filantropias";
import FilantropiaCard from "./FilantropiaCard";
import FilantropiaModal from "./FilantropiaModal";

export default function FilantropiasGaleria({
  filantropias,
}: {
  filantropias: Filantropia[];
}) {
  const [selecionada, setSelecionada] = useState<Filantropia | null>(null);

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filantropias.map((filantropia) => (
          <FilantropiaCard
            key={filantropia.id}
            filantropia={filantropia}
            onClick={() => setSelecionada(filantropia)}
          />
        ))}
      </div>

      {selecionada && (
        <FilantropiaModal
          filantropia={selecionada}
          onClose={() => setSelecionada(null)}
        />
      )}
    </>
  );
}
