import { Module } from '@nestjs/common';
import { QueuesService } from './queues.service';
import { QueuesResolver } from './queues.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { QueueSchema } from './queue.schema';
import { SubscriptionModule } from 'src/subscription/subscription.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Queue', schema: QueueSchema }
    ]),
    SubscriptionModule
  ],
  providers: [QueuesService, QueuesResolver]
})
export class QueuesModule { }
