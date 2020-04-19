import { ObjectType, Field, ID, Int } from "@nestjs/graphql";
import { UserType } from "src/users/models/user-type.model";
import { CollectibleType } from "src/collectibles/models/collectible-type.model";

@ObjectType()
export class ListingType {
    @Field(() => ID, { nullable: true }) readonly id: string;
    @Field(() => UserType) readonly user: UserType;
    @Field() readonly itemId: string;
    @Field(() => [CollectibleType]) readonly itemsWanted: CollectibleType[];
    @Field(() => Int) readonly price: number;
    @Field() readonly sellOnly: boolean;
    @Field() readonly tradeOnly: boolean;
    @Field() readonly status: string;
}