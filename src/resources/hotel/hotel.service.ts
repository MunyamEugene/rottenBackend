import { Hotel } from "../../database/entity/hotel";
import { getConnection } from "typeorm";
import { HotelRepo } from "./hotel.repository";

export class HotelService{
    public repository:HotelRepo;
    constructor(){
        this.repository=getConnection().getCustomRepository(HotelRepo);
    }

    public createHotel = async(hotel:Hotel)=>{
        const newHotel = await this.repository.save(hotel);
        return newHotel;
    }

    public update = async(hotel:any,id:number)=>{
         await this.repository.update(id,hotel);
    }
    public getAll = async()=>{
        const hotels = await this.repository.find({relations:['services']});
        return hotels;
    }
}