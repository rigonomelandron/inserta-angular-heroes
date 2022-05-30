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
   public heroeFavorito? = Heroe;
  constructor(private _heroesService: HeroesService) {
      this.lista=[];
  }

  public seleccionarFavorito(heroe : Heroe){
      this.favorito.emit(heroe);
  }

  ngOnInit(): void {
    console.log("arrancamos listado tabla");

    this.lista = this._heroesService.getHeroes();
  }

}
