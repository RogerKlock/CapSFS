"use client";

import { useRef, useState } from "react";
import { gestoes } from "@/data/gestoes";
import GestaoCard from "./GestaoCard";

export default function LinhaDoTempo() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDragging: false, startX: 0, startScroll: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      isDragging: true,
      startX: e.pageX - track.offsetLeft,
      startScroll: track.scrollLeft,
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
    track.scrollLeft = dragState.current.startScroll - walk;
  };

  return (
    <div
      ref={trackRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
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
          <GestaoCard gestao={gestao} />
        </div>
      ))}
      {/* Espaçador final para garantir respiro após o último card ao arrastar */}
      <div className="w-1 shrink-0 sm:w-6" aria-hidden />
    </div>
  );
}
