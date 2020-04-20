import { Module } from '@nestjs/common';
import { QueuesService } from './queues.service';
import { QueuesResolver } from './queues.resolver';

@Module({
  providers: [QueuesService, QueuesResolver]
})
export class QueuesModule {}
