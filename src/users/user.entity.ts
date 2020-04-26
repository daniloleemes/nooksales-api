import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import { ObjectType, Field, ID } from "@nestjs/graphql";
import * as bcrypt from 'bcryptjs';

@ObjectType()
@Entity()
export class User {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    discordId: string;

    @Column()
    nintendoFriendCode: string;

    @Column()
    twitter: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 12);
    }
}