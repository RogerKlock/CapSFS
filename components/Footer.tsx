import Image from "next/image";
import { capitulo } from "@/data/capitulo";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-grain relative mt-auto overflow-hidden bg-demolay-blue-950 px-6 py-12 text-center text-demolay-parchment/65">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-demolay-gold-500/50 to-transparent" />

      <div className="relative flex flex-col items-center gap-3">
        <Image
          src="/imagens/brasao-demolay.png"
          alt="Brasão da Ordem DeMolay"
          width={48}
          height={60}
          className="h-12 w-auto opacity-90"
        />
        <p className="font-display text-base font-semibold tracking-wide text-demolay-gold-400">
          {capitulo.nome}
        </p>
        <p className="text-xs uppercase tracking-[0.25em]">{capitulo.slogan}</p>

        {/* Redes sociais — adicione novos links seguindo o mesmo padrão de <a> */}
        <div className="mt-1 flex items-center gap-3">
          <a
            href={capitulo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram do ${capitulo.nome}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-demolay-gold-500/30 text-demolay-gold-400 transition-colors hover:border-demolay-gold-400 hover:bg-demolay-gold-400/10 hover:text-demolay-gold-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <div className="divider-ornament mt-1 w-40 text-demolay-gold-500/50">
          <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-current" />
        </div>
        <p className="text-xs">
          &copy; {anoAtual} {capitulo.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
