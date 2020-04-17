import { Field, ObjectType } from "@nestjs/graphql";
import { UserType } from "src/users/models/user-type.model";

@ObjectType()
export class AuthPayload {
    @Field(() => UserType) readonly user: UserType;
    @Field() readonly accessToken: string;
}