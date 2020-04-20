import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateQueueInput {
    @Field({ nullable: true }) readonly userId: string;
    @Field() readonly description: string;
    @Field({ defaultValue: 'ACTIVE' }) readonly status: string;
    @Field(() => [String], { defaultValue: [] }) readonly line: string[];
    @Field(() => [String], { defaultValue: [] }) readonly visitors: string[];
    @Field(() => Int) readonly maxQueueSize: number;
    @Field(() => Int) readonly maxVisitors: number;
    @Field(() => Int) readonly price: number;
    @Field() readonly selfManageable: boolean;
}