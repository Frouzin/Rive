import { Routes } from '@angular/router';
import { HomePageComponent }       from './pages/home/home.component';
import { GuardaChuvaPageComponent } from './pages/guarda-chuva/guarda-chuva.component';
import { GuardaSolPageComponent }   from './pages/guarda-sol/guarda-sol.component';
import { OmbrelonesPageComponent }  from './pages/ombrelones/ombrelones.component';
import { ContatoPageComponent }     from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '',             component: HomePageComponent,       title: 'Rive Brasil — Sombra com Presença' },
  { path: 'guarda-chuva', component: GuardaChuvaPageComponent, title: 'Guarda-Chuva — Rive Brasil' },
  { path: 'guarda-sol',   component: GuardaSolPageComponent,   title: 'Guarda-Sol — Rive Brasil' },
  { path: 'ombrelones',   component: OmbrelonesPageComponent,  title: 'Ombrelones — Rive Brasil' },
  { path: 'contato',      component: ContatoPageComponent,     title: 'Contato — Rive Brasil' },
  { path: '**',           redirectTo: '' }
];
