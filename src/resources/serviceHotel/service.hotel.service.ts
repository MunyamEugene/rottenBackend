import { ServiceHotel } from "../../database/entity/serviceHotel";
import { getConnection } from "typeorm";
import { ServiceHotelRepo } from "./service.hotel.repository";

export class ServiceHotelServ{
    public repository:ServiceHotelRepo;
    constructor(){
        this.repository=getConnection().getCustomRepository(ServiceHotelRepo);
    }

    public create = async(vote:ServiceHotel)=>{
        const newVote=await this.repository.save(vote)
        return newVote;
    }

    public getVote= async(hotelId:number,serviceId:number)=>{
        const vote = await this.repository.find({where:{hotelId:hotelId,serviceId:serviceId},relations:['hotel','service']})
        return vote;
    }

    public updateVote = async(newVote:ServiceHotel)=>{
         await this.repository.save(newVote)
    }
}