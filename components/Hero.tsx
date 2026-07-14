import Image from "next/image";
import { capitulo } from "@/data/capitulo";

export default function Hero() {
  return (
    <section
      className="relative flex h-[100svh] min-h-[640px] w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-demolay-blue-950) 0%, var(--color-demolay-blue-900) 45%, var(--color-demolay-blue-800) 82%, var(--color-demolay-blue-800) 100%)",
      }}
    >
      {/* Textura e glow sutis para dar profundidade sem poluir o brasão.
          Ambos desaparecem gradualmente antes do rodapé (sem corte seco), para
          que a cor chegue "chapada" e idêntica ao topo do Carrossel logo abaixo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_50%_18%,var(--color-demolay-gold-500)_0%,transparent_55%)]"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 88%)",
        }}
      />
      <div
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 88%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_35%,rgba(1,13,28,0.55)_100%)]"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 88%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="fade-in-up relative flex items-center justify-center">
          {/* Anel de moldura dourado ao redor do brasão, efeito medalhão */}
          <span
            aria-hidden
            className="absolute h-52 w-52 rounded-full border border-demolay-gold-400/40 sm:h-64 sm:w-64"
          />
          <span
            aria-hidden
            className="absolute h-60 w-60 rounded-full border border-demolay-gold-400/15 sm:h-72 sm:w-72"
          />
          <Image
            src="/logo.png"
            alt={`Brasão do ${capitulo.nome}`}
            width={280}
            height={280}
            priority
            className="relative h-44 w-44 drop-shadow-[0_0_40px_rgba(228,185,106,0.4)] sm:h-60 sm:w-60"
          />
        </div>

        <h1 className="fade-in-up [animation-delay:150ms] font-display mt-10 text-4xl font-semibold tracking-wide text-demolay-parchment sm:text-6xl">
          {capitulo.nome}
        </h1>

        <div className="fade-in-up [animation-delay:300ms] mt-5 flex items-center gap-3 text-demolay-gold-400">
          <span className="h-px w-8 bg-demolay-gold-500/60 sm:w-12" />
          <p className="text-xs uppercase tracking-[0.35em] sm:text-sm">
            {capitulo.slogan}
          </p>
          <span className="h-px w-8 bg-demolay-gold-500/60 sm:w-12" />
        </div>
      </div>

      <a
        href="#biografia"
        aria-label="Rolar para conhecer a biografia do capítulo"
        className="fade-in-up [animation-delay:500ms] group absolute bottom-9 z-10 flex flex-col items-center gap-2.5"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-demolay-parchment/60">
          Role para baixo
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-demolay-gold-400/40 text-demolay-gold-400 transition-colors group-hover:border-demolay-gold-400 group-hover:text-demolay-gold-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.6}
            stroke="currentColor"
            className="h-4 w-4 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </a>
    </section>
  );
}
