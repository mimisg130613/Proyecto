import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = environment.urlServidor;
  private http = inject(HttpClient);

  funListar() {
    return this.http.get(`${this.baseUrl}/producto`);
  }

  funListar2() {
    return this.http.get(`${this.baseUrl}/producto/back`);
  }

  funGuardar(datos: any) {
    return this.http.post(`${this.baseUrl}/producto`, datos);
  }

  funModificar(id: number, datos: any) {
    return this.http.patch(`${this.baseUrl}/producto/${id}`, datos);
  }

  funEliminar(id: number) {
    return this.http.delete(`${this.baseUrl}/producto/${id}`);
  }
}