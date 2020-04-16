import { ObjectType, Field, ID, Int } from "@nestjs/graphql";

@ObjectType()
export class CollectibleMaterialType {
    @Field(() => Int) readonly count: number;
    @Field() readonly itemName: string;
}

@ObjectType()
export class CollectibleActiveTimesType {
    @Field(() => Int) readonly startTime: number;
    @Field(() => Int) readonly endTime: number;
}

@ObjectType()
export class CollectibleType {
    @Field(() => ID) readonly id?: string;
    @Field({ nullable: true }) readonly gameId: string;
    @Field() readonly name: string;
    @Field({ nullable: true }) readonly image: string;
    @Field() readonly obtainedFrom: string;
    @Field() readonly category: string;
    @Field() readonly catchPhrase: string;
    @Field() readonly museumPhrase: string;
    @Field() readonly house: string;
    @Field() readonly model: string;
    @Field() readonly rarity: string;
    @Field() readonly shadow: string;
    @Field() readonly size: string;
    @Field() readonly unlocksAfter: string;
    @Field() readonly weather: string;
    @Field() readonly uses: string;
    @Field(() => Int) readonly buy: number;
    @Field(() => Int) readonly nookMiles: number;
    @Field(() => Int) readonly number: number;
    @Field(() => Int) readonly sell: number;
    @Field() readonly variant: boolean;
    @Field() readonly customize: boolean;
    @Field() readonly dIY: boolean;
    @Field() readonly reorder: boolean;
    @Field() readonly vFX: boolean;
    @Field(() => [String]) readonly variants: string[];
    @Field(() => [Int]) readonly activeMonthsNorth: number[];
    @Field(() => [Int]) readonly activeMonthsSouth: number[];
    @Field(() => [CollectibleActiveTimesType]) readonly activeTimes: CollectibleActiveTimesType[];
    @Field(() => [CollectibleMaterialType]) readonly materials: CollectibleMaterialType[];
}