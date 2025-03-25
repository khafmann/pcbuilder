import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('case')
export class CaseEntity {
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
}