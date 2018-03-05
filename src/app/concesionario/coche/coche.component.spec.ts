import { Component, OnInit, Input } from '@angular/core';
import { Coche } from '../../model/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {
  
  //Parametro de Entrada desde el Componete Padre al Hijo
  @Input('cocheParametro') coche : Coche;

  constructor() {
    console.log('CocheComponent constructor');
  }

  ngOnInit() {
    console.log('CocheComponent ngOnInit');
  }
 

}