import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

vadjo;

  constructor(public perfilNumero: PerfilService) {
    this.vadjo = perfilNumero.numPerfil;
 }

 onReserva(n: number){
   if(n==1){
   this.perfilNumero.numPerfil = 1;
 }else{
   this.perfilNumero.numPerfil = 2;
 }
 }

  ngOnInit() {
   
  }

}
