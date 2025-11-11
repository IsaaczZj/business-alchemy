# Business Alchemy - Website e Blog

Este é o repositório do projeto Business Alchemy, um site institucional moderno e responsivo com um blog integrado. A aplicação é construída com Next.js e utiliza Contentlayer para gerenciar o conteúdo do blog a partir de arquivos Markdown.

## ✨ Funcionalidades

- **Landing Page Completa**: Uma página inicial com várias seções, incluindo Hero, Features, Depoimentos de Clientes e Chamada para Ação (CTA).
- **Blog com Markdown**: O conteúdo do blog é escrito em arquivos Markdown, facilitando a criação e gerenciamento de posts.
- **Busca de Posts**: Funcionalidade de busca em tempo real para filtrar e encontrar posts no blog.
- **Páginas de Post Detalhadas**: Cada post possui sua própria página com conteúdo formatado, informações do autor e data de publicação.
- **Compartilhamento Social**: Opções para compartilhar posts em redes sociais e copiar o link.
- **Design Responsivo**: A interface é totalmente adaptada para uma ótima experiência em desktops, tablets e dispositivos móveis.
- **Tipagem Segura com Contentlayer**: O conteúdo dos posts é validado e tipado em tempo de build, garantindo consistência e evitando erros.

## 🚀 Tecnologias Utilizadas

- **Full-Stack**:
  - **Next.js**: Framework React para desenvolvimento Full-Stack.
  - **TypeScript**: Para tipagem estática e um desenvolvimento mais robusto.
- **Conteúdo**:
  - **Contentlayer**: Transforma conteúdo (Markdown) em dados JSON tipados, integrando-se perfeitamente com o Next.js.
- **Front-End**:
  - **React**: Biblioteca para construção de interfaces de usuário.
  - **Tailwind CSS**: Framework de estilização utility-first para um design rápido e customizável.
  - **Lucide React**: Biblioteca de ícones open-source.
  - **clsx** & **tailwind-merge**: Utilitários para gerenciar classes CSS condicionais.
- **Linting & Formatação**:
  - **ESLint**: Para garantir a qualidade e padronização do código.
  - **Prettier**: Formatador de código automático.

## 🏃 Como Executar o Projeto

**Pré-requisitos:**

- **Node.js** (versão 18 ou superior)
- **pnpm** (ou `npm`/`yarn`)
- **Git** para clonar o repositório

**Passos:**

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/IsaaczZj/business-alchemy.git
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd business-alchemy
    ```

3.  **Instale as dependências:**

    ```bash
    pnpm install
    ```

4.  **Execute o servidor de desenvolvimento:**

    ```bash
    pnpm dev
    ```

5.  **Acesse a aplicação:**
    Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000).

## 📝 Como Adicionar um Novo Post

Para criar um novo post no blog, basta adicionar um novo arquivo `.md` dentro da pasta `posts/`. O arquivo deve seguir a estrutura de frontmatter abaixo:

```markdown
---
title: Título do Seu Post
description: Uma breve descrição sobre o que o post aborda.
date: AAAA-MM-DD HH:MM:SS
image: /assets/nome-da-imagem.png
author:
  name: Nome do Autor
  avatar: /assets/avatar-do-autor.svg
---

O conteúdo do seu post em Markdown começa aqui...
```

O Contentlayer irá processar automaticamente o novo arquivo e adicioná-lo ao blog na próxima vez que o projeto for compilado.

## 📂 Estrutura do Projeto

```
.
├── posts/              # Arquivos Markdown para os posts do blog.
├── public/             # Arquivos estáticos (imagens, ícones).
├── src/
│   ├── components/     # Componentes React reutilizáveis (UI, Blog, Landing Page).
│   ├── hooks/          # Hooks customizados (useShare, useClipboard).
│   ├── lib/            # Funções utilitárias e configurações.
│   ├── pages/          # Rotas e páginas da aplicação (Next.js Pages Router).
│   └── styles/         # Estilos globais.
├── contentlayer.config.ts # Configuração do Contentlayer para definir os tipos de conteúdo.
├── next.config.ts      # Arquivo de configuração do Next.js.
├── package.json        # Dependências e scripts do projeto.
└── tsconfig.json       # Configuração do TypeScript.
```
