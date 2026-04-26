# Rive Brasil — Site Angular

Site institucional da **Rive Brasil** construído com **Angular 17** (standalone components).

## Pré-requisitos

- Node.js 18+ 
- Angular CLI 17+: `npm install -g @angular/cli`

## Instalação e execução

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (localhost:4200)
npm start
# ou
ng serve

# Build de produção
ng build
```

## Estrutura do projeto

```
src/
├── index.html
├── main.ts
├── styles.scss               ← Variáveis globais, reset, tipografia
└── app/
    ├── app.component.ts      ← Root component (standalone)
    └── components/
        ├── navbar/           ← Navbar com scroll-behavior e mobile menu
        ├── hero/             ← Hero fullscreen com animação zoom
        ├── diferenciais/     ← Cards dos 4 diferenciais com IntersectionObserver
        ├── clientes/         ← Logo strip com scroll automático
        ├── produtos/         ← Cards de produtos com hover overlay
        └── footer/           ← Footer com escritórios e links
```

## Design

- **Fontes**: Cormorant Garamond (display) + Jost (corpo)
- **Paleta**: Preto profundo `#080808` + dourado `#C4A05D`
- **Estilo**: Luxury editorial — linhas limpas, tipografia refinada, animações suaves

## Personalização

Edite as variáveis CSS em `src/styles.scss`:

```scss
:root {
  --gold: #C4A05D;         // cor de destaque
  --bg-primary: #080808;   // fundo principal
  --font-display: 'Cormorant Garamond', ...;
  --font-body: 'Jost', ...;
}
```

Para trocar imagens, edite os `src` no `hero.component.ts` e `produtos.component.ts`.
