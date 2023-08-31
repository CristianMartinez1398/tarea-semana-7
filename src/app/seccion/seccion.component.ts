import { Component, Input } from '@angular/core';
import { Iseccion } from './Iseccion';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {
  @Input() seccion: Iseccion = {
    foto: "https://mobidoc.com.uy/wp-content/uploads/2022/06/iphone-13-pro-max.jpeg",
    telefono: "Iphone 13 Pro",
    color: "Blanco",
    camaras: "3",
    almacenamiento: "32GB",
    precio: "L.32,000"
  }

  @Input() seccion2: Iseccion = {
    foto: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1647849448.31929017!256x256.png",
    telefono: "Redmi Pro 10 ",
    color: "Azul",
    camaras: "4",
    almacenamiento: "128GB",
    precio: "L.15,000"
  }  

  @Input() seccion3: Iseccion = {
    foto: "https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fsmartphones%2Fhonor-x8.png&w=256&q=75",
    telefono: "X8",
    color: "Negro",
    camaras: "4",
    almacenamiento: "128GB",
    precio: "L.20,000"
  }  
}
