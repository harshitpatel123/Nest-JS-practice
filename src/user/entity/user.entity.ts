import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    email : string;

    // @Exclude()
    @Column()
    password : string;
}