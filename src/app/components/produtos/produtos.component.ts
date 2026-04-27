import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Produto {
  title: string;
  sub: string;
  tag: string;
  route: string;
  desc: string;
  imgs: string[];
  currentIndex: number;
}

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="produtos" id="produtos">
      <div class="container">
        <div class="header" [class.visible]="visible">
          <span class="section-label">Nossa linha</span>
          <h2 class="title">Cada produto,<br><em>uma declaração</em></h2>
        </div>
        <div class="grid">
          @for (p of produtos; track p.title; let i = $index) {
            <article class="card" [class.visible]="visible" [style.transition-delay]="(i*.15)+'s'">
              <div class="card-img">
                @for (img of p.imgs; track img; let i = $index) {
                  <img
                    [src]="img"
                    [class.active]="i === p.currentIndex"
                    [alt]="p.title"
                    loading="lazy"
                  />
                }
                <div class="card-overlay">
                  <a [routerLink]="p.route" class="overlay-btn">
                    Conhecer
                  </a>
                </div>
                <span class="card-tag">{{ p.tag }}</span>
              </div>
              <div class="card-info">
                <h3 class="card-title">{{ p.title }}</h3>
                <p class="card-sub">{{ p.sub }}</p>
                <p class="card-desc">{{ p.desc }}</p>
                <a [routerLink]="p.route" class="card-link">
                  Ver produtos <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </article>
          }
        </div>
        <div class="cta-banner" [class.visible]="visible">
          <div>
            <p class="section-label">Sob Medida</p>
            <h3 class="cta-title">Silk HD · Colorização Pixel-Perfect<br><em>Personalização a Laser</em></h3>
          </div>
          <a href="https://loja.rivebrasil.com.br/loja/loja.php?loja=830805&iniSession=1" target="_blank" class="btn-primary">Acessar Loja Online</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .produtos { padding:8rem 2.5rem; background:var(--bg-secondary); position:relative;
      &::before { content:''; position:absolute; top:0;left:0;right:0; height:1px; background:linear-gradient(to right, transparent, var(--gold-border), transparent); }
    }
    .container { max-width:1280px; margin:0 auto; }
    .header { display:flex; flex-direction:column; gap:1rem; margin-bottom:4rem; opacity:0; transform:translateY(20px); transition:opacity .7s, transform .7s; &.visible { opacity:1; transform:translateY(0); } }
    .title { font-family:var(--font-display); font-weight:300; font-size:clamp(2rem,4vw,3rem); line-height:1.15; color:var(--gold); em { font-style:italic; color:var(--gold-light); } }
    .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-bottom:3rem; }
    .card { display:flex; flex-direction:column; opacity:0; transform:translateY(28px); transition:opacity .6s, transform .6s; &.visible { opacity:1; transform:translateY(0); } }
    .card-img { position:relative; aspect-ratio:4/3; overflow:hidden;
      img { width:100%; height:100%; object-fit:cover; transition:transform .7s cubic-bezier(.25,.46,.45,.94); }
    }
    .card:hover .card-img img { transform:scale(1.06); }
    .card-overlay { position:absolute; inset:0; background:rgba(8,8,8,.6); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity var(--transition); }
    .card:hover .card-overlay { opacity:1; }
    .overlay-btn { display:flex; align-items:center; gap:.5rem; padding:.75rem 1.75rem; border:1px solid var(--gold); color:var(--gold); font-size:.72rem; font-weight:400; letter-spacing:.15em; text-transform:uppercase; transition:background var(--transition); svg { width:14px; height:14px; } &:hover { background:var(--gold-dim); } }
    .card-tag { position:absolute; top:1rem; left:1rem; padding:.35rem .75rem; background:rgba(8,8,8,.8); border:1px solid var(--gold-border); font-size:.58rem; font-weight:500; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); }
    .card-info { padding:1.75rem 0 1rem; border-bottom:1px solid var(--gold-border); flex:1; display:flex; flex-direction:column; }
    .card-title { font-family:var(--font-display); font-weight:400; font-size:1.4rem; color:var(--gold); margin-bottom:.25rem; }
    .card-sub   { font-size:.72rem; letter-spacing:.15em; text-transform:uppercase; color:var(--gold); margin-bottom:1rem; }
    .card-desc  { font-weight:300; font-size:.85rem; line-height:1.7; color:var(--text-muted); flex:1; margin-bottom:1.25rem; }
    .card-link  { display:flex; align-items:center; gap:.5rem; font-size:.72rem; letter-spacing:.15em; text-transform:uppercase; color:var(--gold); transition:gap var(--transition); svg { width:14px; height:14px; transition:transform var(--transition); } &:hover { gap:.8rem; svg { transform:translateX(3px); } } }
    .cta-banner { display:flex; align-items:center; justify-content:space-between; padding:3rem 3.5rem; border:1px solid var(--gold-border); background:var(--bg-card); opacity:0; transform:translateY(20px); transition:opacity .7s .5s, transform .7s .5s; &.visible { opacity:1; transform:translateY(0); } }
    .cta-title  { font-family:var(--font-display); font-weight:300; font-size:clamp(1.2rem,2.5vw,1.8rem); line-height:1.3; color:var(--gold) !important; margin-top:.75rem; em { font-style:italic; color:var(--gold-light); } }
    @media (max-width:1024px) { .grid { grid-template-columns:repeat(2,1fr); } }
    @media (max-width:640px)  { .produtos { padding:5rem 1.25rem; } .grid { grid-template-columns:1fr; } .cta-banner { flex-direction:column; gap:2rem; text-align:center; padding:2rem; } }
  `]
})

export class ProdutosComponent implements OnInit {
  visible = false;
  produtos: Produto[] = [
    {
      title: 'Guarda-Chuva', sub: 'Proteção com assinatura', tag: 'Personalização Total', route: '/guarda-chuva',
      desc: 'Materiais premium e construção sólida. Personalização completa de cores, tecidos e identidade visual da sua marca.',
      imgs: [
        'assets/imagem/vernati (41).jpeg',
        'assets/imagem/vernati (1).jpeg',
        'assets/imagem/vernati (8).jpeg'
      ],
      currentIndex: 0
    },
    {
      title: 'Guarda-Sol', sub: 'Sombra que vira cenário', tag: 'Design Premium', route: '/guarda-sol',
      desc: 'Pensado como peça de design — com presença. Para praia, piscina e ambientes externos de alto padrão.',
      imgs: [
        'assets/imagem/vernati (35).jpeg',
        'assets/imagem/vernati (78).jpeg',
        'assets/imagem/vernati (27).jpeg'
      ],
      currentIndex: 0
    },
    {
      title: 'Ombrelone', sub: 'Seu lounge, ao sol', tag: 'Hospitality Grade', route: '/ombrelones',
      desc: 'Premium para áreas externas com estética e estrutura excepcionais. Ideal para hotéis, resorts, restaurantes e rooftops.',
      imgs: [
        'assets/imagem/vernati (44).jpeg',
        'assets/imagem/vernati (15).jpeg',
        'assets/imagem/vernati (51).jpeg'
      ],
      currentIndex: 0
    }
  ];
  constructor(private el: ElementRef) { }
  intervalId: any;

  ngOnInit() {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) this.visible = true;
    }, { threshold: 0.1 })
      .observe(this.el.nativeElement);

    this.intervalId = setInterval(() => {
      this.produtos.forEach(p => {
        p.currentIndex = (p.currentIndex + 1) % p.imgs.length;
      });
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
