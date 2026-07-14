// Dados da Linha do Tempo — gestões (diretorias) do capítulo, em ordem cronológica.
// Cada ano tem duas gestões (semestres): A (1º semestre) e B (2º semestre).
//
// Como adicionar uma nova gestão:
// 1. Copie um dos objetos abaixo e cole no final do array `gestoes`.
// 2. Preencha `id` (único, ex: "2027a"), `ano` (ex: "2027 A") e
//    `responsavel` (nome do Mestre Conselheiro) — campos obrigatórios.
// 3. `descricao` é opcional — use para um destaque breve da gestão, se houver.
// 4. Coloque a foto da gestão em `public/imagens/` e referencie o caminho
//    em `imagem` (ex: "/imagens/gestao-2027a.jpg").
// Não é necessário alterar nenhum componente — a página de Linha do Tempo lê
// diretamente este array.

export type Gestao = {
  id: string;
  ano: string; // ex: "2022 B"
  responsavel: string; // nome do Mestre Conselheiro
  descricao?: string;
  imagem?: string;
};

export const gestoes: Gestao[] = [
  {
    id: "2022b",
    ano: "2022 B",
    responsavel: "Roger Klock",
    imagem: "/imagens/gestao-2022b.jpg",
  },
  {
    id: "2023a",
    ano: "2023 A",
    responsavel: "João Eduardo Matos",
    imagem: "/imagens/gestao-2023a.jpg",
  },
  {
    id: "2023b",
    ano: "2023 B",
    responsavel: "João Lucca Palombarini",
    imagem: "/imagens/gestao-2023b.jpg",
  },
  {
    id: "2024a",
    ano: "2024 A",
    responsavel: "Bruno Dalla",
    imagem: "/imagens/gestao-2024a.jpg",
  },
  {
    id: "2024b",
    ano: "2024 B",
    responsavel: "Pedro Fonseca Schotz",
    imagem: "/imagens/gestao-2024b.jpg",
  },
  {
    id: "2025a",
    ano: "2025 A",
    responsavel: "Kauã Mira Cardoso",
    imagem: "/imagens/gestao-2025a.jpg",
  },
  {
    id: "2025b",
    ano: "2025 B",
    responsavel: "João Henrique Pikulski",
    imagem: "/imagens/gestao-2025b.jpg",
  },
  {
    id: "2026a",
    ano: "2026 A",
    responsavel: "João Gabriel Fernandes",
    imagem: "/imagens/gestao-2026a.jpg",
  },
  {
    id: "2026b",
    ano: "2026 B",
    responsavel: "Felipe Cremer",
    imagem: "/imagens/gestao-2026b.jpg",
  },
];
