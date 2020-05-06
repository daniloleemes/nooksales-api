import { InputType, Field, Int } from "@nestjs/graphql";
import { QueueStatus } from "../model/queueStatus.enum";
import { Length } from "class-validator";

@InputType()
export class CreateQueueInput {
    @Field()
    @Length(1, 2200)
    readonly description: string;

    @Field({ defaultValue: QueueStatus.ACTIVE })
    readonly status: QueueStatus;
    
    @Field(() => Int) 
    readonly maxQueueSize: number;
    
    @Field(() => Int) 
    readonly maxVisitors: number;
    
    @Field(() => Int)
    readonly price: number;
    
    @Field() 
    readonly selfManageable: boolean;
}