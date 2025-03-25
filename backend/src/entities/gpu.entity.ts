import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('gpu')
export class GpuEntity {
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
    memory: string;

    @Column()
    vendor: string;

    @Column()
    power: number;
}