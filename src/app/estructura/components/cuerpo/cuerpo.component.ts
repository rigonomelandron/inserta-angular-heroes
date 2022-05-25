import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  public lista : Heroe[];

  constructor() {

    this.lista = [
      new Heroe("Superman", 350, 94, 80, 93, 100, ""),
      new Heroe("Batman", 50, 75, 60, 75, 100, ""),
      new Heroe("Capitana Marvel", 355, 70, 85, 80, 100, ""),
      new Heroe("Catwoman", 50, -5, 63, 72, 100, ""),
      new Heroe("Spiderman", 150, 85, 86, 89, 100, ""),
      new Heroe("Viuda Negra", 35, 37, 88, 83, 100, ""),
      new Heroe("Thanos", 250, -92, 90, 95, 100, ""),
      new Heroe("Linterna Verde", 200, 80, 82, 83, 100, ""),
      new Heroe("Ironman", 150, 69, 83, 85, 100, ""),
      new Heroe("Capitán América", 135, 95, 64, 95, 100, ""),
      new Heroe("Caballero Luna", 130, 0, 100,100,100,"")
    ];
  }

  ngOnInit(): void {
  }

}
