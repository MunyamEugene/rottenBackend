
import { Controller } from "../../utils/interfaces/controller.interface";
import { Request, Response, Router } from "express";
import { ServiceServ } from "./service.service";

export class ServiceCtrl implements Controller{
    path: string;
    route: Router;
    public serviceServ:ServiceServ;
    constructor(){
        this.path='/service';
        this.route=Router();
        this.allRoutes();
        this.serviceServ= new ServiceServ();
        
    }

    public getAll = async(req:Request,res:Response)=>{
        const services = await this.serviceServ.getAllServices()
        res.status(200).json({services});
    }

    public allRoutes = ()=>{
        this.route.get(this.path,this.getAll);
    }
}