import { Component, OnInit } from '@angular/core';

import { PerfilService } from '../pag-home/professor/perfil.service';

@Component({
  selector: 'app-pag-reservar',
  templateUrl: './pag-reservar.component.html',
  styleUrls: ['./pag-reservar.component.css']
})
export class PagReservarComponent implements OnInit {

  mensagem: boolean = false;
  profNum: number = 0;

  onMensagem(){
    this.mensagem =! this.mensagem; 
  }

  constructor(perfilNumero: PerfilService) {
    this.profNum = perfilNumero.numPerfil;
 }

  ngOnInit() {

  }

}
