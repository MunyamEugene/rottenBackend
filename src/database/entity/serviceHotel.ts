import { Column, PrimaryColumn, PrimaryGeneratedColumn,ManyToOne,JoinColumn, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Hotel } from "./hotel";
import { Service } from "./service";
@Entity()
export class ServiceHotel{
    @PrimaryGeneratedColumn()
    id: number;
    @PrimaryColumn("int")
    hotelId: number;
    @PrimaryColumn("int")
    serviceId: number;
    @Column()
    votes: number;
    @Column({length: 200 })
    email: string;

    @ManyToOne(() => Hotel, (hotel: Hotel) => hotel.services)
    @JoinColumn({ name: "hotelId" })
    hotel: Hotel;

    @ManyToOne(() => Service, (service: Service) => service.serviceHotels,{eager:true})
    @JoinColumn({ name: "serviceId" })
    service: Service;

    @CreateDateColumn({name:"created_at"})
    createdAt?:Date;
    @UpdateDateColumn({name:"updated_at"})
    updatedAt:Date;

}