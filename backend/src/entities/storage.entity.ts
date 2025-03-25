import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('storage')
export class StorageEntity {
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
}