// Eventos de reconhecimento da Ordem DeMolay perante a sociedade.
//
// Como adicionar um novo evento:
// 1. Copie o objeto abaixo e cole no final do array `eventosReconhecimento`.
// 2. Preencha `id` (único), `titulo`, `periodo` (opcional), `paragrafos` e
//    `imagemPrincipal`/`imagensCarrossel`.
// 3. Coloque as fotos em `public/imagens/` e referencie os caminhos.
// Não é necessário alterar nenhum componente — a página lê diretamente
// este array e renderiza um bloco por evento, na ordem em que aparecem aqui.

export type EventoReconhecimento = {
  id: string;
  titulo: string;
  periodo?: string;
  imagemPrincipal: string;
  paragrafos: string[];
  imagensCarrossel: string[];
};

export const eventosReconhecimento: EventoReconhecimento[] = [
  {
    id: "desfile-civico",
    titulo: "Desfile Cívico",
    periodo: "7 de Setembro",
    imagemPrincipal: "/imagens/desfile-principal.jpg",
    paragrafos: [
      "Todo dia 7 de setembro, São Francisco do Sul realiza o tradicional Desfile Cívico pelas ruas do seu Centro Histórico, celebrando a Independência do Brasil ao lado de escolas, entidades e demais comunidades da cidade.",
      "O Capítulo São Francisco do Sul nº 768 participa ativamente da celebração junto das demais entidades e comunidades da cidade, reunindo membros, bandeiras e estandartes da Ordem DeMolay em um cortejo que reforça o reconhecimento e o respeito conquistados pela Ordem perante a sociedade francisquense.",
    ],
    imagensCarrossel: [
      "/imagens/desfile-1.jpg",
      "/imagens/desfile-2.jpg",
      "/imagens/desfile-3.jpg",
      "/imagens/desfile-4.jpg",
      "/imagens/desfile-5.jpg",
    ],
  },
];
