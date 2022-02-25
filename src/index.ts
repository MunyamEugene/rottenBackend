import 'dotenv/config';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {App} from './app';
import { HotelCtrl } from "./resources/hotel/hotel.controller";
import { ServiceCtrl } from './resources/service/service.controller';
import { ServiceHoltelCtrl } from './resources/serviceHotel/serviceHotel.controller';
import { AuthCtrl } from './resources/auth/authCtrl';

createConnection().then(async connection => {
    const app = new App(
    [new HotelCtrl(),new ServiceCtrl(),new ServiceHoltelCtrl(),new AuthCtrl()],
    Number(process.env.PORT));
    app.listen()
}).catch(error => console.log(error));
