import { Controller } from "../../utils/interfaces/controller.interface";
import { Request, Response, Router } from "express";
import { HotelService } from "./hotel.service";
import { Hotel } from "../../database/entity/hotel";



export class HotelCtrl implements Controller{
    public path: string;
    public route: Router;
    public hotelService:HotelService;
    constructor(){
        this.path='/hotel';
        this.route=Router();
        this.hotelService=new HotelService();
        this.hotelRouters();
    }

    public create = async(req:Request,res:Response):Promise<Response|void> =>{
        try {
        const newHotel = req['body'] as Hotel;
        const hotel = await this.hotelService.createHotel(newHotel);
        res.status(201).json({hotel})     
        } catch (error) {
        res.status(500).json({error})
        }
        }
    public update = async (req:Request,res:Response):Promise<Response|void>=>{
        try {
        const id= req.params.id;
        const body=req.body as Hotel;
        await this.hotelService.update(body,Number(id));
        res.status(200).send({message:"Hotel update successfully"})
        } catch (error) {
        res.status(500).send({error});
        }
    }

    public getHotels = async (req:Request,res:Response):Promise<Response|void>=>{
        const hotels = await this.hotelService.getAll();
        res.status(200).json({hotels});
    }

    public hotelRouters(){
        this.route.post(this.path,this.create )
        this.route.patch(`${this.path}/update/:id`,this.update)
        this.route.get(this.path,this.getHotels)
        
    }
}
