import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateListingInput {
    @Field({ nullable: true }) readonly userId: string;
    @Field() readonly itemId: string;
    @Field(() => [String]) readonly itemsWanted: string[];
    @Field(() => Int) readonly price: number;
    @Field() readonly sellOnly: boolean;
    @Field() readonly tradeOnly: boolean;
}