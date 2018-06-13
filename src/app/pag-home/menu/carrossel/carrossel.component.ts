import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit {

  imagemLink = ['assets/imagens/carrossel2.jpeg','assets/imagens/carrossel3.jpeg',
  'assets/imagens/carrossel1.jpeg'];


  constructor() { }

  ngOnInit() {
  }

}
