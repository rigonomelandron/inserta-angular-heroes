import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';
@Component({
  selector: 'app-listado-tabla',
  templateUrl: './listado-tabla.component.html',
  styleUrls: ['./listado-tabla.component.css']
})
export class ListadoTablaComponent implements OnInit {
   public lista: Heroe[];
  constructor(private _heroesService: HeroesService) {
    this.lista = [];
  }

  ngOnInit(): void {
    this.lista = this._heroesService.getHeroes();
  }

}
