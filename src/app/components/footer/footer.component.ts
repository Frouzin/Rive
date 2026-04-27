import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">

            <div class="footer-brand">
              <a routerLink="/" class="brand-logo">
                <span class="logo-main">RIVE</span>
                <span class="logo-sub">BRASIL</span>
              </a>
              <p class="brand-tagline">
                Sombra com presença.<br>
                Design autoral para os melhores espaços do mundo.
              </p>
              <div class="social-links">
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://wa.me/5541987512607" aria-label="WhatsApp" target="_blank">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div class="footer-col">
              <h4 class="footer-heading">Navegação</h4>
              <ul class="footer-links">
                <li><a routerLink="/">Home</a></li>
                <li><a routerLink="/guarda-chuva">Guarda-Chuva</a></li>
                <li><a routerLink="/guarda-sol">Guarda-Sol</a></li>
                <li><a routerLink="/ombrelones">Ombrelones</a></li>
                <li><a routerLink="/contato">Contato</a></li>
                <li><a href="https://loja.rivebrasil.com.br/loja/loja.php?loja=830805&iniSession=1" target="_blank">Loja Online ↗</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4 class="footer-heading">Personalização</h4>
              <ul class="footer-links">
                <li><a href="#">Silk HD</a></li>
                <li><a href="#">Colorização Pixel-Perfect</a></li>
                <li><a href="#">Personalização a Laser</a></li>
                <li><a href="#">Sob Medida</a></li>
              </ul>
            </div>

            <div class="footer-col offices">
              <h4 class="footer-heading">Escritórios</h4>
              <div class="office">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p class="office-country">Brasil — Curitiba, PR</p>
                  <p class="office-address">Rua Prof. Maria da Gloria S. Loyola, 342<br>
                    <a href="tel:+5541987512607">+55 41 98751-2607</a>
                  </p>
                </div>
              </div>
              <div class="office">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p class="office-country">Estados Unidos — Miami, FL</p>
                  <p class="office-address">201 S Biscayne Blvd, FL 33131<br>
                    <a href="tel:+17864272275">(786) 427-2275</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">© {{ year }} Rive Brasil · Personalização com presença</p>
          <div class="footer-bottom-links">
            <a href="#">Política de Privacidade</a>
            <span>·</span>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer { background: #d4d4d4; border-top: 1px solid var(--gold-border); }
    .footer-top { padding: 6rem 2.5rem; }
    .container { max-width: 1280px; margin: 0 auto; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 4rem; }

    .brand-logo { display: flex; flex-direction: column; line-height: 1; gap: 2px; margin-bottom: 1.25rem; }
    .logo-main { font-family: var(--font-display); font-weight: 600; font-size: 1.8rem; letter-spacing: 0.15em; color: var(--gold); }
    .logo-sub  { font-family: var(--font-body); font-weight: 400; font-size: 0.55rem; letter-spacing: 0.55em; color: var(--gold); text-transform: uppercase; }
    .brand-tagline { font-family: var(--font-body); font-weight: 300; font-size: 0.85rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 2rem; max-width: 260px; }

    .social-links { display: flex; gap: 1rem;
      a { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--gold-border); color: var(--text-muted); transition: color var(--transition), border-color var(--transition);
        svg { width: 15px; height: 15px; }
        &:hover { color: var(--gold); border-color: var(--gold); }
      }
    }

    .footer-heading { font-family: var(--font-body); font-weight: 500; font-size: 0.6rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; }
    .footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.85rem;
      a { font-family: var(--font-body); font-weight: 300; font-size: 0.85rem; color: var(--text-muted); transition: color var(--transition); &:hover { color: var(--text-primary); } }
    }

    .office { display: flex; gap: 0.75rem; margin-bottom: 1.75rem; &:last-child { margin-bottom: 0; }
      svg { width: 14px; height: 14px; stroke: var(--gold); flex-shrink: 0; margin-top: 2px; }
    }
    .office-country { font-family: var(--font-body); font-weight: 400; font-size: 0.75rem; color: var(--gold); margin-bottom: 0.35rem; }
    .office-address { font-family: var(--font-body); font-weight: 300; font-size: 0.78rem; line-height: 1.7; color: var(--text-muted);
      a { color: var(--gold); &:hover { color: var(--gold-light); } }
    }

    .footer-bottom { border-top: 1px solid rgba(255,255,255,0.05); padding: 1.5rem 2.5rem;
      .container { display: flex; align-items: center; justify-content: space-between; }
    }
    .copyright { font-family: var(--font-body); font-size: 0.72rem; color: var(--text-subtle); }
    .footer-bottom-links { display: flex; gap: 0.75rem; align-items: center;
      a { font-family: var(--font-body); font-size: 0.72rem; color: var(--text-subtle); &:hover { color: var(--gold); } }
      span { color: var(--text-subtle); font-size: 0.6rem; }
    }

    @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 3rem; } }
    @media (max-width: 640px) {
      .footer-top { padding: 4rem 1.25rem; }
      .footer-bottom { padding: 1.5rem 1.25rem; }
      .footer-grid { grid-template-columns: 1fr; gap: 2.5rem; }
      .footer-bottom .container { flex-direction: column; gap: 0.75rem; text-align: center; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
