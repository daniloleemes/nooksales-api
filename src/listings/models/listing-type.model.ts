import { ObjectType, Field, ID, Int } from "@nestjs/graphql";

@ObjectType()
export class Listing {
    @Field(() => ID) readonly id?: string;
    @Field() readonly userId: string;
    @Field() readonly itemId: string;
    @Field(() => [String]) readonly itemsWanted: string[];
    @Field(() => Int) readonly price: number;
    @Field() readonly sellOnly: boolean;
    @Field() readonly tradeOnly: boolean;
}