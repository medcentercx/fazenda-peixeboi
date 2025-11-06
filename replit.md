# Fazenda Peixe e Boi - Website

## Visão Geral
Website moderno e profissional para a Fazenda Peixe e Boi, criatório especializado na raça Senepol localizado em Peritoró, Maranhão, BR-316, com mais de 30 anos de experiência. Focado em agronegócio de pecuária com compra e venda de bovinos (especialmente Senepol), equinos, ovinos e caprinos.

## Dados da Fazenda
- **Localização**: Peritoró, Maranhão, BR-316
- **Especialidade**: Criatório da raça Senepol
- **Características**: Rústico, Dócil, Precoce e Lucrativo
- **Contato**: (99) 98835-7918 - Yuri Corrêa

## Funcionalidades MVP
- ✅ Página inicial com hero section impactante e estatísticas da fazenda
- ✅ Catálogo de animais com sistema de filtros (categoria, sexo)
- ✅ Busca por nome ou raça
- ✅ Páginas detalhadas de cada animal com especificações completas
- ✅ Seção "Sobre a Fazenda" com história e diferenciais
- ✅ Formulário de contato para interessados
- ✅ Design responsivo com paleta verde/marrom/dourado
- ✅ Animais em destaque na página inicial
- ✅ Modo escuro/claro (dark/light theme) com toggle no navbar
- ✅ Vídeo da história da fazenda
- ✅ Seção de depoimentos de clientes de todo o Brasil

## Estrutura do Projeto

### Frontend (React + TypeScript)
- **Páginas:**
  - `/` - Home com hero, destaques e CTAs
  - `/catalogo` - Catálogo completo com filtros
  - `/animal/:id` - Detalhes do animal
  - `/sobre` - Sobre a fazenda
  - `/contato` - Formulário de contato

- **Componentes:**
  - `Navbar` - Navegação principal
  - `Hero` - Hero section com imagem de fundo
  - `AnimalCard` - Card de animal no catálogo
  - `AnimalFilters` - Filtros do catálogo
  - `Footer` - Rodapé com links e contatos

### Backend (Express + TypeScript)
- **API Endpoints:**
  - `GET /api/animals` - Lista todos os animais
  - `GET /api/animals/:id` - Detalhes de um animal
  - `POST /api/contacts` - Enviar mensagem de contato

- **Storage:**
  - In-memory storage com dados de exemplo (9 animais)
  - Categorias: bovinos, equinos, ovinos, caprinos
  - Animais em destaque marcados

### Design System
- **Cores:**
  - Primary: Verde (#142 48% 28%) - remetendo ao campo
  - Accent: Tons terrosos e dourados
  - Card: Fundo suave para conteúdo
  
- **Tipografia:**
  - Font: Inter (sans-serif)
  - Hierarquia clara de textos
  
- **Componentes:**
  - Shadcn UI para componentes base
  - Tailwind CSS para estilização
  - Design responsivo mobile-first

## Estrutura de Dados

### Animal
- name, category, breed
- age (em meses), sex, weight (kg), height (cm)
- price, description, imageUrl
- featured (yes/no), color

### Contact
- name, email, phone
- interest (compra/venda/parceria/outros)
- message, createdAt

## Tecnologias
- React 18 + TypeScript
- Wouter (routing)
- TanStack Query (data fetching)
- Shadcn UI + Tailwind CSS
- Express.js (backend)
- Zod (validação)

## Status
✅ MVP completo e funcional
- Frontend totalmente implementado
- Backend com dados de exemplo
- Formulário de contato funcional
- Design profissional e responsivo
