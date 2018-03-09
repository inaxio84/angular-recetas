import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';
import { element } from 'protractor';

@Injectable()
export class CochesService {

  coches : Coche[];

  constructor() { 
    console.log('CochesService constructor');
  }

  /** 
   * Retorna todos los Coches que tenemos en Stock
  */
  getAll():Coche[]{
    console.log('CochesService getAll');
    this.coches= [];
    let coche;
    
    let jsonData = JSON.parse(MOCKS_COCHES.stock);

    jsonData.forEach( element => {
      
        coche = new Coche( 
                          element.marca, 
                          element.modelo, 
                          element.puertas,
                          element.foto,
                          element.version,
                          element.caballos,
                          element.consumo
                          );
       
        this.coches.push(coche);

    });

    return this.coches;
  }

  /**
 * Crear Nuevo Coche
 * @param coche:Coche nuevo
 */

 crear(coche:Coche):void{
  console.log('CochesService crear %o', coche)
 this.coches.unshift(coche);
}


}