import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { user } from "./entity/user.entity";
import { Repository } from "typeorm";
import { cretaeuserdto } from "./dto/create-user.dto";
import { updateuserdto } from "./dto/update-user.dto";
import { Cron, Timeout } from "@nestjs/schedule";

@Injectable()
export class userservice {
    constructor(
        @InjectRepository(user)
        private usersRepository: Repository<user>,
    ) { }

    private readonly logger = new Logger(userservice.name);

    @Cron('15 * * * * *')
    handleCron() {
        this.logger.debug('Called when the current second is 15');
        console.log('crone job is active')
    }

    @Timeout(3000)
    timefunc(){
        console.log("this will run after  3 sec")
    }

getuser(): Promise < user[] > {
    return this.usersRepository.find();
}

createuser(createuserdto : cretaeuserdto){
    return this.usersRepository.save(createuserdto);
}

getoneuser(id : number){
    return this.usersRepository.findOne({ where: { id } })
}

deleteoneuser(id : number){
    return this.usersRepository.delete(id)
}

updateoneuser(id: number, updateuserdto: updateuserdto){
    return this.usersRepository.update(id, updateuserdto)
}

finduserbyemail(email: string){
    return this.usersRepository.findOne({ where: { email } })
}


    // getname(){
    //     return 'this name is coming from user service'
    // }
}