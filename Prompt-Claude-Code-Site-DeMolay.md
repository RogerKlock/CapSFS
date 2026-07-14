# Prompt para o Claude Code — Site do Capítulo DeMolay

Crie um projeto Next.js (App Router) completo para o site institucional de um capítulo da Ordem DeMolay, usando TypeScript e Tailwind CSS. Não use banco de dados nem autenticação — o conteúdo deve ficar em arquivos de dados estáticos dentro do próprio projeto, para facilitar edição futura.

## Visão geral

O site tem três telas, acessadas por uma barra de navegação fixa presente em todas as páginas: **Home**, **Linha do Tempo** e **Filantropias**.

## 1. Home (`app/page.tsx`)

- Seção "hero" ocupando praticamente a viewport inteira, com a logo do capítulo (`public/logo.png`, use um placeholder por enquanto) centralizada e em grande evidência, sobre um fundo que reforce a identidade visual (pode ser uma cor sólida institucional ou gradiente).
- Inclua um indicador visual sutil de "role para baixo" (seta ou ícone) no final do hero.
- Ao rolar para baixo, exibir uma seção de **biografia do capítulo**: título + texto (use um texto placeholder longo o suficiente para simular conteúdo real), com boa largura de leitura e espaçamento confortável.
- A barra de navegação deve ficar sobreposta ao hero (fundo translúcido) e ganhar fundo sólido ao rolar a página.

## 2. Linha do Tempo (`app/linha-do-tempo/page.tsx`)

- Exibe cada gestão do capítulo em ordem cronológica, em um layout que se estende **horizontalmente**.
- A navegação entre os itens deve ser feita por **arraste horizontal** (drag), funcionando bem tanto com mouse (desktop) quanto com toque (mobile). Pode usar scroll-snap para os cards "encaixarem" durante o arraste.
- Cada item da linha do tempo (`GestaoCard`) exibe: ano/período, nome da gestão (opcional), responsável (opcional) e uma breve descrição.
- Os dados vêm de `data/gestoes.ts`, um array tipado com pelo menos 5 gestões de exemplo (dados fictícios, pode inventar anos e nomes de exemplo).

## 3. Filantropias (`app/filantropias/page.tsx`)

- Grid responsivo de cards (`FilantropiaCard`), cada um com uma foto (placeholder) e uma descrição breve da ação realizada.
- Os dados vêm de `data/filantropias.ts`, um array tipado com pelo menos 4 filantropias de exemplo (dados fictícios).

## Estrutura de dados

```ts
// data/gestoes.ts
export type Gestao = {
  id: string;
  ano: string; // ex: "2023/2024"
  nome?: string;
  responsavel?: string;
  descricao: string;
  imagem?: string;
};

// data/filantropias.ts
export type Filantropia = {
  id: string;
  titulo: string;
  ano: string;
  descricao: string;
  imagens: string[];
};
```

## Estrutura de arquivos esperada

```
app/
  page.tsx
  linha-do-tempo/page.tsx
  filantropias/page.tsx
  layout.tsx
components/
  Navbar.tsx
  Hero.tsx
  Biografia.tsx
  LinhaDoTempo.tsx
  GestaoCard.tsx
  FilantropiaCard.tsx
  Footer.tsx
data/
  gestoes.ts
  filantropias.ts
public/
  logo.png
  imagens/
```

## Requisitos gerais

- Responsividade completa (desktop, tablet, mobile), com atenção especial à experiência de arraste na Linha do Tempo em telas touch.
- Use o componente `next/image` para todas as imagens (logo, fotos de gestões e filantropias), com placeholders enquanto não houver imagens reais.
- Adicione metadata básica (título e descrição) em cada página, pensando em SEO institucional.
- Código organizado em componentes reutilizáveis, com comentários explicando onde e como adicionar uma nova gestão ou filantropia (edição dos arquivos em `data/`).
- Não implemente login, cadastro de membros, painel administrativo, doações online ou blog — está fora de escopo desta versão.

## Estilo visual

- Visual limpo, institucional, com boa hierarquia tipográfica.
- Use uma paleta de cores neutra com um tom de destaque (pode ser ajustado depois para as cores reais do capítulo) — sugestão inicial: tons de azul/dourado, remetendo à identidade DeMolay, mas deixe fácil de trocar depois (ex: variáveis de cor no Tailwind config).
