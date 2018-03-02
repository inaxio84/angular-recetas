/*Clase para encapsular los atributos de una receta*/

export class Receta{
    
    nombre:string;
    foto:string;
    descripcion:string;
    likes:number;
    isGlutenFree:boolean;
    cocinero:string;
    ingredientes:string[];

    //solo es posible un constructor
    constructor(nombre:string, cocinero:string ='Anonimo'){//valor por defecto de la variable cocinero
        console.log('Receta constructor');
        this.nombre=nombre;
        this.foto='assets/img/receta_default.jpg';
        this.likes=0;
        this.cocinero=cocinero;
        this.descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quae voluptatibus ex pariatur magni dolorum asperiores maxime quis, obcaecati, ducimus accusamus porro voluptate in saepe sit ipsam mollitia, atque est!';
        this.isGlutenFree=false;
        this.ingredientes=[];

    }

    addIngrediente(ingrediente:string){
        this.ingredientes.push(ingrediente);
    }


    toString(){
        console.log(`Receta nombre=${this.nombre}`);
    }


}