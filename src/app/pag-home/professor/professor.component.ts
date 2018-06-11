import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

var;

  constructor(public perfilNumero: PerfilService) {
    this.var = perfilNumero.numPerfil;
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
