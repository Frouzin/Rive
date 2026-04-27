import { Component, HostListener, signal } from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header [class.scrolled]="isScrolled()">
      <div class="nav-inner">

        <a routerLink="/" class="logo" aria-label="Rive Brasil">
          <span class="logo-main">RIVE</span>
          <span class="logo-sub">BRASIL</span>
        </a>

        <nav class="nav-links" [class.open]="menuOpen()">
          <a routerLink="/"             routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">Home</a>
          <a routerLink="/guarda-chuva" routerLinkActive="active" (click)="closeMenu()">Guarda-Chuva</a>
          <a routerLink="/guarda-sol"   routerLinkActive="active" (click)="closeMenu()">Guarda-Sol</a>
          <a routerLink="/ombrelones"   routerLinkActive="active" (click)="closeMenu()">Ombrelones</a>
          <a routerLink="/contato"      routerLinkActive="active" (click)="closeMenu()" class="nav-cta">Contato</a>
        </nav>

        <button class="hamburger" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>

      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      padding: 0 2.5rem;
      transition: background 0.5s ease, border-bottom 0.4s ease;
      border-bottom: 1px solid transparent;
    }
    header.scrolled {
      background: rgba(26, 26, 26, 0.92);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom-color: var(--gold-border);
    }
    .nav-inner {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }
    .logo {
      display: flex;
      flex-direction: column;
      line-height: 1;
      gap: 1px;
    }
    .logo-main {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1.5rem;
      letter-spacing: 0.15em;
      color: var(--primary);
    }
    .logo-sub {
      font-family: var(--font-body);
      font-weight: 300;
      font-size: 0.5rem;
      letter-spacing: 0.5em;
      color: var(--primary-card);
      text-transform: uppercase;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      a {
        font-family: var(--font-body);
        font-weight: 400;
        font-size: 0.75rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--primary);
        opacity: 0.7;
        transition: opacity var(--transition-fast);
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width var(--transition);
        }
        &:hover, &.active { opacity: 1; &::after { width: 100%; } }
        &.active { color: var(--bg-secondary); }
      }
      .nav-cta {
        padding: 0.5rem 1.4rem;
        border: 1px solid var(--primary);
        color: var(--primary) !important;
        opacity: 1 !important;
        letter-spacing: 0.15em;
        &::after { display: none !important; }
        &:hover, &.active {
          border-color: var(--primary-light);
        }
      }
    }
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      span {
        display: block;
        width: 24px; height: 1px;
        background: var(--text-primary);
        transition: transform 0.3s ease, opacity 0.3s ease;
      }
      &[aria-expanded="true"] {
        span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        span:nth-child(2) { opacity: 0; }
        span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
      }
    }
    @media (max-width: 900px) {
      header { padding: 0 1.25rem; }
      .hamburger { display: flex; }
      .nav-links {
        position: fixed;
        inset: 72px 0 0 0;
        background: rgba(8,8,8,0.97);
        backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center;
        gap: 2.5rem;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        a { font-size: 1.1rem; letter-spacing: 0.2em; }
        &.open { transform: translateX(0); }
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen   = signal(false);
  @HostListener('window:scroll') onScroll() { this.isScrolled.set(window.scrollY > 60); }
  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
}
