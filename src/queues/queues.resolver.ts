import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { QueuesService } from './queues.service';
import { Inject, UseGuards } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { CreateQueueInput } from './dto/queue.input';
import { CurrentUser } from 'src/users/user.decorator';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { User } from 'src/users/model/user.entity';
import { Queue } from './model/queue.entity';

@Resolver('Queues')
export class QueuesResolver {
    constructor(
        private readonly queueService: QueuesService,
        @Inject('PUB_SUB') private readonly pubSub: PubSub
    ) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Queue)
    async createQueue(@Args('input') input: CreateQueueInput, @CurrentUser() user: User): Promise<Queue>{
        const newQueue = await this.queueService.create(input, user);
        return newQueue;
    }

    @Query(() => Queue)
    async findQueue(@Args('id') id: string): Promise<Queue> {
        return await this.queueService.findOne(id);
    }

    @Query(() => [Queue])
    async findAllQueue(): Promise<Queue[]> {
        return await this.queueService.findAll();
    }

}
