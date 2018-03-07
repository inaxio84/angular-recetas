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
  transform(recetas: Receta[], searchText: string, isGlutenFree: boolean): Receta[] {

    //si no hay recetas retornar vacío
    if(!recetas) {return [];}

    let recetasFilterArray: Receta[] = [];
    
    //Filtramos si llevan gluten o no
    if (isGlutenFree) {
      recetas.forEach(it => {
        if (it.isGlutenFree) {
          recetasFilterArray.push(it);
        }
      });
    } else {
      recetasFilterArray = recetas;
    }

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return recetasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let receta = '';
      return recetasFilterArray.filter(it => {
        receta = it.nombre + it.ingredientes + it.cocinero;
        receta = receta.toLowerCase();
        return receta.includes(searchText);
      });
    }
  }

}