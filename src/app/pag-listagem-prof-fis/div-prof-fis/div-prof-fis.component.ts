import { Component, OnInit } from '@angular/core';
import { infoProfFis } from './prof-fis.model';

import { PerfilService } from '../../pag-home/professor/perfil.service';


@Component({
  selector: 'app-div-prof-fis',
  templateUrl: './div-prof-fis.component.html',
  styleUrls: ['./div-prof-fis.component.css']
})
export class DivProfFisComponent implements OnInit {

  profNum: number = 0;

  proferPort: infoProfFis[] = [
    new infoProfFis('Gustavo Dalosto', 'Doutorado em Física quântica pela Universade de Boston', 
    'Experiências anteriores com curso preparatório para apresentação de TCC', 'assets/imagens/professorfis1.jpg'),
    new infoProfFis('Laura Duarte','Trabalho na área de pesquisar por 2 anos','Fez mestrado em Berlin','assets/imagens/professorafis2.jpg')
  ]; 

  constructor(public perfilNumero: PerfilService) {
    this.profNum = perfilNumero.numPerfil;
 }
 
 onReserva(nome: string){
  if(nome =='Gustavo Dalosto'){
    this.perfilNumero.numPerfil = 3;
  }
  if(nome =='Laura Duarte'){
    this.perfilNumero.numPerfil = 7;
  }
}



onImgReserva(nome: string){
  if(nome=='Gustavo Dalosto'){
  this.perfilNumero.numPerfil = 3;
  }else if(nome=='Laura Duarte'){
    this.perfilNumero.numPerfil =7;
  }
}


  ngOnInit() {
  }

}
