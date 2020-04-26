import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/users/model/user.entity";

@ObjectType()
export class AuthPayload {
    @Field(() => User) readonly user: User;
    @Field() readonly accessToken: string;
}