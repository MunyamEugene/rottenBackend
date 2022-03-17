import express,{ Application } from "express";
import express_session from "express-session";
import helmet from "helmet";
import corse from 'cors';
import { Controller } from "./utils/interfaces/controller.interface";
import { initialize, session } from "passport";


export class App{
    public express:Application;
    public port:number;
    public google_client_id:string;
    public google_client_secret:string;
    constructor(controllers:Controller[],port:number){
        this.port=port;
        this.express=express();
        this.initializeMiddelware();
        this.initializeControllers(controllers);
    }

    public initializeControllers(controllers:Controller[]):void{
        controllers.forEach(controller=>{
            this.express.use('/api',controller.route)
        });
    }

    public initializeMiddelware():void{
        this.express.use(helmet());
        this.express.use(corse());
        this.express.use(express_session({resave: false,saveUninitialized: true,secret: 'SECRET' 
        }));
        this.express.use(express.json())
        this.express.use(initialize())
        this.express.use(session());
        this.express.use(express.urlencoded({extended:false}));
    }

    public listen():void{
        this.express.listen(this.port,()=>console.log(`listening on port ${this.port}`))
    }
}