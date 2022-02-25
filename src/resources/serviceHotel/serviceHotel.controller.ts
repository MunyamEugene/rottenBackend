import { Request, Response, Router } from "express";
import { Controller } from "../../utils/interfaces/controller.interface";
import { ServiceHotelServ } from "./service.hotel.service";
import { Service } from "../../database/entity/service";
import { ServiceHotel } from "../../database/entity/serviceHotel";
import { Hotel } from "../../database/entity/hotel";

export class ServiceHoltelCtrl implements Controller{

    public path: string;
    public route: Router;
    public serviceHtelServ:ServiceHotelServ;
    constructor(){
        this.path='/vote';
        this.route=Router();
        this.serviceHtelServ=new ServiceHotelServ();
        this.voteRoutes();
    }

    public rateHotel = async(req:Request ,res:Response)=>{
        try {
            const {hotel,badServices,email}=req['body'];
            badServices.forEach((badService:Service)=>{
           this.saveVote(hotel,badService,email)
        });
        res.status(201).send({messade:"Youhave voted"});
        } catch (error) {
        res.status(500).send({error})
        }
        
    }

    private saveVote = async(hotel:Hotel,service:Service,email:string)=>{
        const signleVote = await this.serviceHtelServ.getVote(hotel.id,service.id);
        if (signleVote.length>0){
            const existVote:ServiceHotel = signleVote[0];
            const {votes}=existVote;
            const newVote = Number(votes)+1;
            existVote.votes=newVote;
          await this.serviceHtelServ.updateVote(existVote);
        }
        else{
            const newVote:ServiceHotel = new ServiceHotel();
            newVote.hotel=hotel;
            newVote.service=service;
            newVote.votes=1;
            newVote.email=email;
            newVote.createdAt=new Date();
            await this.serviceHtelServ.create(newVote);
        }
    }

    public voteRoutes=():void=>{
        this.route.post(this.path,this.rateHotel);
    }

}