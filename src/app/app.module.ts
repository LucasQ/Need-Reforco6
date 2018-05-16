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


const appRoutes: Routes = [
  { path: '', component: PagHomeComponent },
  { path: 'pag-reservar', component: PagReservarComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarrosselComponent,
    ProfessorComponent,
    VisaoSelecaoComponent,
    PagHomeComponent,
    PagReservarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
