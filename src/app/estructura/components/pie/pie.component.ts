import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @Input()
  public texto: string;


  @Input()
  public fecha: number = 2020; //valor por defecto
  constructor() {
    this.fecha = new Date().getTime();
    this.texto = "&copy; Superhéroes en Angular"
    
   }

  ngOnInit(): void {
  }

}
