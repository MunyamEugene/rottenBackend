import { Hotel } from "../../database/entity/hotel";
import { EntityRepository, Repository } from "typeorm";
@EntityRepository(Hotel)
export class HotelRepo extends Repository<Hotel>{
    
}