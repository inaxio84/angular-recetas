import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Nuestro modulo para routing
import {AppRouter} from './app.route';

//Services
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/recetas.service';
import { TodosService } from './providers/todos.service';

//componentes
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoComponent } from './concesionario/listado/listado.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { DetalleComponent } from './recetario/detalle/detalle.component';
import { FormularioComponent } from './recetario/formulario/formulario.component'; 
import { FormularioCochesComponent } from './concesionario/formulario-coches/formulario-coches.component';
import { TodosComponent } from './todos/todos.component';
import { PlantillaComponent } from './plantilla/plantilla.component';

//Pipes
import { RoundPipe } from './pipes/round.pipe';
import { FilterPipe } from './pipes/filter.pipe'; 
import { FilterReceta } from './pipes/filterReceta.pipe';
import { FormBasicoComponent } from './form-basico/form-basico.component';










@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,
    RoundPipe,
    FilterPipe,
    FilterReceta,
    RecetarioComponent,
    DetalleComponent,
    FormularioComponent,
    FormularioCochesComponent,
    PlantillaComponent,
    TodosComponent,
    FormBasicoComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CochesService,
    RecetasService,
    HttpClientModule,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
