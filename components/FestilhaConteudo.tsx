import Image from "next/image";
import { festilha } from "@/data/festilha";

// Converte "texto **em negrito** aqui" em JSX com <strong>
function paragrafoComEnfase(texto: string, key: number) {
  const partes = texto.split("**");
  return (
    <p key={key} className="text-base leading-relaxed text-demolay-blue-900/80 sm:text-lg sm:leading-loose">
      {partes.map((parte, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-demolay-blue-950">
            {parte}
          </strong>
        ) : (
          <span key={i}>{parte}</span>
        )
      )}
    </p>
  );
}

const imgClasses =
  "overflow-hidden rounded-2xl border-2 border-white shadow-[0_1px_2px_rgba(1,13,28,0.06),0_16px_32px_-14px_rgba(1,13,28,0.3)]";

export default function FestilhaConteudo() {
  const [p1, p2, p3, p4] = festilha.paragrafos;
  const { festival, chef, prato, preparo, estande } = festilha.imagens;

  return (
    <div className="mx-auto max-w-5xl space-y-14 sm:space-y-20">
      {/* Vídeo do evento — gravado na vertical, então limitamos a largura para
          não ocupar a tela inteira na exibição normal (em tela cheia continua
          ocupando o espaço todo, como esperado) */}
      <video
        controls
        playsInline
        preload="metadata"
        className="mx-auto w-full max-w-xs rounded-2xl border-2 border-white shadow-xl sm:max-w-sm"
      >
        <source src={festilha.video} type="video/mp4" />
      </video>

      <div className="space-y-8">
        {paragrafoComEnfase(p1, 0)}

        <div className={`relative aspect-[16/9] w-full ${imgClasses}`}>
          <Image
            src={festival}
            alt="Palco da Festilha com o Capítulo presente"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Texto + imagem lado a lado (prato oficial) */}
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-10">
        {paragrafoComEnfase(p2, 1)}
        <div className={`relative aspect-[4/5] w-full ${imgClasses} order-first sm:order-last`}>
          <Image
            src={chef}
            alt="Chef do capítulo preparando os ingredientes do Siri à Moda da Ilha"
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Imagem + texto lado a lado (invertido, para variar o ritmo) */}
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-10">
        <div className={`relative aspect-[4/5] w-full ${imgClasses}`}>
          <Image
            src={prato}
            alt="Siri à Moda da Ilha servido, prato oficial do capítulo na Festilha"
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover"
          />
        </div>
        {paragrafoComEnfase(p3, 2)}
      </div>

      {/* Galeria de bastidores */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <div className={`relative aspect-[4/5] w-full ${imgClasses}`}>
          <Image
            src={preparo}
            alt="Membro do capítulo preparando o prato em grande quantidade"
            fill
            sizes="(max-width: 768px) 50vw, 400px"
            className="object-cover"
          />
        </div>
        <div className={`relative aspect-[4/5] w-full ${imgClasses}`}>
          <Image
            src={estande}
            alt="Bastidores do estande do capítulo na Festilha"
            fill
            sizes="(max-width: 768px) 50vw, 400px"
            className="object-cover"
          />
        </div>
      </div>

      {paragrafoComEnfase(p4, 3)}
    </div>
  );
}
