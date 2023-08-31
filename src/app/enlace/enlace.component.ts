import { Component, Input } from '@angular/core';
import { Ienlace } from './Ienlace';
@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent {
 @Input() Ienlace: Ienlace = {
    foto: "https://www.industrialtaylor.com.co/web/image/product.template/2247/image_256/%5BNT8152%5D%20Vaso%20Newport%20copolimero%208%20oz%20transparente%20Cambro?unique=5d52136",
    nombreArticulo: "Vaso",
    cantidad: "6",
    color: "Blanco",
    tamano: "Grande",
    precio: "L. 50.00"
 }
}
