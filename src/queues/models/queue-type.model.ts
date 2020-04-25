import { ObjectType, Field, ID, Int } from "@nestjs/graphql";
import { UserType } from "src/users/models/user-type.model";

@ObjectType()
export class QueueType {
    @Field(() => ID) readonly id: string;
    @Field(() => UserType) readonly owner: UserType;
    @Field(() => Int) readonly maxQueueSize: number;
    @Field(() => Int) readonly maxVisitors: number;
    @Field(() => Int) readonly price: number;
    @Field() readonly description: string;
    @Field() readonly status: string;
    @Field() readonly selfManageable: boolean;
    @Field(() => [UserType]) readonly visitors: UserType[];
    @Field(() => [UserType]) readonly line: UserType[];
}