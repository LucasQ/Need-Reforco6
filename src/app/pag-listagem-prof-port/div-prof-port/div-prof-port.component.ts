  import { infoProfPort } from './prof.model';
import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../pag-home/professor/perfil.service';


@Component({
  selector: 'app-div-prof-port',
  templateUrl: './div-prof-port.component.html',
  styleUrls: ['./div-prof-port.component.css']
})
export class DivProfPortComponent implements OnInit {

  profNum: number = 0;

  proferPort: infoProfPort[] = [
    new infoProfPort('Carolina Lima', 'Doutorado em Letras pela Universade de Boston', 
    'Experiências anteriores com o aprendizado da língua portuguesa', 'assets/imagens/professoraport.jpg'),
    new infoProfPort('Victor Henrique','Doutorado na universidade federal UFPB','Bacharelado em Letra pela UNB','assets/imagens/portuguesprof2.jpeg')
  ]; 

  constructor(public perfilNumero: PerfilService) {
    this.profNum = perfilNumero.numPerfil;
 }
 onReserva(){
  this.perfilNumero.numPerfil = 2;
}

onImgReserva(nome: string){
  if(nome=='Carolina Lima'){
  this.perfilNumero.numPerfil = 2;
  }else if(nome=='Victor Henrique'){
    this.perfilNumero.numPerfil = 6;
  }
}


  ngOnInit() {
  }

}
