import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imagen: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string
    
    @Column()
    precio: number;

    @Column()
    cantidad: number;

}