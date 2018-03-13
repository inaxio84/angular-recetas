import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})
export class FormBasicoComponent implements OnInit {

  //atributo FormGroup para usar en el HTML =>
  formulario : FormGroup;
  fruta:string;

  constructor(private fb: FormBuilder) {

    //crear formulario
    this.formulario=this.fb.group({
      //Nombre => control (parecido a input)
      //[formGroup]="formulario"
      nombre:[
        '', //value
        [Validators.required, Validators.minLength(3)] //validaciones
      ]
    });

    this.fruta="banana";


  }

  ngOnInit() {
  }


  //html=> <form (ngSubmit)="enviar($event)"
  enviar() {
    console.log("enviar formulario nombre=%s", this.formulario.controls.nombre.value);
  }

}
