import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.css']
})
export class RecetaDetalleComponent implements OnInit {

  @Input() recetaDetail!: Receta;

  constructor() { }

  ngOnInit() {
  }

}
