import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-listado-tarjeta',
  templateUrl: './listado-tarjeta.component.html',
  styleUrls: ['./listado-tarjeta.component.css'],
})
export class ListadoTarjetaComponent implements OnInit {
  public heroes: Heroe[];
  public error? : HttpErrorResponse;
  public cargando: boolean;

  constructor( private _heroesService: HeroesService) {
      this.cargando = false;
      this.heroes = []
   }

  ngOnInit(): void {
    console.log('Arrancamos listado tarjeta');
    let datos = this._heroesService.getHeroes();
    this.cargando = true;
    datos.subscribe(
     {
       next: (respuesta)=>{
        this.heroes = respuesta;
          console.log("todo ha ido bien", respuesta);

      },
      error: (error)=>{
          console.error("todo ha ido mal", error);
          this.error = error;
      },
      complete: ()=>{
        this.cargando = false;
          console.log("todo ha ido bien o no");
      }

    }
    );
    console.log(this.error);


  }
}
