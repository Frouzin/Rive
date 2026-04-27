import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/page-hero.component';

@Component({
  selector: 'app-guarda-sol-page',
  standalone: true,
  imports: [RouterLink, PageHeroComponent],
  template: `
    <app-page-hero
      title="Guarda-Sol"
      eyebrow="Proteção com Presença"
      subtitle="Estrutura reforçada, desempenho superior. Sofisticação, conforto e proteção real para ambientes externos."
      img="assets/imagem/vernati (26).jpeg"
    ></app-page-hero>

    <!-- Intro -->
    <section class="intro">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-image">
            <img src="assets/imagem/vernati (71).jpeg" alt="Guarda-Sol Rive Premium"/>
            <div class="img-accent"></div>
          </div>
          <div class="intro-text">
            <span class="section-label">Estrutura Reforçada</span>
            <h2 class="intro-title">Proteção com<br><em>presença</em></h2>
            <p>Os guarda-sóis Rive unem sofisticação, conforto e proteção real para ambientes externos. Desenvolvidos com materiais de alta qualidade, oferecem excelente cobertura solar e ajudam a reduzir a incidência direta de raios UVA e UVB, elevando a experiência ao ar livre.</p>
            <p>Cada detalhe é pensado para entregar durabilidade, estabilidade e acabamento premium — com ventilação extra e componentes selecionados para garantir resistência e performance em ambientes externos.</p>
            <div class="intro-actions">
              <a href="https://loja.rivebrasil.com.br/loja/loja.php?loja=830805&iniSession=1" target="_blank" class="btn-primary">Ver na Loja</a>
              <a routerLink="/contato" class="btn-ghost">Pedir Orçamento</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specs strip -->
    <section class="specs-strip">
      <div class="container">
        @for (s of specs; track s.label) {
          <div class="spec">
            <span class="spec-value">{{ s.value }}</span>
            <span class="spec-label">{{ s.label }}</span>
          </div>
        }
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="container">
        <div class="features-header">
          <span class="section-label">Linha de Produtos</span>
          <h2 class="features-title">Estrutura à altura<br><em>do design</em></h2>
        </div>
        <div class="features-grid">
          @for (f of features; track f.title; let i = $index) {
            <div class="feature-card" [style.animation-delay]="(i*.1)+'s'">
              <div class="feature-icon" [innerHTML]="f.icon"></div>
              <h3 class="feature-title">{{ f.title }}</h3>
              <p class="feature-desc">{{ f.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Gallery editorial -->
    <section class="editorial">
      <div class="container">
        @for (block of editorials; track block.title; let i = $index) {
          <div class="editorial-block" [class.reverse]="i % 2 !== 0">
            <div class="editorial-text">
              <span class="section-label">{{ block.label }}</span>
              <h3 class="editorial-title">{{ block.title }}</h3>
              <p>{{ block.text }}</p>
            </div>
            <div class="editorial-img">
              <img [src]="block.img" [alt]="block.title"/>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- Gallery -->
    <section class="gallery">
      <div class="container">
        <span class="section-label">Galeria</span>
        <div class="gallery-grid">
          @for (img of galleryImgs; track img.alt) {
            <div class="gal-item" [class.wide]="img.wide">
              <img [src]="img.src" [alt]="img.alt" loading="lazy"/>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-text">
            <span class="section-label">Sob Medida</span>
            <h2 class="cta-title">Cuidado em<br><em>cada detalhe</em></h2>
            <p>Dos arremates à finalização superior, cada elemento foi pensado para entregar um visual limpo, elegante e bem resolvido. Porque o luxo aparece justamente onde o olhar demora mais.</p>
          </div>
          <div class="cta-actions">
            <a href="https://loja.rivebrasil.com.br/loja/loja.php?loja=830805&iniSession=1" target="_blank" class="btn-primary">Ver Loja Online</a>
            <a routerLink="/contato" class="btn-ghost">Falar com consultor</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Outros produtos -->
    <section class="outros">
      <div class="container">
        <span class="section-label">Conheça também</span>
        <div class="outros-grid">
          <a routerLink="/guarda-chuva" class="outro-card">
            <img src="assets/imagem/vernati (6).jpeg" alt="Guarda-Chuva"/>
            <div class="outro-info"><h4>Guarda-Chuva</h4><span>Proteção com assinatura →</span></div>
          </a>
          <a routerLink="/ombrelones" class="outro-card">
            <img src="assets/imagem/vernati (93).jpeg" alt="Ombrelones"/>
            <div class="outro-info"><h4>Ombrelones</h4><span>Seu lounge, ao sol →</span></div>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .intro { padding: 8rem 2.5rem; background: var(--bg-primary); }
    .container { max-width: 1280px; margin: 0 auto; }
    .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
    .intro-text { display: flex; flex-direction: column; gap: 1.25rem; p { font-weight:300; font-size:.95rem; line-height:1.9; color:var(--text-muted); } }
    .intro-title { font-family:var(--font-display); font-weight:300; font-size:clamp(2rem,4vw,3.2rem); line-height:1.1; em { font-style:italic; color:var(--gold-light); } }
    .intro-actions { display:flex; gap:1rem; flex-wrap:wrap; margin-top:.5rem; }
    .intro-image { position:relative; img { width:100%; aspect-ratio:3/4; object-fit:cover; } .img-accent { position:absolute; bottom:-1.5rem; left:-1.5rem; width:60%; height:60%; border:1px solid var(--gold-border); z-index:-1; } }

    .specs-strip { background: var(--bg-card); border-top: 1px solid var(--gold-border); border-bottom: 1px solid var(--gold-border);
      .container { display:flex; justify-content:space-around; padding:3rem 2.5rem; flex-wrap:wrap; gap:2rem; }
    }
    .spec { display:flex; flex-direction:column; align-items:center; gap:.5rem; text-align:center; }
    .spec-value { font-family:var(--font-display); font-size:2.2rem; font-weight:300; color:var(--gold-light); line-height:1; }
    .spec-label { font-size:.62rem; letter-spacing:.25em; text-transform:uppercase; color:var(--text-muted); }

    .features { padding:8rem 2.5rem; background:var(--bg-secondary); position:relative;
      &::before { content:''; position:absolute; top:0;left:0;right:0; height:1px; background:linear-gradient(to right,transparent,var(--gold-border),transparent); }
    }
    .features-header { margin-bottom:4rem; display:flex; flex-direction:column; gap:1rem; }
    .features-title { font-family:var(--font-display); font-weight:300; font-size:clamp(2rem,4vw,3rem); line-height:1.15; em { font-style:italic; color:var(--gold-light); } }
    .features-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--gold-border); }
    .feature-card { background:var(--bg-primary); padding:2.5rem 2rem; display:flex; flex-direction:column; gap:1rem; transition:background var(--transition); &:hover { background:var(--bg-card-hover); } }
    .feature-icon { width:44px; height:44px; display:flex; align-items:center; justify-content:center;
      :global(svg) { width:26px; height:26px; stroke:var(--gold); fill:none; stroke-width:1.3; }
    }
    .feature-title { font-weight:500; font-size:.72rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); }
    .feature-desc  { font-weight:300; font-size:.88rem; line-height:1.8; color:var(--text-muted); }

    .editorial { padding:8rem 2.5rem; background:var(--bg-primary); }
    .editorial-block { display:grid; grid-template-columns:1fr 1fr; gap:6rem; align-items:center; margin-bottom:6rem; &:last-child { margin-bottom:0; } &.reverse { direction:rtl; > * { direction:ltr; } } }
    .editorial-text { display:flex; flex-direction:column; gap:1.25rem; p { font-weight:300; font-size:.95rem; line-height:1.9; color:var(--text-muted); } }
    .editorial-title { font-family:var(--font-display); font-weight:300; font-size:clamp(1.8rem,3vw,2.4rem); line-height:1.2; color: var(--gold); em { font-style:italic; color:var(--gold-light); } }
    .editorial-img img { width:100%; aspect-ratio:4/3; object-fit:cover; }

    .gallery { padding:8rem 2.5rem; background:var(--bg-secondary); position:relative;
      &::before { content:''; position:absolute; top:0;left:0;right:0; height:1px; background:linear-gradient(to right,transparent,var(--gold-border),transparent); }
      .section-label { display:block; margin-bottom:2rem; }
    }
    .gallery-grid { display:grid; grid-template-columns:repeat(3,1fr); grid-auto-rows:280px; gap:1rem; }
    .gal-item { overflow:hidden; img { width:100%; height:100%; object-fit:cover; transition:transform .7s ease; } &:hover img { transform:scale(1.05); } &.wide { grid-column:span 2; } }

    .cta-section { padding:8rem 2.5rem; background:var(--bg-primary); }
    .cta-inner { display:grid; grid-template-columns:1fr auto; gap:4rem; align-items:center; padding:4rem; border:1px solid var(--gold-border); background:var(--bg-card); }
    .cta-text { display:flex; flex-direction:column; gap:1.25rem; p { font-weight:300; font-size:.95rem; line-height:1.9; color:var(--text-muted); max-width:500px; } }
    .cta-title { font-family:var(--font-display); font-weight:300; font-size:clamp(1.8rem,3vw,2.6rem); line-height:1.15; color: var(--gold) !important; em { font-style:italic; color:var(--gold-light); } }
    .cta-actions { display:flex; flex-direction:column; gap:1rem; flex-shrink:0; }

    .outros { padding:0 2.5rem 8rem; background:var(--bg-primary); .section-label { display:block; margin-bottom:2rem; } }
    .outros-grid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
    .outro-card { position:relative; overflow:hidden; aspect-ratio:16/9; display:flex; align-items:flex-end; img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .7s ease; } &::after { content:''; position:absolute; inset:0; background:linear-gradient(to top, rgba(8,8,8,.85) 0%, transparent 60%); } &:hover img { transform:scale(1.05); } }
    .outro-info { position:relative; z-index:2; padding:2rem; h4 { font-family:var(--font-display); font-weight:400; font-size:1.4rem; margin-bottom:.4rem; } span { font-size:.72rem; letter-spacing:.15em; text-transform:uppercase; color:var(--gold); } }

    @media (max-width:1024px) { .intro-grid, .editorial-block, .cta-inner { grid-template-columns:1fr; gap:3rem; } .features-grid { grid-template-columns:repeat(2,1fr); } .editorial-block.reverse { direction:ltr; } }
    @media (max-width:640px)  { .intro,.features,.editorial,.gallery,.cta-section,.outros { padding-left:1.25rem; padding-right:1.25rem; } .features-grid,.outros-grid,.gallery-grid { grid-template-columns:1fr; } .gal-item.wide { grid-column:span 1; } .cta-inner { padding:2rem; } }
  `]
})
export class GuardaSolPageComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0); }
  specs = [
    { value: 'FPS 100', label: 'Proteção Solar' },
    { value: 'Al / Madeira', label: 'Estrutura' },
    { value: '100%', label: 'Personalização' },
    { value: '2 m+', label: 'Tamanhos Disponíveis' },
  ];
  features = [
    { icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`, title: 'Proteção UVA/UVB', desc: 'Fator de proteção solar 100, mitigando a incidência de raios UVA e UVB. Segurança e conforto garantidos.' },
    { icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`, title: 'Varão em Alumínio', desc: 'Estrutura leve e resistente à maresia. Disponível também em madeira nobre para projetos com estética natural.' },
    { icon: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>`, title: 'Ventilação Extra', desc: 'Sistema de ventilação dupla que permite circulação de ar, evitando que o guarda-sol vire ao vento.' },
    { icon: `<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`, title: 'Design Exclusivo', desc: 'Cada peça pensada como objeto de design. Cores, tecidos e estampas personalizados para compor o ambiente.' },
    { icon: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, title: 'Resistência Comprovada', desc: 'Estrutura robusta testada para uso intenso em ambientes de praia, piscina e hospitality de alto padrão.' },
    { icon: `<svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`, title: 'Personalização Livre', desc: 'Do tecido à estrutura — personalizamos em cores, logos, bordados e impressões sem quantidade mínima.' }
  ];
  editorials = [
    { label: 'Materiais', title: 'Estrutura à altura do design', text: 'Disponível com varão em alumínio ou madeira, o guarda-sol Rive combina resistência, estabilidade e acabamento refinado. Duas opções para compor diferentes propostas de estilo, sempre com presença premium.',
      img: 'assets/imagem/vernati (83).jpeg' },
    { label: 'Acabamento', title: 'Cuidado em cada detalhe', text: 'Dos arremates à finalização superior, cada elemento foi pensado para entregar um visual limpo, elegante e bem resolvido. Porque o luxo aparece justamente onde o olhar demora mais.',
      img: 'assets/imagem/vernati (27).jpeg' }
  ];
  galleryImgs = [
    { src: 'assets/imagem/vernati (24).jpeg', alt: 'Praia com guarda-sol', wide: true },
    { src: 'assets/imagem/vernati (93).jpeg', alt: 'Guarda-sol resort', wide: false },
    { src: 'assets/imagem/vernati (63).jpeg', alt: 'Área externa com sombra', wide: false },
    { src: 'assets/imagem/vernati (68).jpeg', alt: 'Lounge externo', wide: false },
  ];
}
