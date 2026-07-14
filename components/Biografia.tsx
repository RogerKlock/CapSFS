import { capitulo } from "@/data/capitulo";

export default function Biografia() {
  const paragrafos = capitulo.biografia
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section
      id="biografia"
      className="scroll-mt-24 bg-demolay-parchment px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="divider-ornament max-w-[220px] text-demolay-gold-600">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em]">
            Nossa história
          </span>
        </div>
        <h2 className="font-display mt-4 text-3xl font-semibold text-demolay-blue-950 sm:text-4xl">
          Biografia do Capítulo
        </h2>

        <div className="relative mt-10 space-y-6 border-l-2 border-demolay-gold-500/30 pl-6 text-base leading-relaxed text-demolay-blue-900/85 sm:pl-8 sm:text-lg sm:leading-loose">
          {paragrafos.map((paragrafo, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-demolay-gold-600 sm:first-letter:text-7xl"
                  : undefined
              }
            >
              {paragrafo}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
