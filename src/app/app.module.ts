import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PagHomeComponent } from './pag-home/pag-home.component';
import { MenuComponent } from './pag-home/menu/menu.component';
import { CarrosselComponent } from './pag-home/menu/carrossel/carrossel.component';
import { ProfessorComponent } from './pag-home/professor/professor.component';
import { VisaoSelecaoComponent } from './pag-home/visao-selecao/visao-selecao.component';
import { PagReservarComponent } from './pag-reservar/pag-reservar.component';
import { PerfilService } from './pag-home/professor/perfil.service';
import { PagListagemProfComponent } from './pag-listagem-prof/pag-listagem-prof.component';
import { PagAvaliacaoProfComponent } from './pag-avaliacao-prof/pag-avaliacao-prof.component';
import { DivProfComponent } from './pag-listagem-prof/div-prof/div-prof.component';
import { PagListagemProfPortComponent } from './pag-listagem-prof-port/pag-listagem-prof-port.component';
import { DivProfPortComponent } from './pag-listagem-prof-port/div-prof-port/div-prof-port.component';
import { PagListagemProfFisComponent } from './pag-listagem-prof-fis/pag-listagem-prof-fis.component';
import { DivProfFisComponent } from './pag-listagem-prof-fis/div-prof-fis/div-prof-fis.component';
import { PagListagemProfQuiComponent } from './pag-listagem-prof-qui/pag-listagem-prof-qui.component';
import { DivProfQuiComponent } from './pag-listagem-prof-qui/div-prof-qui/div-prof-qui.component';


const appRoutes: Routes = [
  { path: '', component: PagHomeComponent },
  { path: 'pag-reservar', component: PagReservarComponent},
  { path: 'pag-listagem-prof', component: PagListagemProfComponent},
  { path: 'pag-avaliacao-prof', component: PagAvaliacaoProfComponent},
  { path: 'pag-listagem-prof-port', component: PagListagemProfPortComponent},
  { path: 'pag-listagem-prof-fis', component: PagListagemProfFisComponent },
  { path: 'pag-listagem-prof-qui', component: PagListagemProfQuiComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarrosselComponent,
    ProfessorComponent,
    VisaoSelecaoComponent,
    PagHomeComponent,
    PagReservarComponent,
    PagListagemProfComponent,
    PagAvaliacaoProfComponent,
    DivProfComponent,
    PagListagemProfPortComponent,
    DivProfPortComponent,
    PagListagemProfFisComponent,
    DivProfFisComponent,
    PagListagemProfQuiComponent,
    DivProfQuiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
