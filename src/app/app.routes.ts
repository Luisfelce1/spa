import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component'; // Esta ruta se hizo para que el boton ver mas redirección a otra pag.
import { BuscarComponent } from './components/buscar/buscar.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'heroe/:id', component: HeroeComponent}, // recibe el parametro id porque es el heroe que se quiere mostrar al hacer click
    { path: 'buscar/:termino', component: BuscarComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); //, { useHash: true }
