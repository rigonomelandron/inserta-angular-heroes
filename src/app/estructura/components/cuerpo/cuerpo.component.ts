import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/services/heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
})
export class CuerpoComponent implements OnInit {
  public heroeFavorito?: Heroe |null;

  constructor() {}
  public procesarFavorito(heroe: Heroe) {
    this.heroeFavorito = heroe;
  }

  ngOnInit(): void {}
}
