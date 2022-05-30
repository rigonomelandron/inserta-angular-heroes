import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-listado-tarjeta',
  templateUrl: './listado-tarjeta.component.html',
  styleUrls: ['./listado-tarjeta.component.css']
})
export class ListadoTarjetaComponent implements OnInit {

  public heroes: Heroe[];
  public heroeService: HeroesService;

  constructor(heroesService: HeroesService) {
    //Así probamos que cada vez que vamos a la url, se instancia el objeto, se vea o no.
    console.log("Instanciamos la clase ListadoTarjetasComponent");

    this.heroeService = heroesService;
    this.heroes = this.heroeService.getHeroes();
  }
  ngOnInit(): void {
  }

}
