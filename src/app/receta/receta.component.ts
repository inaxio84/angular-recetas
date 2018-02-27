import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos
  nombre:string;
  foto:string;
  descripcion:string;
  likes:number;
  isGlutenFree:boolean;
  cocinero:string;
  ingredientes:string[];

  constructor() {
    console.log('recetaComponent constructor');
    this.nombre='Bocata calamares';
    this.descripcion='El bocadillo de calamares es una especialidad culinaria muy frecuente en España consistente en, o bien calamares rebozados en harina y fritos en aceite que suele ser de oliva, o bien la versión más sofisticada que es todo lo anterior más una salsa de tomate picante y mayonesa con ajo similar a la de las patatas bravas.​ Se suele servir caliente, recién hecho. Este tipo de bocadillo (la versión sencilla sin salsa) es muy popular en Madrid y puede encontrarse en la mayoría de los bares de la capital española, siendo muy típico de la Plaza Mayor de Madrid y uno de los olores característicos de dicha plaza.​ En Zaragoza es tradicional la versión sofisticada del bocadillo de calamares, con la salsa picante (tomate, mayonesa y ajo), y se le denomina bocadillo de calamares bravos, que se sirve en todos los bares de las calles Cinco de marzo y Moneva.';
    this.foto='http://elcocinerofiel.com/wp-content/uploads/2013/09/484BOCADILLODECALAMARES_BL.jpg';
    this.likes=25;
    this.isGlutenFree=false;
    this.cocinero="Karlos Argiñano";
    this.ingredientes=['Calamares', 'Pan', 'Salsa alioli','Limon'];
   }

  ngOnInit() {
    console.log('recetaComponent ngOnInit');
  }


  sumarLike(){
    console.log('like clikado');
    this.likes++;
  }
}
