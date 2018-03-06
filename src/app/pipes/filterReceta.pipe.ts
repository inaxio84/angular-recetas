import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({
  name: 'filterReceta'
})
export class FilterReceta implements PipeTransform {

    /**
     * Filtro para buscar en una coleccion de coches. No es CaseSensitive
     * @param stock : Coche[]
     * @param searchText : string con la marca o modelo de coche
     */
  transform(recetas: Receta[], searchText: string): Receta[] {

    if(!recetas) return [];
    if(!searchText) return recetas;
    searchText = searchText.toLowerCase();
    let nombre="";
    return recetas.filter( recetaIt => {
        nombre=recetaIt.nombre;
        nombre.toLowerCase();
        return nombre.includes(searchText);
    });
   }

}