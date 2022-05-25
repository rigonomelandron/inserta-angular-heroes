import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  public lista : Heroe[];
  private _heroesService : HeroesService;

  constructor(heroesService : HeroesService) {

     this._heroesService = heroesService;
     this.lista=[];
    }

    ngOnInit(): void {
       this.lista = this._heroesService.getHeroes();

  }

}
