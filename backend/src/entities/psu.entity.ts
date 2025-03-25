import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('psu')
export class PsuEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    link: string;

    @Column()
    store: string;

    @Column()
    power: number;
}