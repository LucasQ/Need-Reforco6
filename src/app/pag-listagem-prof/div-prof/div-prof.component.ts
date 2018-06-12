import { infoProf } from './../prof.model';
import { Component, OnInit, Input } from '@angular/core';

import { PerfilService } from '../../pag-home/professor/perfil.service';


@Component({
  selector: 'app-div-prof',
  templateUrl: './div-prof.component.html',
  styleUrls: ['./div-prof.component.css']
})
export class DivProfComponent implements OnInit {

profNum: number = 0;

  profer: infoProf[] = [
    new infoProf('Leonardo Alves', 'Mestrado em Matemática pela Universade de Havard', 
    'Experiências anteriores com aulas de reforço', 'assets/imagens/professormat.jpg'),
    new infoProf('Vadjo Victor','Doutorado na universidade federal UFPB','Professor de curso preparatório no Descomplica','assets/imagens/professormat2.jpg')
  ]; 
  constructor(public perfilNumero: PerfilService) {
    this.profNum = perfilNumero.numPerfil;
 }
 onReserva(){
  this.perfilNumero.numPerfil = 1;
}

onImgReserva(nome: string){
  if(nome=='Leonardo Alves'){
  this.perfilNumero.numPerfil = 1;
  }else if(nome=='Vadjo Victor'){
    this.perfilNumero.numPerfil =5;
  }
}



  ngOnInit() {
  }

}
