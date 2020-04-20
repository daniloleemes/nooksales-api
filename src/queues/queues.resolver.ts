import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { QueuesService } from './queues.service';
import { Inject, UseGuards } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { QueueType } from './models/queue-type.model';
import { CreateQueueInput } from './dto/queue.input';
import { CurrentUser } from 'src/users/user.decorator';
import { User } from 'src/users/interface/user.interface';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver('Queues')
export class QueuesResolver {
    constructor(
        private readonly queueService: QueuesService,
        @Inject('PUB_SUB') private readonly pubSub: PubSub
    ) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => QueueType)
    async createQueue(@Args('input') input: CreateQueueInput, @CurrentUser() user: User): Promise<QueueType>{
        const newQueue = await this.queueService.create(input, user);
        return newQueue;
    }

    @Query(() => QueueType)
    async findQueue(@Args('id') id: string): Promise<QueueType> {
        return await this.queueService.findOne(id);
    }

    @Query(() => QueueType)
    async findAllQueue(): Promise<QueueType[]> {
        return await this.queueService.findAll();
    }

}
