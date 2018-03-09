import { Component, OnInit } from '@angular/core';

/**********************************/
/* npm install --save-dev jquery  */
/**********************************/
import * as $ from 'jquery';
import { CochesService } from '../../providers/coches.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Coche } from '../../model/coche';



@Component({
  selector: 'app-formulario-coches',
  templateUrl: './formulario-coches.component.html',
  styleUrls: ['./formulario-coches.component.scss']
})
export class FormularioCochesComponent implements OnInit {

formulario : FormGroup;

  constructor(private fb: FormBuilder, public cochesService : CochesService) {
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
      marca : ['',[Validators.required] ],
      modelo : ['',[Validators.required] ],
      version : [''],
      foto : ['../../../assets/img/coche_default.jpg',[Validators.required]],
      puertas : [3],
      caballos : [100],
      consumo : [7.2]
    });
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
    let marca=this.formulario.value.marca;
    let modelo=this.formulario.value.modelo;
    let foto=this.formulario.value.foto;
    let version=this.formulario.value.version;
    let puertas=this.formulario.value.puertas;
    let caballos=this.formulario.value.caballos;
    let consumo=this.formulario.value.consumo;
    

    let coche=new Coche(marca,modelo,puertas,foto,version,caballos,consumo);


    this.cochesService.crear(coche);

    //limpiar el fotrmulario
    this.formulario.reset({
      foto : '../../../assets/img/coche_default.jpg',
      puertas:3,
      caballos:100,
      consumo:7.2
     
    });

    //TODO cerrar modal


    $("#modalCoche .close").click();
  }
  

}
