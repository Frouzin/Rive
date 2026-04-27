import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-diferenciais',
  standalone: true,
  template: `
    <section class="diferenciais" id="diferenciais">
      <div class="container">
        <div class="section-header" [class.visible]="visible">
          <span class="section-label" style="writing-mode:vertical-rl;letter-spacing:.28em">Por que a Rive</span>
          <h2 class="section-title">Diferenciais que<br><em>definem presença</em></h2>
          <p class="section-desc">Das maiores empresas do Brasil aos lounges de Miami — a qualidade Rive é reconhecida em dois continentes.</p>
        </div>
        <div class="cards-grid">
          @for (item of items; track item.title; let i = $index) {
            <div class="card" [class.visible]="visible" [style.transition-delay]="(i*0.1)+'s'">
              <div class="card-icon" [innerHTML]="item.icon"></div>
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-desc">{{ item.desc }}</p>
              <div class="card-line"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .diferenciais { padding: 8rem 2.5rem; background: var(--bg-secondary); position: relative;
      &::before { content:''; position:absolute; top:0;left:0;right:0; height:1px; background:linear-gradient(to right, transparent, var(--gold-border), transparent); }
    }
    .container { max-width: 1280px; margin: 0 auto; }
    .section-header { display: grid; grid-template-columns: auto 1fr 1fr; align-items: start; gap: 1.5rem 3rem; margin-bottom: 5rem; opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease;
      &.visible { opacity: 1; transform: translateY(0); }
    }
    .section-label { grid-column:1; grid-row:1; font-family:var(--font-body); font-weight:500; font-size:.6rem; letter-spacing:.28em; text-transform:uppercase; color:var(--gold); }
    .section-title { grid-column:2; grid-row:1; font-family:var(--font-display); font-weight:300; font-size:clamp(2rem,4vw,3.2rem); line-height:1.15; color:var(--gold); em { font-style:italic; color:var(--gold-light); } }
    .section-desc  { grid-column:3; grid-row:1; font-weight:300; font-size:.9rem; line-height:1.9; color:var(--text-muted); padding-top:.5rem; }
    .cards-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--gold-border); }
    .card { position:relative; background:var(--bg-primary); padding:2.5rem 2rem; display:flex; flex-direction:column; gap:1.25rem; overflow:hidden; opacity:0; transform:translateY(24px); transition:opacity .6s ease, transform .6s ease, background var(--transition);
      &.visible { opacity:1; transform:translateY(0); }
      &:hover { background:var(--bg-card-hover); .card-line { width:100%; } }
    }
    .card-icon { width:44px; height:44px; display:flex; align-items:center; justify-content:center;
      :global(svg) { width:28px; height:28px; stroke:var(--gold); fill:none; stroke-width:1.2; }
    }
    .card-title { font-weight:500; font-size:.72rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); }
    .card-desc  { font-weight:300; font-size:.85rem; line-height:1.75; color:var(--text-muted); flex:1; }
    .card-line  { position:absolute; bottom:0; left:0; height:1px; width:0; background:var(--gold); transition:width .5s ease; }
    @media (max-width:1024px) { .cards-grid { grid-template-columns:repeat(2,1fr); } .section-header { grid-template-columns:1fr; } }
    @media (max-width:640px)  { .diferenciais { padding:5rem 1.25rem; } .cards-grid { grid-template-columns:1fr; } }
  `]
})
export class DiferenciaisComponent implements OnInit {
  visible = false;
  items = [
    { icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`, title: 'Presença Global', desc: 'Escritórios no Brasil e nos EUA. Atendemos projetos nacionais e internacionais com a mesma excelência.' },
    { icon: `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`, title: 'Acabamento Premium', desc: 'Materiais selecionados, costura precisa e estrutura robusta para conforto e durabilidade no uso diário.' },
    { icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`, title: 'Personalização Total', desc: 'Do tecido às cores e detalhes de assinatura — você escolhe o estilo. Produzimos sob medida para o seu projeto.' },
    { icon: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, title: 'Seriedade', desc: 'Comprometimento com prazos por meio da eficiência na logística interna e externa. Confiança é o nosso diferencial.' }
  ];
  constructor(private el: ElementRef) {}
  ngOnInit() {
    new IntersectionObserver(([e]) => { if (e.isIntersecting) { this.visible = true; } }, { threshold: 0.15 })
      .observe(this.el.nativeElement);
  }
}
