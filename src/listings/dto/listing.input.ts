import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateListingInput {
    @Field({ nullable: true }) readonly owner: string;
    @Field() readonly item: string;
    @Field(() => [String]) readonly itemsWanted: string[];
    @Field(() => Int) readonly price: number;
    @Field() readonly sellOnly: boolean;
    @Field() readonly tradeOnly: boolean;
}

@InputType()
export class UpdateListingInput {
    @Field({ nullable: true }) readonly owner: string;
    @Field() readonly item: string;
    @Field(() => [String]) readonly itemsWanted: string[];
    @Field(() => Int) readonly price: number;
    @Field() readonly sellOnly: boolean;
    @Field() readonly tradeOnly: boolean;
    @Field() readonly status: string;
}