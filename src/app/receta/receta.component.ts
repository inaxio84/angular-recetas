import { Component, OnInit } from '@angular/core';

import {Receta} from '../model/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos

  receta: Receta;
  show:boolean;
  glyphicon: string;

  constructor() {
    console.log('recetaComponent constructor');

    this.receta =new Receta("Marmitako",undefined,'../../../assets/img/receta_default.jpg');
    this.show=false;
    this.glyphicon="glyphicon-chevron-down";
    this.receta.addIngrediente('patata');
    this.receta.addIngrediente('bonito');
    this.receta.addIngrediente('pimiento verde');
    this.receta.addIngrediente('aceite');
    this.receta.addIngrediente('pimiento choricero');
   }

  ngOnInit() {
    console.log('recetaComponent ngOnInit');
  }


  sumarLike(){
    console.log('like clikado');
    this.receta.likes++;
  }

  showIngredientes(){
    console.log('Click showIngredientes');
    this.show=!this.show
    this.glyphicon=(this.show)?'glyphicon-chevron-up':'glyphicon-chevron-down'
  }
  
}
