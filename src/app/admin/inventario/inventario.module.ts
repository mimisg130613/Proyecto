import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CategoriaService } from './services/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng/primeng.module';
import { FormsModule } from '@angular/forms'; // <-- 1. Importar aquí

@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule,
    FormsModule
  ]
})
export class InventarioModule { }