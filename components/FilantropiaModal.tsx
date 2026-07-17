"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Filantropia } from "@/data/filantropias";

export default function FilantropiaModal({
  filantropia,
  onClose,
}: {
  filantropia: Filantropia;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ isDragging: false, startX: 0 });
  const trackWidthRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = filantropia.imagens.length;
  const hasMultiple = total > 1;

  const goTo = (next: number) => {
    setIndex(Math.max(0, Math.min(total - 1, next)));
  };

  // Bloqueia o scroll da página e permite fechar com Esc / setas enquanto o pop-up está aberto
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, onClose]);

  const startDrag = (clientX: number) => {
    if (!hasMultiple) return;
    trackWidthRef.current = trackRef.current?.clientWidth ?? 1;
    dragState.current = { isDragging: true, startX: clientX };
    setIsDragging(true);
  };

  const moveDrag = (clientX: number) => {
    if (!dragState.current.isDragging) return;
    setDragOffset(clientX - dragState.current.startX);
  };

  const endDrag = () => {
    if (!dragState.current.isDragging) return;
    dragState.current.isDragging = false;
    setIsDragging(false);
    const threshold = trackWidthRef.current * 0.18;
    if (dragOffset < -threshold) goTo(index + 1);
    else if (dragOffset > threshold) goTo(index - 1);
    setDragOffset(0);
  };

  const onMouseDown = (e: React.MouseEvent) => startDrag(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => moveDrag(e.clientX);
  const onTouchStart = (e: React.TouchEvent) => startDrag(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => moveDrag(e.touches[0].clientX);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-demolay-blue-950/75 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={filantropia.titulo}
    >
      <div
        className="fade-in-up relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:flex-row"
        style={{ maxHeight: "min(88vh, 760px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-demolay-blue-950/70 text-white backdrop-blur-sm transition-colors hover:bg-demolay-blue-950"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Carrossel de imagens */}
        <div className="relative aspect-[4/5] w-full shrink-0 select-none overflow-hidden bg-demolay-blue-950 sm:aspect-auto sm:w-1/2">
          <div
            ref={trackRef}
            className="flex h-full touch-pan-y"
            style={{
              transform: `translateX(calc(${-index * 100}% + ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 0.35s ease",
              cursor: hasMultiple ? "grab" : "default",
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={endDrag}
          >
            {filantropia.imagens.map((src, i) => (
              <div key={src} className="relative h-full w-full shrink-0">
                <Image
                  src={src}
                  alt={`${filantropia.titulo} — foto ${i + 1} de ${total}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain"
                  draggable={false}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                disabled={index === 0}
                aria-label="Foto anterior"
                className="absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-demolay-blue-950/60 p-1.5 text-white transition-opacity hover:bg-demolay-blue-950/85 disabled:pointer-events-none disabled:opacity-0 sm:flex"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                disabled={index === total - 1}
                aria-label="Próxima foto"
                className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-demolay-blue-950/60 p-1.5 text-white transition-opacity hover:bg-demolay-blue-950/85 disabled:pointer-events-none disabled:opacity-0 sm:flex"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5">
                {filantropia.imagens.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Ver foto ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-5 bg-demolay-gold-400" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <span className="absolute right-3 top-3 rounded-full bg-demolay-blue-950/70 px-2.5 py-1 text-xs font-medium text-white">
                {index + 1} / {total}
              </span>
            </>
          )}
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-3 overflow-y-auto p-6 sm:w-1/2 sm:p-8">
          {filantropia.ano && (
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-demolay-gold-600">
              {filantropia.ano}
            </span>
          )}
          <h2 className="font-display text-2xl font-semibold text-demolay-blue-950">
            {filantropia.titulo}
          </h2>
          <p className="text-sm leading-relaxed text-demolay-blue-900/80 sm:text-base">
            {filantropia.descricao}
          </p>
        </div>
      </div>
    </div>
  );
}
