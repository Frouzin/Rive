import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeroComponent } from '../../shared/page-hero.component';

@Component({
  selector: 'app-contato-page',
  standalone: true,
  imports: [FormsModule, PageHeroComponent],
  template: `
    <app-page-hero
      title="Contato"
      eyebrow="Fale Conosco"
      subtitle="Nossa equipe está pronta para criar a solução ideal para o seu projeto."
      img="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop"
    ></app-page-hero>

    <section class="contato-main">
      <div class="container">
        <div class="contato-grid">

          <!-- Form -->
          <div class="form-side">
            <div class="form-header">
              <span class="section-label">Envie sua mensagem</span>
              <h2 class="form-title">Vamos criar algo<br><em>extraordinário juntos</em></h2>
            </div>

            <form class="form" (ngSubmit)="onSubmit()" #f="ngForm">
              <div class="form-row">
                <div class="field">
                  <label>Nome completo</label>
                  <input type="text" name="nome" [(ngModel)]="form.nome" placeholder="Seu nome" required/>
                </div>
                <div class="field">
                  <label>Empresa</label>
                  <input type="text" name="empresa" [(ngModel)]="form.empresa" placeholder="Nome da empresa"/>
                </div>
              </div>
              <div class="form-row">
                <div class="field">
                  <label>E-mail</label>
                  <input type="email" name="email" [(ngModel)]="form.email" placeholder="seu@email.com" required/>
                </div>
                <div class="field">
                  <label>Telefone / WhatsApp</label>
                  <input type="tel" name="telefone" [(ngModel)]="form.telefone" placeholder="+55 (00) 00000-0000"/>
                </div>
              </div>
              <div class="field">
                <label>Produto de interesse</label>
                <select name="produto" [(ngModel)]="form.produto">
                  <option value="">Selecione um produto</option>
                  <option value="guarda-chuva">Guarda-Chuva</option>
                  <option value="guarda-sol">Guarda-Sol</option>
                  <option value="ombrelone">Ombrelone</option>
                  <option value="projeto-completo">Projeto Completo</option>
                </select>
              </div>
              <div class="field">
                <label>Mensagem</label>
                <textarea name="mensagem" [(ngModel)]="form.mensagem" rows="5" placeholder="Descreva seu projeto, quantidade estimada ou qualquer dúvida que tenha..."></textarea>
              </div>
              <button type="submit" class="btn-primary" [disabled]="submitted">
                {{ submitted ? 'Mensagem Enviada ✓' : 'Enviar Mensagem' }}
              </button>
            </form>
          </div>

          <!-- Info -->
          <div class="info-side">
            <div class="info-block">
              <span class="section-label">Escritório Brasil</span>
              <div class="office-card">
                <div class="office-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p class="office-city">Curitiba, PR — Brasil</p>
                  <p class="office-addr">Rua Prof. Maria da Gloria S. Loyola, 342</p>
                  <a href="tel:+5541987512607" class="office-tel">+55 41 98751-2607</a>
                </div>
              </div>
              <a href="https://wa.me/5541987512607" target="_blank" class="whatsapp-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                Chamar no WhatsApp
              </a>
            </div>

            <div class="divider"></div>

            <div class="info-block">
              <span class="section-label">Escritório Estados Unidos</span>
              <div class="office-card">
                <div class="office-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p class="office-city">Miami, FL — USA</p>
                  <p class="office-addr">201 S Biscayne Blvd, FL 33131</p>
                  <a href="tel:+17864272275" class="office-tel">(786) 427-2275</a>
                </div>
              </div>
            </div>

            <div class="divider"></div>

            <div class="info-block">
              <span class="section-label">Horários de atendimento</span>
              <div class="horarios">
                <div class="horario-row">
                  <span class="dia">Segunda — Sexta</span>
                  <span class="hora">08h — 18h</span>
                </div>
                <div class="horario-row">
                  <span class="dia">Sábado</span>
                  <span class="hora">08h — 12h</span>
                </div>
                <div class="horario-row">
                  <span class="dia">Domingo</span>
                  <span class="hora">Fechado</span>
                </div>
              </div>
            </div>

            <div class="divider"></div>

            <div class="info-block">
              <span class="section-label">Redes Sociais</span>
              <div class="socials">
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                  Instagram
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .contato-main { padding: 8rem 2.5rem; background: var(--bg-primary); }
    .container { max-width: 1280px; margin: 0 auto; }
    .contato-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 6rem; }

    /* Form side */
    .form-header { margin-bottom: 3rem; display: flex; flex-direction: column; gap: 1rem; }
    .form-title { font-family: var(--font-display); color: var(--gold) !important; font-weight: 300; font-size: clamp(2rem,4vw,3rem); line-height: 1.1; em { font-style: italic; color: var(--gold-light); } }

    .form { display: flex; flex-direction: column; gap: 1.5rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
    .field { display: flex; flex-direction: column; gap: .5rem;
      label { font-size: .65rem; letter-spacing: .2em; text-transform: uppercase; color: var(--gold); font-weight: 500; }
      input, select, textarea {
        background: var(--bg-card);
        border: 1px solid var(--gold-border);
        color: var(--text-primary);
        padding: .9rem 1.1rem;
        font-family: var(--font-body);
        font-size: .88rem;
        font-weight: 300;
        outline: none;
        transition: border-color var(--transition);
        width: 100%;
        &::placeholder { color: var(--text-subtle); }
        &:focus { border-color: var(--gold); }
      }
      select { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C4A05D' stroke-width='1.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; background-size: 16px; }
      select option { background: var(--bg-card); }
      textarea { resize: vertical; min-height: 140px; }
    }

    .btn-primary { align-self: flex-start; padding: .9rem 2.5rem; cursor: pointer; color: var(--bg-primary); background: var(--gold); border: none; font-size: .75rem; letter-spacing: .15em; text-transform: uppercase; font-weight: 500; transition: background var(--transition);
      &:disabled { opacity: .6; cursor: not-allowed; transform: none !important; background: var(--gold) !important; }
    }

    /* Info side */
    .info-side { display: flex; flex-direction: column; gap: 0; }
    .info-block { padding: 2rem 0; display: flex; flex-direction: column; gap: 1.25rem; }
    .divider { height: 1px; background: var(--gold-border); }

    .office-card { display: flex; gap: 1rem; align-items: flex-start; }
    .office-icon { flex-shrink: 0; margin-top: 2px; svg { width: 16px; height: 16px; stroke: var(--gold); } }
    .office-city  { font-weight: 400; font-size: .85rem; color: var(--gold); margin-bottom: .35rem; }
    .office-addr  { font-weight: 300; font-size: .82rem; color: var(--text-muted); line-height: 1.6; margin-bottom: .5rem; }
    .office-tel   { font-size: .82rem; color: var(--gold); transition: color var(--transition-fast); &:hover { color: var(--gold-light); } }

    .whatsapp-btn {
      display: flex;
      align-items: center;
      gap: .65rem;
      padding: .75rem 1.5rem;
      border: 1px solid rgba(37,211,102,.3);
      color: #25D366;
      font-size: .72rem;
      font-weight: 400;
      letter-spacing: .12em;
      text-transform: uppercase;
      width: fit-content;
      transition: background var(--transition), border-color var(--transition);
      svg { width: 16px; height: 16px; stroke: #25D366; }
      &:hover { background: rgba(37,211,102,.08); border-color: #25D366; }
    }

    .horarios { display: flex; flex-direction: column; gap: .75rem; }
    .horario-row { display: flex; justify-content: space-between; align-items: center; padding-bottom: .75rem; border-bottom: 1px solid rgba(255,255,255,.04); &:last-child { border-bottom: none; } }
    .dia  { font-size: .82rem; font-weight: 300; color: var(--text-muted); }
    .hora { font-size: .78rem; font-weight: 400; color: var(--text-primary); }

    .socials { display: flex; flex-direction: column; gap: .75rem;
      a { display: flex; align-items: center; gap: .75rem; font-size: .82rem; color: var(--text-muted); transition: color var(--transition); svg { width: 18px; height: 18px; } &:hover { color: var(--gold); } }
    }

    @media (max-width:1024px) { .contato-grid { grid-template-columns: 1fr; gap: 4rem; } }
    @media (max-width:640px) { .contato-main { padding: 5rem 1.25rem; } .form-row { grid-template-columns: 1fr; } }
  `]
})
export class ContatoPageComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0); }
  submitted = false;
  form = { nome: '', empresa: '', email: '', telefone: '', produto: '', mensagem: '' };
  onSubmit() {
    this.submitted = true;
    setTimeout(() => { this.submitted = false; this.form = { nome:'', empresa:'', email:'', telefone:'', produto:'', mensagem:'' }; }, 4000);
  }
}
