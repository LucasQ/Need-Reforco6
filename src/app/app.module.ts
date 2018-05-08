import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CarrosselComponent } from './menu/carrossel/carrossel.component';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarrosselComponent,
    ProfessorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
