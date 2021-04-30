import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../service/heroes.service';
import { Router } from '@angular/router'; //(1/3)Se importa un cservicio llamado Rauter.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router) { //(2/3) crear una variable de nombre cualquiera: Router por el servicio que se importa arriba.
   // console.log("constructor");
   }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();
//   console.log( this.heroes);
    
  }
  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] ); // (3/3) se crear la variable y se llama con el this.router.navigate y va a llamar el arreglo /heroe, idx. es decir el heroe con su respectivo id.
  }

}