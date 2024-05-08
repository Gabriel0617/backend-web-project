import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Driver extends BaseEntity{
    @PrimaryColumn()
    id_driver : number;

    @Column({ nullable: true })
    district : string;

    @Column({ nullable: true })
    driver_name : string;

    @Column({ nullable: true })
    address : string;

    @Column({ nullable: true })
    phone_number : string;

    @Column({ nullable: true })
    driver_type : string;

    @Column({ nullable: true })
    driver_dni : string;


}
