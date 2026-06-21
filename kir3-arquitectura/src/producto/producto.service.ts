import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ProductoService {
    private productos: any[]=[]

    constructor(@InjectRepository(Producto)private readonly productoRepository: Repository<Producto>){}
    
    async findAll():Promise<any[]>{
        return await this.productoRepository.find();
    }

    async create(prod:any){ 
        const producto = new Producto()

        producto.imagen=prod.imagen;
        producto.nombre=prod.nombre;
        producto.descripcion=prod.descripcion;
        producto.precio= prod.precio;
        producto.cantidad=prod.cantidad;

        return await this.productoRepository.save(producto);
    }

    update(nombre:string, prod:any):any{
        const index= this.productos.findIndex(existeProd=>existeProd.nombre==nombre);
        if(index != -1){
            this.productos[index]=prod;
            return this.productos[index]
        }
        return null
    }

    delete(nombre:string):any{
        const index = this.productos.findIndex(existeProd => existeProd.nombre===nombre);
        if (index !== -1){
            const productoEliminado=this.productos.splice(index, 1);
            return productoEliminado[0];
        }
        return null;
    }    
}
