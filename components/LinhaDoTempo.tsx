"use client";

import { useRef, useState } from "react";
import { gestoes, type Gestao } from "@/data/gestoes";
import GestaoCard from "./GestaoCard";
import GestaoModal from "./GestaoModal";

// Distância mínima de arraste (px) para não ser confundida com um clique
const LIMIAR_ARRASTE = 5;

export default function LinhaDoTempo() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDragging: false, startX: 0, startScroll: 0, arrastou: false });
  const [isDragging, setIsDragging] = useState(false);
  const [selecionada, setSelecionada] = useState<Gestao | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      isDragging: true,
      startX: e.pageX - track.offsetLeft,
      startScroll: track.scrollLeft,
      arrastou: false,
    };
    setIsDragging(true);
  };

  const stopDragging = () => {
    dragState.current.isDragging = false;
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track || !dragState.current.isDragging) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = x - dragState.current.startX;
    if (Math.abs(walk) > LIMIAR_ARRASTE) dragState.current.arrastou = true;
    track.scrollLeft = dragState.current.startScroll - walk;
  };

  // Se o clique veio logo após um arraste (mouse), ignora — foi só navegação, não intenção de abrir o pop-up
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragState.current.arrastou) {
      e.stopPropagation();
      e.preventDefault();
      dragState.current.arrastou = false;
    }
  };

  return (
    <>
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onClickCapture={onClickCapture}
        className={`no-scrollbar flex touch-pan-x snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 py-4 select-none sm:gap-8 sm:px-12 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {gestoes.map((gestao) => (
          <div key={gestao.id} className="flex shrink-0 snap-start flex-col items-center">
            {/* Nó do "trilho" da linha do tempo, acima de cada card */}
            <div className="mb-3 flex flex-col items-center gap-1.5">
              <span className="h-2.5 w-2.5 rotate-45 bg-demolay-gold-500 shadow-[0_0_0_4px_var(--color-demolay-parchment)]" />
              <span className="h-7 w-px bg-gradient-to-b from-demolay-gold-500/70 to-transparent" />
            </div>
            <GestaoCard gestao={gestao} onClick={() => setSelecionada(gestao)} />
          </div>
        ))}
        {/* Espaçador final para garantir respiro após o último card ao arrastar */}
        <div className="w-1 shrink-0 sm:w-6" aria-hidden />
      </div>

      {selecionada && (
        <GestaoModal gestao={selecionada} onClose={() => setSelecionada(null)} />
      )}
    </>
  );
}
