import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  

  getListaProductos(){
    return[
      {
        nombre: "Sérum de Baba de Caracol",
        descripcion: "COSRX - Advanced Snail 96. Repara, hidrata intensamente y suaviza marcas.",
        precio: 24.90,
        imagen:"https://share.google/NxD1JOHWVY8NT0LWH"
      },
      {
        nombre: "Tónico de Centella Asiática",
        descripcion: "Skin1004 - Madagascar Centella. Calma rojeces y repara la barrera cutánea.",
        precio: 19.50,
        imagen:"https://share.google/2a7MqJHhAFbUhlbph"
      },
      {
        nombre: "Limpiador a Base Aceite",
        descripcion: "Ginseng Cleansing Oil. Desmaquilla y limpia impurezas profundas.",
        precio: 22.00,
        imagen:"https://share.google/ypZzfiGnPnxZn8V85"
      }
    ]
  }
}
