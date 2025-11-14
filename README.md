# Business Alchemy - Website e Blog

Este é um projeto de um site institucional moderno e responsivo com um blog integrado, onde empresas podem apresentar seus serviços, compartilhar histórias de clientes e publicar conteúdo relevante através de posts otimizados para SEO.

## ✨ Funcionalidades

### Landing Page

- **Hero Section**: Apresentação impactante dos serviços com Call-to-Action.
- **Seção de Features**: Destaque das principais funcionalidades e benefícios.
- **Depoimentos de Clientes**: Histórias reais de sucesso com fotos e descrições.
- **Seção de Suporte**: Informações sobre os canais de atendimento.
- **Call-to-Action**: Incentivo para conversão de visitantes em leads.

### Blog

- **Criação de Posts em Markdown**: Escreva posts usando arquivos `.md` com validação de tipo automática.
- **Busca em Tempo Real**: Filtre posts instantaneamente enquanto digita.
- **Páginas Dinâmicas**: Cada post possui sua própria página com metadata otimizada para SEO.
- **Compartilhamento Social**: Compartilhe posts no LinkedIn, Twitter, Facebook e copie links.
- **Informações do Autor**: Exiba nome, avatar e data de publicação em cada post.
- **Renderização de Markdown**: Suporte completo para formatação Markdown (títulos, listas, links, negrito, etc.).

### Experiência do Usuário

- **Design Responsivo**: Interface adaptada para desktop, tablet e mobile.
- **Navegação Intuitiva**: Menu de navegação e breadcrumbs para melhor orientação.
- **Tipagem Segura**: Validação automática do conteúdo com TypeScript + Contentlayer.
- **SEO Otimizado**: Metadata dinâmica, Open Graph e tags Twitter Card para cada post.

## 🚀 Tecnologias Utilizadas

### Full-Stack

- **Next.js 15**: Framework React Full-Stack com App Router e Server Components.
- **TypeScript**: Superset do JavaScript para tipagem estática e maior segurança no código.

### Gerenciamento de Conteúdo

- **Contentlayer**: Transforma arquivos Markdown em dados JSON tipados, com validação automática.
- **React Markdown**: Renderização de conteúdo Markdown em componentes React.
- **Remark GFM**: Suporte para GitHub Flavored Markdown (tabelas, listas de tarefas, etc.).

### Front-End & UI

- **React 19**: Biblioteca para construção de interfaces de usuário modernas.
- **Tailwind CSS**: Framework de estilização utility-first para design rápido e customizável.
- **shadcn/ui**: Coleção de componentes de UI acessíveis e reutilizáveis.
- **Lucide React**: Biblioteca de ícones open-source e customizáveis.
- **clsx** & **tailwind-merge**: Utilitários para gerenciar classes CSS condicionais de forma eficiente.

### Qualidade de Código

- **ESLint**: Linter para garantir a qualidade e padronização do código.
- **Prettier**: Formatador de código automático com plugin para Tailwind CSS.

## 🏃 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **pnpm** (recomendado), **npm** ou **yarn**
- **Git** para clonagem do repositório

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/IsaaczZj/business-alchemy.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd business-alchemy
   ```

3. **Instale as dependências:** (Recomenda-se pnpm)

   ```bash
   pnpm install
   ```

4. **Execute o servidor de desenvolvimento:**

   ```bash
   pnpm dev
   ```

5. **Acesse a aplicação:**
   Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000)

### Comandos Úteis

- **Build de produção:** `pnpm build`
- **Iniciar em produção:** `pnpm start`
- **Verificar erros de lint:** `pnpm lint`
- **Formatar código:** `pnpm format` (se configurado)

## 📝 Como Adicionar um Novo Post

Para criar um novo post no blog, siga os passos abaixo:

1. **Crie um novo arquivo `.md`** dentro da pasta `posts/`:

   ```bash
   posts/meu-novo-post.md
   ```

2. **Adicione o frontmatter** (metadados) no topo do arquivo:

   ```markdown
   ---
   title: Título do Seu Post
   description: Uma breve descrição sobre o que o post aborda.
   date: 2025-11-14 10:00:00
   image: /assets/imagem-do-post.png
   author:
     name: Seu Nome
     avatar: /assets/seu-avatar.svg
   ---

   O conteúdo do seu post em **Markdown** começa aqui...

   ## Subtítulo

   Você pode usar todas as funcionalidades do Markdown, incluindo:

   - Listas
   - **Negrito**
   - _Itálico_
   - [Links](https://exemplo.com)
   - E muito mais!
   ```

3. **Adicione a imagem** referenciada no campo `image` dentro da pasta `public/assets/`.

4. **Reinicie o servidor** (se estiver em desenvolvimento):
   ```bash
   pnpm dev
   ```

O Contentlayer irá processar automaticamente o novo arquivo e adicioná-lo ao blog com tipagem e validação completas!

## 📂 Estrutura do Projeto

```
.
├── posts/                  # Arquivos Markdown dos posts do blog.
├── public/                 # Arquivos estáticos (imagens, ícones, assets).
│   ├── assets/             # Imagens dos posts e avatares.
│   └── icons/              # Ícones SVG para redes sociais.
├── src/
│   ├── app/                # Estrutura de rotas e páginas (Next.js App Router).
│   │   ├── blog/           # Páginas do blog (listagem e posts individuais).
│   │   ├── layout.tsx      # Layout global da aplicação.
│   │   ├── page.tsx        # Página inicial (landing page).
│   │   ├── error.tsx       # Página de erro customizada.
│   │   ├── loading.tsx     # Estado de carregamento.
│   │   └── not-found.tsx   # Página 404 customizada.
│   ├── components/         # Componentes React reutilizáveis.
│   │   ├── blog/           # Componentes específicos do blog.
│   │   ├── landing-page/   # Componentes da página inicial.
│   │   └── ui/             # Componentes de UI genéricos (shadcn/ui).
│   ├── hooks/              # Hooks customizados (useShare, useClipboard).
│   ├── lib/                # Funções utilitárias e configurações.
│   ├── styles/             # Estilos globais (Tailwind CSS).
│   └── template/           # Templates de layout.
├── contentlayer.config.ts  # Configuração do Contentlayer (schema dos posts).
├── next.config.ts          # Arquivo de configuração do Next.js.
├── tsconfig.json           # Configuração do TypeScript.
├── package.json            # Define as informações do projeto, scripts e dependências.
├── pnpm-lock.yaml          # Arquivo de lock de dependências do pnpm.
└── README.md               # Documentação do projeto.
```

## 🎨 Customização

### Cores e Tema

As cores do projeto estão configuradas no Tailwind CSS. Para personalizar, edite o arquivo `tailwind.config.js` ou `globals.css`.

### Componentes UI

Os componentes UI são baseados no shadcn/ui e podem ser customizados em `src/components/ui/`.

### Layout da Landing Page

Edite os componentes em `src/components/landing-page/` para alterar as seções da página inicial.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

---

Desenvolvido com ❤️ por [IsaaczZj](https://github.com/IsaaczZj)
