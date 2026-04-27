import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="page-hero" [ngStyle]="getHeroStyle()">
      <div class="overlay"></div>
      <div class="content">
        <nav class="breadcrumb">
          <a routerLink="/">Home</a>
          <span>/</span>
          <span>{{ title }}</span>
        </nav>
        <p class="eyebrow subtitle">
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
      background-repeat: no-repeat;
      overflow: hidden;
      background-color: #080808;
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
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #888;
      margin-bottom: 1.5rem;
      a { text-decoration: none; color: inherit; transition: 0.3s; &:hover { color: #d4af37; } }
    }
    .title {
      font-family: var(--font-display);
      font-size: clamp(2.8rem, 7vw, 6rem);
      line-height: 1.05;
      color: #fff;
      margin-bottom: 1rem;
    }
    .subtitle {
      font-size: 1rem;
      line-height: 1.8;
      color: rgba(242,237,232,0.6);
      max-width: 500px;
    }
    @media (max-width: 768px) {
      .content { padding: 0 1.25rem 3rem; }
      .page-hero { height: 55vh; }
    }
  `]
})
export class PageHeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() eyebrow = '';
  @Input() img = '';

  getHeroStyle() {
    if (!this.img) return {};
    
    // Essa linha "limpa" o nome do arquivo para o CSS não quebrar com () ou espaços
    const sanitizedUrl = this.img.replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/ /g, '%20');
    
    return {
      'background-image': `url('${sanitizedUrl}')`
    };
  }
}