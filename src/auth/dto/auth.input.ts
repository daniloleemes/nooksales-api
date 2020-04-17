import { InputType, Field } from "@nestjs/graphql";
import { MaxLength, Matches, IsEmail, Length } from 'class-validator'
import { USERNAME_REGEX } from "src/users/users.const";

@InputType()
export class RegisterInput {
    @Field()
    @MaxLength(36)
    @Matches(USERNAME_REGEX)
    username: string;

    @Field()
    @Length(6, 100)
    password: string;

    @Field({ nullable: true }) discordId: string;
    @Field({ nullable: true }) nintendoFriendCode: string;
    @Field({ nullable: true }) twitter: string;
}