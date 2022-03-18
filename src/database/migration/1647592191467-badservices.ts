import {getRepository, MigrationInterface, QueryBuilder, QueryRunner} from "typeorm";
import {badService} from '../seeding/seeds'
export class badservices1647592191467 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            badService.forEach(async(itm)=>{
                await getRepository('service').save(itm)
            })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
