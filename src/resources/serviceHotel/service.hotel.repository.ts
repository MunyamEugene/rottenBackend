import { ServiceHotel } from "../../database/entity/serviceHotel";
import { EntityRepository, Repository } from "typeorm";
@EntityRepository(ServiceHotel)
export class ServiceHotelRepo extends Repository<ServiceHotel>{

}