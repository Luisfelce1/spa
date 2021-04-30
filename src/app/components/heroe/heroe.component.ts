import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // 1- para recibir parametros por url primero importamos activatedrouter.
import { Heroe, HeroesService } from '../service/heroes.service'; // 6- importamos para activar la variable heroe.

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  
})
export class HeroeComponent {

  heroe:any = {}; // 5- variable local para usarla en el temple.

  constructor( private activatedRoute: ActivatedRoute, // 2- se usa igual que como los servicios. un variable privada.
               private _heroesService: HeroesService  // 6- hacemos lo mismo. lo declaramos.
               
               ){

    this.activatedRoute.params.subscribe( params => {  // 3- cómo lo usamos? tal cual esta línea. id se escribe porque es la palabra que pusismos en app.routes.ts en el servicios heroe/:id. cómo se obtiene el heroe con ese id. nos vamos a heroes.service.ts.
     // console.log(params ['id']);
      this.heroe = this._heroesService.getHeroe( params ['id']); // 7- Con esto nuestra variable se carga.
    })
    
   }

 

}
