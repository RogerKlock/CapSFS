"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FotoModal from "./FotoModal";

const INTERVALO_MS = 3500;

// Distância circular mais curta entre dois índices (considera o "loop" do array)
function offsetCircular(i: number, index: number, total: number) {
  let diff = i - index;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export default function Carrossel({
  imagens,
  fundo,
  altTexto = "Foto do capítulo",
  tamanhoCard = "w-40 sm:w-56 md:w-64",
}: {
  imagens: string[];
  /** Estilo de fundo da seção (ex: o degradê azul → pergaminho usado na Home). Sem isso, fica transparente. */
  fundo?: React.CSSProperties;
  altTexto?: string;
  /** Classes Tailwind de largura do card central (a altura acompanha via aspect-[4/5]). */
  tamanhoCard?: string;
}) {
  const [index, setIndex] = useState(0);
  const [fotoAberta, setFotoAberta] = useState<number | null>(null);
  const pausedRef = useRef(false);
  const total = imagens.length;
  // Mostra todas as fotos ao mesmo tempo, em leque, preenchendo a tela
  const vizinhosVisiveis = Math.floor(total / 2);

  useEffect(() => {
    if (total < 2) return;
    const id = setInterval(() => {
      if (!pausedRef.current && fotoAberta === null) {
        setIndex((i) => (i + 1) % total);
      }
    }, INTERVALO_MS);
    return () => clearInterval(id);
  }, [total, fotoAberta]);

  const goTo = (next: number) => setIndex(((next % total) + total) % total);

  return (
    <section
      className="relative overflow-x-hidden px-6 pb-16 pt-10 sm:pb-20 sm:pt-14"
      style={fundo}
    >
      <div
        className="relative mx-auto w-full max-w-[1400px]"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-demolay-gold-500/40 bg-white text-demolay-blue-900 shadow-sm transition-colors hover:border-demolay-gold-500 hover:text-demolay-gold-600 sm:left-6 sm:h-11 sm:w-11"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div
          className={`relative mx-auto aspect-[4/5] ${tamanhoCard}`}
          style={{ perspective: "1200px" }}
        >
          {imagens.map((src, i) => {
            const offset = offsetCircular(i, index, total);
            if (Math.abs(offset) > vizinhosVisiveis) return null;
            const isActive = offset === 0;
            const dist = Math.abs(offset);
            const scale = isActive ? 1 : Math.max(1 - dist * 0.12, 0.4);
            const opacity = isActive ? 1 : Math.max(1 - dist * 0.24, 0.15);

            return (
              <button
                key={src}
                type="button"
                onClick={() => (isActive ? setFotoAberta(i) : goTo(i))}
                aria-label={isActive ? "Ver foto ampliada" : `Ver foto ${i + 1}`}
                className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-white shadow-xl transition-[transform,opacity] duration-500 ease-out"
                style={{
                  transform: `translateX(${offset * 78}%) scale(${scale}) rotateY(${Math.max(-45, Math.min(45, offset * -16))}deg)`,
                  opacity,
                  zIndex: isActive ? 20 : 10 - dist,
                  cursor: "pointer",
                }}
              >
                <Image
                  src={src}
                  alt={altTexto}
                  fill
                  sizes="(max-width: 640px) 260px, 380px"
                  className="object-cover"
                  priority={i === 0}
                />
                {isActive && (
                  <span className="absolute left-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-demolay-blue-950/70 text-white backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-3.5 w-3.5">
                      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                      <circle cx="12" cy="12" r="4.2" />
                      <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Próxima foto"
          className="absolute right-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-demolay-gold-500/40 bg-white text-demolay-blue-900 shadow-sm transition-colors hover:border-demolay-gold-500 hover:text-demolay-gold-600 sm:right-6 sm:h-11 sm:w-11"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {total > 1 && (
        <div className="mt-8 flex items-center justify-center gap-1.5">
          {imagens.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-demolay-gold-500" : "w-1.5 bg-demolay-blue-900/20"
              }`}
            />
          ))}
        </div>
      )}

      {fotoAberta !== null && (
        <FotoModal
          src={imagens[fotoAberta]}
          alt={altTexto}
          onClose={() => setFotoAberta(null)}
        />
      )}
    </section>
  );
}
