import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from './../../model/receta';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

/**********************************/
/* npm install --save-dev jquery  */
/**********************************/
import * as $ from 'jquery';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


formulario : FormGroup;


  constructor(private fb: FormBuilder, public recetasService : RecetasService) {
    console.log('FormularioComponent constructor');
    this.crearFormulario();
   }

  ngOnInit() {
    console.log('FormularioComponent ngOnInit');
  }

  crearFormulario():void{
    console.log('FormularioComponent crearFormulario');
    this.formulario=this.fb.group({
      //FormControl(input) => ['value', [Validaciones]]
      nombre : ['',[Validators.required, Validators.minLength(2)] ],
      cocinero : ['',[Validators.minLength(5)] ],
      gluten : ['',[Validators.required] ],
      foto : ['../../../assets/img/receta_default.jpg',[Validators.required]],
      descripcion : ['',[Validators.required, Validators.minLength(100)] ]
    });
  }

  sumitar():void{
    console.log('FormularioComponent onSubmit');

    //TODO recoger datos del formulario
    let nombre=this.formulario.value.nombre;
    let cocinero=this.formulario.value.cocinero;
    let foto=this.formulario.value.foto;
    let gluten=this.formulario.value.gluten;
    let descripcion=this.formulario.value.descripcion;


    let receta=new Receta(nombre,cocinero,foto);
    receta.isGlutenFree=(gluten=="si")?false:true;
    receta.descripcion=descripcion;
    this.recetasService.crear(receta);




    //TODO cerrar modal


    $("#modalReceta .close").click();
  }
  

}
