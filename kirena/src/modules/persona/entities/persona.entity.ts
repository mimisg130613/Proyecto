import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity'; // Ajusta la ruta si es necesario

@Entity('persona')
export class Persona {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombres!: string;

  @Column()
  apellidos!: string;

  @Column({ nullable: true })
  userId!: number;


  @OneToOne(() => User, (user) => user.persona, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' }) 
  user!: User;
}