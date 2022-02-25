import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServiceHotel } from "./serviceHotel";

@Entity()
export class Hotel{
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    name: string;
    @Column()
    stars: number;
    @Column()
    location: string;
    @OneToMany(() => ServiceHotel, (serviceHotel: ServiceHotel) => serviceHotel.hotel)
    services?: ServiceHotel[];
}