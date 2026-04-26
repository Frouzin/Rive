import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-hero" [style.background-image]="'url(' + img + ')'">
      <div class="overlay"></div>
      <div class="content">
        <nav class="breadcrumb">
          <a routerLink="/">Home</a>
          <span>/</span>
          <span>{{ title }}</span>
        </nav>
        <p class="eyebrow section-label">
          <span class="gold-line"></span>{{ eyebrow }}
        </p>
        <h1 class="title">{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      position: relative;
      height: 68vh;
      min-height: 480px;
      display: flex;
      align-items: flex-end;
      background-size: cover;
      background-position: center;
      overflow: hidden;
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.4) 60%, rgba(8,8,8,0.55) 100%);
    }
    .content {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2.5rem 4rem;
    }
    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-family: var(--font-body);
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
      animation: fadeUp 0.7s 0.1s both;
      a { transition: color var(--transition-fast); &:hover { color: var(--gold); } }
      span { color: var(--text-subtle); }
    }
    .eyebrow {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 1rem;
      animation: fadeUp 0.7s 0.2s both;
    }
    .title {
      font-family: var(--font-display);
      font-weight: 300;
      font-size: clamp(2.8rem, 7vw, 6rem);
      line-height: 1.05;
      color: var(--text-primary);
      margin-bottom: 1rem;
      animation: fadeUp 0.7s 0.35s both;
    }
    .subtitle {
      font-family: var(--font-body);
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.8;
      color: rgba(242,237,232,0.6);
      max-width: 500px;
      animation: fadeUp 0.7s 0.5s both;
    }
    @media (max-width: 768px) {
      .content { padding: 0 1.25rem 3rem; }
      .page-hero { height: 55vh; }
    }
  `]
})
export class PageHeroComponent {
  @Input() title    = '';
  @Input() subtitle = '';
  @Input() eyebrow  = '';
  @Input() img      = '';
}
