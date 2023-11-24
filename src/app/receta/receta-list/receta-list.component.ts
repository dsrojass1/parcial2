import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  recetas: Array<Receta> = [];
  promedio: number = 0;
  totalOpiniones: number = 0;
  selected: Boolean = false;
  selectedReceta!: Receta;

  constructor(private recetaService: RecetaService) { }

  ngOnInit() {
    this.getRecetas()
    
  }

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
      this.promedio = this.calcularEstrellasPromedio();
      this.totalOpiniones = this.calcularTotalOpiniones();
    });
    
  }

  calcularEstrellasPromedio(): number {
    let suma: number = 0;
    this.recetas.forEach((receta) => {
      suma += receta.estrellas;
    });

    let promedio = suma / this.recetas.length

    return promedio;
  }

  calcularTotalOpiniones() : number {
    let total = 0;
    this.recetas.forEach((receta) => {
      total += receta.cantidadOpiniones;
    });
    return total;
  }

  onSelected(receta: Receta): void {
    this.selected = true;
    this.selectedReceta = receta;
  }
}
