import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('ram')
export class RamEntity {
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
    capacity: string;

    @Column()
    ramType: string;
}