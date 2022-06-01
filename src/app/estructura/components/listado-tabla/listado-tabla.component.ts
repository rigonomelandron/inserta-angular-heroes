import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';

import { Heroe } from '../../models/heroe.model';
@Component({
  selector: 'app-listado-tabla',
  templateUrl: './listado-tabla.component.html',
  styleUrls: ['./listado-tabla.component.css']
})
export class ListadoTablaComponent implements OnInit {

  @Output() public favorito = new EventEmitter<Heroe>();
   public lista: Heroe[];
   public heroeFavorito? : Heroe;
   public error? : HttpErrorResponse;
   public cargando : boolean;
  constructor(private _heroesService: HeroesService) {
      this.lista=[];
      this.cargando = false;

  }

  public seleccionarFavorito(heroe : Heroe){
      this.favorito.emit(heroe);
  }

  ngOnInit(): void {
    console.log("arrancamos listado tabla");
    this.cargando = true;
    let datos = this._heroesService.getHeroes();
    datos.subscribe(
       { next: (respuesta)=>{
          this.lista = respuesta;
          console.log("todo ha ido bien", respuesta);

        },
         error: (error : HttpErrorResponse)=>{
            console.error("todo ha ido mal", error);
            this.error = error;

        },
        complete: ()=>{
           this.cargando = false;
           console.log("todo ha ido bien o no");


        }
      }

    );


  }

}
function next(next: any, arg1: (respuesta: any) => void, arg2: (error: any) => void) {
  throw new Error('Function not implemented.');
}

