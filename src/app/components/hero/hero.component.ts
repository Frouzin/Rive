import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
        <img src="assets/imagem/vernati (84).jpeg"
             alt="Praia ensolarada com guarda-sol premium" class="hero-img"/>
      </div>
      <div class="hero-content">
        <p class="hero-eyebrow"><span class="gold-line"></span>Design Autoral · Conforto Premium</p>
        <h1 class="hero-title"><em>Sombra</em><br>com presença.</h1>
        <p class="hero-sub">Para praia, piscina e rooftop —<br>guarda-sóis e ombrelones com assinatura própria.</p>
        <div class="hero-actions">
          <a href="https://loja.rivebrasil.com.br/loja/loja.php?loja=830805&iniSession=1" target="_blank" class="btn-primary">Ver Loja Online</a>
          <a routerLink="/ombrelones" class="btn-ghost">Conhecer Produtos</a>
        </div>
        <div class="hero-stats">
          <div class="stat"><span class="stat-n">2</span><span class="stat-l">Continentes</span></div>
          <div class="stat-div"></div>
          <div class="stat"><span class="stat-n">100%</span><span class="stat-l">Personalização</span></div>
          <div class="stat-div"></div>
          <div class="stat"><span class="stat-n">B2B</span><span class="stat-l">Premium</span></div>
        </div>
      </div>
      <a routerLink="/guarda-sol" class="scroll-cue" aria-label="Ver produtos">
        <span class="scroll-line"></span>
        <span class="scroll-text">Scroll</span>
      </a>
    </section>
  `,
  styles: [`
    .hero { position: relative; height: 100vh; min-height: 700px; display: flex; align-items: center; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; z-index: 0; }
    .hero-img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.08); animation: heroZoom 12s ease-out forwards; }
    .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.5) 50%, rgba(8,8,8,0.72) 100%); z-index: 1; }
    .hero-content { position: relative; z-index: 2; width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 2.5rem; padding-top: 80px; }
    .hero-eyebrow { display: flex; align-items: center; gap: 1rem; font-family: var(--font-body); font-weight: 300; font-size: 0.68rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--primary); margin-bottom: 2rem; animation: fadeUp 0.9s 0.3s both; }
    .hero-title { font-family: var(--font-display); font-weight: 300; font-size: clamp(3.5rem, 9vw, 8rem); line-height: 1.0; color: var(--text-primary); margin-bottom: 1.75rem; animation: fadeUp 0.9s 0.5s both;
      em { font-style: italic; color: var(--gold-light); }
    }
    .hero-sub { font-weight: 400; font-size: 1rem; line-height: 1.8; color: rgba(255, 255, 255, 0.65); max-width: 400px; margin-bottom: 2.5rem; animation: fadeUp 0.9s 0.7s both; }
    .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 4rem; animation: fadeUp 0.9s 0.9s both; }
    .hero-stats { display: flex; align-items: center; gap: 2rem; animation: fadeUp 0.9s 1.1s both; }
    .stat { display: flex; flex-direction: column; gap: 0.25rem; }
    .stat-n { font-family: var(--font-display); font-size: 1.6rem; font-weight: 600; color: var(--primary); line-height: 1; }
    .stat-l { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--bg-primary); font-weight: 500;}
    .stat-div { width: 1px; height: 32px; background: var(--gold-border); }
    .scroll-cue { position: absolute; bottom: 2.5rem; left: 2.5rem; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 0.75rem; animation: fadeIn 1s 1.5s both; }
    .scroll-line { display: block; width: 1px; height: 48px; background: linear-gradient(to bottom, var(--gold), transparent); animation: scrollPulse 2s ease-in-out infinite; }
    .scroll-text { font-size: 0.55rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); writing-mode: vertical-rl; }
    @keyframes scrollPulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
    @media (max-width: 768px) {
      .hero-content { padding: 0 1.25rem; padding-top: 80px; }
      .hero-stats { gap: 1.25rem; }
      .scroll-cue { left: 1.25rem; }
    }
  `]
})
export class HeroComponent {}
