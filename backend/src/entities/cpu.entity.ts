import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cpu')
export class CpuEntity {
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
    coreCount: number;

    @Column()
    ramType: string;

    @Column()
    power: number;
}