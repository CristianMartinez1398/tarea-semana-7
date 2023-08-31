import { Component, Input } from '@angular/core';
import { Iarticulo } from "./Iarticulo";

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  @Input() Iarticulo: Iarticulo = {
    titulo: "Cosas para la Cocina",
     
  }
}
