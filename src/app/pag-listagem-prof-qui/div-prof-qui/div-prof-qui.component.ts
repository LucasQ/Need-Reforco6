import { Component, OnInit } from '@angular/core';
import { infoProfQui } from './prof-qui.model';


import { PerfilService } from '../../pag-home/professor/perfil.service';


@Component({
  selector: 'app-div-prof-qui',
  templateUrl: './div-prof-qui.component.html',
  styleUrls: ['./div-prof-qui.component.css']
})
export class DivProfQuiComponent implements OnInit {

  profNum: number = 0;

  proferPort: infoProfQui[] = [
    new infoProfQui('Gustavo Malta', 'Doutorado em Química orgânica pela Universade de Massachusetts', 
    'Experiências anteriores com aulas particulares para o ENEM', 'assets/imagens/professorqui.jpg')
  ]; 

  constructor(public perfilNumero: PerfilService) {
    this.profNum = perfilNumero.numPerfil;
 }
  ngOnInit() {
  }

  onImgReserva(){
    this.perfilNumero.numPerfil = 4;

  }

}
