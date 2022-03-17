
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServiceHotel } from "./serviceHotel";

@Entity()
export class Service{
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    name: string;
    @OneToMany(() => ServiceHotel, (serviceHotel: ServiceHotel) => serviceHotel.service)
    serviceHotels?: ServiceHotel[];
}