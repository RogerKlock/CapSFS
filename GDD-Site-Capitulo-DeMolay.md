# GDD — Site do Capítulo DeMolay
### Documento de Design e Especificação para Desenvolvimento

---

## 1. Objetivo do projeto

Este documento especifica o desenvolvimento de um site institucional para um capítulo da Ordem DeMolay, com o propósito de apresentar a identidade visual do capítulo, sua história (biografia), a linha do tempo de gestões já realizadas e as ações filantrópicas desenvolvidas ao longo do tempo.

O site tem caráter institucional e de divulgação, servindo tanto para membros do capítulo quanto para visitantes externos (familiares, comunidade DeMolay, possíveis novos membros e apoiadores) que desejam conhecer a trajetória e as ações do capítulo.

O foco do projeto é entregar um site simples, objetivo, visualmente marcante e de fácil manutenção de conteúdo, priorizando poucas telas bem construídas ao invés de uma estrutura extensa e complexa.

---

## 2. Cenário do site

Um capítulo da Ordem DeMolay deseja ter uma presença digital própria para contar sua história e divulgar seu trabalho filantrópico.

O site deve comunicar, de forma clara e visualmente agradável:

- a identidade do capítulo (logo, biografia);
- sua trajetória histórica, organizada por gestões (diretorias que se sucedem ano a ano);
- as ações filantrópicas realizadas, com registro fotográfico e descrição.

O site **não** possui, nesta primeira versão, área de login, área restrita de membros, ou qualquer funcionalidade transacional (doações online, cadastro de membros, etc.). É um site majoritariamente institucional e de conteúdo.

---

## 3. Tecnologias utilizadas

- **Next.js** (App Router) — front-end e back-end no mesmo projeto, permitindo futuramente adicionar rotas de API se necessário (ex: formulário de contato, CMS simples);
- **Tailwind CSS** — estilização utilitária, para agilizar a criação do front-end e manter consistência visual;
- **TypeScript** (recomendado) — tipagem para os dados de gestões e filantropias, reduzindo erros ao evoluir o conteúdo;
- Sem banco de dados nesta primeira versão — o conteúdo (gestões, filantropias, textos) pode ficar em arquivos de dados estáticos (JSON/TS) dentro do próprio projeto, facilitando edição futura e possível migração para um CMS depois.

---

## 4. Estrutura de telas (páginas)

O site terá **três telas principais**, acessíveis por uma barra de navegação fixa/persistente:

### 4.1. Home
- Seção inicial (hero): logo do capítulo em grande evidência, ocupando a maior parte da tela (altura de viewport completa ou quase completa), com fundo que reforce a identidade visual do capítulo;
- Ao rolar a página para baixo, uma segunda seção apresenta a **biografia do capítulo**: texto contando a história, fundação, valores e propósito do capítulo;
- Pode incluir uma indicação visual de "role para baixo" (seta ou ícone) no hero, para sinalizar que há mais conteúdo abaixo.

### 4.2. Linha do Tempo
- Tela dedicada a mostrar **cada gestão já realizada pelo capítulo**, organizada cronologicamente;
- Cada gestão exibe, no mínimo: ano (ou período), nome da gestão/tema (se houver), e pode incluir nome do Mestre Conselheiro ou diretoria responsável, e uma breve descrição/destaque da gestão;
- A navegação entre as gestões é feita por **arraste horizontal (drag/scroll horizontal)**, como uma linha do tempo que se estende para os lados, e não por rolagem vertical;
- Deve funcionar tanto com arraste do mouse (desktop) quanto com toque (mobile/touch), com boa experiência em ambos.

### 4.3. Filantropias
- Tela que apresenta as ações filantrópicas realizadas pelo capítulo;
- Cada filantropia é exibida como um card/bloco contendo: uma ou mais fotos e uma breve descrição da ação realizada;
- Formato sugerido: grade (grid) responsiva de cards, com foto em destaque e texto curto abaixo ou sobreposto.

---

## 5. Estrutura de dados sugerida

