import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RecetaDetalleComponent } from './receta-detalle/receta-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetaListComponent, RecetaDetalleComponent],
  exports: [RecetaListComponent, RecetaDetalleComponent]
})
export class RecetaModule { }
