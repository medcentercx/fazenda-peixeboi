# Design Guidelines: Fazenda Peixe e Boi

## Design Approach
**Reference-Based + Agricultural Context**
Drawing inspiration from premium e-commerce platforms (Airbnb's listing cards, Etsy's gallery layouts) combined with agricultural authenticity. The design balances modern sophistication with rural credibility to appeal to serious agribusiness buyers.

## Typography System

**Primary Font:** "Inter" (via Google Fonts CDN)
- Headings: 600-700 weight for authority
- Body: 400-500 weight for readability

**Hierarchy:**
- Page Titles: text-4xl md:text-5xl lg:text-6xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Card Titles: text-xl md:text-2xl font-semibold
- Body Text: text-base md:text-lg
- Captions/Meta: text-sm text-gray-600

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24
- Card gaps: gap-6 md:gap-8
- Containers: max-w-7xl mx-auto px-4 md:px-6

## Component Library

### Hero Section
Full-width hero with high-quality farm landscape imagery showing pastures, animals, or facilities. Height: min-h-[600px] lg:min-h-[700px]
- Overlay gradient for text readability
- Centered headline + subheadline + CTA button with blurred background (backdrop-blur-md bg-white/20)
- Trust indicators below CTA: "X anos de tradição" | "X animais comercializados" | "Certificações"

### Navigation
Sticky header with farm logo, menu items (Início, Catálogo, Sobre, Contato), and prominent "Falar com Vendedor" CTA button
Desktop: horizontal layout | Mobile: hamburger menu

### Animal Catalog Grid
**Grid Layout:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
Each card includes:
- Square aspect-ratio image (aspect-square object-cover)
- Category badge (Bovino/Equino/Ovino/Caprino)
- Animal name/ID in bold
- Key specs: Idade, Peso, Sexo in compact grid
- Price (if applicable) in larger, bold text
- "Ver Detalhes" button

### Filter Sidebar
Sticky sidebar (desktop) or collapsible section (mobile):
- Category checkboxes with icons (Heroicons CDN)
- Price range slider
- Age range selector
- Gender radio buttons
- "Limpar Filtros" link

### Animal Detail Page
**Two-column layout (lg:grid-cols-2 gap-12):**
- Left: Image gallery with main image + thumbnail grid below
- Right: Animal information card with organized sections
  - Title (breed/name)
  - Price/availability status
  - Specifications table (idade, peso, altura, pelagem, etc.)
  - Description text block
  - Contact form or "Solicitar Informações" CTA

### About Section
**Multi-column approach:**
- Hero image of farm facilities/landscape
- Two-column text + image layout alternating
- 3-column grid for farm features (infraestrutura, manejo, certificações)
- Timeline of farm history (if applicable)

### Contact Section
**Two-column split (lg:grid-cols-2):**
- Left: Contact form (nome, email, telefone, mensagem, tipo de interesse)
- Right: Farm information (endereço, horário, mapa placeholder, telefones, WhatsApp link)

### Footer
**Multi-column footer:**
- Column 1: Logo + brief description
- Column 2: Links rápidos
- Column 3: Categorias de animais
- Column 4: Contato e redes sociais
- Bottom bar: Copyright + legal links

## Images

**Hero Image:** Wide landscape shot of the farm showing green pastures, healthy animals grazing, or traditional farm infrastructure at golden hour. Should convey scale, quality, and pastoral beauty. Size: 1920x800px minimum.

**Catalog Images:** Professional photos of individual animals in natural settings, well-lit, showing full body and distinctive features. Square format (800x800px minimum).

**About Section:** 3-4 images showing farm facilities, team members working with animals, pastures, and infrastructure. Mix of landscape and portrait orientations.

**Animal Detail Gallery:** 4-6 images per animal showing different angles, close-ups of features, and animals in their environment.

## Interaction Patterns

**Cards:** Subtle hover elevation (hover:shadow-lg transition-shadow)
**Filters:** Instant results update, smooth fade transitions
**Image Galleries:** Click to expand modal, thumbnail navigation
**Forms:** Clear validation states with inline error messages
**CTAs:** Prominent buttons with clear hierarchy (primary vs secondary actions)

## Accessibility
- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios for all text
- Consistent focus states (ring-2 ring-offset-2)