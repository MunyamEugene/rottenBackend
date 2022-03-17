import { Service } from "../../database/entity/service";
import { getConnection } from "typeorm";
import { ServiceRepository } from "./service.repository";

export class ServiceServ{
    public repository:ServiceRepository;
    constructor(){
        this.repository=getConnection().getCustomRepository(ServiceRepository);
    
    }

    public getSingle=async(id:number)=>{
        const service = await this.repository.findOneOrFail(id);
        return service;
    }
    public getAllServices = async()=>{
        const services= await this.repository.find();
        return services;
    }
    

}