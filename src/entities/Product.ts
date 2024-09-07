import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { IsString, IsDate, IsInt, MinDate } from 'class-validator';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsString()
  name!: string;

  @Column()
  @IsDate()
  expirationDate!: Date;

  @Column()
  @IsString()
  category!: string;

  @Column()
  @IsInt()
  quantity!: number;
}
