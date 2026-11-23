import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {
  categoriaDialog: boolean = false;
  categorias: any[] = [];
  categoria: any = {};
  submitted: boolean = false;

  ngOnInit() {
    // Cargar datos guardados previamente en el navegador, o usar por defecto si está vacío
    const savedCategorias = localStorage.getItem('categorias_kirena');
    if (savedCategorias) {
      this.categorias = JSON.parse(savedCategorias);
    } else {
      this.categorias = [
        { id: 1, nombre: 'Periféricos', detalle: 'Teclados, mouse y dispositivos' }
      ];
    }
  }

  openNew() {
    this.categoria = {};
    this.submitted = false;
    this.categoriaDialog = true;
  }

  hideDialog() {
    this.categoriaDialog = false;
    this.submitted = false;
  }

  saveCategoria() {
    this.submitted = true;
    if (this.categoria.nombre && this.categoria.nombre.trim()) {
      if (this.categoria.id) {
        const index = this.categorias.findIndex(c => c.id === this.categoria.id);
        if (index !== -1) {
          this.categorias[index] = { ...this.categoria };
        }
      } else {
        // Calcular ID automático basado en el último elemento
        const nextId = this.categorias.length > 0 ? Math.max(...this.categorias.map(c => c.id)) + 1 : 1;
        this.categoria.id = nextId;
        this.categorias.push(this.categoria);
      }
      
      // Guardar en el almacenamiento local del navegador
      localStorage.setItem('categorias_kirena', JSON.stringify(this.categorias));

      this.categorias = [...this.categorias];
      this.categoriaDialog = false;
      this.categoria = {};
    }
  }

  editCategoria(categoria: any) {
    this.categoria = { ...categoria };
    this.categoriaDialog = true;
  }

  deleteCategoria(categoria: any) {
    this.categorias = this.categorias.filter(val => val.id !== categoria.id);
    localStorage.setItem('categorias_kirena', JSON.stringify(this.categorias));
  }
}