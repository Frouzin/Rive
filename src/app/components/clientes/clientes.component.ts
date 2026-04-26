import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone: true,
  template: `
    <section class="clientes">
      <div class="container">
        <p class="label" [class.visible]="visible">
          <span class="gold-line"></span>Empresas que confiam na nossa qualidade<span class="gold-line"></span>
        </p>
        <div class="track" [class.visible]="visible">
          @for (l of logos; track l) { <div class="logo-item"><span>{{ l }}</span></div> }
          @for (l of logos; track l) { <div class="logo-item" aria-hidden="true"><span>{{ l }}</span></div> }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .clientes { padding:5rem 0; background:var(--bg-primary); overflow:hidden; position:relative;
      &::before { content:''; position:absolute; top:0;bottom:0;left:0; width:200px; background:linear-gradient(to right, var(--bg-primary), transparent); z-index:2; pointer-events:none; }
      &::after  { content:''; position:absolute; top:0;bottom:0;right:0; width:200px; background:linear-gradient(to left, var(--bg-primary), transparent); z-index:2; pointer-events:none; }
    }
    .container { max-width:1280px; margin:0 auto; padding:0 2.5rem; }
    .label { display:flex; align-items:center; justify-content:center; gap:1.5rem; font-weight:300; font-size:.65rem; letter-spacing:.25em; text-transform:uppercase; color:var(--text-muted); margin-bottom:3rem; opacity:0; transition:opacity .8s ease; &.visible { opacity:1; } }
    .track { display:flex; gap:2rem; width:max-content; animation:logoScroll 28s linear infinite; opacity:0; transition:opacity .8s .3s ease; &.visible { opacity:1; } &:hover { animation-play-state:paused; } }
    @keyframes logoScroll { from { transform:translateX(0); } to { transform:translateX(-50%); } }
    .logo-item { flex-shrink:0; display:flex; align-items:center; justify-content:center; padding:1rem 2rem; border:1px solid var(--gold-border); min-width:148px; height:60px; transition:border-color var(--transition), background var(--transition); &:hover { border-color:var(--gold); background:var(--gold-dim); }
      span { font-family:var(--font-display); font-weight:400; font-size:.88rem; letter-spacing:.15em; color:var(--text-muted); text-transform:uppercase; transition:color var(--transition); }
      &:hover span { color:var(--gold); }
    }
  `]
})
export class ClientesComponent implements OnInit {
  visible = false;
  logos = ['Hilton', 'Marriott', 'Club Med', 'Fasano', 'Atlântico', 'Ocean Palace', 'InterContinental', 'Grand Hyatt'];
  constructor(private el: ElementRef) {}
  ngOnInit() {
    new IntersectionObserver(([e]) => { if (e.isIntersecting) this.visible = true; }, { threshold: 0.2 })
      .observe(this.el.nativeElement);
  }
}
