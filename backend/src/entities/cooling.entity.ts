import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('cooling')
export class CoolingEntity {
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
    socket: string;

    @Column()
    power: number;
}