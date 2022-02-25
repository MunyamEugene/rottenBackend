import { Service } from "../../database/entity/service";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Service)
export class ServiceRepository extends Repository<Service>{
    
}