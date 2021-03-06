import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  nuevaTarea: string;

  constructor(public todosService: TodosService) {
    console.log('TodosComponent constructor');
    this.todos = [];
  }

  ngOnInit() {
    console.log('TodosComponent ngOnInit');
    this.cargarTareas();

  }//ngOnInit


  /**
   * mapea los datos en formato json a todo que proviene del servicio rest
   * @param resultado 
   */
  mapeo(result: any) {

    let todo: Todo;
    result.forEach(el => {
      todo = new Todo(el.title);
      todo.id = el.id;
      todo.idUser = el.userId;
      todo.completed = el.completed;

      this.todos.push(todo);
    }
    )
  }

  cargarTareas() {
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.todosService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }

  cambiarEstado(todo: Todo) {

    console.log('cambiar completed %o', todo);
    //todo.completed = !todo.completed;

    this.todosService.patch(todo).subscribe(
      result=>{
        console.log('TodosComponent new %o', result);
        this.cargarTareas();
      },
      error=>{
        alert('No se pudo Crear Nueva Tarea');
        console.error(error);
      }
    );
  }

  eliminarTarea(todo: Todo) {

    console.log('eliminar %o', todo);

    this.todosService.delete(todo.id).subscribe(
      result => {
        this.cargarTareas();
      },
      error => {
        alert('No se pudo elimiar Tarea');
      }

      /*
          let id=todo.id;
          this.todos.forEach((element,index) => {
            if(id===element.id){
              this.todos.splice(index, 1);
              return false;//es un break para no recorrer todo el array.
            }
            */
    );



  }

  addTarea() {

    let todo = new Todo(this.nuevaTarea);
    console.log('añadir tarea');
    /*
    this.todos.unshift(todo);
    */

   this.todosService.post(todo).subscribe(
    result=>{
      console.log('TodosComponent new %o', result);
      this.cargarTareas();
    },
    error=>{
      alert('No se pudo Crear Nueva Tarea');
      console.error(error);
    }
  );



  }



}
