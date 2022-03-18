import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServiceHotel } from "./serviceHotel";

@Entity()
export class Hotel{
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    name: string;
    @Column({nullable:true})
    stars: number;
    @Column({nullable:true})
    location: string;
    @OneToMany(() => ServiceHotel, (serviceHotel: ServiceHotel) => serviceHotel.hotel)
    services?: ServiceHotel[];
}