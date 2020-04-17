import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class UserType {
    @Field(() => ID) readonly id?: string;
    @Field({ nullable: true }) readonly username: string;
    @Field({ nullable: true }) readonly discordId: string;
    @Field({ nullable: true }) readonly nintendoFriendCode: string;
    @Field({ nullable: true }) readonly twitter: string;
    @Field({ nullable: true }) readonly password: string;
}