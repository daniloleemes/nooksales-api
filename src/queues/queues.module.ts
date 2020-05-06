import { Module } from '@nestjs/common';
import { QueuesService } from './queues.service';
import { QueuesResolver } from './queues.resolver';
import { SubscriptionModule } from 'src/subscription/subscription.module';
import { Queue } from './model/queue.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Queue]),
    SubscriptionModule
  ],
  providers: [QueuesService, QueuesResolver]
})
export class QueuesModule { }
