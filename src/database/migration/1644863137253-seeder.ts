import 'module-alias/register';
import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { service, hotel} from "../../database/seeding/seeds";
import { Hotel } from "../../database/entity/hotel";
import { Service } from "../../database/entity/service";
import { ServiceHotel } from "../../database/entity/serviceHotel";
export class seeder1644863137253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const newHotel:Hotel = await getRepository("hotel").save(hotel);
        const newService:Service = await getRepository("service").save(service);
        const newVote:ServiceHotel = new ServiceHotel();
        newVote.hotel=newHotel;
        newVote.service= newService;
        newVote.votes=12;
        newVote.email="eug@gmail.com";
        await getRepository("service_hotel").save(newVote);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
