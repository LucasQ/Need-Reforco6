import { Component, OnInit } from '@angular/core';

import { PerfilService } from '../pag-home/professor/perfil.service';


@Component({
  selector: 'app-pag-avaliacao-prof',
  templateUrl: './pag-avaliacao-prof.component.html',
  styleUrls: ['./pag-avaliacao-prof.component.css']
})
export class PagAvaliacaoProfComponent implements OnInit {

  profNum: number;

  

  constructor(perfilNumero: PerfilService) {
    this.profNum = perfilNumero.numPerfil;
 }
  ngOnInit() {
  }

}
