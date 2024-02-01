import { Module } from "@nestjs/common";
import { usercontroller } from "./user.controller";
import { userservice } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { user } from "./entity/user.entity";

@Module({
    controllers:[usercontroller],
    providers : [userservice],  
    exports : [userservice],
    imports: [TypeOrmModule.forFeature([user])],
})
export class usermodule{}