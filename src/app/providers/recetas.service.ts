import { Injectable } from '@angular/core';
import { Receta } from './../model/receta';
import { MOCKS_RECETAS } from './mocks.recetas';


@Injectable()
export class RecetasService {
  recetas : Receta[];

  constructor() {
    console.log('RecetasService constructor');
  }

  getAll():Receta[]{
    console.log('RecetasService getAll');
    let jsonData = JSON.parse(MOCKS_RECETAS);
    this.recetas = [];
    let receta;

    jsonData.forEach( el => {
       receta = new Receta( el.nombre, el.cocinero, el.foto);
       receta.descripcion=el.descripcion;
       receta.likes=el.likes;
       receta.isGlutenFree=el.isGlutenFree;
       
       el.ingredientes.forEach( ing => {
          receta.addIngrediente(ing);
       });

       this.recetas.push(receta);
    });

    return this.recetas;
  }

/**
 * Crear Nueva Receta
 * @param receta:Receta nueva
 */

 crear(receta:Receta):void{
   console.log('RecetasService crear %o', receta)
  this.recetas.unshift(receta);
 }
}
