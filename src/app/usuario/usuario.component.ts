import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import {Sexo} from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;

  constructor() {
    console.log('usuarioComponent constructor');
    this.usuario =new Usuario("Txomin");
    this.usuario.sexo=Sexo.Indefinido
 
  }

  ngOnInit() {

  }

}
