"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function FotoModal({
  src,
  alt = "Foto",
  onClose,
}: {
  src: string;
  alt?: string;
  onClose: () => void;
}) {
  // Bloqueia o scroll da página e permite fechar com Esc enquanto o pop-up está aberto
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-demolay-blue-950/85 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="fade-in-up relative flex max-h-full max-w-full items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-3 right-0 z-20 flex h-9 w-9 -translate-y-full items-center justify-center rounded-full bg-demolay-blue-950/70 text-white backdrop-blur-sm transition-colors hover:bg-demolay-blue-950 sm:-top-4 sm:translate-y-0"
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

        <div className="relative h-[80vh] w-[90vw] max-w-4xl sm:h-[85vh]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="90vw"
            className="rounded-xl object-contain shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
