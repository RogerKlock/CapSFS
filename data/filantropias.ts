// Dados das ações filantrópicas realizadas pelo capítulo.
//
// Como adicionar uma nova filantropia:
// 1. Copie um dos objetos abaixo e cole no final do array `filantropias`.
// 2. Preencha `id` (único), `titulo` e `descricao` — campos obrigatórios.
//    `ano` é opcional; se ausente, o selo de ano não é exibido no card.
// 3. `imagens` é um array com pelo menos uma foto — coloque os arquivos em
//    `public/imagens/` e referencie os caminhos (ex: "/imagens/minha-acao.png").
//    Com mais de uma imagem, o pop-up exibido ao clicar no card vira um
//    carrossel deslizável automaticamente.
// Não é necessário alterar nenhum componente — a página de Filantropias lê
// diretamente este array.

export type Filantropia = {
  id: string;
  titulo: string;
  ano?: string;
  descricao: string;
  imagens: string[];
};

export const filantropias: Filantropia[] = [
  {
    id: "abrigo",
    titulo: "Doação ao Abrigo",
    descricao:
      "Entregamos a cada criança acolhida no abrigo um kit de higiene pessoal, além de cestas básicas para apoiar a instituição no dia a dia.",
    imagens: ["/imagens/filantropia-abrigo-1.jpg"],
  },
  {
    id: "alimentos",
    titulo: "Arrecadação de Alimentos",
    descricao:
      "Arrecadamos alimentos não perecíveis e doamos a um centro de apoio que atende comunidades em situação de vulnerabilidade social.",
    imagens: ["/imagens/filantropia-alimentos-1.jpg"],
  },
  {
    id: "pascoa",
    titulo: "Páscoa Solidária",
    descricao:
      "Nos reunimos para doar brinquedos, doces e jogos às crianças da nossa comunidade, levando um pouco de alegria à Páscoa delas.",
    imagens: [
      "/imagens/filantropia-pascoa-1.jpg",
      "/imagens/filantropia-pascoa-2.jpg",
    ],
  },
  {
    id: "praia",
    titulo: "Limpeza de Praias",
    descricao:
      "Nos reunimos nas praias da cidade para um mutirão de limpeza, recolhendo mais de 50 sacos de lixo e contribuindo para um litoral mais limpo.",
    imagens: [
      "/imagens/filantropia-praia-1.jpg",
      "/imagens/filantropia-praia-2.jpg",
    ],
  },
];
