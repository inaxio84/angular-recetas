/*Clase para encapsular los atributos de un usuario*/

export class Usuario{

    id:number;
    nombre:string;
    apellido:string;
    email:string;
    avatar:string;
    sexo:Sexo;

    

    //solo es posible un constructor
    constructor(nombre:string){
        console.log('Receta constructor');
        this.id=-1;
        this.nombre='Txomin';
        this.apellido='Galarga';
        this.email='txomingalarga@gmail.com'
        this.avatar='assets/img/user.png';
       
    }




}

export enum Sexo {Hombre='Hombre', Mujer='Mujer', Indefinido='Indefinido'};