Como não há banco de dados nesta versão, os dados podem ser representados como estruturas simples dentro do projeto (ex: `data/gestoes.ts` e `data/filantropias.ts`):

**Gestão (linha do tempo)**
- id
- ano (ou período, ex: "2023/2024")
- nome da gestão (opcional)
- responsável(is) (opcional)
- descrição/destaques (texto curto)
- imagem (opcional, ex: foto da diretoria)

**Filantropia**
- id
- título da ação
- data ou ano
- descrição breve
- imagem(ns) (uma ou mais fotos)

---

## 6. Navegação

- Barra de navegação fixa no topo, presente em todas as telas, com os itens: **Home**, **Linha do Tempo**, **Filantropias**;
- Na Home, a navegação para a barra pode ficar sobreposta ao hero (com fundo translúcido) e sólida ao rolar, para manter a logo em evidência sem obstrução;
- Navegação deve ser responsiva, com menu adaptado para mobile (ex: menu hambúrguer) caso necessário.

---

## 7. Diretrizes visuais

- A logo do capítulo é o elemento de maior destaque visual do site, especialmente na Home;
- Paleta de cores e tipografia devem refletir a identidade visual da Ordem DeMolay e/ou do capítulo (cores institucionais, se houver);
- Layout limpo, com bom espaçamento e leitura confortável para a biografia (texto longo);
- Cards de filantropia e itens da linha do tempo devem manter um padrão visual consistente entre si.

---

## 8. Requisitos não funcionais

- **Responsividade**: o site deve funcionar bem em desktop, tablet e mobile, com atenção especial à interação de arraste horizontal da Linha do Tempo em telas touch;
- **Performance**: imagens (logo, fotos de filantropias, fotos de gestões) devem ser otimizadas (uso do componente de imagem do Next.js);
- **SEO básico**: título, descrição e metatags apropriadas para cada página, já que o site é institucional e pode ser encontrado por busca;
- **Facilidade de manutenção de conteúdo**: adicionar uma nova gestão ou uma nova filantropia deve ser simples (idealmente, apenas editar um arquivo de dados, sem mexer em lógica de interface).

---

## 9. Estrutura de arquivos sugerida (Next.js)

```
site-capitulo-demolay/
├── app/
│   ├── page.tsx                 -> Home (hero + biografia)
│   ├── linha-do-tempo/
│   │   └── page.tsx             -> Tela da linha do tempo
│   ├── filantropias/
│   │   └── page.tsx             -> Tela de filantropias
│   └── layout.tsx               -> Layout geral + barra de navegação
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Biografia.tsx
│   ├── LinhaDoTempo.tsx
│   ├── GestaoCard.tsx
│   ├── FilantropiaCard.tsx
│   └── Footer.tsx
├── data/
│   ├── gestoes.ts
│   └── filantropias.ts
├── public/
│   ├── logo.png
│   └── imagens/
├── tailwind.config.ts
└── package.json
```

---

## 10. Fora de escopo (nesta primeira versão)

- Área de login ou autenticação;
- Cadastro de membros;
- Painel administrativo para editar conteúdo pela interface (o conteúdo é editado diretamente nos arquivos de dados);
- Doações online ou qualquer integração de pagamento;
- Blog ou seção de notícias (pode ser considerado em uma versão futura).

---

## 11. Entregável esperado

- Projeto Next.js completo e funcional, com as três telas descritas;
- Dados de exemplo (placeholder) para gestões e filantropias, prontos para serem substituídos pelo conteúdo real do capítulo;
- Instruções básicas de como adicionar uma nova gestão ou filantropia (comentários no próprio arquivo de dados são suficientes).

---

## 12. Observação final

Este documento serve como especificação de base para a criação do site via Claude Code. Antes de repassar o prompt final, é recomendável ter em mãos: a logo do capítulo, o texto da biografia, a lista de gestões (ano a ano) e as fotos/descrições das filantropias — mesmo que inicialmente com dados fictícios de exemplo, para já validar a estrutura visual e depois substituir pelo conteúdo real.
