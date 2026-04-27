import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/page-hero.component';

@Component({
  selector: 'app-ombrelones-page',
  standalone: true,
  imports: [RouterLink, PageHeroComponent],
  template: `
    <app-page-hero
      title="Ombrelones"
      eyebrow="Hospitalidade Premium"
      subtitle="Para hotéis, resorts, restaurantes e rooftops — o lounge perfeito começa com a sombra certa."
      img="assets/imagem/vernati (35).jpeg"
    ></app-page-hero>

    <!-- Intro -->
    <section class="intro">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text">
            <span class="section-label">Seu lounge, ao sol</span>
            <h2 class="intro-title">Ombrelones que<br><em>fazem cenário</em></h2>
            <p>Os ombrelones Rive são mais do que proteção solar — são elementos arquitetônicos que definem a identidade de espaços premium. Com Fator de Proteção Solar 100, mitiga a incidência de raios UVA e UVB, trazendo segurança e elegância para cada ambiente.</p>
            <p>A inovação está em nosso sangue. Fabricamos ombrelones reforçados que oferecem conforto e durabilidade, em constante aperfeiçoamento para continuar entre os melhores do mundo.</p>
            <div class="intro-actions">
              <a href="https://loja.rivebrasil.com.br/loja/loja.php?loja=830805&iniSession=1" target="_blank" class="btn-primary">Ver na Loja</a>
              <a routerLink="/contato" class="btn-ghost">Solicitar Orçamento</a>
            </div>
          </div>
          <div class="intro-image">
            <img src="assets/imagem/vernati (70).jpeg" alt="Ombrelone premium em resort"/>
            <div class="img-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specs -->
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

    <!-- Tipos -->
    <section class="tipos">
      <div class="container">
        <div class="tipos-header">
          <span class="section-label">Linhas disponíveis</span>
          <h2 class="tipos-title">Para cada espaço,<br><em>o ombrelone certo</em></h2>
        </div>
        <div class="tipos-grid">
          @for (t of tipos; track t.title; let i = $index) {
            <div class="tipo-card">
              <div class="tipo-img">
                <img [src]="t.img" [alt]="t.title" loading="lazy"/>
                <span class="tipo-tag">{{ t.tag }}</span>
              </div>
              <div class="tipo-info">
                <h3 class="tipo-title">{{ t.title }}</h3>
                <p class="tipo-desc">{{ t.desc }}</p>
                <ul class="tipo-features">
                  @for (f of t.features; track f) {
                    <li>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {{ f }}
                    </li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="gallery">
      <div class="container">
        <span class="section-label">Ambientes</span>
        <div class="gallery-masonry">
          <div class="gal-col">
            <img src="assets/imagem/vernati (71).jpeg" alt="Área de piscina"/>
            <img src="assets/imagem/vernati (79).jpeg" alt="Restaurante externo"/>
          </div>
          <div class="gal-col offset">
            <img src="assets/imagem/vernati (85).jpeg" alt="Resort premium"/>
            <img src="assets/imagem/vernati (46).jpeg" alt="Praia exclusiva"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Segmentos -->
    <section class="segmentos">
      <div class="container">
        <div class="seg-header">
          <span class="section-label">Onde nos encontram</span>
          <h2 class="seg-title">Presente nos melhores<br><em>espaços do Brasil e do mundo</em></h2>
        </div>
        <div class="seg-grid">
          @for (s of segmentos; track s.name) {
            <div class="seg-card">
              <div class="seg-icon" [innerHTML]="s.icon"></div>
              <h4 class="seg-name">{{ s.name }}</h4>
              <p class="seg-desc">{{ s.desc }}</p>
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
            <span class="section-label">Projetos Especiais</span>
            <h2 class="cta-title">Pronto para transformar<br><em>seu espaço?</em></h2>
            <p>Desenvolvemos projetos personalizados para hotéis, resorts, restaurantes, clubes e rooftops. Conte com nossa equipe para criar a solução ideal para o seu ambiente.</p>
          </div>
          <div class="cta-actions">
            <a routerLink="/contato" class="btn-primary">Falar com Consultor</a>
            <a href="https://loja.rivebrasil.com.br/loja/loja.php?loja=830805&iniSession=1" target="_blank" class="btn-ghost">Ver Loja Online</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Outros -->
    <section class="outros">
      <div class="container">
        <span class="section-label">Conheça também</span>
        <div class="outros-grid">
          <a routerLink="/guarda-chuva" class="outro-card">
            <img src="assets/imagem/vernati (94).jpeg" alt="Guarda-Chuva"/>
            <div class="outro-info"><h4>Guarda-Chuva</h4><span>Proteção com assinatura →</span></div>
          </a>
          <a routerLink="/guarda-sol" class="outro-card">
            <img src="assets/imagem/vernati (35).jpeg" alt="Guarda-Sol"/>
            <div class="outro-info"><h4>Guarda-Sol</h4><span>Sombra que vira cenário →</span></div>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .intro { padding:8rem 2.5rem; background:var(--bg-primary); }
    .container { max-width:1280px; margin:0 auto; }
    .intro-grid { display:grid; grid-template-columns:1fr 1fr; gap:6rem; align-items:center; }
    .intro-text { display:flex; flex-direction:column; gap:1.25rem; p { font-weight:300; font-size:.95rem; line-height:1.9; color:var(--text-muted); } }
    .intro-title { font-family:var(--font-display); font-weight:300; font-size:clamp(2rem,4vw,3.2rem); line-height:1.1; em { font-style:italic; color:var(--gold-light); } }
    .intro-actions { display:flex; gap:1rem; flex-wrap:wrap; margin-top:.5rem; }
    .intro-image { position:relative; img { width:100%; aspect-ratio:3/4; object-fit:cover; } .img-accent { position:absolute; top:-1.5rem; right:-1.5rem; width:60%; height:60%; border:1px solid var(--gold-border); z-index:-1; } }

    .specs-strip { background:var(--bg-card); border-top:1px solid var(--gold-border); border-bottom:1px solid var(--gold-border);
      .container { display:flex; justify-content:space-around; padding:3rem 2.5rem; flex-wrap:wrap; gap:2rem; }
    }
    .spec { display:flex; flex-direction:column; align-items:center; gap:.5rem; text-align:center; }
    .spec-value { font-family:var(--font-display); font-size:2.2rem; font-weight:300; color:var(--gold-light); line-height:1; }
    .spec-label { font-size:.62rem; letter-spacing:.25em; text-transform:uppercase; color:var(--text-muted); }

    .tipos { padding:8rem 2.5rem; background:var(--bg-secondary); position:relative;
      &::before { content:''; position:absolute; top:0;left:0;right:0; height:1px; background:linear-gradient(to right,transparent,var(--gold-border),transparent); }
    }
    .tipos-header { margin-bottom:4rem; display:flex; flex-direction:column; gap:1rem; }
    .tipos-title { font-family:var(--font-display); font-weight:300; font-size:clamp(2rem,4vw,3rem); line-height:1.15; em { font-style:italic; color:var(--gold-light); } }
    .tipos-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }
    .tipo-card { background:var(--bg-primary); border:1px solid var(--gold-border); overflow:hidden; transition:border-color var(--transition); &:hover { border-color:var(--gold); } }
    .tipo-img { position:relative; aspect-ratio:4/3; overflow:hidden; img { width:100%; height:100%; object-fit:cover; transition:transform .7s ease; } }
    .tipo-card:hover .tipo-img img { transform:scale(1.05); }
    .tipo-tag { position:absolute; top:1rem; left:1rem; padding:.35rem .75rem; background:rgba(253, 253, 253, 0.85); border:1px solid var(--gold-border); font-size:.58rem; font-weight:500; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); }
    .tipo-info { padding:2rem; display:flex; flex-direction:column; gap:1rem; }
    .tipo-title { font-family:var(--font-display); font-weight:400; font-size:1.3rem; color:var(--gold-light);}
    .tipo-desc  { font-weight:300; font-size:.88rem; line-height:1.7; color:var(--text-muted); }
    .tipo-features { list-style:none; display:flex; flex-direction:column; gap:.6rem;
      li { display:flex; align-items:center; gap:.6rem; font-size:.82rem; color:var(--text-muted); font-weight:300; svg { width:14px; height:14px; stroke:var(--gold); flex-shrink:0; } }
    }

    .gallery { padding:8rem 2.5rem; background:var(--bg-primary); .section-label { display:block; margin-bottom:2.5rem; } }
    .gallery-masonry { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
    .gal-col { display:flex; flex-direction:column; gap:1.5rem; img { width:100%; object-fit:cover; aspect-ratio:4/3; transition:transform .7s ease; } img:hover { transform:scale(1.02); } }
    .gal-col.offset { margin-top:3rem; }

    .segmentos { padding:8rem 2.5rem; background:var(--bg-secondary); position:relative;
      &::before { content:''; position:absolute; top:0;left:0;right:0; height:1px; background:linear-gradient(to right,transparent,var(--gold-border),transparent); }
    }
    .seg-header { margin-bottom:4rem; display:flex; flex-direction:column; gap:1rem; }
    .seg-title  { font-family:var(--font-display); font-weight:300; font-size:clamp(2rem,4vw,3rem); line-height:1.15; em { font-style:italic; color:var(--gold-light); } }
    .seg-grid   { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--gold-border); }
    .seg-card   { background:var(--bg-primary); padding:2.5rem 2rem; display:flex; flex-direction:column; gap:1rem; transition:background var(--transition); &:hover { background:var(--bg-card-hover); } }
    .seg-icon   { width:40px; height:40px; display:flex; align-items:center; justify-content:center; :global(svg) { width:26px; height:26px; stroke:var(--gold); fill:none; stroke-width:1.3; } }
    .seg-name   { font-weight:500; font-size:.72rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); }
    .seg-desc   { font-weight:300; font-size:.85rem; line-height:1.75; color:var(--text-muted); }

    .cta-section { padding:8rem 2.5rem; background:var(--bg-primary); }
    .cta-inner   { display:grid; grid-template-columns:1fr auto; gap:4rem; align-items:center; padding:4rem; border:1px solid var(--gold-border); background:var(--bg-card); }
    .cta-text    { display:flex; flex-direction:column; gap:1.25rem; p { font-weight:300; font-size:.95rem; line-height:1.9; color:var(--text-muted); max-width:500px; } }
    .cta-title   { font-family:var(--font-display); font-weight:300; font-size:clamp(1.8rem,3vw,2.6rem); line-height:1.15; color: var(--gold) !important; em { font-style:italic; color:var(--gold-light); } }
    .cta-actions { display:flex; flex-direction:column; gap:1rem; flex-shrink:0; }

    .outros { padding:0 2.5rem 8rem; background:var(--bg-primary); .section-label { display:block; margin-bottom:2rem; } }
    .outros-grid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
    .outro-card  { position:relative; overflow:hidden; aspect-ratio:16/9; display:flex; align-items:flex-end; img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .7s ease; } &::after { content:''; position:absolute; inset:0; background:linear-gradient(to top, rgba(8,8,8,.85) 0%, transparent 60%); } &:hover img { transform:scale(1.05); } }
    .outro-info  { position:relative; z-index:2; padding:2rem; h4 { font-family:var(--font-display); font-weight:400; font-size:1.4rem; margin-bottom:.4rem; } span { font-size:.72rem; letter-spacing:.15em; text-transform:uppercase; color:var(--gold); } }

    @media (max-width:1024px) { .intro-grid,.cta-inner { grid-template-columns:1fr; gap:3rem; } .tipos-grid { grid-template-columns:repeat(2,1fr); } .seg-grid { grid-template-columns:repeat(2,1fr); } }
    @media (max-width:640px)  { .intro,.tipos,.gallery,.segmentos,.cta-section,.outros { padding-left:1.25rem; padding-right:1.25rem; } .tipos-grid,.outros-grid,.gallery-masonry { grid-template-columns:1fr; } .gal-col.offset { margin-top:0; } .seg-grid { grid-template-columns:1fr; } .cta-inner { padding:2rem; } }
  `]
})
export class OmbrelonesPageComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0); }
  specs = [
    { value: 'FPS 100', label: 'Proteção Solar' },
    { value: '2.4 m+', label: 'Diâmetro Máximo' },
    { value: '360°', label: 'Rotação de Haste' },
    { value: 'IP65', label: 'Resistência' },
  ];
  tipos = [
    { title: 'Ombrelone Central', tag: 'Clássico', img: 'assets/imagem/vernati (85).jpeg',
      desc: 'A linha clássica com haste central robusta. Elegância e estabilidade para piscinas, praias e varandas.',
      features: ['Diâmetros de 2m a 3m', 'Haste em alumínio anodizado', 'Tecido impermeável FPS 100', 'Personalização total de cores'] },
    { title: 'Ombrelone Lateral', tag: 'Premium', img: 'assets/imagem/vernati (77).jpeg',
      desc: 'Haste lateral para máxima liberdade de sombra sem obstáculos centrais. Perfeito para lounges e mesas.',
      features: ['Braço lateral articulado', 'Base pesada antivento', 'Rotação de 360°', 'Ideal para restaurantes e hotéis'] },
    { title: 'Ombrelone Gigante', tag: 'Comercial', img: 'assets/imagem/vernati (74).jpeg',
      desc: 'Para grandes áreas de lazer e hospitality. Estrutura reforçada para eventos, clubes e resorts.',
      features: ['Diâmetros acima de 3.5m', 'Estrutura multivaretas', 'Ideal para áreas comerciais', 'Instalação profissional inclusa'] },
  ];
  segmentos = [
    { name: 'Hotéis & Resorts', desc: 'Ombrelones premium para piscinas, praias privativas e lounges externos de alta hotelaria.', icon: `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` },
    { name: 'Restaurantes', desc: 'Espaços de refeição ao ar livre com identidade visual, conforto e proteção solar superiores.', icon: `<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>` },
    { name: 'Clubes & Spas', desc: 'Atmosfera de exclusividade para áreas de lazer, decks e piscinas de clubes de alto padrão.', icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>` },
    { name: 'Rooftops', desc: 'Design e resistência para ambientes elevados, com estrutura anti-vento e estética impecável.', icon: `<svg viewBox="0 0 24 24"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>` },
  ];
}
