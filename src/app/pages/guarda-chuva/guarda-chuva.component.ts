import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../shared/page-hero.component';

@Component({
  selector: 'app-guarda-chuva-page',
  standalone: true,
  imports: [RouterLink, PageHeroComponent],
  template: `
    <app-page-hero
      title="Guarda-Chuva"
      eyebrow="Proteção com Presença"
      subtitle="Mais do que proteger — levar a identidade da marca para o cotidiano com elegância e personalidade."
      img="assets/imagem/vernati (11).jpeg"
    ></app-page-hero>

    <!-- Intro -->
    <section class="intro">
      <div class="container">
        <div class="intro-grid" #introRef>
          <div class="intro-text">
            <span class="section-label">Feitos para durar. E aparecer.</span>
            <h2 class="intro-title">Presença,<br><em>mesmo sob a chuva</em></h2>
            <p>Uma peça funcional pensada para gerar lembrança, visibilidade e acabamento superior. Estrutura reforçada, materiais selecionados e personalização com alto impacto visual transformam o guarda-chuva em uma extensão sofisticada da marca.</p>
            <p>Pronto para uso frequente e presença memorável.</p>
            <a href="https://loja.rivebrasil.com.br/loja/loja.php?loja=830805&iniSession=1" target="_blank" class="btn-primary" style="margin-top:2rem">
              Ver na Loja Online
            </a>
          </div>
          <div class="intro-image">
            <img src="assets/imagem/vernati (1).jpeg" alt="Guarda-chuva premium Rive"/>
            <div class="img-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="container">
        <div class="features-header">
          <span class="section-label">Especificações</span>
          <h2 class="features-title">Personalização<br><em>de alto impacto</em></h2>
        </div>
        <div class="features-grid">
          @for (f of features; track f.title; let i = $index) {
            <div class="feature-card" [style.animation-delay]="(i*.1)+'s'">
              <div class="feature-num">{{ (i+1).toString().padStart(2,'0') }}</div>
              <h3 class="feature-title">{{ f.title }}</h3>
              <p class="feature-desc">{{ f.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="gallery">
      <div class="container">
        <span class="section-label">Galeria</span>
        <div class="gallery-grid">
          <div class="gal-main">
            <img src="assets/imagem/vernati (3).jpeg" alt="Guarda-chuva Rive"/>
          </div>
          <div class="gal-side">
            <img src="assets/imagem/vernati (7).jpeg" alt="Detalhe guarda-chuva"/>
            <img src="assets/imagem/vernati (52).jpeg" alt="Guarda-chuva personalizado"/>
          </div>
        </div>
      </div>
    </section>

    <!-- Editorial text blocks (baseado no site real) -->
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

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-text">
            <span class="section-label">Solicite um orçamento</span>
            <h2 class="cta-title">Para marcas que querem<br><em>ser lembradas</em></h2>
            <p>Os guarda-chuvas Rive combinam proteção, acabamento premium e personalização com presença. Soluções pensadas para transformar um item cotidiano em uma peça de marca com valor percebido superior.</p>
          </div>
          <div class="cta-actions">
            <a href="https://loja.rivebrasil.com.br/loja/loja.php?loja=830805&iniSession=1" target="_blank" class="btn-primary">Ver Loja Online</a>
            <a routerLink="/contato" class="btn-ghost">Falar com um consultor</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Other products -->
    <section class="outros">
      <div class="container">
        <span class="section-label">Conheça também</span>
        <div class="outros-grid">
          <a routerLink="/guarda-sol" class="outro-card">
            <img src="assets/imagem/vernati (35).jpeg" alt="Guarda-Sol"/>
            <div class="outro-info">
              <h4>Guarda-Sol</h4>
              <span>Sombra que vira cenário →</span>
            </div>
          </a>
          <a routerLink="/ombrelones" class="outro-card">
            <img src="assets/imagem/vernati (93).jpeg" alt="Ombrelones"/>
            <div class="outro-info">
              <h4>Ombrelones</h4>
              <span>Seu lounge, ao sol →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Intro */
    .intro { padding: 8rem 2.5rem; background: var(--bg-primary); }
    .container { max-width: 1280px; margin: 0 auto; }
    .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
    .intro-text {
      display: flex; flex-direction: column; gap: 1.25rem;
      .section-label { margin-bottom: .5rem; color: var(--gold-light);}
      p { font-weight: 300; font-size: .95rem; line-height: 1.9; color: var(--text-muted); }
    }
    .intro-title { font-family: var(--font-display); font-weight: 300; font-size: clamp(2rem,4vw,3.2rem); line-height: 1.1; color: var(--text-primary); em { font-style: italic; color: var(--gold-light); } }
    .intro-image { position: relative;
      img { width: 100%; aspect-ratio: 3/4; object-fit: cover; }
      .img-accent { position: absolute; bottom: -1.5rem; right: -1.5rem; width: 60%; height: 60%; border: 1px solid var(--gold-border); z-index: -1; }
    }

    /* Features */
    .features { padding: 8rem 2.5rem; background: var(--bg-secondary); position: relative;
      &::before { content:''; position:absolute; top:0;left:0;right:0; height:1px; background:linear-gradient(to right,transparent,var(--gold-border),transparent); }
    }
    .features-header { margin-bottom: 4rem; display: flex; flex-direction: column; gap: 1rem; }
    .features-title { font-family: var(--font-display); font-weight: 300; font-size: clamp(2rem,4vw,3rem); line-height: 1.15; em { font-style: italic; color: var(--gold-light); } }
    .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--gold-border); }
    .feature-card { background: var(--bg-primary); padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; transition: background var(--transition); &:hover { background: var(--bg-card-hover); } }
    .feature-num { font-family: var(--font-display); font-size: 3rem; font-weight: 300; color: var(--gold-border); line-height: 1; }
    .feature-title { font-weight: 500; font-size: .72rem; letter-spacing: .2em; text-transform: uppercase; color: var(--gold); }
    .feature-desc { font-weight: 300; font-size: .88rem; line-height: 1.8; color: var(--text-muted); }

    /* Gallery */
    .gallery { padding: 8rem 2.5rem; background: var(--bg-primary); }
    .gallery .section-label { display: block; margin-bottom: 2rem; color: var(--gold-light); }
    .gallery-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 1rem; }
    .gal-main img { width: 100%; height: 100%; max-height: 580px; object-fit: cover; }
    .gal-side { display: flex; flex-direction: column; gap: 1rem;
      img { width: 100%; flex: 1; min-height: 0; object-fit: cover; max-height: 284px; }
    }

    /* Editorial */
    .editorial { padding: 8rem 2.5rem; background: var(--bg-secondary); position: relative;
      &::before { content:''; position:absolute; top:0;left:0;right:0; height:1px; background:linear-gradient(to right,transparent,var(--gold-border),transparent); }
    }
    .editorial-block { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; margin-bottom: 6rem;
      &:last-child { margin-bottom: 0; }
      &.reverse { direction: rtl; > * { direction: ltr; } }
    }
    .editorial-text { display: flex; flex-direction: column; gap: 1.25rem;
      p { font-weight: 300; font-size: .95rem; line-height: 1.9; color: var(--text-muted); }
    }
    .editorial-title { font-family: var(--font-display); font-weight: 300; font-size: clamp(1.8rem,3vw,2.4rem); line-height: 1.2; color: var(--gold); em { font-style: italic; color: var(--gold-light); } }
    .editorial-img img { width: 100%; aspect-ratio: 4/3; object-fit: cover; }

    /* CTA */
    .cta-section { padding: 8rem 2.5rem; background: var(--bg-primary); }
    .cta-inner { display: grid; grid-template-columns: 1fr auto; gap: 4rem; align-items: center; padding: 4rem; border: 1px solid var(--gold-border); background: var(--bg-card); }
    .cta-text { display: flex; flex-direction: column; gap: 1.25rem;
      p { font-weight: 300; font-size: .95rem; line-height: 1.9; color: var(--text-muted); max-width: 500px; }
    }
    .cta-title { font-family: var(--font-display); font-weight: 300; font-size: clamp(1.8rem,3vw,2.6rem); line-height: 1.15; color: var(--gold) !important; em { font-style: italic;} }
    .cta-actions { display: flex; flex-direction: column; gap: 1rem; flex-shrink: 0; }

    /* Outros */
    .outros { padding: 0 2.5rem 8rem; background: var(--bg-primary); }
    .outros .section-label { display: block; margin-bottom: 2rem; color: var(--gold-light); }
    .outros-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .outro-card { position: relative; overflow: hidden; aspect-ratio: 16/9; display: flex; align-items: flex-end;
      img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .7s ease; }
      &::after { content:''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,8,8,.85) 0%, transparent 60%); }
      &:hover img { transform: scale(1.05); }
    }
    .outro-info { position: relative; z-index: 2; padding: 2rem;
      h4 { font-family: var(--font-display); font-weight: 400; font-size: 1.4rem; margin-bottom: .4rem; }
      span { font-size: .72rem; letter-spacing: .15em; text-transform: uppercase; color: var(--gold); }
    }

    @media (max-width:1024px) {
      .intro-grid, .editorial-block, .cta-inner { grid-template-columns: 1fr; gap: 3rem; }
      .features-grid { grid-template-columns: repeat(2,1fr); }
      .editorial-block.reverse { direction: ltr; }
    }
    @media (max-width:640px) {
      .intro, .features, .gallery, .editorial, .cta-section, .outros { padding-left: 1.25rem; padding-right: 1.25rem; }
      .features-grid, .outros-grid, .gallery-grid { grid-template-columns: 1fr; }
      .cta-inner { padding: 2rem; }
    }
  `]
})
export class GuardaChuvaPageComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0); }
  features = [
    { title: 'Personalização Completa', desc: 'Silk HD, colorização pixel-perfect e personalização a laser. Transformamos o guarda-chuva na extensão perfeita da sua marca.' },
    { title: 'Estrutura Reforçada', desc: 'Varão e varetas em alumínio de alta resistência com abertura automática suave. Construção que transmite confiança e solidez.' },
    { title: 'Tecido Premium', desc: 'Tecido impermeável com tratamento anti-UV, costurado com precisão para garantir vedação completa e durabilidade superior.' },
    { title: 'Alto Impacto Visual', desc: 'Design pensado para criar pontos de contato memoráveis. Ideal para ações de branding, brindes corporativos e coleções exclusivas.' },
    { title: 'Sem Mínimo', desc: 'Personalização total sem exigência de quantidade mínima. Atendemos desde unidades exclusivas até grandes lotes corporativos.' },
    { title: 'Acabamento Superior', desc: 'Cada detalhe revisado manualmente. Arremates, alças e ponteiras com padrão premium que reflete o valor percebido da marca.' }
  ];
  editorials = [
    { label: 'Personalização', title: 'Construção que transmite confiança', text: 'Mais do que proteção, o guarda-chuva Rive entrega sensação de solidez no uso diário. Uma estrutura pensada para unir resistência, estabilidade e presença visual em cada detalhe.',
      img: 'assets/imagem/vernati (83).jpeg' },
    { label: 'Identidade de Marca', title: 'Para marcas que querem ser lembradas', text: 'A personalização transforma o guarda-chuva em um ponto de contato memorável. Ideal para marcas, eventos e ações promocionais que querem unir utilidade, visibilidade e acabamento superior.',
      img: 'assets/imagem/vernati (87).jpeg' }
  ];
}
