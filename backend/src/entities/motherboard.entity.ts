import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('motherboard')
export class MotherboardEntity {
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
    ramType: string;
}