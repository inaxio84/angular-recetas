import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import { Receta } from './../../model/receta';
import {FormGroup, FormBuilder, Validators, FormControl, FormArray} from '@angular/forms';

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
ingredientes : FormArray;

  constructor(private fb: FormBuilder, public recetasService : RecetasService) {
    console.log('FormularioComponent constructor');
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
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
      gluten : ['si',[Validators.required] ],
      foto : ['../../../assets/img/receta_default.jpg',[Validators.required]],
      descripcion : ['',[Validators.required, Validators.minLength(100)] ],
      ingredientes : this.fb.array([ this.createIngredienteFormGroup() ])
    });
  }

  /** 
  * Creamos un FormGroup para los Ingredientes
  **/  
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }

/** 
* Evento para crear un nuevo Ingrediente
*/
 clickOtroIngrediente(){
  console.log('FormularioComponent clickOtroIngrediente');    
  this.ingredientes.push( this.createIngredienteFormGroup() );
}

/** 
* Evento para eliminar un nuevo Ingrediente
*/
clickEliminarIngrediente( index ){
  console.log('FormularioComponent clickEliminarIngrediente');    
  this.ingredientes.removeAt(index);
}



  estilosInput(control:FormControl):string{
    
    const CLASS_ERROR="form-group has-error";
    const CLASS_SUCCESS="form-group has-success";
    
    if (control.dirty){
      return (control.valid)?CLASS_SUCCESS:CLASS_ERROR;
    }
    else{
      return "form-group";
    }
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
    receta.isGlutenFree=(gluten==="si")?false:true;
    receta.descripcion=descripcion;

    //recuperar los ingredientes
    let ingredientes=this.formulario.value.ingredientes.map(element => {
      receta.addIngrediente( element.nombre );
    });

    this.recetasService.crear(receta);

    //limpiar el fotrmulario
    this.formulario.reset({
      gluten:"si",
      foto : '../../../assets/img/receta_default.jpg'
    });
    //this.crearFormulario();
    this.ingredientes.controls.splice(1);
    //TODO cerrar modal


    $("#modalReceta .close").click();
  }
  

}
