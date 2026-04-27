import { Component, OnInit } from '@angular/core';
import { HeroComponent }         from '../../components/hero/hero.component';
import { DiferenciaisComponent } from '../../components/diferenciais/diferenciais.component';
import { ClientesComponent }     from '../../components/clientes/clientes.component';
import { ProdutosComponent }     from '../../components/produtos/produtos.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, DiferenciaisComponent, ClientesComponent, ProdutosComponent],
  template: `
    <app-hero></app-hero>
    <app-diferenciais></app-diferenciais>
    <app-clientes></app-clientes>
    <app-produtos></app-produtos>
  `
})
export class HomePageComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0); }
}
