"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { capitulo } from "@/data/capitulo";

const links = [
  { href: "/linha-do-tempo", label: "Linha do Tempo" },
  { href: "/filantropias", label: "Filantropias" },
  { href: "/festilha", label: "Festilha" },
  { href: "/reconhecimento", label: "Reconhecimento" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Na Home, a navbar começa translúcida sobre o hero e vira sólida ao rolar.
  // Nas demais páginas (sem hero de fundo escuro) ela é sempre sólida.
  const isSolid = !isHome || scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Filete dourado no topo, remetendo às faixas heráldicas do brasão */}
      <div className="h-[3px] w-full bg-gradient-to-r from-demolay-gold-600 via-demolay-gold-400 to-demolay-gold-600" />

      <div
        className={`transition-all duration-300 ${
          isSolid
            ? "border-b border-demolay-gold-500/15 bg-demolay-blue-950/90 shadow-[0_4px_24px_rgba(1,13,28,0.35)] backdrop-blur-md"
            : "bg-gradient-to-b from-demolay-blue-950/50 to-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`Brasão do ${capitulo.nome}`}
              width={40}
              height={40}
              className="h-9 w-9 transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
            />
            <span className="font-display text-base font-semibold tracking-wide text-demolay-gold-400 sm:text-lg">
              {capitulo.nome}
            </span>
          </Link>

          <ul className="hidden items-center gap-6 xl:flex xl:gap-8">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative py-1 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-demolay-gold-400 ${
                      active ? "text-demolay-gold-400" : "text-demolay-parchment/85"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-demolay-gold-400 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center justify-center rounded-md p-2 text-demolay-parchment xl:hidden"
            aria-label="Abrir menu de navegação"
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      <div
        className={`overflow-hidden border-b border-demolay-gold-500/15 bg-demolay-blue-950/97 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-in-out xl:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link, index) => (
            <li key={link.href}>
              {index > 0 && (
                <div className="mb-1 h-px w-full bg-demolay-gold-500/10" />
              )}
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm font-medium uppercase tracking-[0.18em] ${
                  pathname === link.href
                    ? "text-demolay-gold-400"
                    : "text-demolay-parchment/85"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
